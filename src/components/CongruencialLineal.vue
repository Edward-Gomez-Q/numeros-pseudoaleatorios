<template>
    <div class="main--section">
        <h1>Congruencial Lineal</h1>
        <div class="main--section--content">
            <div class="main--section--content--form">
                <div class="main--section--content--form">
                    <div class="form--group">
                        <label> Periodo (P) </label>
                        <input v-model="periodo" type="number" min="0">
                    </div>
                    <div class="form--group">
                        <label>Semilla (X<sub>0</sub>)</label>
                        <input v-model="semilla" type="number" min="0">
                    </div>
                    <div class="form--group">
                        <label>K(Numero entero)</label>
                        <input v-model="k" type="number" min="0">
                    </div>
                </div>
                <div class="main--section--content--form">
                    <div class="form--group">
                        <label> Constante Multiplicativa (a) = 1 + 4*(K)</label>
                        <input v-model="getConstA" type="number" min="0" disabled>
                    </div>
                    <div class="form--group">
                        <label> Constante Aditiva (c) = El primo más cercano de [m]</label>
                        <input v-model="getConstC" type="number" min="0" disabled>
                    </div>
                                        <div class="form--group">
                        <label> g = ln(P)/ln(2) </label>
                        <input v-model="updateG" type="number" min="0" disabled>
                    </div>
                    <div class="form--group">
                            <label> Módulo (m) = 2 <sup>g</sup> </label>
                            <input v-model="getModulo" type="number" min="0" disabled>
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
    </div>
    <div class="main--section--content--table">
        <table>     
            <thead>
                <tr>
                    <th>Iteración (i)</th>
                    <th>X<sub>i</sub> = (a * X<sub>i-1</sub> + c) mod (m)</th>
                    <th>r<sub>i</sub> = X<sub>i</sub> / (m-1)</th>
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
</template>
<script>
export default {
    data() {
        return {
            periodo: 0,
            semilla: 0,
            k: 0,
            m: 0,
            table: [],
            decimales: 10,
            tableOriginal: [],
        }
    },
    methods: {
        generar() {
            this.table = []
            let ri = 0
            let xi = 0
            let constA= this.getConstA
            let constC = this.getConstC
            let modulo = this.getModulo
            let xiText = ''
            let semillaAux = this.semilla
            for (let i = 0; i < this.periodo + 2; i++) {
                xi = ((constA * semillaAux) + constC) % modulo
                xiText = "(" + constA + "*" + semillaAux + "+" + constC + ") mod (" + modulo + ")" + " = " + xi
                ri = xi / (modulo - 1)
                this.table.push({
                    iteracion: i + 1,
                    xi: xiText,
                    ri: ri.toFixed(this.decimales)
                })
                semillaAux = xi
            }
            this.tableOriginal = this.table
        },
        limpiar() {
            this.periodo = 0
            this.semilla = 0
            this.k = 0
            this.m = 0
            this.table = []
            this.tableOriginal = []
            this.decimales = 10
        },
        esPrimo(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) return false;
            }
            return num !== 1;
        },
    },
    computed: {
        getTable() {
            return this.table
        },
        updateG(){
            return Math.log(this.periodo) / Math.log(2)
        },
        getConstA(){
            return 1 + 4 * this.k
        },
        getConstC(){
            let num = this.periodo
            if(num>2){
                let numMayor = num
                let numMenor = num
                while (true) {
                    if (this.esPrimo(numMayor)) {
                        break
                    }
                    numMayor++
                }
                while (true) {
                    if (this.esPrimo(numMenor)) {
                        break
                    }
                    numMenor--
                }
                return numMayor - num < num - numMenor ? numMayor : numMenor
            }
            return 0
        },
        getModulo(){
            return Math.pow(2, this.updateG)
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