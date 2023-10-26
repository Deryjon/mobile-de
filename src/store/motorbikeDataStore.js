import { defineStore } from 'pinia'
import http from "../axios.config"
export const useMotorbikeStore = defineStore('motorcycle', {
  state: () => ({
    motorcycleData: {
			motorcycle_make: "",
			motorcycle_model: "",
    },
		count: "0"
  }),
  actions: {
    async updateMotorbikeData() {
			await	http
				.post('/motorcycles/count', this.motorcycleData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
