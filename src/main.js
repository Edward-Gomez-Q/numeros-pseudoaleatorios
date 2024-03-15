import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './index.css'
import Index from './view/Index.vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
    ],
    })
//Librerias de fontawesome para los iconos
library.add(fab);
library.add(fas);

//Creacion de la app
const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount('#app')
