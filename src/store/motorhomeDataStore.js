import { defineStore } from 'pinia'
import http from "../axios.config"
export const useMotorhomeStore = defineStore('motorhome', {
  state: () => ({
    motorhomeData: {
			motor_home_make: "",
			motor_home_model: "",
    },
		count: ""
  }),
  actions: {
    async updateMotorhomeData() {
			await	http
				.post('/motorhomes/count', this.motorhomeData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
