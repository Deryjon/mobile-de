import { defineStore } from 'pinia'
import http from "../axios.config"
export const useCarStore = defineStore('car', {
  state: () => ({
    carData: {
			car_make: "",
			car_model: "",
			// car_description: "",
			// car_variant: "",
			// body: [],
			// car_number_seats: "",
			// car_number_door: "",
			// car_silding_door: "",
			// car_condition: "",
			// type: [],
			// car_payment_type: "",
			// car_price_from: "",
			// car_price_up_to: "",
			// car_firt_date_year_from: "",
			// car_firt_date_year_up_to: "",
			// car_mileage_from: "",
			// car_mileage_up_to: "",
			// car_hu_valid_until: "",
			// car_previous_owners: "",
			// car_full_service_history: "",
			// car_roadworthy: "",
			// car_country: "",
			// car_city_zipcode: "",
			// car_radius: "",
			// fuel_type: "",
			// car_power_from: "",
			// car_power_up_to: "",
			// car_cubic_capacity_from: "",
			// car_cubic_capacity_to: "",
			// transmission: "",
			// car_fuel_consumption: "",
			// car_emissions_sticker: "",
			// car_emission_class: "",
			// exterior_colour: "",
			// car_trailer_coupling: "",
			// parking_sensors: [],
			// car_cruise_control: "",
			// interior_colour: "",
			// interior_material: "",
			// car_airbags: "",
			// car_air_conditioning: "",
			// extras: "",
			// others: "",
			// car_vendor: "",
			// car_dealer_rating: "",
			// car_discount_offers: "",
			// car_non_smoker: "",
			// car_taxi: "",
			// car_vat: "",
			// car_warranty: "",
			// car_environmental_bonus: "",
			// car_damaged: "",
			// car_commercial: "",
			// car_programme: "",
			// video: "",
			// picture: "",
			// days: "",
    },
		count: "0"
  }),
  actions: {
    async updateCarData() {
			await	http
				.post('/cars/count', this.carData)
				.then(response => {
					this.count = response.data.data.count
					console.log(response.data.data.count);
				})
			
    },
  }
})
