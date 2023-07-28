import { defineStore } from 'pinia';
import http from '../axios.config';

export const useMarkStore = defineStore('markCar', {
  state: () => ({
		marks: {},
  }),
	getters:{
    getMarkList: (s) => {
      const markList = [];
      Object.keys(s.marks).forEach((key) => {
        productList.push({ id: key, data: s.marks[key] });
      });
      return markList
    },
	},
  actions: {
		async fetchMarks() {
			const res = await http.get("/modelyear/2023/make");
      this.marks = res.data;
			console.log(this.marks);
    },
  },
});
