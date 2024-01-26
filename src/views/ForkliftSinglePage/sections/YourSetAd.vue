<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1140px] md:flex gap-[5px] justify-between pl-0 ml-[4px] relative" v-else>
    <div class=" relative md:hidden  h-[230px] lg:h-[500px] w-full lg:w-[700px]">


      <div class="slider h-[250px] sm:h-[300px] bor  w-full lg:h-[400px] lg:w-[600px]">
        <img v-for="(image, index) in images" :key="index" :src="image"
          :class="{ 'slider-item': true, active: activeIndex === index }"
          class="h-[250px] sm:h-[300px] bor  lg:h-[400px] w-full lg:w-[600px] opacity-0 absolute  duration-500 object-cover" />
        <div class="controls flex absolute top-[50%] w-full justify-between">

          <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
            <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
          </div>
          <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
            <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
      <p class="">{{ formatDate(forklifts.forklift_ad_create_at) }}</p>

    </div>
    <div
      class="right mt-[45px] sm:mt-[100px] md:hidden lg:mt-[25px]  bg-[#0000001f] w-full lg:w-[350px] rounded-[4px] p-[5px] lg:p-[20px]">
      <div class="forklifts-name flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="agricultural-mark ">{{ forklifts.forklift_make }}</p>
        <p class="forklifts-model ">{{ forklifts.forklift_model }}</p>
      </div>
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="forklifts-price">{{ forklifts.forklift_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div>
        <img :src="forklifts.user_image_url"
            class="w-[100px] h-[100px] object-cover" />
      </div>
      <div class="name-seller flex gap-[5px] mt-[20px]">
        <p class="name">{{ forklifts.forklift_vendor }}</p>
        <p class="name">{{ forklifts.user_gender }}</p>
        <p class="name">{{ forklifts.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">{{ $t("message.single_page.phone") }}: {{ forklifts.user_phone }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">{{ $t("message.single_page.email") }}: {{ forklifts.user_email }}</p>
      </div>
      <div class="flex  items-center gap-[2px] lg:gap-[10px] lg:w-full mt-[25px]">
        <button
          class="complete bg-[#e04b00] text-[12px] p-[9px] font-medium lg:text-[16px] w-[100px] lg:w-full lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:px-[32%] "
          @click="goWriteEmail(forklifts.user_email)">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {{ $t("message.single_page.email") }}
        </button>
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


        <div class="slider h-[250px] sm:h-[300px]  bor w-full lg:h-[400px] lg:max-w-[700px]">
          <img v-for="(image, index) in images" :key="index" :src="image"
            :class="{ 'slider-item': true, active: activeIndex === index }"
            class="h-[250px] sm:h-[300px]  lg:h-[400px] w-full lg:max-w-[700px] opacity-0 absolute  duration-500 object-cover" />
          <div class="controls flex absolute top-[50%] lg:top-[50%] w-full lg:max-w-[700px] justify-between">

            <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
              <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
            </div>
            <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
              <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
        <p class="">{{ formatDate(forklifts.forklift_ad_create_at) }}</p>
      </div>
      <div class="basic-data bor flex flex-wrap md:mt-[100px] gap-[5px] justify-between  p-[20px]">
        <div class="registration flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g fill="none" stroke="#e04b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M35 31V9C35 7.89543 34.1046 7 33 7H7C5.89543 7 5 7.89543 5 9V31C5 32.1046 5.89543 33 7 33H33C34.1046 33 35 32.1046 35 31Z">
              </path>
              <path d="M31 23V19H27V23H31Z"></path>
              <path d="M35 15H5"></path>
              <path d="M28 5V9M12 9V5"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">{{ $t("message.single_page.first") }}</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ forklifts.forklift_firt_year }}</p>
          </div>
        </div>
        <div class="power flex w-[186px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="#e04b00" stroke-width="2">
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
            <p class="text-[10px] lg:text-[12px]">{{ $t("message.single_page.gearbox") }}</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ forklifts.forklift_transmission }}</p>
          </div>
        </div>
        <div class="power flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g fill="none" stroke="#e04b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M4 38H36M32 16H33C34.104 16 35 16.897 35 18.006V28.502C35 29.329 35.666 30 36.5 30C37.328 30 38 29.335 38 28.497V10.992C38 10.444 37.632 9.755 37.164 9.442L35 8M8 4C8 2.895 8.897 2 10.005 2H29.995C31.102 2 32 2.89 32 4V38H8V4Z">
              </path>
              <path
                d="M26 6H14C12.8954 6 12 6.89543 12 8V14C12 15.1046 12.8954 16 14 16H26C27.1046 16 28 15.1046 28 14V8C28 6.89543 27.1046 6 26 6Z">
              </path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">{{ $t("message.single_page.fuel") }}</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ forklifts.forklift_fuel_type }}</p>
          </div>
        </div>
      </div>
      <div class="technical-data bor p-[20px]">
        <p class=" font-semibold">{{ $t("message.single_page.technical") }}</p>
        <div class="line mt-[10px]"></div>
        <div class="td-box mt-[20px] flex flex-col gap-[10px] lg:gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.category") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">
              {{ forklifts.forklift_category }}
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.fuel") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_fuel_type }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.gearbox") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_transmission }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.liftcap") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_lifting_capacity }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.liftheight") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_lifting_height }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">{{ $t("message.single_page.operatinghour") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_operating_hours }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px] font-semibold">
              {{ $t("message.single_page.first") }}
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px]">{{ forklifts.forklift_firt_year }}</p>
          </div>
        </div>
      </div>
      <div class="features bor p-[20px]">
        <p class=" font-semibold">{{ $t("message.single_page.features") }}</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px] font-semibold">
          <div v-for="item in forklifts.forklift_features" class="flex justify-between w-[297px]">
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
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[14px]">
          <P class=""> {{ forklifts.forklift_describtion }} </P>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">{{ $t("message.single_page.dealer") }}</p>
        <div class="line mt-[10px]"></div>

        <div class="profile-img lg:w-[200px]">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="since mt-[10px]">
          <p class="since phone text-[11px] lg:text-[14px]">
            {{ $t("message.single_page.with") }}: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone phone text-[11px] lg:text-[14px]">{{ $t("message.single_page.phone") }}: {{ forklifts.user_phone }}</p>
        </div>
        <div class="line mt-[10px]"></div>

        <p class="show mt-[20px] text-[10px] lg:text-[12px]">
          {{ $t("message.single_page.information") }}
        </p>
      </div>
    </div>
    <div
      class="right mt-[45px] hidden md:mt-[5px] md:block  bg-[#0000001f] w-[150px] lg:w-[250px] xl:w-[350px]  rounded-[4px] p-[5px] lg:p-[20px]"
      :class="{ 'fixed right-[25px]  w-[120px] lg:right-[25px] xl:right-[200px]': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto' }">
      <div class="forklifts-name lg:flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="forklifts-mark">{{ forklifts.forklift_make }}</p>
        <p class="forklifts-model">{{ forklifts.forklift_model }}</p>
      </div>
      <!-- <div class="forklifts-name flex gap-[5px] text-[16px] mt-[5px]">
        <p class="forklifts-mark">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="forklifts-price">{{ forklifts.forklift_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div>
        <img :src="forklifts.user_image_url"
            class="w-[100px] h-[100px] object-cover" />
      </div>
      <div class="name-seller flex gap-[5px] mt-[20px]">
        <p class="name">{{ forklifts.forklift_vendor }}</p>
        <p class="name">{{ forklifts.user_gender }}</p>
        <p class="name">{{ forklifts.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">{{ $t("message.single_page.phone") }}: {{ forklifts.user_phone }}</p>
      </div>
      <div class="name-seller mt-[15px] hidden lg:flex font-semibold">
        <p class="name">{{ $t("message.single_page.email") }}: {{ forklifts.user_email }}</p>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap gap-[2px] md:gap-[10px] lg:gap-[5px]  mt-[25px]">
        <button
          class="complete bg-[#e04b00] text-[12px] p-[5px] font-medium lg:text-[13px] w-[100px] lg:w-[130px]   rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:p-[14px] "
          @click="goWriteEmail(forklifts.user_email)">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {{ $t("message.single_page.email") }}
        </button>
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
      forklifts: [],
      user: [],
      contactUser: false,
      isLoading: true,
      horsepower: "",
      isScrolled: false,
      scrollThresholdReached: false,
      userCreatedAt: null,
      adCreatedAt: null,
      formattedDate: "",
      formattedCreat: "",
      activeIndex: 0,
      images: [],
      intervalId: null,
      isShareMenuOpen: false,
      currentUrl: window.location.href,
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
      // this.images[this.activeIndex].active = false;
      this.activeIndex =
        this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
      // this.images[this.activeIndex].active = true;
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
    //
    contactAd() {
      this.contactUser = !this.contactUser;
    },
    fetchAds() {
      this.userI = localStorage.getItem("u-i");
      http.get(`/forklifts/${this.carId}`).then((res) => {
        this.forklifts = res.data.data;
        this.horsepower = this.forklifts.forklift_power;
        this.images = this.forklifts.forklift_images_url;
        this.adCreatedAt = this.forklifts.forklift_ad_create_at;
        const date = new Date(this.adCreatedAt);
        this.formattedCreat = format(date, " MMM d yyyy");
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
      if (window.scrollY >= 150 && window.scrollY <= 1750 && !this.isScrolled) {
        this.isScrolled = true;
      } else if ((window.scrollY < 150 || window.scrollY > 1750) && this.isScrolled) {
        this.isScrolled = false;
      }

    },
    removeScrollListener() {
      window.removeEventListener("scroll", this.handleScroll);
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
