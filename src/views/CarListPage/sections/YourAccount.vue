<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <section class="w-full settings relative bg-[#0000001f] p-[40px]">
      <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
        <div
          v-for="car in cars"
          class="card bor flex justify-between w-full h-[320px] p-[20px] cursor-pointer"
          @click="goToSinglePageAd(car.car_id)"
        >
				<div class="img w-[350px] h-[260px]">

          <img class="w-[100%] h-full" :src="car.car_images_url"/>
				</div>
          <div class="texts w-[350px] h-[260px]">
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
              <div class="mileage">
                {{ car.car_mileage }}
                km
              </div>
              •
              <div class="power">
                {{ car.car_power }}
                Hp
              </div>
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
              <div class="">
                <button
                  class="flex items-center gap-[5px] bg-[#08829a] rounded-[4px] text-[14px] p-[8px] px-[20px] text-white"
                  @click="contactAd"
                  v-if="!contactUser"
                >
                  <svg
                    class="nQao3 hcDLf YgmFC"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Contact
                </button>
                <!-- <div class="contact-use bg-[#08829a] rounded-[4px] text-[14px] p-[8px] px-[20px] text-white" v-if="contactUser">
<p>+998946120844</p>
<p>lonewolf@gmail.com</p>
						</div> -->
              </div>
              <button
                @click="addAdBasicCars"
                class="bg-transparent bor rounded-[4px] text-[14px] p-[8px] px-[20px] text-[#08829a] flex items-center gap-[5px]"
              >
                <svg
                  class="nQao3 hcDLf YgmFC"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 1h14a1 1 0 011 1v20.191a.5.5 0 01-.724.447L12 19l-7.276 3.638A.5.5 0 014 22.191V2a1 1 0 011-1zm4 4v10h2v-3h2c3 0 3-2 3-3.5S16 5 13 5H9zm2 2h2c1 0 1 1 1 1.5s0 1.5-1 1.5h-2V7z"
                    fill="currentColor"
                  ></path>
                </svg>
                Park
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script>
import SettingsTab from "../components/SettingsComponentTab.vue";
import OverviewTab from "../components/OverviewComponentTab.vue";
import MyAdCarsTab from "../components/MyAdCarsTab.vue";
import http from "../../../axios.config";
export default {
  data() {
    return {
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      cars: [],
      contactUser: false,
      fetchData: JSON.parse(localStorage.getItem("carData")),
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
	// 	{
  //   car_make: this.fetchData.car_make,
  //   car_model: this.fetchData.car_model,
  //   car_condition: this.fetchData.car_condition,
  //   car_firt_date_year_from: this.fetchData.car_firt_date_year,
  //   car_mileage_from: this.fetchData.car_mileage,
  //   car_payment_type: this.fetchData.car_payment_type,
  //   car_price_from: this.fetchData.car_price,
  //   car_city_zipcode: this.fetchData.car_city_zipcode,
  //   car_silding_door: this.fetchData.car_silding_door
  // }
    fetchAds() {
  http.post(`/cars/list?limit=100&offset=0`, this.fetchData).then((res) => {
    this.cars = res.data.data;
    console.log(this.cars);
    console.log(this.fetchData.car_make);
  });
},
    goToSinglePageAd(carId) {
      this.$router.push({ name: "car-single", params: { id: carId } });
    },
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
  components: {
    SettingsTab,
    OverviewTab,
    MyAdCarsTab,
  },
  created() {
    this.fetchAds();
  },
};
</script>
<style scoped>
/* CAR -- LIST  */
.bor {
  border: 1px solid #000;
}
.product-image {
  width: 200px;
  height: auto;
}

.product-info {
  margin-left: 20px;
}

.sponsored {
  border: 2px dashed #ccc;
  padding: 5px;
}

.product-title {
  font-weight: bold;
  font-size: 1.2em;
}

.product-date {
  color: #666;
  font-size: 0.9em;
}

.product-benefits {
  display: flex;
  align-items: center;
}

.product-benefits img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-logo {
  border-radius: 4px;
  width: 40px;
  height: 40px;
}

.author-name {
  margin-left: 10px;
  font-size: 0.9em;
}

.author-rating {
  margin-left: auto;
  color: #f5c518;
}

.price-info {
  text-align: right;
}

.author-ii {
  padding-right: 12px;
  margin-bottom: 4px;
}
.price {
  font-weight: bold;
  font-size: 1.3em;
}

.vat {
  font-size: 0.9em;
  color: #666;
}

.contact {
  padding-top: 4px;
  text-align: right;
  font-size: 0.8em;
  padding-left: 8px;
}

.contact button {
  padding: 4px;
  border: 1px solid #757575;
  border-radius: 6px;
}

.checksvg {
  margin-right: 4px;
}
</style>
