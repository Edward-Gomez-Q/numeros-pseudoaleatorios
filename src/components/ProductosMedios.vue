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
            </div>
            <hr style="width: 100%; margin: 1rem 0; border: 1px solid var(--color-line)">
            <div class="form--group--buttons">
                <button  @click="generar">Generar</button>
                <button @click="limpiar">Limpiar</button>
            </div>
            <div class="count--decimals">
                <label>Décimales (No necesario para el cálculo): </label>
                <input v-model="decimales" type="number" min="0" max="10" step="1" @change="changeDecimals">
            </div>
            
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
                            <th>Y<sub>i</sub>= X<sub>i-1</sub> * X<sub>i</sub></th>
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
            decimales: 0,
            tableOriginal: []
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
                this.decimales = this.digitos
                let semilla0 = this.semilla0
                let semilla1 = this.semilla1
                for(let i = 0; i < this.iteraciones; i++) {
                    let yi = semilla0 * semilla1
                    let yiText = `(${semilla0})(${semilla1}) = ${yi}`
                    let Xi = this.hallarXi(yi)
                    let ri = parseFloat(`0.${Xi}`)
                    if(this.numeros.includes(Xi) && this.degenerate === false) {
                        this.degenerate = true
                        this.degenerateInfo = `El periodo se degenera 
                        en la iteración ${i + 1} con el número ${ri}, este número ya se encuentra en la lista 
                        de números pseudoaleatorios generados en la iteración ${this.numeros.indexOf(Xi) + 1} con el número ${ri}.`
                    }
                    this.numeros.push(Xi)
                    this.table.push({
                        iteracion: i + 1,
                        yi: yiText,
                        xi: Xi,
                        ri: ri.toFixed(this.decimales)
                    })
                    semilla0 = semilla1
                    semilla1 = Xi
                }
                this.tableOriginal = this.table
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
            this.numeros = []
            this.degenerateInfo = ''
            this.degenerate = false
            this.decimales = 0
            this.tableOriginal = []
        }
    },
    computed: {
        getTable() {
            return this.table
        },
        isdegenerate(){
            return this.degenerate
        },
        getDegenerateInfo(){
            return this.degenerateInfo
        },
        changeDecimals(){
            this.table = this.tableOriginal.map(item => {
                return {
                    ...item,
                    ri: parseFloat(item.ri).toFixed(this.decimales)
                }
            })
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
    height: 100%;
    background-color: #fff;
    border-radius: 0.5rem;
    border: 1px solid var(--color-line);
    padding: 0.5rem;
    margin: 1rem;
}
.main--section h1 {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 0.5rem;
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.main--section--content--form .form--group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 0.5rem;
}
.main--section--content--form .form--group label {
    font-size: 1rem;
    font-weight: bold;
    text-align: start;
}
.main--section--content--form .form--group input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-line);
    font-size: 1.5rem;
}
.main--section--content--form .form--group input:hover {
    border: 1px solid var(--color-hover);
}
.form--group--buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.form--group--buttons button {
    background-color: #f2f3f6;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    color: var(--color-text);
    transition: 0.3s;
}
.form--group--buttons button:hover {
    background-color: #EEF2FD;
    color: var(--color-hover);
}
 .count--decimals {
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}
 .count--decimals label {
    font-size: 1rem;
    font-weight: bold;
    text-align: start;
    padding: 0.5rem;
    
}
 .count--decimals input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-line);
    font-size: 1rem;
    color: var(--color-text);
    transition: 0.3s;

}

.isDegenerate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #ccfbf5;
    color: #0E7677;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 1rem;
}

.main--section--content--table {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #ccfbf5;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow: auto;
    margin: 1rem;
}
.main--section--content--table table {
    width: 100%;
    border-collapse: collapse;
}
.main--section--content--table table thead {
    background-color: #0E7677;
    color: #ccfbf5;
    text-align: center;
}
.main--section--content--table table thead th {
    padding: 1rem;
}
.main--section--content--table table tbody tr {
    border-bottom: 1px solid #0E7677;
    text-align: center;
}
.main--section--content--table table tbody tr td {
    padding: 1rem;
}  
/* Estilos para dispositivos pequeños (teléfonos) */
@media only screen and (max-width: 600px) {
  /* Estilos específicos para dispositivos pequeños */
    .main--section--content--table table thead th {
        padding: 0.5rem;
    }
    .main--section--content--table table tbody tr td {
        padding: 0.5rem;
    }


    
}  
</style>