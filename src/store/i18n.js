import { defineStore } from 'pinia';

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    currentLanguage: 'en',
    translations: {
      en: {
        sell: 'Sell Car',
        login: 'Login or Register'
      },
      fr: {
        sell: 'Vendre',
        login: 'Se connecter ou s\'inscrire'
      },
      gr: {
        sell: 'Auto verkaufen',
        login: 'Anmelden oder Registrieren'
      },
      sp: {
        sell: 'vender coche',
        login: 'Iniciar sesión o registrarse'
      },
      sw: {
        sell: 'Sälja bil',
        login: 'Logga in eller registrera'
      },
      ru: {
        sell: 'Продайте автомобиль',
        login: 'Войти или зарегистрироваться'
      },
      pol: {
        sell: 'Sprzedać samochód',
        login: 'Zaloguj się lub zarejestruj'
      },
      // Другие языки и переводы
    },
  }),

  actions: {
    updateTranslation(locale, key, value) {
      this.translations[locale][key] = value;
    },
    setCurrentLanguage(lang) {
      this.currentLanguage = lang;
    },
  },

  getters: {
    currentTranslation: (state) => state.translations[state.currentLanguage],
    $t: (state) => (key) => state.translations[state.currentLanguage][key],
  },
});
