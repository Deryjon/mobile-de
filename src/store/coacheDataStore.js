import { defineStore } from 'pinia'
import http from "../axios.config"
export const useCoacheStore = defineStore('coache', {
  state: () => ({
    coacheData: {
      
    },
		count: ""
  }),
  actions: {
    async updateCoacheData() {
			await	http
				.post('/coaches/count', this.coacheData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
