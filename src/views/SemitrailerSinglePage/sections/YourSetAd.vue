<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1140px] md:flex gap-[5px] justify-between pl-0 ml-[4px] relative" v-else>
    <div class="relative md:hidden  h-[230px] lg:h-[500px] w-full lg:w-[700px]">


      <div class="slider h-[250px] sm:h-[300px]   w-full lg:h-[400px] lg:w-[600px]">
        <img v-for="(image, index) in images" :key="index" :src="image"
          :class="{ 'slider-item': true, active: activeIndex === index }"
          class="h-[250px] sm:h-[300px] bor lg:h-[400px] w-full lg:w-[600px] opacity-0 absolute  duration-500 object-cover" />
        <div class="controls flex absolute top-[50%] w-full justify-between">

          <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
            <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
          </div>
          <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
            <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
      <div class="indicators mt-[0px]">
        <div v-for="(image, index) in images" :key="index" class="item" :class="{ active: activeIndex === index }"></div>
      </div>
      <p class="mt-[-25px]">{{ formatDate(trailer.trailer_ad_create_at) }}</p>
    </div>
    <div
      class="right mt-[45px] sm:mt-[100px] md:hidden lg:mt-[25px]  bg-[#0000001f] w-full lg:w-[350px] rounded-[4px] p-[5px] lg:p-[20px]">
      <div class="trailer-trailere flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="trailer-mark ">{{ trailer.trailer_make }}</p>
        <p class="trailer-trailerel ">{{ trailer.trailer_model }}</p>
      </div>
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="trailer-trailerce">{{ trailer.trailer_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="flex gap-[20px]">

        <div v-if="!userIcon">
          <img :src="profileImg" class="w-[100px] h-[100px] object-cover" />        </div>
        <div class="icon w-[100px] h-[100px] mx-[15px]" v-else>
          <svg data-v-53d99ea3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile">
            <g data-v-53d99ea3="" data-name="Layer 2">
              <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
              <path data-v-53d99ea3=""
                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z">
              </path>
            </g>
          </svg>
        </div>
        <div class="text">

          <div class="name-seller flex flex-wrap gap-[5px] mt-[20px]">
            <p class="name">{{ trailer.trailer_vendor }}</p>
            <p class="name">{{ trailer.user_gender }}</p>
            <p class="name">{{ trailer.user_first_name }}</p>
            <p class="name text-[14px]">{{ company.company_name }}</p>
          </div>
          <div class="name-seller flex flex-wrap gap-[5px] mt-[10px] font-semibold text-[14px]">
            Address :
            <p class="name">{{ company.company_address_city }}</p>
            <p class="name">{{ trailer.user_address_city }}</p>
            <p class="name">{{ company.company_address_street }}</p>
            <p class="name">{{ trailer.user_address_street }}</p>

            <p class="name text-[14px]">Near: {{ company.company_address_nr }} {{ trailer.user_address_nr }}</p>
            
          </div>
        </div>
      </div>
      <div class="name-seller mt-[15px] text-[15px] font-semibold ">
        <p class="name">{{ $t("message.single_page.email") }}: {{ trailer.user_email }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold text-[12px]">
        <p class="name">{{ $t("message.single_page.phone") }}: {{ trailer.user_phone_number  }} {{ company.company_country_code }} {{ company.company_phone_number }}</p>
      </div>


      <div class="flex  items-center gap-[2px] lg:gap-[10px] lg:w-full mt-[25px]">
        <a :href="'mailto:' + trailer.user_email"
          class="complete bg-[#e04b00] text-[12px] p-[9px] font-medium lg:text-[16px] w-[100px] lg:w-full lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:px-[32%]">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {{ $t("message.single_page.email") }}
        </a>

        <div>
          <button @click="toggleShareMenu" v-if="!isShareMenuOpen"
            class="gap-[1px] flex justify-center lg:gap-[5px] bg-[#08829a] rounded-[4px] text-[10px] lg:text-[14px] w-[100px]  lg:py-[12px] p-[10px]  lg:px-[13%] lg:w-[50%] text-white">
            <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z"
                fill="currentColor"></path>
            </svg>
            {{ $t("message.single_page.share") }}
          </button>
          <div v-if="isShareMenuOpen" class="share-menu py-[6px] lg:p-[10px] flex gap-[5px]">
            <button @click="shareOnWhatsApp">
              <img src="../../../assets/icons/whatsapp.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnTelegram">
              <img src="../../../assets/icons/telegram.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnFacebook">
              <img src="../../../assets/icons/facebook.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnTwitter">
              <img src="../../../assets/icons/twitter.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnLinkedIn">
              <img src="../../../assets/icons/linkedin.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="copyLinkToClipboard" class="w-[25px] ">
              <i class="far fa-copy"></i>
            </button>

          </div>
        </div>
      </div>
    </div>
    <div class="left flex flex-col gap-[20px] w-full md:max-w-[600px] lg:max-w-[700px]  rounded-[4px] mt-[10px]">
      <div class=" relative hidden md:block  h-[230px] lg:h-[400px] w-full lg:max-w-[700px]">


        <div class="slider h-[250px] sm:h-[300px]   w-full lg:h-[400px] lg:max-w-[700px]">
          <img v-for="(image, index) in images" :key="index" :src="image"
            :class="{ 'slider-item': true, active: activeIndex === index }"
            class="h-[250px] sm:h-[300px] bor lg:h-[400px] w-full lg:max-w-[700px] opacity-0 absolute  duration-500 object-cover" />
          <div class="controls flex absolute top-[50%] lg:top-[50%] w-full lg:max-w-[700px] justify-between">

            <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
              <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
            </div>
            <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
              <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
            </div>
          </div>

        </div>
        <div class="indicators mt-[5px]">
          <div v-for="(image, index) in images" :key="index" class="item" :class="{ active: activeIndex === index }">
          </div>
        </div>
        <p class="mt-[25px]">{{ formatDate(trailer.trailer_ad_create_at) }}</p>

      </div>

      <div class="technical-data bor p-[20px] md:mt-[80px] lg:mt-[10px]">
        <p class="title text-[16px] lg:font-semibold">{{ $t("message.single_page.technical") }}</p>
        <div class="line mt-[10px]"></div>
        <button
          class=" bg-[#e04b00] text-[12px] px-[20px] font-medium lg:text-[16px] w-[150px] mt-[20px]  lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px]"
          v-if="link" @click="redirectToLink">Link on Video</button>
        <div class="td-box mt-[20px] flex flex-col gap-[10px] lg:gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.category") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_category }}
            </p>
          </div>

          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.axles") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ trailer.trailer_axles }}
            </p>
          </div>

          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.loadcap") }}</p>
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
              {{ $t("message.single_page.first") }}
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ trailer.trailer_firt_date_year }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.condition") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ trailer.trailer_condition }}</p>
          </div>
        </div>
      </div>
      <div class="features bor p-[20px]">
        <p class="title font-semibold">{{ $t("message.single_page.features") }}</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap  mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px] font-semibold">
          <div v-for="item in trailer.trailer_features" fill="#0af512" class="flex justify-between w-[297px]">
            <p class="">{{ item }} </p>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <div v-for="item in trailer.trailer_security" fill="#0af512" class="flex justify-between w-[297px]">
            <p class="">{{ item }} </p>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class=" font-semibold">
          {{ $t("message.single_page.description") }}
        </p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px]">
          <P class="text-[12px]"> {{ trailer.trailer_describtion }} </P>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">{{ $t("message.single_page.dealer") }}</p>
        <div class="line mt-[10px]"></div>

        <div class="profile-img lg:w-[200px]">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="since mt-[10px]">
          <p class="since text-[11px] lg:text-[14px]">
            {{ $t("message.single_page.with") }}: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone text-[11px] lg:text-[14px]">{{ $t("message.single_page.phone") }}: {{ company.company_country_code }} {{ company.company_phone_number }} {{ trailer.user_phone_number  }}</p>
        </div>
    
      </div>
    </div>
    <div
      class="right mt-[45px] h-[550px]  xl:h-[450px] hidden md:mt-[5px] md:block  bg-[#0000001f] w-[130px] lg:w-[250px] xl:w-[350px] rounded-[4px] p-[5px] lg:p-[20px]"
      :class="{ 'fixed right-[25px]  w-[120px] lg:right-[25px] xl:right-[150px]': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto' }">
      <div class="trailer-trailere lg:flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="trailer-trailerk">{{ trailer.trailer_make }}</p>
        <p class="trailer-trailerel">{{ trailer.trailer_model }}</p>
      </div>
      <!-- <div class="trailer-trailere flex gap-[5px] text-[16px] mt-[5px]">
        <p class="trailer-trailerk">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="trailer-trailerce">{{ trailer.trailer_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="lg:flex items-center gap-[20px]">

        <div v-if="!userIcon">
          <img :src="profileImg" class="w-[100px] h-[100px] object-cover" />        </div>
        <div class="icon w-[80px] h-[80px] mx-[15px]" v-if="userIcon">
          <svg data-v-53d99ea3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile">
            <g data-v-53d99ea3="" data-name="Layer 2">
              <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
              <path data-v-53d99ea3=""
                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z">
              </path>
            </g>
          </svg>
        </div>
        <div class="text">

          <div class="name-seller flex flex-wrap gap-[5px] mt-[20px]">
            <p class="name">{{ trailer.trailer_vendor }}</p>
            <p class="name">{{ trailer.user_gender }}</p>
            <p class="name">{{ trailer.user_first_name }}</p>
            <p class="name text-[14px]">{{ company.company_name }}</p>

          </div>
          <div class="name-seller flex flex-wrap gap-[5px] mt-[10px] font-semibold text-[14px]">
            Address :
            <p class="name">{{ company.company_address_city }}</p>
            <p class="name">{{ trailer.user_address_city }}</p>
            <p class="name">{{ company.company_address_street }}</p>
            <p class="name">{{ trailer.user_address_street }}</p>

            <p class="name text-[14px]">Near: {{ company.company_address_nr }} {{ trailer.user_address_nr }}</p>
            
          </div>
          <div class="name-seller">
            <p class="name">{{ trailer.user_name }}</p>
          </div>
        </div>
      </div>
      <div class="name-seller mt-[15px] text-[15px] font-semibold hidden lg:flex">
        <p class="name">{{ $t("message.single_page.email") }}: {{ trailer.user_email }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold text-[12px]">
        <p class="name">{{ $t("message.single_page.phone") }}: {{ company.company_country_code }} {{ company.company_phone_number }} {{ trailer.user_phone_number  }}</p>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap gap-[2px] md:gap-[10px] lg:gap-[5px]  mt-[25px]">
        <a :href="'mailto:' + trailer.user_email"
          class="complete bg-[#e04b00] text-[12px] p-[10px] font-medium lg:text-[13px] w-[130px] lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] ">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {{ $t("message.single_page.email") }}
        </a>
        <div>
          <button
            class="mt-0 flex items-center justify-center gap-[1px] lg:gap-[5px] bg-[#08829a] rounded-[4px] text-[10px] lg:text-[14px] py-[6px]  px-[5%] lg:p-[15px] w-[100px] md:w-[70px] lg:w-[170px]  text-white"
            @click="toggleShareMenu" v-if="!isShareMenuOpen">
            <svg class="nQao3 hcDLf YgmFC" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2 8l10 6 10-6v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm0-3a1 1 0 011-1h18a1 1 0 011 1v1l-10 6L2 6V5z"
                fill="currentColor"></path>
            </svg>
            {{ $t("message.single_page.share") }}
          </button>
          <div v-if="isShareMenuOpen" class="share-menu py-[6px] lg:p-[10px] flex gap-[2px]">
            <button @click="shareOnWhatsApp">
              <img src="../../../assets/icons/whatsapp.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnTelegram">
              <img src="../../../assets/icons/telegram.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnFacebook">
              <img src="../../../assets/icons/facebook.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnTwitter">
              <img src="../../../assets/icons/twitter.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="shareOnLinkedIn">
              <img src="../../../assets/icons/linkedin.svg" alt="" class="w-[25px] ">
            </button>
            <button @click="copyLinkToClipboard">
              <i class="far fa-copy"></i>
            </button>

          </div>
        </div>
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
      isShareMenuOpen: false,
      currentUrl: window.location.href,
      userCreatedAt: null,
      adCreatedAt: null,
      profileImg: "",
      userIcon: false,
      formattedDate: "",
      formattedCreat: "",
      link: "",
      activeIndex: 0,
      images: [],
      company: [],
      intervalId: null,
    };
  },
  methods: {
    formatDate(dateString) {
            const date = new Date(dateString);
            const day = date.getUTCDate().toString().padStart(2, "0");
            const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
            const year = date.getUTCFullYear();
            const hours = date.getUTCHours().toString().padStart(2, "0");
            const minutes = date.getUTCMinutes().toString().padStart(2, "0");
            return `${day}-${month}-${year} ${hours}:${minutes} `;
        },
    // slider
    nextSlide() {
      // this.images[this.activeIndex].active = false;
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      // this.images[this.activeIndex].active = true;
    },

    prevSlide() {
      this.activeIndex =
        this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
    },

    changeSlide(index) {
      this.images[this.activeIndex].active = false;
      this.activeIndex = index;
      this.images[this.activeIndex].active = true;
    },
    goWriteEmail(userEmail) {
      const websiteUrl = `mailto:${userEmail}`;
      window.location.href = websiteUrl;

    },
    redirectToLink() {
      window.open(this.link, '_blank');
    },
    toggleShareMenu() {
      this.isShareMenuOpen = !this.isShareMenuOpen;
    },
    closeShareMenu() {
      this.isShareMenuOpen = false;
    },
    shareOnWhatsApp() {
      const url = `https://wa.me/?text=${encodeURIComponent(this.currentUrl)}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    shareOnInstagram() {
      const caption = encodeURIComponent('Check out this link: ' + this.currentUrl);
      const url = `https://www.instagram.com/create/caption/?text=${caption}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    shareOnFacebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.currentUrl)}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    shareOnTelegram() {
      const url = `https://t.me/share/url?url=${encodeURIComponent(this.currentUrl)}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    shareOnTwitter() {
      const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.currentUrl)}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    shareOnLinkedIn() {
      const url = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(this.currentUrl)}`;
      window.open(url, '_blank');
      this.closeShareMenu();
    },
    copyLinkToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.currentUrl;
      document.body.appendChild(el);

      // Создаем Range и выделяем текст
      const range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Копируем текст в буфер обмена
      document.execCommand('copy');

      // Убираем созданный элемент
      document.body.removeChild(el);

      console.log('Link copied to clipboard');
      this.closeShareMenu();
    },
    // 
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      http.get(`/semitrailer/${this.carId}`).then((res) => {
        this.trailer = res.data.data;
        this.horsepower = this.trailer.trailer_power;
        this.images = this.trailer.trailer_images_url;
        this.profileImg = this.trailer.user_image_url
        this.userCreatedAt = this.trailer.user_create_at;
        this.link = this.trailer.trailer_vide_link;
        const date = new Date(this.userCreatedAt);
        this.formattedDate = format(date, " MMM d yyyy");
                if (res.data.hasOwnProperty('company') && res.data.company !== null) {
          this.company = res.data.company;
        } else {
        }
        this.profileImg = this.trailer.user_image_url || this.company.company_image_url
        if (this.profileImg === "null") {
          this.userIcon = !this.userIcon;
        }
        this.isLoading = false;
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

.indicators {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  width: 100%;

}

.indicators .item {

  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #1f1f1f;
  opacity: 0.4;
  /* transition: 0.5s; */
}

.indicators .item.active {
  background-color: #1f1f1f;
  opacity: 0.7;
  width: 13px;
  height: 13px;
}

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



.slider-item.active {
  opacity: 1;
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
