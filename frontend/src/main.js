import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1'
axios.defaults.withCredentials = true
library.add(fas, fab, far)

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
