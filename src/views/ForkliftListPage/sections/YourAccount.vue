<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1120px] " v-else>
    <section
      class="w-full xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1100px]  mx-auto  settings relative bg-[#0000001f] py-[20px] lg:p-[40px]">
      <div class="flex flex-wrap gap-[10px] lg:gap-[40px] justify-between mt-[20px]">
        <div v-for="forklift in forklifts"
          class="card bor lg:flex justify-between w-[300px] sm:w-[500px]  lg:w-[800px] p-[20px] xl:w-[1000px] cursor-pointer mx-auto lg:gap-[20px]"
          @click="goToSinglePageAd(forklift.forklift_id)">
          <div class="img bor w-full lg:w-[350px] h-[130px] sm:h-[200px] lg:h-[260px] m-0">

            <img class="w-[100%] h-full object-cover" :src="forklift.forklift_images_url" />
          </div>
          <div class="text lg:h-[260px] lg:w-[375px]">
            <div class="name flex gap-[5px] text-[16px] font-semibold">
              <div class="make">
                {{ forklift.forklift_make }}
              </div>
              <div class="model">
                {{ forklift.forklift_model }}
              </div>
              <div class="variant">
                {{ forklift.forklift_variant }}
              </div>
            </div>
            <div class="date-km flex gap-[5px]">
              <div class="year">
                {{ forklift.forklift_firt_date }}
              </div>
              •
              <div class="mileage">
                {{ forklift.forklift_operating_hours }}
                {{ $t("message.list_page.hour") }}
              </div>
              •
              <div class="power">
                {{ forklift.forklift_power }}
                Hp
              </div>
            </div>
            <div class="forklift-coachey flex flex-wrap gap-[5px] text-[14px]">
              <div class="forklift-coachey">
                {{ forklift.forklift_category }}
              </div>
              •
              <div class="fuel">
                {{ forklift.forklift_fuel_type }}
              </div>
              •
              <div class="transmission">
                {{ forklift.forklift_transmission }}
              </div>
            </div>
            <div class="car-body flex flex-wrap gap-[5px] text-[13px] lg:text-[15px] mt-[30px]">
                <div class="car-body">
                  {{ $t("message.filter_page.condition") }}:  {{ forklift.forklift_condition }}
                </div>
                •
                <div class="fuel">
                  {{ $t("message.single_page.liftheight") }}:   {{ forklift.forklift_height }}
                </div>
                •
                <div class="transmission">
                  {{ $t("message.filter_page.radius") }}:
                  {{ forklift.forklift_radius }}
                </div>
                •
                <div class="hu">
                  {{ $t("message.filter_page.vendor") }}:
                  {{ forklift.forklift_vendor }}
                </div>
                
              </div>  
            <div class="car-body  gap-[5px] text-[14px] mt-[25px]">
                <div class="car-body">
                  {{ $t("message.single_page.phone") }}: {{ forklift.user_phone }}
                </div>
                <div class="car-body">
                  {{ $t("message.single_page.email") }}: {{ forklift.user_email }}
                </div>
              </div>
          </div>
          <div class="price text-[18px] font-semibold">
            <p class="price">€{{ forklift.forklift_price }}</p>
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
    </section>
  </v-container>
</template>
<script>

import http from "../../../axios.config";
import { useForkliftStore } from "../../../store/forkliftDataStore";
import TheLoader from '../../../components/TheLoader.vue'
export default {
  data() {
    return {
      forkliftStore: useForkliftStore(),
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      isLoading: true,
      forklifts: [],
      contactUser: false,
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      const forkliftData = this.forkliftStore.forkliftData
      http.post(`/forklifts/list?limit=100&offset=0`, forkliftData).then((res) => {
        this.forklifts = res.data.data;
        this.isLoading = false
      });
    },
    goToSinglePageAd(forkliftId) {
      this.$router.push({ name: "forklift-single", params: { id: forkliftId } });

    }
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
