import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router";
import vuetify from './libs/vuetify';
// import i18n from "./libs/i18n";
import i18n from './locales/index'

// Импортируйте CSS-файлы стилей в начале, перед импортом компонентов или модулей
import './assets/styles/tailwind.css';
import './assets/styles/font.css';
import './assets/styles/main.css';

const app = createApp(App);
const pinia = createPinia();

// Используйте плагины и конфигурации перед монтированием приложения
app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount("#app");
