<template>

        
    <div class="main--section--content">
        <h1>Congruencial Multiplicativo</h1>
        <div class="main--section--content--form">
            <div class="mains--section--first--content">
                <div class="form--group">
                    <label> Periodo (P) </label>
                    <input v-model="periodo" type="number" min="0">
                </div>
                <div class="form--group">
                    <label> g = (ln(P)/ln(2)) + 2 </label>
                    <input v-model="updateG" type="number" min="0" disabled>
                </div>
                <div class="form--group">
                        <label> Módulo (m) = 2 <sup>g</sup> </label>
                        <input v-model="getModulo" type="number" min="0" disabled>
                </div>
                <div class="form--group">
                    <label>Semilla (X<sub>0</sub>)</label>
                    <input v-model="semilla" type="number" min="0">
                </div>
            </div>
            <div class="mains--section--second--content">
                <div class="form--group">
                    <label>K(Numero entero)</label>
                    <input v-model="k" type="number" min="0">
                </div>
                <div class="form--group">
                    <label> Constante Multiplicativa (a) = {{getConstA}}</label>
                    <button @click="selectA">a=3+8k</button>
                    <button @click="selectB">a=5+8k</button>
                </div>
            
            </div>   

        </div>
            <div class="form--group">
                <button @click="limpiar">Limpiar</button>
                <button  @click="generar">Generar</button>
            </div>
        
        <div class="main--section--content--table">
            <table>
                
                <thead>
                    <tr>
                        <th>Iteración (i)</th>
                        <th>X<sub>i</sub></th>
                        <th>r<sub>i</sub></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in getTable" :key="item.iteracion">
                        <td>{{ item.iteracion }}</td>
                        <td>{{ item.xi }}</td>
                        <td>{{ item.ri }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
data() {
    return {
        periodo: 8,
        semilla: 43,
        k: 7,
        m: 0,
        table: [],
        digitos: 5,
        modeSelect: 0
    }
},
methods: {
    generar() {
        this.table = []
        let xi = this.semilla
        let ri = 0
        let iteracion = 0
        let a = 0
        if(this.modeSelect == 0){
            a = 3 + 8 * this.k
        }else if(this.modeSelect == 1){
            a = 5 + 8 * this.k
        }
        while (iteracion < this.periodo) {
            xi = (a * xi) % this.getModulo
            ri = xi / (this.getModulo-1)
            this.table.push({
                iteracion: iteracion + 1,
                xi: xi,
                ri: ri.toFixed(this.digitos)
            })
            iteracion++
        }
    },
    limpiar() {
        this.periodo = 0
        this.semilla = 0
        this.k = 0
        this.m = 0
        this.table = []
        this.digitos = 5
        this.modeSelect = -1
    
    },
    selectA(){
        this.modeSelect = 0
    },
    selectB(){
        this.modeSelect = 1
    }
},
computed: {
    getTable() {
        return this.table
    },
    updateG(){
        return Math.log(this.periodo) / Math.log(2) + 2
    },
    getConstA(){
        if(this.modeSelect == 0){
            return 3 + 8 * this.k
        }else if(this.modeSelect == 1){
            return 5 + 8 * this.k
        }
        return 0
    },
    getModulo(){
        return Math.pow(2, this.updateG)
    }
},


}
</script>
<style scoped>
.main--section--content h1 {
font-size: 2rem;
margin-bottom: 1rem;
}
.main--section--content {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background-color: #ccfbf5;
border-radius: 0.5rem;
margin-top: 1rem;
}
.main--section--content--form {
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;
flex-direction: column;
}
.main--section--content--form .mains--section--first--content {
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 100%;
height: 100%;
padding: 1rem;
}
.main--section--content--form .mains--section--second--content {
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 100%;
height: 100%;
padding: 1rem;

}
.main--section--content--form .form--group input {
width: 50%;
padding: 0.5rem;
border-radius: 0.5rem;
border: 1px solid #0E7677;
font-size: 1.5rem;
}
.main--section--content--form .form--group button {
width: 100%;
padding: 0.5rem;
border-radius: 0.5rem;
border: 1px solid #0E7677;
font-size: 1.5rem;
background-color: #0E7677;
color: #ccfbf5;
cursor: pointer;
transition: 0.3s;
margin: 0.5rem;
}
.main--section--content--table {
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
}
.main--section--content--table table {
width: 100%;
border-collapse: collapse;
}
.main--section--content--table table thead {
background-color: #0E7677;
color: #ccfbf5;
}
.main--section--content--table table thead th {
padding: 1rem;
}
.main--section--content--table table tbody tr {
border-bottom: 1px solid #0E7677;
}
.main--section--content--table table tbody tr td {
padding: 1rem;
}  
</style>
