<template>
    <div class="main--section">
        <h1>Productos Medios</h1>
        <div class="main--section--content">
            <div class="main--section--content--form">

                    <div class="form--group">
                        <label>Semilla (X<sub>0</sub>)</label>
                        <input v-model="semilla0" type="number" min="0">
                    </div>
                    <div class="form--group">
                        <label>Semilla (X<sub>1</sub>)</label>
                        <input v-model="semilla1" type="number" min="0">
                    </div>
                    <div class="form--group">
                        <label> Iteraciones </label>
                        <input v-model="iteraciones" type="number" min="0">
                    </div>
                    <div class="form--group">
                        <label> Digitos (D) </label>
                        
                        <input v-model="isEqualDigitos" type="number" min="0" disabled> 
                    </input>
                    </div>
                    <div class="form--group">
                        <button @click="limpiar">Limpiar</button>
                        <button  @click="generar">Generar</button>
                    </div>
            </div>
            <div class="isDegenerate" v-if="degenerate">
                <h2>El periodo es degenerado</h2>
                <p>
                    {{ degenerateInfo }}
                </p>
            </div>
            <div class="main--section--content--table">
                <table>
                    <thead>
                        <tr>
                            <th>Iteración (i)</th>
                            <th>Y<sub>i</sub></th>
                            <th>X<sub>i</sub></th>
                            <th>r<sub>i</sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in getTable" :key="item.iteracion">
                            <td>{{ item.iteracion }}</td>
                            <td>{{ item.yi }}</td>
                            <td>{{ item.xi }}</td>
                            <td>{{ item.ri }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            semilla0: 0,
            semilla1: 0,
            iteraciones: 0,
            table: [],
            digitos: 0,
            numeros: [],
            degenerateInfo: '',
            degenerate: false,
        }
    },
    methods: {
        generar() {
            this.table = []
            this.numeros = []
            this.degenerate = false
            
            let digitosA = parseInt(this.semilla0.toString().length)
            let digitosB = parseInt(this.semilla1.toString().length)
            if( digitosA === digitosB) {
                this.digitos = digitosA
                let semilla0 = this.semilla0
                let semilla1 = this.semilla1
                for(let i = 0; i < this.iteraciones; i++) {
                    let yi = semilla0 * semilla1
                    let Xi = this.hallarXi(yi)
                    let ri = '0.' + Xi
                    if(this.numeros.includes(Xi) && this.degenerate === false) {
                        this.degenerate = true
                        this.degenerateInfo = `El periodo se degenera 
                        en la iteración ${i + 1} con el número ${ri}, este número ya se encuentra en la lista 
                        de números pseudoaleatorios generados en la iteración ${this.numeros.indexOf(Xi) + 1} con el número ${ri}`
                    }
                    this.numeros.push(Xi)
                    this.table.push({
                        iteracion: i + 1,
                        yi: yi,
                        xi: Xi,
                        ri: ri
                    })
                    semilla0 = semilla1
                    semilla1 = Xi

                }
            } else {
                alert('Las semillas deben tener la misma cantidad de digitos')
            }
        },
        hallarXi(yi) {
            let xi = yi.toString()
            let inicio = (xi.length - this.digitos) / 2
            let fin = inicio + this.digitos
            xi = xi.substring(inicio, fin)
            return xi
        },
        limpiar() {
            this.semilla0 = 0
            this.semilla1 = 0
            this.iteraciones = 0
            this.table = []
        }
    },
    computed: {
        getTable() {
            return this.table
        },
        isEqualDigitos() {
            let digitosA = this.semilla0.toString().length
            let digitosB = this.semilla1.toString().length
            if(digitosA === digitosB) {
                return digitosA
            } else {
                return 0
            }
        },
        isdegenerate(){
            return this.degenerate
        },
    },


}
</script>
<style scoped>
.main--section {
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
.main--section h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
.main--section--content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.main--section--content--form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.main--section--content--form form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
}
.main--section--content--form .form--group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
}
.main--section--content--form .form--group label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;

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