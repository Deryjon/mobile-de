import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router";
// import i18n from "./libs/i18n";
import vuetify from './libs/vuetify';
import i18n from './locales/index'
import Vue3Geolocation  from "vue3-geolocation";

// Импортируйте CSS-файлы стилей в начале, перед импортом компонентов или модулей
import './assets/styles/main.css';
import './assets/styles/font.css';
import './assets/styles/tailwind.css';

const app = createApp(App);
const pinia = createPinia();

// Используйте плагины и конфигурации перед монтированием приложения
app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(Vue3Geolocation);

app.mount("#app");
