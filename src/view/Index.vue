<template>
<div class="main--container">
    <header>
        <div class="main--container--header">
            <div class="first--section">
                <div class="header--logo">
                    <img src="../assets/foto.png" alt="ola" />
                </div>
                <div class="header--title">
                    <h1>
                        Práctica 2
                    </h1>
                </div>
                <div class="header--aboutUs">
                </div>
            </div>
        </div>
    </header>
    <div class="second--section">
        <div class="header--sub-tittle">
            <h1>Algoritmos generadores de Números Pseudoaleatorios</h1>
        </div>
        <nav class="header--nav">
            <ul>
                <li><a @click="changeComponent('CuadradosMedios')">
                    Cuadrados Medios
                </a></li>
                <li><a @click="changeComponent('ProductosMedios')">
                    Productos Medios
                </a></li>
                <li><a @click="changeComponent('CongruencialLineal')">
                    Congruencial Lineal
                </a></li>
                <li><a @click="changeComponent('CongruencialMultiplicativo')">
                    Congruencial Multiplicativo
                </a></li>
            </ul>
        </nav>
    </div>
    <div class="third--section">
        <component :is="method"></component>
    </div>

</div>
</template>
<script>
//Componentes de los algoritmos
import CuadradosMedios from '../components/CuadradosMedios.vue'
import ProductosMedios from '../components/ProductosMedios.vue'
import CongruencialLineal from '../components/CongruencialLineal.vue'
import CongruencialMultiplicativo from '../components/CongruencialMultiplicativo.vue'
export default {
    components: {
        CuadradosMedios,
        ProductosMedios,
        CongruencialLineal,
        CongruencialMultiplicativo
    },
    data() {
        return {
            selected: 'CuadradosMedios',
        }
    },
    computed: {
        method() {
            return this.selected
        }
    },
    methods: {
        changeComponent(component) {
            this.selected = component
        }
    }
}
</script>
<style scoped>
.main--container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

}
.main--container--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0E7677;
    flex-direction: column;
    width: 100%;
    color: #ccfbf5;
    border-bottom: 1px solid #ccfbf5;
    border-radius:  0.5rem;
}
.first--section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem ;
    width: 100%;
}
.header--logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.header--title h1 {
    font-size: 1.5rem;
    font-weight: 600;
}
.header--aboutUs img {
    width: 50px;
    height: 50px;
    color:  #ccfbf5;
}
.second--section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    background-color: #12bab6;
    color: #fff;
    border: #0E7677;
    border-radius:  0.5rem;
    flex-wrap: wrap;
    padding: 1rem;
    margin-top: 1rem;

}
.header--sub-tittle h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-align: center;

}
.header--nav ul {
    display: flex;
    list-style: none;
    width: 100%;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    gap: 1rem;

}
.header--nav ul li {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #0E7677;
    color: #ccfbf5;
    font-weight: 600;
    transition: 0.3s;
}
.header--nav ul li a {
    text-decoration: none;
    color: #042c2f;
    font-weight: 600;
    border-radius: 5px;
}
.header--nav ul li a:hover {
    background-color: #0E7677;
    color: #ccfbf5;
}
</style>