// store.js
import { defineStore } from 'pinia';

export const useActiveTab4 = defineStore('ActiveTab4', {
  state: () => ({	
    activeDiv: '1',
    isOpen: false, 
  }),
  actions: {
    setActiveDiv(value) {
      this.activeDiv = value;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  getters: {
    computedIsOpen() {
      return this.isOpen;
    },
  },
});
