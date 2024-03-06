<template>
    <div class="main--section">
        <h1>Cuadrados Medios</h1>
        <div class="main--section--content">
            <div class="main--section--content--form">
                    <div class="form--group">
                        <label>Dígitos (D)</label>
                        <input v-model="digitos">
                    </div>
                    <div class="form--group">
                        <label>Semilla (X<sub>0</sub>)</label>
                        <input v-model="semilla">
                    </div>
                    <div class="form--group">
                        <label> Iteraciones </label>
                        <input v-model="iteraciones">
                    </div>
                    
                    <div class="form--group">
                        <button @click="limpiar">Limpiar</button>
                        <button  @click="generar">Generar</button>
                    </div>
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
            digitos: 0,
            semilla: 0,
            iteraciones: 0,
            table: []
        }
    },
    methods: {
        generar() {
            this.table = []
            this.digitos = parseInt(this.digitos)
            if(this.digitos > 2 && this.semilla > 0 && this.iteraciones > 0 && this.digitos === this.semilla.toString().length) {
                let semilla = this.semilla
                for(let i = 0; i < this.iteraciones; i++) {
                    let yi = Math.pow(semilla, 2)
                    let Xi = this.hallarXi(yi)
                    let ri = '0.' + Xi
                    this.table.push({
                        iteracion: i + 1,
                        yi: yi,
                        xi: Xi,
                        ri: ri
                    })
                    semilla = Xi
                }
            } else {
                alert('Datos incorrecto, considere: \nLos dígitos deben ser mayor a 2, la semilla debe ser mayor a 0, las iteraciones deben ser mayor a 0 y la semilla debe tener la misma cantidad de dígitos que la variable dígitos.')
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
            this.digitos = 4
            this.semilla = 0
            this.iteraciones = 0
            this.table = []
        }
    },
    computed: {
        getTable() {
            return this.table
        }
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