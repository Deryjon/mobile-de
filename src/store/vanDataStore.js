import { defineStore } from 'pinia'
import http from "../axios.config"
export const useVanStore = defineStore('van', {
  state: () => ({
    vanData: {
			
    },
		count: "0"
  }),
  actions: {
    async updateVanData() {
			await	http
				.post('/vans/count', this.vanData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
