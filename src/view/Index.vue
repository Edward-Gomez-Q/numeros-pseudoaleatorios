<template>
<div class="main--container">
    <div class="sticky-header">
        <div class="app-header">
            <header class="main--container--header">
                <div class="header-content">
                    <div class="header-start">
                        <button class="header-button" @click="changeSidebar">
                            <img src="../assets/Menu.png" alt="Menu" class="sidebarIcon"/>
                        </button>
                        <div class="header-title">
                            <h1>SIS-224</h1>
                        </div>
                        <hr class="header-lineVertical" />
                        <div class="header-description">
                            <h2>Práctica 2</h2>
                        </div>
                    </div>
                    <div class="header-end">
                        <button class="header-button" @click="openModal">
                            <img src="../assets/AboutUs.png" alt="About Us" class="aboutUsIcon"/>
                        </button>
                    </div>
                </div>
            </header>
        </div>
        <div class="overlay" v-show="showSidebar" @click="closeSidebar"></div>
        <div class="header-sidebar-menu" v-show="showSidebar">
            <div class="sidebar-menu-content">
                
                <nav class="sidebar-menu">
                    <h1><strong>Seleccione un algoritmo: </strong></h1>
                    <ul>
                        <li>
                            <button @click="changeComponent('CuadradosMedios')">
                                Cuadrados Medios
                            </button>
                        </li>
                        <li>
                            <button @click="changeComponent('ProductosMedios')">
                                Productos Medios
                            </button>
                        </li>
                        <li>
                            <button @click="changeComponent('CongruencialLineal')">
                                Congruencial Lineal
                            </button>
                        </li>
                        <li>
                            <button @click="changeComponent('CongruencialMultiplicativo')">
                                Congruencial Multiplicativo
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <component :is="method" />
    <div>
        <div class="modal" v-show="showModal" @click="closeModal">
            <div class="modal-content">
                <h2>¡Bienvenido!</h2>
                <p>
                    <strong>Cómo utilizar la página:</strong> <br>
                    <strong>1.-</strong> Selecciona el algoritmo que deseas utilizar en el menú lateral. <br>
                    <strong>2.-</strong> Ingresa los datos necesarios para el algoritmo. <br>
                    <strong>3.-</strong> Da click en el botón "Generar". <br>
                    <strong>4.-</strong> Observa los resultados en la tabla. <br>
                </p>
                <button class="modal-close" @click="closeModal">Cerrar</button>
            </div>
        </div>
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
            showSidebar: false,
            showModal: false
        }
    },
    computed: {
        method() {
            return this.selected
        },
    },
    methods: {
        changeComponent(component) {
            this.selected = component
            this.showSidebar = false
        },
        changeSidebar() {
            this.showSidebar = !this.showSidebar
        },
        closeSidebar() {
            this.showSidebar = false
        },
        openModal() {
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        }
    }
}
</script>
<style scoped>
.main--container {
    height: 100%;
    width: 100%;
    background-color: #FFF;
    margin: 0;
    padding: 0;
    color: var(--color-text);
}
.sticky-header{
    position: sticky;
    top: 0;
}
.app-header{
    position: relative;
    display: block;
    z-index: 100;
    background-color: #FFF;
}
.main--container--header {
    display: flex;
    align-items: center;
    border-block-end: 1px solid var(--color-line);
}
.header-content {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
.header-start{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}
.header-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}
.header-button :deep(svg) {
    color: var(--color-text);
    font-size: 1.5rem;
}

.header-button:hover :deep(svg) {
    color: var(--color-hover);
}
.sidebarIcon{
    width: 50px;
    height: 50px;
}
.sidebarIcon:hover{
    scale: 1.1;
}
.aboutUsIcon{
    width: 50px;
    height: 50px;
}
.aboutUsIcon:hover{
    scale: 1.1;
    
}

.header-description {
    margin-left: 1rem;
}
.header-end{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.header-lineVertical {
    height: 2rem;
    margin: 0 1rem;
    border-left: 1px solid var(--color-line)
}
.overlay {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 20;
}

.header-sidebar-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 350px;
    height: 100%;
    background-color: #FFF;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-right: 1px solid var(--color-line);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 0.3s;

}
.sidebar-menu-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.sidebar-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.sidebar-menu h1 {
    margin-bottom: 2rem;
    margin: 2rem 1rem ;
    font-size: 1.5rem;
    text-align: center;
}
.sidebar-menu ul {
    list-style: none;
    padding: 0 1rem;
    margin: 0;
}
.sidebar-menu ul li {
    margin: 1rem 0;
}
.sidebar-menu ul li button {
    background-color: #f2f3f6;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    color: var(--color-text);
    transition: 0.3s;
}
.sidebar-menu ul li button:hover {
    background-color: #EEF2FD;
    color: var(--color-hover);
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    overflow: hidden;
    transition: 0.3s;
}

.modal-content {
    background-color: #FFF;
    padding: 2rem;
    border-radius: 0.5rem;
    max-width: 400px;
    text-align: center;
}

.modal h2 {
    margin-bottom: 1rem;
}

.modal p {
    margin-bottom: 2rem;
}

.modal-close {
    background-color: #f2f3f6;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
}

.modal-close:hover {
    background-color: #EEF2FD;
}

/* Estilos para dispositivos pequeños (teléfonos) */
@media only screen and (max-width: 600px) {
  /* Estilos específicos para dispositivos pequeños */
    .header-title h1 {
        font-size: 1rem;
    }
    .header-description h2 {
        font-size: 0.8rem;
    }
    .sidebar-menu ul li button {
        font-size: 1rem;
    }
    .header-button :deep(svg) {
        font-size: 1rem;
    }
    .header-lineVertical {
        height: 1rem;
        margin: 0 0.5rem;
    }
    .header-end{
        flex: 1;
    }
    .header-start{
        flex: 3;
    }
    .sidebarIcon{
        width: 30px;
        height: 30px;
    }
    .sidebar-menu h1 {
        margin: 1rem 0.5rem ;
        font-size: 1rem;
    }
    .aboutUsIcon{
        width: 30px;
        height: 30px;
    }
    .modal-content {
        padding: 1rem;
        max-width: 300px;
    }
    .modal h2 {
        font-size: 1rem;
    }
    .modal p {
        font-size: 0.8rem;
    }
    .modal-close {
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
    }

}

/* Estilos para tabletas */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
}

/* Estilos para dispositivos medianos */
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  /* Estilos específicos para dispositivos medianos */
}

/* Estilos para dispositivos grandes (pantallas de escritorio) */
@media only screen and (min-width: 1441px) {
  /* Estilos específicos para dispositivos grandes */
}

</style>