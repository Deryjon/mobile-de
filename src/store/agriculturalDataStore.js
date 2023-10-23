import { defineStore } from 'pinia'
import http from "../axios.config"
export const useVehicleStore = defineStore('vehicle', {
  state: () => ({
    vehicleData: {
      
    },
		count: ""
  }),
  actions: {
    async updateAgriculturalData() {
			await	http
				.post('/agriculturals/count', this.vehicleData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
