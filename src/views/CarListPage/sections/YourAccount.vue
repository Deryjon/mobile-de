<template>
  <section>

    <TheLoader v-if="isLoading" />
    <v-container class="max-w-[1120px]" v-else>
      <div class="w-full xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1100px]  mx-auto  settings relative bg-[#0000001f] py-[20px] lg:p-[40px]">

        <div   class="flex flex-wrap gap-[10px] lg:gap-[40px] justify-between mt-[20px] ">
          <div v-for="car in cars" class="card bor lg:flex justify-between w-[300px] sm:w-[500px] h-[320px] sm:h-[400px] lg:h-[350px] lg:w-[800px] p-[20px] xl:w-[1000px] cursor-pointer mx-auto lg:gap-[20px]"
            @click="goToSinglePageAd(car.car_id)">
            <div class="img bor w-full lg:w-[350px] h-[130px] sm:h-[200px] lg:h-[260px] m-0">
  
              <img class="w-[100%] h-full object-cover" :src="car.car_images_url[0]" />
            </div>
            <div class="text lg:h-[260px]">
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
              <div class="car-body hidden lg:flex gap-[5px] text-[14px]">
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
              <div class="car-body hidden lg:flex gap-[5px] text-[14px]">
                <div class="car-body">
                  {{ car.car_number_door }}
                </div>
                {{ $t("message.list_page.doors") }}
              </div>
            </div>
            <div class="price text-[18px] font-semibold">
              <p class="price">€{{ car.car_price }}</p>
              <div class="flex gap-[10px] lg:justify-end mt-[10px] lg:mt-[200px]">
                <div class="">
                  <button
                    class="flex items-center gap-[5px] bg-[#08829a] rounded-[4px] text-[14px] p-[8px] px-[20px] text-white"
                    @click="contactAd" v-if="!contactUser">
                    <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z"
                        fill="currentColor"></path>
                    </svg>
                    {{ $t("message.list_page.contact") }}
                  </button>
                  <!-- <div class="contact-use bg-[#08829a] rounded-[4px] text-[14px] p-[8px] px-[20px] text-white" v-if="contactUser">
  <p>+998946120844</p>
  <p>lonewolf@gmail.com</p>
              </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import SettingsTab from "../components/SettingsComponentTab.vue";
import OverviewTab from "../components/OverviewComponentTab.vue";
import MyAdCarsTab from "../components/MyAdCarsTab.vue";
import http from "../../../axios.config";
import { useCarStore } from "../../../store/carDataStore"
import TheLoader from '../../../components/TheLoader.vue'
export default {
  data() {
    return {
      carStore: useCarStore(),
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      cars: [],
      isLoading: true,
      contactUser: false,
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      const carData = this.carStore.carData
      http.post(`/cars/list?limit=100&offset=0`, carData).then((res) => {
        this.cars = res.data.data;
        this.isLoading = false

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
    TheLoader
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
