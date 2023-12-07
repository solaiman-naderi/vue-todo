import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'

import App from './App.vue'
addIcons(FaFlag, RiZhihuFill)

const app = createApp(App)

app.use(createPinia())
app.component('v-icon', OhVueIcon)

app.mount('#app')
