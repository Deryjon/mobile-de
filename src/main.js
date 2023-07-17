import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router";
import vuetify from './libs/vuetify';
import i18n from "./libs/i18n";

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


// Присваивайте свойство $i18n до монтирования приложения
app.config.globalProperties.$i18n = i18n;

app.mount("#app");
