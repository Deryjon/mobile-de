<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1140px] flex gap-[5px] justify-between pl-0 ml-[4px] relative" v-else>
    <div class="left flex flex-col gap-[20px] w-[205px] lg:w-[700px] rounded-[4px]">
      <div class="img h-[150px] lg:h-[500px]">
        <img :src="trailer.trailer_images_url" class="w-full h-full object-cover" alt="" />
      </div>
      
      <div class="technical-data bor p-[20px]">
        <p class="title text-[16px] lg:font-semibold">Technical data</p>
        <div class="line mt-[10px]"></div>
        <div class="td-box mt-[20px] flex flex-col gap-[10px] lg:gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Category</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_category }}
            </p>
          </div>
          
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Axles</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_axles }}
            </p>
          </div>

          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Load Capacity</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_load_capacity
              }}
            </p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">GVW</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_gvw }}
            </p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">
              First Registration
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ trailer.trailer_firt_date_year }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Condition</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ trailer.trailer_condition }}</p>
          </div>
        </div>
      </div>
      <div class="features bor p-[20px]">
        <p class="title font-semibold">Features</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px] font-semibold">
          <div class="w-[297px]">ABS</div>
          <div class="w-[297px]">Adaptive Cruise Control</div>
          <div class="w-[297px]">Adaptive lighting</div>
          <div class="w-[297px]">Air suspension</div>
          <div class="w-[297px]">Alloy wheels</div>
          <div class="w-[297px]">Ambient lighting</div>
          <div class="w-[297px]">Android Auto</div>
          <div class="w-[297px]">Apple CarPlay</div>
          <div class="w-[297px]">Arm rest</div>
          <div class="w-[297px]">Autom. dimming interior mirror</div>
          <div class="w-[297px]">Blind spot assist</div>
          <div class="w-[297px]">Bluetooth</div>
        </div>
        <div class="btn show-more w-[8%] mx-auto cursor-pointer">
          <p class="show text-[#e04b00] mt-[20px] text-[11px] lg:text-[14px] underline">
            Show all
          </p>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:font-semibold">
          Vehicle description according to seller
        </p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px]">
          <P class="title"> {{ trailer.trailer_describtion }} </P>
        </div>
      </div>
      
      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">Dealer</p>
        <div class="line mt-[10px]"></div>

        <div class="profile-img lg:w-[200px]">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="name">
          <p class="name text-[11px] lg:text-[14px] font-semibold">
            Abuto Bierschneider Aalen GmbH
          </p>
        </div>
        <div class="since mt-[10px]">
          <p class="since since text-[11px] lg:text-[14px]">
            With mobile.de since: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone since text-[11px] lg:text-[14px]">Phone: {{ trailer.user_phone }}</p>
        </div>
        <div class="line mt-[10px]"></div>

        <p class="show mt-[20px] text-[10px] lg:text-[12px]">
          This information is based exclusively on data from mobile.de and
          reviews by other users. All content is independent and not for sale.
        </p>
      </div>
    </div>
    <div class="right mt-[45px]   lg:mt-[25px]  bg-[#0000001f] w-[120px] lg:w-[350px] h-[350px] lg:h-[400px] rounded-[4px] p-[5px] lg:p-[20px]"
      :class="{ 'fixed right-[25px] lg:right-[202px] ': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto'}">
      <div class="car-name lg:flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="trailer-model">{{ trailer.trailer_make }}</p>
        <p class="trailer-model">{{ trailer.trailer_model }}</p>
      </div>
      <!-- <div class="trailer-naailerflex gap-[5px] text-[16px] mt-[5px]">
        <p class="trailer-maailer>PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px">
        €
        <p class="trailer-price">{{ trailer.trailer_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="name-seller mt-[20px]">
        <p class="name">{{ trailer.trailer_vendor }}</p>
      </div>
      <div class="name-seller">
        <p class="name">{{ user.user_gender }} {{ user.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold text-[12px]">
        <p class="name">Phone: {{ trailer.user_phone }}</p>
      </div>
      <button
        class="complete bg-[#e04b00] text-[12px] p-[5px] font-medium lg:text-[16px] w-[100px] lg:w-full lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:px-[32%] mt-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
          <path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
        Write Email
      </button>
      <div class="flex gap-[2px] lg:gap-[10px] lg:w-full mt-[25px]">
        <button
          class="bg-transparent m-0 bor rounded-[4px] text-[10px] lg:text-[14px] py-[6px] lg:py-[12px] px-[5%] lg:px-[15%] lg:w-[50%] text-[#08829a] flex items-center gap-[1px] lg:gap-[5px]">
          <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5 1h14a1 1 0 011 1v20.191a.5.5 0 01-.724.447L12 19l-7.276 3.638A.5.5 0 014 22.191V2a1 1 0 011-1zm4 4v10h2v-3h2c3 0 3-2 3-3.5S16 5 13 5H9zm2 2h2c1 0 1 1 1 1.5s0 1.5-1 1.5h-2V7z"
              fill="currentColor"></path>
          </svg>
          Park
        </button>
        <button
          class="mt-0 flex items-center gap-[1px] lg:gap-[5px] bg-[#08829a] rounded-[4px] text-[10px] lg:text-[14px] py-[6px] lg:py-[12px] px-[5%] lg:px-[13%] lg:w-[50%] text-white"
          @click="contactAd">
          <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z"
              fill="currentColor"></path>
          </svg>
          Share
        </button>
      </div>
    </div>
  </v-container>
</template>
<script>
import SettingsTab from "../components/SettingsComponentTab.vue";
import OverviewTab from "../components/OverviewComponentTab.vue";
import MyAdCarsTab from "../components/MyAdCarsTab.vue";
import TheLoader from "../../../components/TheLoader.vue"
import { format } from "date-fns";
import http from "../../../axios.config";
export default {
  data() {
    return {
      userEmail: "",
      userI: "",
      activeTab: "tab-2",
      isOpen: false,
      user: [],
      contactUser: false,
      isLoading: true,
      horsepower: "",
      isScrolled: false,
      scrollThresholdReached: false,
      userCreatedAt: null,
      formattedDate: "",
    };
  },
  methods: {
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      http.get(`/semitrailer/${this.carId}`).then((res) => {
        this.trailer = res.data.data;
        // this.horsepower = this.trailer.trailer_power;
        this.userI = this.trailer.user_id;
        this.fetchUser();
        this.isLoading = false
      });
    },
    fetchUser() {
      http.get(`/users?id=${this.userI}`).then((res) => {
        this.user = res.data.data;
        this.userCreatedAt = this.user.user_create_at;
        const date = new Date(this.userCreatedAt);
        this.formattedDate = format(date, " MMM d yyyy");
      });
    },
    goToSinglePageAd() {
      this.$router.push({ name: "single-trailer" });
    },
    handleScroll() {
      if (window.scrollY >= 150 && window.scrollY <= 1750 && !this.isScrolled) {
        this.isScrolled = true;
      } else if ((window.scrollY < 150 || window.scrollY > 1750) && this.isScrolled) {
        this.isScrolled = false;
      }

    },
    removeScrollListener() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  components: {
    SettingsTab,
    OverviewTab,
    MyAdCarsTab,
    TheLoader,
  },

  created() {
    this.carId = this.$route.params.id;
    this.fetchAds();

  },
  computed: {
    powerInkW() {
      // Конвертируем лошадинные силы в кВт
      return (this.horsepower * 0.7457).toFixed(2);
    },
    powerInHp() {
      // Оставляем значение лошадинных сил без изменений
      return this.horsepower;
    },
  },
};
</script>
<style scoped>
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
