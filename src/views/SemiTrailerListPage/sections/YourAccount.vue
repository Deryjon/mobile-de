<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <section class="w-full settings relative bg-[#0000001f] p-[40px]">
      <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
        <div
          v-for="trailer in trailers"
          class="motorcycled bor flex justify-between w-full h-[320px] p-[20px] cursor-pointer"
          @click="goToSinglePageAd(trailer.trailer_id)"
        >
				<div class="img w-[350px]  h-[260px] m-0">

          <img class="w-[100%] object-cover h-full" :src="trailer.trailer_images_url"/>
				</div>
          <div class="texts w-[350px] h-[260px]">
            <div class="name flex gap-[5px] text-[16px] font-semibold">
              <div class="make">
                {{ trailer.trailer_make}}
              </div>
              <div class="model">
                {{ trailer.trailer_model }}
              </div>
              <div class="variant">
                {{ trailer.trailer_variant }}
              </div>
            </div>
            <div class="date-km flex gap-[5px]">
              <div class="year">
                {{ trailer.trailer_firt_date_year }}
              </div>
            </div>
            <div class="trailer-body flex gap-[5px] text-[14px]">
              <div class="trailer-body">
                {{ trailer.trailer_category }}
              </div>
              •
              <div class="fuel">
                {{ trailer.trailer_gvw }}
                GVW
              </div>
              •
              <div class="transmission">
                {{ trailer.trailer_load_capacity }}
                capacity
              </div>
              •
              <div class="hu">
                
                {{ trailer.trailer_axles }}
                axles
              </div>
            </div>
          </div>
          <div class="price text-[18px] font-semibold">
            <p class="price">€{{ trailer.trailer_price }}</p>
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
                @click="addAdBasicmotorcycles"
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

import http from "../../../axios.config";
import {useSemiTrailerStore} from "../../../store/semitrailerDataStore"

export default {
  data() {
    return {
      semitrailerStore: useSemiTrailerStore(),
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      trailers: [],
      contactUser: false,
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      const semitrailerData = this.semitrailerStore.semitrailerData
  http.post(`/semitrailers/list?limit=100&offset=0`, semitrailerData).then((res) => {
    this.trailers = res.data.data;
  });
},
    goToSinglePageAd(motorcycleId) {
      this.$router.push({ name: "semitrailer-single", params: { id: motorcycleId } });
    },
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
  components: {
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
