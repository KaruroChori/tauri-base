import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'

import * as types from "./types.auto/"


const i18n = createI18n({})
const app = createApp(App)
const pinia = createPinia()

var t: types.Test = {}

app.use(pinia).use(i18n).mount('#app')
