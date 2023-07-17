import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      sell: 'Sell Car',
      // другие переводы на английском
    },
    France: {
      sell: 'Vendre',
      // другие переводы на французском
    },
    Germany: {
      sell: 'Auto verkaufen',
      // другие переводы на немецком
    },
    Spanish: {
      sell: 'vender coche',
      // другие переводы на испанском
    },
    Swedish: {
      sell: 'Sälja bil',
      // другие переводы на шведском
    },
    Russa: {
      sell: 'Продайте автомобиль',
      // другие переводы на русском
    },
    Polish: {
      sell: 'Sprzedać samochód',
      // другие переводы на польском
    },
    // другие языки и переводы
  },
});

export default i18n;
