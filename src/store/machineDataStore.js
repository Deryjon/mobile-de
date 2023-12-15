import { defineStore } from 'pinia'
import http from "../axios.config"
export const useMachineStore = defineStore('construction', {
  state: () => ({
    machineData: {
			machine_make: "",
			machine_model: "",
    },
		count: "0"
  }),
  actions: {
    async updateMachineData() {
			await	http
				.post('/constructions/count', this.machineData)
				.then(response => {
					this.count = response.data.data.count
				})
			
    },
  }
})
