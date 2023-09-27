"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vite = require("vite");

var _pluginVue = _interopRequireDefault(require("@vitejs/plugin-vue"));

var _vite2 = _interopRequireDefault(require("unplugin-vue-components/vite"));

var _vite3 = _interopRequireDefault(require("unplugin-auto-import/vite"));

var _vitePluginVueInspector = _interopRequireDefault(require("vite-plugin-vue-inspector"));

var _vitePluginBabel = require("vite-plugin-babel");

var _postcssNested = _interopRequireDefault(require("postcss-nested"));

var _tailwindcss = _interopRequireDefault(require("tailwindcss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vite.defineConfig)({
  plugins: [(0, _pluginVue["default"])(), // Автоимпорт компонентов
  (0, _vite2["default"])({
    resolvers: [IconsResolver()]
  }), // Иконки
  Icons({
    compiler: 'vue3'
  }), // Автоимпорт API
  (0, _vite3["default"])({
    imports: ['vue', 'vue-router', '@vueuse/core']
  }), // Форматтер и оптимизатор кода 
  (0, _vitePluginVueInspector["default"])({// настройки
  }), // Пресеты Babel
  (0, _vitePluginBabel.viteBabel)({
    babelConfig: {
      presets: ['@babel/preset-env']
    }
  }), // Копирование статических файлов
  StaticCopy({// настройки
  })],
  css: {
    postcss: {
      plugins: [(0, _postcssNested["default"])(), (0, _tailwindcss["default"])()]
    }
  }
});

exports["default"] = _default;