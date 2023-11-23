<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1140px] flex gap-[5px] justify-between pl-0 ml-[4px] relative" v-else>
    <div class="left flex flex-col gap-[20px] w-[205px] lg:w-[700px] rounded-[4px]">
      <div class="img h-[150px] lg:h-[500px]">
        <img :src="motorhome.motor_home_images_url" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="basic-data bor flex flex-wrap gap-[5px] justify-between lg:h-[180px] p-[20px]">
        <div class="mileage flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="#e04b00">
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M31 5L35 35"></path>
              <path d="M9 5L5 35"></path>
              <path d="M20 7V11M20 16.5V21.5M20 27V33"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">Mileage</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ motorhome.motor_home_kilometre }} km</p>
          </div>
        </div>
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
            <p class="text-[10px] lg:text-[12px]">First Registration</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ motorhome.motor_home_firt_date_year }}</p>
          </div>
        </div>
        <div class="power flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="currentColor" stroke-linecap="round" fill="none" stroke-width="2">
              <path
                d="M32.0054 34.036C35.0909 30.959 37 26.7022 37 22C37 12.6109 29.3891 5 20 5C10.6109 5 3 12.6109 3 22C3 26.709 4.9142 30.9709 8.0065 34.0496M28.075 30.075L31.9 33.9M11.925 30.075L8.1 33.9">
              </path>
              <path
                d="M20.0001 24.55C21.4084 24.55 22.5501 23.4083 22.5501 22C22.5501 20.5917 21.4084 19.45 20.0001 19.45C18.5917 19.45 17.4501 20.5917 17.4501 22C17.4501 23.4083 18.5917 24.55 20.0001 24.55Z">
              </path>
              <path d="M22.125 24.125L25.1 27.1"></path>
              <path
                d="M26.4397 24.1896C26.6726 23.5011 26.8001 22.765 26.8001 22C26.8001 20.1215 26.0385 18.4215 24.8069 17.189"
                stroke-width="1.5"></path>
              <path
                d="M29.0186 26.7685C29.7751 25.3456 30.2001 23.7221 30.2001 22C30.2001 18.0067 27.9051 14.5489 24.562 12.8744"
                stroke-width="1.6"></path>
              <path d="M31.5047 29.2556C32.8307 27.1561 33.6 24.6673 33.6 22C33.6 14.4886 27.5114 8.40002 20 8.40002"
                stroke-width="1.7"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">Power</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ powerInkW }} kW ({{ powerInHp }} Hp)</p>
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
            <p class="text-[10px] lg:text-[12px]">Gearbox</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ motorhome.motor_home_transmission }}</p>
          </div>
        </div>
        <div class="power flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
              <path d="M31 17C31 24.1797 26.0751 30 20 30C13.9249 30 9 24.1797 9 17" stroke-linecap="round"></path>
              <path
                d="M8 13C8 6.5 13.6667 5 15.5 5C17 4.33333 18 3 23 3C28 3 32 6.5 32 12C32 15.2 31 17 31 17C30 14.5 27.2 13.5 26 13.5H17C15.8 13.5 14.8334 12.1667 14.5 11.5C14.3334 12.1667 13.7 13.8 12.5 15C11.3 16.2 9.66664 16.8333 8.99993 17C8.99993 17 8 17 8 13Z">
              </path>
              <path d="M17 29.5L13 34H27L23 29.5"></path>
              <path
                d="M3 39L3.99423 36.5144C4.60168 34.9958 6.07251 34 7.70813 34H32.2919C33.9275 34 35.3983 34.9958 36.0058 36.5144L37 39"
                stroke-linecap="round"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">Previous Owners</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ motorhome.motor_home_numbrt_of_owner }}</p>
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
            <p class="text-[10px] lg:text-[12px]">Fuel</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ motorhome.motor_home_fuel_type }}</p>
          </div>
        </div>
      </div>
      <div class="technical-data bor p-[20px]">
        <p class="title text-[16px] lg:font-semibold">Technical data</p>
        <div class="line mt-[10px]"></div>
        <div class="td-box mt-[20px] flex flex-col gap-[10px] lg:gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Category</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_type }}
            </p>
          </div>
          <div class="mileage flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Mileage</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_kilometre }} km</p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Axles</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_axles }}
            </p>
          </div>

          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Trailer Coupling</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_trailer_coupling
              }}
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Power</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ powerInkW }} kW ({{ powerInHp }} Hp)
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Fuel</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_fuel_type }}</p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">GVW</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_gvw }}
            </p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Emission Class</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_emission_class }}
            </p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Emission Sticker</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ motorhome.motor_home_emissions_sticker }}
            </p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Gearbox</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_transmission }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">
              First Registration
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_firt_date_year }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">
              Cruise Control
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_cruise_control
            }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Condition</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_condition }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">Colour</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ motorhome.motor_home_exterior_colour }}</p>
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
        <p class=" font-semibold">
          Vehicle description
        </p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px]">
          <p class=""> {{ motorhome.motorhome_description }} </p>
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
          <p class="since text-[11px] lg:text-[14px]">
            With mobile.de since: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone text-[14px]">Phone: {{ motorhome.user_phone }}</p>
        </div>
        <div class="line mt-[10px]"></div>

        <p class="phone text-[11px] lg:text-[14px]">
          This information is based exclusively on data from mobile.de and
          reviews by other users. All content is independent and not for sale.
        </p>
      </div>
    </div>
    <div
      class="right mt-[45px]   lg:mt-[25px]  bg-[#0000001f] w-[120px] lg:w-[350px] h-[350px] lg:h-[400px] rounded-[4px] p-[5px] lg:p-[20px]"
      :class="{ 'fixed right-[25px] lg:right-[202px] ': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto' }">
      <div class="car-name lg:flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="motorhome-mark">{{ motorhome.motor_home_make }}</p>
        <p class="motorhome-model">{{ motorhome.motor_home_model }}</p>
      </div>
      <!-- <div class="motorhome-name flex gap-[5px] text-[16px] mt-[5px]">
        <p class="motorhome-mark">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="motorhome-price">{{ motorhome.motor_home_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="name-seller mt-[20px]">
        <p class="name">{{ motorhome.motor_home_vendor }}</p>
      </div>
      <div class="name-seller">
        <p class="name">{{ user.user_gender }} {{ user.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold text-[12px]">
        <p class="name">Phone: {{ motorhome.user_phone }}</p>
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
      motorhome: [],
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
      http.get(`/motorhomes/${this.carId}`).then((res) => {
        this.motorhome = res.data.data;
        this.horsepower = this.motorhome.motor_home_power;
        this.userI = this.motorhome.user_id;
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
      this.$router.push({ name: "single-motorhome" });
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
