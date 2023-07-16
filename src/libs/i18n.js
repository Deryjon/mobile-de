// i18n.js
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
	fallbackLocale: "en",
  messages: {
    en: {
      sell: 'Sell Car',
      // другие переводы на английском
    },
    fr: {
      sell: 'Vendre',
      // другие переводы на французском
    },
    // другие языки и переводы
  },
});

export default i18n;
