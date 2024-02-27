import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router";
import vuetify from './libs/vuetify';
import i18n from './locales/index'
import Vue3Geolocation  from "vue3-geolocation";
import { Toast, options  } from './libs/toast'


import './assets/styles/main.css';
import './assets/styles/font.css';
import './assets/styles/tailwind.css';
import "vue-toastification/dist/index.css"



const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(Vue3Geolocation);
app.use(Toast, options)

app.mount("#app");
