import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './index.css'
import Index from './view/Index.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/numeros-pseudoaleatorios/',
            component: Index },
    ],
    })
//Creacion de la app
const app = createApp(App)
app.use(router)
app.mount('#app')
