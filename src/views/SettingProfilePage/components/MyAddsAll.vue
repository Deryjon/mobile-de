<template>
  <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
    <div
      v-for="car in cars"
      :key="car.id"
      class="card bor flex justify-between w-full h-[300px]  p-[20px]"
    >
      <div class="img w-[400px] h-[260px] bor"></div>
      <div class="texts w-[520px]  h-[260px]">
        <div class="name flex gap-[5px] text-[16px] font-semibold">
          <div class="make">
            {{ car.car_make }}
          </div>
          <div class="model">
            {{ car.car_model }}
          </div>
          <div class="variant">
            {{ car.car_variant }}
          </div>
        </div>
        <div class="date-km flex gap-[5px]">
          <div class="year">
            {{ car.car_firt_date_year }}
          </div>
          •
          <div class="mileage">{{ car.car_mileage }} km</div>
          •
          <div class="power">{{ car.car_power }} Hp</div>
        </div>
        <div class="car-body flex gap-[5px] text-[14px]">
          <div class="car-body">
            {{ car.car_body }}
          </div>
          •
          <div class="fuel">
            {{ car.car_fuel_type }}
          </div>
          •
          <div class="transmission">
            {{ car.car_transmission }}
          </div>
          •
          <div class="hu">
            HU
            {{ car.car_hu_valid_until }}
          </div>
        </div>
        <div class="car-body flex gap-[5px] text-[14px]">
          <div class="car-body">
            {{ car.car_number_door }}
          </div>
          Doors
        </div>
      </div>
			<div class="price text-[18px] font-semibold">
				<p class="price">€{{ car.car_price }}</p>
				<div class="flex gap-[10px] justify-end mt-[200px]">
        <button class=" flex items-center gap-[5px] bg-[#08829a] rounded-[4px] text-[14px] p-[8px] px-[20px] text-white" @click="cancelAdCar">
          <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z" fill="currentColor"></path></svg>
					Contact
        </button>
        <button
          @click="addAdBasicCars"
          class="bg-transparent bor rounded-[4px] text-[14px] p-[8px] px-[20px] text-[#08829a] flex items-center gap-[5px]"
        >
				<svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1h14a1 1 0 011 1v20.191a.5.5 0 01-.724.447L12 19l-7.276 3.638A.5.5 0 014 22.191V2a1 1 0 011-1zm4 4v10h2v-3h2c3 0 3-2 3-3.5S16 5 13 5H9zm2 2h2c1 0 1 1 1 1.5s0 1.5-1 1.5h-2V7z" fill="currentColor"></path></svg>
          Park
        </button>
      </div>
				
			</div>
    </div>
  </div>
</template>

<script>
import http from "../../../axios.config";
export default {
  data() {
    return {
      userI: "",
      cars: [],
    };
  },

  methods: {
    fetchAds() {
      http.get(`/user/cars/${this.userI}?limit=100&offset=0`).then((res) => {
        this.cars = res.data.data;
        console.log(this.cars);
      });
    },
  },
  created() {
    this.userI = localStorage.getItem("u-i");
    this.fetchAds();
  },
};
</script>
<style scoped>
.bor {
  border: 1px solid #111;
}
</style>
