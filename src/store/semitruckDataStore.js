import { defineStore } from 'pinia'
import http from "../axios.config"
export const useSemiTruckStore = defineStore('semitruck', {
  state: () => ({
    semitruckData: {
			truck: "",
    },
		count: ""
  }),
  actions: {
    async updateSemiTruckData() {
			await	http
				.post('/semitrucks/count', this.semitruckData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
