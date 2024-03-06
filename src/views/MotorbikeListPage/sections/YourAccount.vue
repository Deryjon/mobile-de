<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1120px]" v-else>
    <div
      class="w-full xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1100px]  mx-auto  settings relative bg-[#0000001f] py-[20px] lg:p-[40px]">
      <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
        <div v-for="motorcycle in motorcycles"
          class="card bor lg:flex justify-between w-[300px] sm:w-[500px]  lg:w-[800px] p-[20px] xl:w-[1000px] cursor-pointer mx-auto lg:gap-[20px]"
          @click="goToSinglePageAd(motorcycle.motorcycle_id)">
          <div class="img bor w-full lg:w-[350px] h-[130px] sm:h-[200px] lg:h-[260px]  m-0">

            <img class="w-[100%] h-full object-cover" :src="motorcycle.motorcycle_images_url[1]" />
          </div>
          <div class="text lg:w-[370px]">
            <div class="name flex gap-[5px] text-[16px] font-semibold">
              <div class="make">
                {{ motorcycle.motorcycle_make }}
              </div>
              <div class="model">
                {{ motorcycle.motorcycle_model }}
              </div>
              <div class="variant">
                {{ motorcycle.motorcycle_variant }}
              </div>
            </div>
            <div class="date-km flex gap-[5px]">
              <div class="year">
                {{ motorcycle.motorcycle_firt_date_year }}
              </div>
              •
              <div class="mileage">
                {{ motorcycle.motorcycle_mileage }}
                km
              </div>
              •
              <div class="power">
                {{ motorcycle.motorcycle_power }}
                Hp
              </div>
            </div>
            <div class="motorcycle-body flex flex-wrap gap-x-[5px] text-[15px]">
              <div class="motorcycle-body">
                {{ motorcycle.motorcycle_type }}
              </div>
              •
              <div class="fuel">
                {{ motorcycle.motorcycle_fuel_type }}
              </div>
              •
              <div class="transmission">
                {{ motorcycle.motorcycle_transmission }}
              </div>
              •
              <div class="hu">
                HU
                {{ motorcycle.motorcycle_hu_valid_until }}
              </div>
            </div>
            <div class="car-body flex flex-wrap gap-[5px] text-[14px] mt-[30px]">
                <div class="car-body">
                  {{ $t("message.filter_page.exterior_color.title_inter") }}:  {{ motorcycle.motorcycle_interior_colour }}
                </div>
                •

                <div class="transmission">
                  {{ $t("message.filter_page.exterior_color.title") }}:
                  {{ motorcycle.motorcycle_exterior_colour }}
                </div>
                •
                <div class="hu">
                  {{ $t("message.filter_page.programme") }}:
                  {{ motorcycle.motorcycle_approved_used_programme }}
                </div>
                •
                <div class="hu">
                  {{ $t("message.filter_page.cubcap") }}:
                  {{ motorcycle.motorcycle_cubic_capacity }}
                </div>
                •
                <div class="hu">
                  {{ $t("message.filter_page.driving_mode.title") }}:
                  {{ motorcycle.motorcycle_driving_mode }}
                </div>
                •
                <div class="hu">
                  {{ $t("message.filter_page.condition") }}:
                  {{ motorcycle.motorcycle_condition  }}
                </div>
              </div>
              <div class="motorcycle-body gap-[5px] text-[14px] mt-[25px]">
                <div class="motorcycle-body">
                  {{ $t("message.single_page.phone") }}: {{ motorcycle.user_phone }}
                </div>
                <div class="motorcycle-body">
                  {{ $t("message.single_page.email") }}: {{ motorcycle.user_email }}
                </div>
              </div>
          </div>
          <div class="price text-[18px] font-semibold">
            <p class="price">€{{ motorcycle.motorcycle_price }}</p>
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
      <div class="btn_box">
          <button class="btn_prev" @click="prevPage">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z" />
            </svg>
          </button>
          <button class="btn_next" @click="nextPage">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6- 
            4.6Z" />
            </svg>
          </button>
        </div>
    </div>
  </v-container>
</template>
<script>

import http from "../../../axios.config";
import TheLoader from "../../../components/TheLoader.vue";
import { useMotorbikeStore } from "../../../store/motorbikeDataStore"
export default {
  data() {
    return {
      motorbikeStore: useMotorbikeStore(),
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      isLoading: true,
      motorcycles: [],
      contactUser: false,
      offset: 0,
      limit: 15,
      isLastPage: false,
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      const motorbikeData = this.motorbikeStore.motorcycleData
 http.post(`/motorcycles/list?limit=${this.limit}&offset=${this.offset}`, motorbikeData).then((res) => {
        this.motorcycles = res.data.data;
        this.isLastPage = res.data.data.length < this.limit;

        this.isLoading = false
      });
    },
    goToSinglePageAd(motorcycleId) {
      this.$router.push({ name: "motorcycle-single", params: { id: motorcycleId } });
    },
    nextPage() {
      if (!this.isLastPage) {
        this.offset += this.limit;
        this.fetchAds();
      }
    },
    prevPage() {
      if (this.offset >= this.limit) {
        this.offset -= this.limit;
        this.fetchAds();
      }
    },
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
  components: {
    TheLoader
  },
  created() {
    this.fetchAds();
  },
};
</script>
<style scoped>

.btn_box {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn_prev {
  width: 50px;
  height: 50px;
  background-color: rgb(190, 125, 4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 5px;
  margin-top: 10px;
}

.btn_next {
  width: 50px;
  height: 50px;
  background-color: rgb(190, 125, 4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 10px;
}
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
