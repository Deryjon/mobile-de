import { defineStore } from 'pinia';

export const useTabsStore = defineStore	( 'tabsStore', {
  state: () => ({
    activeTab: 'tab-2', 
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
});
