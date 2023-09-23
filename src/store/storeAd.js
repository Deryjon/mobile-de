import { defineStore } from 'pinia';

export const useTabsStore = defineStore	( 'tabsStore', {
  state: () => ({
    activeTab: '', // Инициализируйте переменную значением по умолчанию
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
			console.log(tab);
    },
  },
});
