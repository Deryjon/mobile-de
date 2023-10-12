// store.js
import { defineStore } from 'pinia';

export const useActiveTab4 = defineStore('ActiveTab4', {
  state: () => ({	
    activeDiv: '1', 
  }),
  actions: {
    setActiveDiv(value) {
      this.activeDiv = value;
			// console.log(this.activeDiv);
    },
  },
});
