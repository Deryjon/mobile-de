<template>
  <TheLoader v-if="isLoading" />
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px] relative" v-else>
    <div class="left flex flex-col gap-[20px] w-[700px] rounded-[4px]">
      <div class="img h-[500px]">
        <img :src="forklifts.forklift_images_url" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="basic-data bor flex flex-wrap justify-between p-[20px]">
        <div class="registration flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M35 31V9C35 7.89543 34.1046 7 33 7H7C5.89543 7 5 7.89543 5 9V31C5 32.1046 5.89543 33 7 33H33C34.1046 33 35 32.1046 35 31Z">
              </path>
              <path d="M31 23V19H27V23H31Z"></path>
              <path d="M35 15H5"></path>
              <path d="M28 5V9M12 9V5"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[12px]">First Registration</p>
            <p class="font-bold">{{ forklifts.forklift_firt_year }}</p>
          </div>
        </div>
        <div class="power flex w-[186px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="currentColor" stroke-width="2">
              <path
                d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z">
              </path>
              <path
                d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z">
              </path>
              <path
                d="M30 12C31.1046 12 32 11.1046 32 10C32 8.89543 31.1046 8 30 8C28.8954 8 28 8.89543 28 10C28 11.1046 28.8954 12 30 12Z">
              </path>
              <path
                d="M10 32C11.1046 32 12 31.1046 12 30C12 28.8954 11.1046 28 10 28C8.89543 28 8 28.8954 8 30C8 31.1046 8.89543 32 10 32Z">
              </path>
              <path
                d="M20 32C21.1046 32 22 31.1046 22 30C22 28.8954 21.1046 28 20 28C18.8954 28 18 28.8954 18 30C18 31.1046 18.8954 32 20 32Z">
              </path>
              <path
                d="M30 32C31.1046 32 32 31.1046 32 30C32 28.8954 31.1046 28 30 28C28.8954 28 28 28.8954 28 30C28 31.1046 28.8954 32 30 32Z">
              </path>
              <path d="M10 13V27" stroke-linecap="round"></path>
              <path d="M20 13V27" stroke-linecap="round"></path>
              <path d="M30 13V20" stroke-linecap="round"></path>
              <path d="M30 20H10" stroke-linecap="round"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[12px]">Gearbox</p>
            <p class="font-bold">{{ forklifts.forklift_transmission }}</p>
          </div>
        </div>
        <div class="power flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M4 38H36M32 16H33C34.104 16 35 16.897 35 18.006V28.502C35 29.329 35.666 30 36.5 30C37.328 30 38 29.335 38 28.497V10.992C38 10.444 37.632 9.755 37.164 9.442L35 8M8 4C8 2.895 8.897 2 10.005 2H29.995C31.102 2 32 2.89 32 4V38H8V4Z">
              </path>
              <path
                d="M26 6H14C12.8954 6 12 6.89543 12 8V14C12 15.1046 12.8954 16 14 16H26C27.1046 16 28 15.1046 28 14V8C28 6.89543 27.1046 6 26 6Z">
              </path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[12px]">Fuel</p>
            <p class="font-bold">{{ forklifts.forklift_fuel_type }}</p>
          </div>
        </div>
      </div>
      <div class="technical-data bor p-[20px]">
        <p class="title font-semibold">Technical data</p>
        <div class="line mt-[10px]"></div>
        <div class="td-box mt-[20px] flex flex-col gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Category</p>
            <p class="w-[288px] text-[14px]">
              {{ forklifts.forklift_category }}
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Fuel</p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_fuel_type }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Gearbox</p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_transmission }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Lifting Capacity</p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_lifting_capacity }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Lifting Height</p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_lifting_height }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Operating Hours</p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_operating_hours }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">
              First Registration
            </p>
            <p class="w-[288px] text-[14px]">{{ forklifts.forklift_firt_year }}</p>
          </div>
        </div>
      </div>
      <div class="features bor p-[20px]">
        <p class="title font-semibold">Features</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[14px] font-semibold">
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
          <p class="show text-[#e04b00] mt-[20px] text-[14px] underline">
            Show all
          </p>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title font-semibold">
          Vehicle description according to seller
        </p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[14px]">
          <P class="title"> {{ forklifts.forklift_describtion }} </P>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title font-semibold">Dealer</p>
        <div class="line mt-[10px]"></div>

        <div class="profile-img w-[200px]">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="name">
          <p class="name text-[14px] font-semibold">
            Abuto Bierschneider Aalen GmbH
          </p>
        </div>
        <div class="since mt-[10px]">
          <p class="since text-[14px]">
            With mobile.de since: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone text-[14px]">Phone: {{ forklifts.user_phone }}</p>
        </div>
        <div class="line mt-[10px]"></div>

        <p class="show mt-[20px] text-[12px]">
          This information is based exclusively on data from mobile.de and
          reviews by other users. All content is independent and not for sale.
        </p>
      </div>
    </div>
    <div class="right mt-[25px]  bg-[#0000001f] w-[350px] h-[400px] rounded-[4px] p-[20px]"
      :class="{ 'fixed right-[202px]': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto' }">
      <div class="forklifts-name flex gap-[5px] text-[20px] font-bold">
        <p class="forklifts-mark">{{ forklifts.forklift_make }}</p>
        <p class="forklifts-model">{{ forklifts.forklift_model }}</p>
      </div>
      <!-- <div class="forklifts-name flex gap-[5px] text-[16px] mt-[5px]">
        <p class="forklifts-mark">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[16px] mt-[5px]">
        €
        <p class="forklifts-price">{{ forklifts.forklift_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="name-seller mt-[20px]">
        <p class="name">{{ forklifts.forklift_vendor }}</p>
      </div>
      <div class="name-seller">
        <p class="name">{{ user.user_gender }} {{ user.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">Phone: {{ forklifts.user_phone }}</p>
      </div>
      <button
        class="complete bg-[#e04b00] w-full py-[12px] rounded-[8px] text-[#fff] font-bold flex items-center gap-[5px] px-[32%] mt-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
          <path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
        Write Email
      </button>
      <div class="flex gap-[10px] w-full mt-[25px]">
        <button
          class="bg-transparent m-0 bor rounded-[4px] text-[14px] py-[12px] px-[15%] w-[50%] text-[#08829a] flex items-center gap-[5px]">
          <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5 1h14a1 1 0 011 1v20.191a.5.5 0 01-.724.447L12 19l-7.276 3.638A.5.5 0 014 22.191V2a1 1 0 011-1zm4 4v10h2v-3h2c3 0 3-2 3-3.5S16 5 13 5H9zm2 2h2c1 0 1 1 1 1.5s0 1.5-1 1.5h-2V7z"
              fill="currentColor"></path>
          </svg>
          Park
        </button>
        <button
          class="mt-0 flex items-center gap-[5px] bg-[#08829a] rounded-[4px] text-[14px] py-[12px] px-[13%] w-[50%] text-white"
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
      forklifts: [],
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
      this.userI = localStorage.getItem("u-i");
      http.get(`/forklifts/${this.carId}`).then((res) => {
        this.forklifts = res.data.data;
        this.horsepower = this.forklifts.forklift_power;
        this.isLoading = false

      });
    },
    fetchUser() {
      http.get(`/users?id=${this.userI}`).then((res) => {
        this.user = res.data.data;
        this.userCreatedAt = this.user.user_create_at;
        const date = new Date(this.userCreatedAt);
        this.formattedDate = format(date, " MMM d yyyy");
        // console.log(this.formattedDate);
        // console.log(this.user);
      });
    },
    goToSinglePageAd() {
      this.$router.push({ name: "single-forklifts" });
    },
    handleScroll() {
      if (window.scrollY >= 150 && !this.isScrolled) {

        this.isScrolled = true;
      } else if (window.scrollY < 150 && this.isScrolled) {

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
    this.userI = localStorage.getItem("u-i");
    this.carId = this.$route.params.id;
    this.fetchAds();
    this.fetchUser();
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
