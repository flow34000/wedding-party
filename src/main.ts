import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'primeflex/primeflex.css'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.component('InputText', InputText)
app.use(createPinia())
app.use(router)

app.mount('#app')
