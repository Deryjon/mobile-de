import { defineStore } from 'pinia'
import http from "../axios.config"
export const useSemiTrailerStore = defineStore('semitrailer', {
  state: () => ({
    semitrailerData: {
			truck: "",
    },
		count: ""
  }),
  actions: {
    async updateSemiTrailerData() {
			await	http
				.post('/semitrailers/count', this.semitrailerData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
