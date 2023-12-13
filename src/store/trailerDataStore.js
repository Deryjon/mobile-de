import { defineStore } from 'pinia'
import http from "../axios.config"
export const useTrailerStore = defineStore('trailer', {
  state: () => ({
    trailerData: {
    },
		count: "0"
  }),
  actions: {
    async updateTrailerData() {
			await	http
				.post('/trailers/count', this.trailerData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
