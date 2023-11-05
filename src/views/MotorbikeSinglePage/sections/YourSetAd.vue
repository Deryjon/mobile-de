<template>
  <TheLoader v-if="isLoading"/>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px] relative" v-else>
    <div class="left flex flex-col gap-[20px] w-[700px] rounded-[4px]">
      <div class="img h-[500px]">
        <img :src="motorcycle.motorcycle_images_url" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="basic-data bor flex flex-wrap justify-between h-[180px] p-[20px]">
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
            <p class="text-[12px]">Mileage</p>
            <p class="font-bold">{{ motorcycle.motorcycle_mileage }} km</p>
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
            <p class="text-[12px]">First Registration</p>
            <p class="font-bold">{{ motorcycle.motorcycle_firt_date_year }}</p>
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
            <p class="text-[12px]">Power</p>
            <p class="font-bold">{{ powerInkW }} kW ({{ powerInHp }} Hp)</p>
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
            <p class="font-bold">{{ motorcycle.motorcycle_transmission }}</p>
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
            <p class="text-[12px]">Previous Owners</p>
            <p class="font-bold">{{ motorcycle.motorcycle_number_owners }}</p>
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
            <p class="font-bold">{{ motorcycle.motorcycle_fuel_type }}</p>
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
       {{ motorcycle.motorcycle_type }}
            </p>
          </div>
          <div class="mileage flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Mileage</p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_mileage }} km</p>
          </div>
          <div class="cubic flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Cubic Capacity</p>
            <p class="w-[288px] text-[14px]">
              {{ motorcycle.motorcycle_cubic_capacity }} ccm
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Power</p>
            <p class="w-[288px] text-[14px]">
              {{ powerInkW }} kW ({{ powerInHp }} Hp)
            </p>
          </div>
          <div class="power flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Fuel</p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_fuel_type }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Gearbox</p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_transmission }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">
              First Registration
            </p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_firt_date_year }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">
              Used Programme
            </p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_approved_used_programme }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Condition</p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_condition }}</p>
          </div>
          <div class="availability flex justify-between">
            <p class="w-[288px] text-[14px] font-semibold">Colour</p>
            <p class="w-[288px] text-[14px]">{{ motorcycle.motorcycle_exterior_colour }}</p>
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
          <P class="title"> {{ motorcycle.motorcycle_description }} </P>
        </div>
      </div>
      <div class="description bor p-[20px]">
        <p class="title font-semibold">About this dealer</p>
        <div class="line mt-[10px]"></div>
        <div class="flex flex-wrap p-[20px] mt-[20px] gap-[20px] justify-between text-[14px]">
          <div class="power flex w-[186px] gap-[5px]">
            <svg class="right_S__3T85O SvgIcon__1H1VO orange-500__1xnDQ" width="32" height="32" viewBox="0 0 40 40"
              focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
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
              <p class="text-[12px]">With mobile.de since</p>
              <p class="font-bold">3 Years</p>
            </div>
          </div>
          <div class="power flex w-[186px] gap-[5px]">
            <svg class="right_S__3T85O SvgIcon__1H1VO orange-500__1xnDQ" width="32" height="32" viewBox="0 0 34 30"
              focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11 18.0001C11 19.657 9.65685 21.0001 8 21.0001C6.34315 21.0001 5 19.657 5 18.0001C5 16.3433 6.34315 15.0001 8 15.0001C9.65685 15.0001 11 16.3433 11 18.0001ZM9 18.0001C9 18.5524 8.55225 19.0001 8 19.0001C7.44775 19.0001 7 18.5524 7 18.0001C7 17.4479 7.44775 17.0001 8 17.0001C8.55225 17.0001 9 17.4479 9 18.0001Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M29 18.0001C29 19.657 27.6569 21.0001 26 21.0001C24.3431 21.0001 23 19.657 23 18.0001C23 16.3433 24.3431 15.0001 26 15.0001C27.6569 15.0001 29 16.3433 29 18.0001ZM27 18.0001C27 18.5524 26.5522 19.0001 26 19.0001C25.4478 19.0001 25 18.5524 25 18.0001C25 17.4479 25.4478 17.0001 26 17.0001C26.5522 17.0001 27 17.4479 27 18.0001Z"
                fill="currentColor"></path>
              <path
                d="M15 15.0001C14.4477 15.0001 14 15.4478 14 16.0001C14 16.5524 14.4477 17.0001 15 17.0001H19C19.5523 17.0001 20 16.5524 20 16.0001C20 15.4478 19.5523 15.0001 19 15.0001H15Z"
                fill="currentColor"></path>
              <path
                d="M15 19.0001C14.4477 19.0001 14 19.4478 14 20.0001C14 20.5524 14.4477 21.0001 15 21.0001H19C19.5523 21.0001 20 20.5524 20 20.0001C20 19.4478 19.5523 19.0001 19 19.0001H15Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.05317 3.78744L3.43778 10.249C1.44143 10.9051 0 12.7843 0 15.0001V23.0001C0 23.8886 0.386251 24.6869 1 25.2362V27.0001C1 28.657 2.34315 30.0001 4 30.0001H6C7.65685 30.0001 9 28.657 9 27.0001V26.0001H25V27.0001C25 28.657 26.3431 30.0001 28 30.0001H30C31.6569 30.0001 33 28.657 33 27.0001V25.2362C33.6138 24.6869 34 23.8886 34 23.0001V15.0001C34 12.7843 32.5586 10.9051 30.5622 10.249L28.9468 3.78744C28.3904 1.56161 26.3905 0.00012207 24.0961 0.00012207H9.90388C7.60954 0.00012207 5.60963 1.56161 5.05317 3.78744ZM24.0961 2.00012H9.90388C8.52728 2.00012 7.32733 2.93701 6.99345 4.27251L5.56155 10.0001H17.1C17.5633 7.71788 19.581 6.00012 22 6.00012C24.419 6.00012 26.4367 7.71788 26.9 10.0001H28.4384L27.0065 4.27252C26.6727 2.93701 25.4727 2.00012 24.0961 2.00012ZM2 15.0001C2 13.3433 3.34315 12.0001 5 12.0001H29C30.6569 12.0001 32 13.3433 32 15.0001V23.0001C32 23.5524 31.5523 24.0001 31 24.0001H3C2.44772 24.0001 2 23.5524 2 23.0001V15.0001ZM22 8.00012C23.3062 8.00012 24.4175 8.83493 24.8293 10.0001H19.1707C19.5825 8.83493 20.6938 8.00012 22 8.00012ZM27 26.0001V27.0001C27 27.5524 27.4477 28.0001 28 28.0001H30C30.5523 28.0001 31 27.5524 31 27.0001V26.0001H27ZM7 26.0001H3V27.0001C3 27.5524 3.44772 28.0001 4 28.0001H6C6.55228 28.0001 7 27.5524 7 27.0001V26.0001Z"
                fill="currentColor"></path>
            </svg>
            <div class="kilomet">
              <p class="text-[12px]">Ads online</p>
              <p class="font-bold">534</p>
            </div>
          </div>
          <div class="power flex w-[186px] gap-[5px]">
            <svg class="right_S__3T85O SvgIcon__1H1VO orange-500__1xnDQ" width="32" height="32" viewBox="0 0 32 29"
              focusabfle="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                d="M4 23.9993C4 23.4471 4.44772 22.9993 5 22.9993C5.55228 22.9993 6 23.4471 6 23.9993C6 24.5516 5.55228 24.9993 5 24.9993C4.44772 24.9993 4 24.5516 4 23.9993Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M32 12.9993C32 11.3425 30.6569 9.99934 29 9.99934L20.3749 9.9992L21.9325 4.54074L21.9346 4.53293C22.4411 2.64252 21.4082 0.63007 19.4943 0.117239C17.588 -0.393564 15.6947 0.821116 15.1792 2.6988L15.1282 2.86117C14.673 4.3098 14.0345 6.3423 13.0261 8.05165C12.1439 9.54725 11.0952 10.6035 9.80391 10.9303C9.37321 9.80129 8.28026 8.99934 7 8.99934H3C1.34315 8.99934 0 10.3425 0 11.9993V25.9993C0 27.6562 1.34315 28.9993 3 28.9993H7C8.06226 28.9993 8.99557 28.4473 9.52863 27.6143C9.96336 27.8595 10.4653 27.9993 11 27.9993H26C27.6569 27.9993 29 26.6562 29 24.9993C29 24.6091 28.9255 24.2363 28.7899 23.8943C30.0635 23.5476 31 22.3828 31 20.9993C31 20.4647 30.8601 19.9627 30.615 19.528C31.4479 18.9949 32 18.0616 32 16.9993C32 16.231 31.7111 15.5301 31.2361 14.9993C31.7111 14.4686 32 13.7677 32 12.9993ZM3 10.9993H7C7.55228 10.9993 8 11.4471 8 11.9993V25.9993C8 26.5516 7.55229 26.9993 7 26.9993H3C2.44772 26.9993 2 26.5516 2 25.9993V11.9993C2 11.4471 2.44771 10.9993 3 10.9993ZM10 12.9371C12.1982 12.5145 13.7175 10.816 14.7488 9.06781C15.8779 7.15371 16.5772 4.92429 17.0237 3.50054L17.0994 3.25969L17.105 3.23884C17.3514 2.31933 18.2233 1.84721 18.9767 2.04909C19.7282 2.25046 20.2465 3.09151 20.0046 4.0083L18.088 10.7248C18.0019 11.0265 18.0624 11.3511 18.2514 11.6015C18.4403 11.852 18.7359 11.9992 19.0496 11.9992L29 11.9993C29.5523 11.9993 30 12.4471 30 12.9993C30 13.5516 29.5523 13.9993 29 13.9993H23C22.4477 13.9993 22 14.4471 22 14.9993C22 15.5516 22.4477 15.9993 23 15.9993H29C29.5523 15.9993 30 16.4471 30 16.9993C30 17.5516 29.5523 17.9993 29 17.9993H23C22.4477 17.9993 22 18.4471 22 18.9993C22 19.5516 22.4477 19.9993 23 19.9993H28C28.5523 19.9993 29 20.4471 29 20.9993C29 21.5516 28.5523 21.9993 28 21.9993H23C22.4477 21.9993 22 22.4471 22 22.9993C22 23.5516 22.4477 23.9993 23 23.9993H26C26.5523 23.9993 27 24.4471 27 24.9993C27 25.5516 26.5523 25.9993 26 25.9993H11C10.4477 25.9993 10 25.5516 10 24.9993V12.9371Z"
                fill="currentColor"></path>
            </svg>
            <div class="kilomet">
              <p class="text-[12px]">Referrals</p>
              <p class="font-bold">82%</p>
            </div>
          </div>
          <div class="power flex w-[186px] gap-[5px]">
            <svg class="right_S__3T85O SvgIcon__1H1VO orange-500__1xnDQ" width="32" height="32" viewBox="0 0 31 35"
              focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                d="M5 8.00012C5 7.44784 5.41973 7.00012 5.9375 7.00012H19.0625C19.5803 7.00012 20 7.44784 20 8.00012C20 8.55241 19.5803 9.00012 19.0625 9.00012H5.9375C5.41973 9.00012 5 8.55241 5 8.00012Z"
                fill="currentColor"></path>
              <path
                d="M5 15.0001C5 14.4478 5.44772 14.0001 6 14.0001H9C9.55228 14.0001 10 14.4478 10 15.0001C10 15.5524 9.55228 16.0001 9 16.0001H6C5.44772 16.0001 5 15.5524 5 15.0001Z"
                fill="currentColor"></path>
              <path
                d="M5 22.0001C5 21.4478 5.44772 21.0001 6 21.0001H7C7.55228 21.0001 8 21.4478 8 22.0001C8 22.5524 7.55228 23.0001 7 23.0001H6C5.44772 23.0001 5 22.5524 5 22.0001Z"
                fill="currentColor"></path>
              <path
                d="M23.0004 0.00012207H2.99957C1.34295 0.00012207 0 1.39493 0 3.11551V26.8847C0 28.6053 1.34295 30.0001 2.99957 30.0001H6.88978C7.46331 30.0001 7.92824 29.5352 7.92824 28.9617C7.92824 28.3881 7.46331 27.9232 6.88978 27.9232H2.99957C2.44736 27.9232 1.99971 27.4583 1.99971 26.8847V3.11551C1.99971 2.54198 2.44736 2.07705 2.99957 2.07705H23.0004C23.5526 2.07705 24.0003 2.54198 24.0003 3.11551V11.0001C24.0003 11.5523 24.4479 12 25.0001 12C25.5523 12 26 11.5523 26 11.0001V3.11551C26 1.39493 24.6571 0.00012207 23.0004 0.00012207Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.5 33.0001C25.1944 33.0001 29 29.1945 29 24.5001C29 19.8057 25.1944 16.0001 20.5 16.0001C15.8056 16.0001 12 19.8057 12 24.5001C12 29.1945 15.8056 33.0001 20.5 33.0001ZM20.5 35.0001C26.299 35.0001 31 30.2991 31 24.5001C31 18.7011 26.299 14.0001 20.5 14.0001C14.701 14.0001 10 18.7011 10 24.5001C10 30.2991 14.701 35.0001 20.5 35.0001Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M25.7071 21.293C26.0976 21.6835 26.0976 22.3167 25.7071 22.7072L19.7071 28.7072C19.3166 29.0978 18.6834 29.0978 18.2929 28.7072L15.2929 25.7072C14.9024 25.3167 14.9024 24.6835 15.2929 24.293C15.6834 23.9025 16.3166 23.9025 16.7071 24.293L19 26.5859L24.2929 21.293C24.6834 20.9025 25.3166 20.9025 25.7071 21.293Z"
                fill="currentColor"></path>
            </svg>
            <div class="kilomet">
              <p class="text-[12px]">Vehicle as described</p>
              <p class="font-bold">88%</p>
            </div>
          </div>
        </div>
        <div class="line mt-[10px]"></div>

        <p class="show mt-[20px] text-[12px]">
          This information is based exclusively on data from mobile.de and
          reviews by other users. All content is independent and not for sale.
        </p>
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
          <p class="phone text-[14px]">Phone: {{ user.user_country_code }}{{ user.user_number_prefix }}{{ user.user_phone_number }}</p>
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
      <div class="motorcycle-name flex gap-[5px] text-[20px] font-bold">
        <p class="motorcycle-mark">{{ motorcycle.motorcycle_make }}</p>
        <p class="motorcycle-model">{{ motorcycle.motorcycle_model }}</p>
      </div>
      <!-- <div class="motorcycle-name flex gap-[5px] text-[16px] mt-[5px]">
        <p class="motorcycle-mark">PureTech 130 EAT8 Allure Pack</p>
      </div> -->
      <div class="price flex gap-[5px] text-[16px] mt-[5px]">
        €
        <p class="motorcycle-price">{{ motorcycle.motorcycle_price }}</p>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="name-seller mt-[20px]">
        <p class="name">{{ motorcycle.motorcycle_vendor }}</p>
      </div>
      <div class="name-seller">
        <p class="name">{{user.user_gender}} {{  user.user_first_name }}</p>
      </div>
      <div class="name-seller mt-[15px] font-semibold">
        <p class="name">Phone: {{ user.user_country_code }}{{ user.user_number_prefix }}{{ user.user_phone_number }}</p>
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
      motorcycle: [],
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
      http.get(`/motorcycles/${this.carId}`).then((res) => {
        this.motorcycle = res.data.data;
        this.horsepower = this.motorcycle.motorcycle_power;
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
      this.$router.push({ name: "single-motorcycle" });
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
