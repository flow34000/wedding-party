import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'primeflex/primeflex.css'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton'
import TextArea from 'primevue/textarea'
import RadioButton from 'primevue/radiobutton'
import Message from 'primevue/message'
import SectionTop from '@/components/SectionTop.vue'
import Dialog from 'primevue/dialog'
const app = createApp(App)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('RadioButton', RadioButton)
app.component('ToggleButton', ToggleButton)
app.component('TextArea', TextArea)
app.component('Message', Message)
app.component('SectionTop', SectionTop)
app.component('Dialog', Dialog)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
