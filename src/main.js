import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import Index from './view/Index.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
    ],
    })
library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(createPinia())
app.mount('#app')
