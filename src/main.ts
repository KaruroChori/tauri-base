import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'

const i18n = createI18n({})
const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(i18n).mount('#app')
