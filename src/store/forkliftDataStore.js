import { defineStore } from 'pinia'
import http from "../axios.config"
export const useForkliftStore = defineStore('forklift', {
  state: () => ({
    forkliftData: {
			forklift: "",
    },
		count: "0"
  }),
  actions: {
    async updateForkliftData() {
			await	http
				.post('/forklifts/count', this.forkliftData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
