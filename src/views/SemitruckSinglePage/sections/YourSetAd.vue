<template>
  <TheLoader v-if="isLoading" />
  <v-container class="max-w-[1140px] md:flex gap-[5px] justify-between pl-0 ml-[4px] relative" v-else>
    <div class="relative md:hidden  h-[230px] lg:h-[500px] w-full lg:w-[700px]">


      <div class="slider h-[250px] sm:h-[300px]   w-full lg:h-[400px] lg:w-[600px]">
        <img v-for="(image, index) in images" :key="index" :src="image"
          :class="{ 'slider-item': true, active: activeIndex === index }"
          class="h-[250px] sm:h-[300px] lg:h-[400px] w-full lg:w-[600px] bor opacity-0 absolute  duration-500 object-cover" />
        <div class="controls flex absolute top-[50%] w-full justify-between">

          <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
            <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
          </div>
          <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
            <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
      <p class="">{{ formatDate(truck.truck_ad_create_at) }}</p>

    </div>
    <div
      class="right mt-[45px] sm:mt-[100px] md:hidden lg:mt-[25px]  bg-[#0000001f] w-full lg:w-[350px] lg:h-[400px] rounded-[4px] p-[5px] lg:p-[20px]">
      <div class="truck-trucke flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="agricultural-mark ">{{ truck.truck_make }}</p>
        <p class="truck-trucke ">{{ truck.truck_model }}</p>
      </div>
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="truck-truckce">{{ truck.truck_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="flex gap-[20px]">

        <div v-if="!userIcon">
          <img :src="truck.user_image_url" class="w-[100px] h-[100px] object-cover" />
        </div>
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

          <div class="name-seller flex gap-[5px] mt-[20px]">
            <p class="name">{{ truck.truck_vendor }}</p>
            <p class="name">{{ truck.user_gender }}</p>
            <p class="name">{{ truck.user_first_name }}</p>
          </div>
          <div class="name-seller mt-[15px] font-semibold text-[12px]">
            <p class="name">{{ $t("message.single_page.phone") }}: {{ truck.user_phone }}</p>
          </div>
        </div>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">{{ $t("message.single_page.email") }}: {{ truck.user_email }}</p>
      </div>
      <div class="flex  items-center gap-[2px] lg:gap-[10px] lg:w-full mt-[25px]">
        <button
          class="complete bg-[#e04b00] text-[12px] p-[9px] font-medium lg:text-[16px] w-[100px] lg:w-full lg:py-[12px] rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:px-[32%] "
          @click="goWriteEmail(truck.user_email)">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ffffff">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {{ $t("message.single_page.email") }}l
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


        <div class="slider h-[250px] sm:h-[300px]   w-full lg:h-[400px] lg:max-w-[700px]">
          <img v-for="(image, index) in images" :key="index" :src="image"
            :class="{ 'slider-item': true, active: activeIndex === index }"
            class="h-[250px] sm:h-[300px] lg:h-[400px] w-full lg:max-w-[700px] bor opacity-0 absolute  duration-500 object-cover" />
          <div class="controls flex absolute top-[50%] lg:top-[50%] w-full lg:max-w-[700px] justify-between">

            <div class="left absolute left-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="prevSlide()">
              <img src="../../../assets/icons/button-icon-dark-left.svg" class="w-full h-full object-cover" />
            </div>
            <div class="right absolute  right-0  w-[50px] lg:w-[50px] h-[50px] lg:h-[50px]" @click="nextSlide()">
              <img src="../../../assets/icons/button-icon-dark-right.svg" class="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        <p class="">{{ formatDate(truck.truck_ad_create_at) }}</p>

      </div>
      <div class="basic-data bor flex flex-wrap gap-[5px] justify-between    p-[20px]  md:mt-[80px] lg:mt-[10px]">
        <div class="mileage flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="#e04b00">
            <g stroke="#e04b00" stroke-width="2" stroke-linecap="round">
              <path d="M31 5L35 35"></path>
              <path d="M9 5L5 35"></path>
              <path d="M20 7V11M20 16.5V21.5M20 27V33"></path>
            </g>
          </svg>
          <div class="kilomet">
            <p class="text-[10px] lg:text-[12px]">{{ $t("message.single_page.mileage") }}</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ truck.truck_kilometre }} km</p>
          </div>
        </div>
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
            <p class="text-[12px] font-medium lg:font-bold">{{ truck.truck_firt_date_year }}</p>
          </div>
        </div>
        <div class="power flex w-[186px] gap-[5px]">
          <svg class="SvgIcon__1H1VO" width="40" height="40" viewBox="0 0 40 40" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="#e04b00" stroke-linecap="round" fill="none" stroke-width="2">
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
            <p class="text-[10px] lg:text-[12px]">{{ $t("message.single_page.power") }}</p>
            <p class="text-[12px] font-medium lg:font-bold">{{ powerInkW }} kW ({{ powerInHp }} Hp)</p>
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
            <p class="text-[12px] font-medium lg:font-bold">{{ truck.truck_transmission }}</p>
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
            <p class="text-[12px] font-medium lg:font-bold">{{ truck.truck_fuel_type }}</p>
          </div>
        </div>
      </div>
      <div class="technical-data bor p-[20px]">
        <p class="title text-[16px] lg:font-semibold">{{ $t("message.single_page.technical") }}</p>
        <div class="line mt-[10px]"></div>
        <div class="td-box mt-[20px] flex flex-col gap-[10px] lg:gap-[20px]">
          <div class="category flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.category") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ truck.truck_category }}
            </p>
          </div>
          <div class="mileage flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.mileage") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_kilometre }} km</p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.axles") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ truck.truck_axles }}
            </p>
          </div>

          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.hydraulic") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ truck.truck_hydraulic_installation
              }}
            </p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.conditioning") }}
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ truck.truck_air_conditioning
              }}
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.power") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ powerInkW }} kW ({{ powerInHp }} Hp)
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.fuel") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_fuel_type }}</p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">GVW</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">
              {{ truck.truck_gvw }}
            </p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.gearbox") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_transmission }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">
              {{ $t("message.single_page.first") }}
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_firt_date_year }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">
              {{ $t("message.single_page.cruise") }}
            </p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_cruise_control
            }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.condition") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_condition }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[11px] lg:text-[14px]  font-semibold">{{ $t("message.single_page.color") }}</p>
            <p class="w-[288px] text-[11px] lg:text-[14px] ">{{ truck.truck_exterior_colour }}</p>
          </div>
        </div>
      </div>
      <div class="features bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">{{ $t("message.single_page.features") }}</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap  mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px] font-semibold">
          <div v-for="item in truck.truck_features" class="flex justify-between w-[297px]">
            <p class="">{{ item }} </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0af512" height="16" width="14" viewBox="0 0 448 512">
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </div>

      </div>
      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">
          Vehicle description according to seller
        </p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap mt-[20px] gap-[20px] justify-between text-[11px] lg:text-[14px]">
          <P class="title"> {{ truck.truck_description }} </P>
        </div>
      </div>

      <div class="description bor p-[20px]">
        <p class="title text-[16px] lg:text-[22px] font-semibold">{{ $t("message.single_page.dealer") }}</p>
        <div class="line mt-[10px]"></div>

        <div class="profile-img lg:w-[200px]">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="since mt-[10px]">
          <p class="phone text-[11px] lg:text-[14px]">
            {{ $t("message.single_page.with") }}: {{ formattedDate }}
          </p>
        </div>
        <div class="phone mt-[10px]">
          <p class="phone text-[11px] lg:text-[14px]">{{ $t("message.single_page.phone") }}: {{ truck.user_phone }}</p>
        </div>
      </div>
    </div>
    <div
      class="right h-[420px] lg:h-[450px] mt-[45px] hidden md:mt-[5px] md:block  bg-[#0000001f] w-[140px] lg:w-[250px] xl:w-[350px]   rounded-[4px] p-[5px] lg:p-[20px]"
      :class="{ 'fixed right-[25px]  w-[120px] lg:right-[25px] xl:right-[130px]': isScrolled }"
      :style="{ position: isScrolled ? 'fixed' : 'static', top: isScrolled ? '0' : 'auto' }">
      <div class="truck-trucke lg:flex gap-[5px] text-[15px] lg:text-[20px] font-bold">
        <p class="truck-truckk">{{ truck.truck_make }}</p>
        <p class="truck-truckel">{{ truck.truck_model }}</p>
      </div>
      <!-- <div class="truck-trucke flex gap-[5px] text-[16px] mt-[5px]">
        <p class="truck-truckk">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[11px] lg:text-[16px] mt-[5px]">
        €
        <p class="truck-truckce">{{ truck.truck_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="lg:flex gap-[20px]">

        <div v-if="!userIcon">
          <img :src="truck.user_image_url" class="w-[100px] h-[100px] object-cover" />
        </div>
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

          <div class="name-seller flex flex-wrap gap-x-[5px] mt-[20px]">
            <p class="name">{{ truck.truck_vendor }}</p>
            <p class="name">{{ truck.user_gender }}</p>
            <p class="name">{{ truck.user_first_name }}</p>
          </div>
          <div class="name-seller mt-[15px] font-semibold text-[12px]">
            <p class="name">{{ $t("message.single_page.phone") }}: {{ truck.user_phone }}</p>
          </div>
        </div>
      </div>
      <div class="name-seller mt-[15px] text-[14px] font-semibold hidden lg:flex">
        <p class="name">{{ $t("message.single_page.email") }}: {{ truck.user_email }}</p>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap gap-[2px] md:gap-[10px] lg:gap-[5px]  mt-[25px]">
        <button
          class="complete bg-[#e04b00] text-[12px] p-[5px] font-medium lg:text-[13px] w-[100px] lg:w-[130px]   rounded-[8px] text-[#fff] lg:font-bold flex items-center gap-[5px] lg:p-[14px] "
          @click="goWriteEmail(truck.user_email)">
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
      truck: [],
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
      profileImg: "",
      userIcon: false,
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
      http.get(`/semitruck/${this.carId}`).then((res) => {
        this.truck = res.data.data;
        this.horsepower = this.truck.truck_power;
        this.userI = this.truck.user_id;
        this.images = this.truck.truck_images_url
        this.profileImg = this.truck.user_image_url
        if (this.profileImg === null) {
          this.userIcon = !this.userIcon;
        } 
        this.isLoading = false
      });
    },
    goToSinglePageAd() {
      this.$router.push({ name: "single-truck" });
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

.slider-item.active {
  opacity: 1;
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
