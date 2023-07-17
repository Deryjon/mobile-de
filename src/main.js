import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from 'pinia';

import vuetify from './libs/vuetify'
import i18n from "./libs/i18n";
import './assets/styles/tailwind.css'
import './assets/styles/font.css'
import './assets/styles/main.css'
const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$i18n = i18n

app.use(pinia)
app.use(router);
app.use(vuetify)
app.use(i18n)
app.mount("#app");