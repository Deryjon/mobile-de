import { defineStore } from 'pinia'
import http from "../axios.config"
export const useTruckStore = defineStore('truck', {
  state: () => ({
    truckData: {
			truck: "",
			truck: "",
    },
		count: ""
  }),
  actions: {
    async updateTruckData() {
			await	http
				.post('/trucks/count', this.truckData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
