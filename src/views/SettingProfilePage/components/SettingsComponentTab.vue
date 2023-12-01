<template>
  <div class="set p-[40px]">
    <div class="your-setting">
      <h2 class="text-[32px] font-semibold">
        {{ $t("message.profile.accSetting") }}
      </h2>
    </div>
    <div class="profile mt-[30px]">
      <h2 class="text-[26px] font-semibold">
        {{ $t("message.profile.profile") }}
      </h2>
      <div
        class="box w-[656px] h-[84px] p-[15px] flex items-center justify-between"
      >
        <div class="flex items-center gap-[20px]">
          <div class="icon w-[30px]">
            <svg
              data-v-53d99ea3=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="profile"
            >
              <g data-v-53d99ea3="" data-name="Layer 2">
                <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
                <path
                  data-v-53d99ea3=""
                  d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="profile-pic">
            <p class="font-medium">{{ $t("message.profile.picture") }}</p>
            <p class="font-normal">{{ $t("message.profile.visible") }}</p>
          </div>
        </div>
        <div class="">
          <label for="fileInput" class="custom-file-label">{{
            $t("message.profile.complete")
          }}</label>
          <input
            id="fileInput"
            class="input-file"
            type="file"
            ref="fileInput"
            accept="image/*"
            @change="handleFileChange"
          />
        </div>
      </div>
    </div>
    <div class="profile mt-[30px]">
      <h2 class="text-[26px] font-semibold">
        {{ $t("message.profile.loginData") }}
      </h2>
      <div class="box" v-if="!changeLogin">
        <div
          class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
        >
          <div class="flex items-center gap-[20px]">
            <div class="profile-pic">
              <p class="font-medium">{{ $t("message.register.email") }}</p>
              <p class="font-normal text-[14px]">{{ userE }}</p>
            </div>
          </div>
        </div>
        <div
          class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
        >
          <div class="flex items-center gap-[20px]">
            <div class="profile-pic">
              <p class="font-medium">{{ $t("message.register.password") }}</p>
              <p class="font-normal text-[14px]">•••••••••••••</p>
            </div>
          </div>
          <button
            class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
            @click="openDataLogin"
          >
            {{ $t("message.profile.change") }}
          </button>
        </div>
      </div>
      <div class="box w-[658px] h-[500px] p-[15px]" v-if="changeLogin">
        <p class="font-medium">{{ $t("message.profile.changeEmail") }}</p>
        <div class="box w-[270px] current-email mt-[20px] px-[10px]">
          <p class="text-[14px]">{{ $t("message.profile.currentEmail") }}</p>
          <p class="current-email font-normal text-[14px]">{{ userE }}</p>
        </div>
        <div class="email mt-[10px]">
          <input
            type="text "
            class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
            v-model="userECh"
          />
        </div>
        <div class="current-email mt-[30px] mb-[20px]">
          <p class="font-medium">{{ $t("message.profile.changePassword") }}</p>
        </div>
        <label for="" class="mt-[10px] text-[14px]">{{
          $t("message.profile.newPassword")
        }}</label>
        <div class="new flex mb-[30px]">
          <div class="relative rounded-md shadow-sm">
            <input
              @input="validatePasswordLogin"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
              v-model="newPasswordLogin"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                @click="toggleShowPassword"
                class="h-5 w-5 text-gray-400 focus:outline-none"
              >
                <svg
                  v-if="showPassword"
                  class="pt-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
                  />
                </svg>
                <svg
                  v-else
                  class="pt-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <label for="" class="text-[14px]">{{
          $t("message.profile.currentPassword")
        }}</label>
        <div class="new flex mb-[30px]">
          <div class="relative rounded-md shadow-sm">
            <input
              @input="validatePasswordLogin"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
              v-model="currentPasswordLogin"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                @click="toggleShowPassword"
                class="h-5 w-5 text-gray-400 focus:outline-none"
              >
                <svg
                  v-if="showPassword"
                  class="pt-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
                  />
                </svg>
                <svg
                  v-else
                  class="pt-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="btns flex gap-[10px] justify-end">
          <button
            class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
            @click="openDataLogin"
          >
            {{ $t("message.profile.cancel") }}
          </button>
          <button
            class="complete bg-orange-500 px-[20px] py-[8px] rounded-[8px] text-white"
            @click="changeLoginData"
          >
            {{ $t("message.profile.save") }}
          </button>
        </div>
      </div>
      <div class="profile mt-[30px]">
        <h2 class="text-[26px] font-semibold">
          {{ $t("message.profile.cantactData") }}
        </h2>
        <div class="box">
          <div
            class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
            v-if="!nameChange"
          >
            <div class="flex items-center gap-[20px]">
              <div class="profile-pic">
                <p class="font-medium">
                  {{ $t("message.profile.name") }}
                </p>
                <p class="font-normal text-[14px]">
                  {{ selectedGender }} {{ userName }} {{ userLastName }}
                </p>
              </div>
            </div>
            <button
              class="complete bg-[#094559] px-[10px] py-[8px] rounded-[8px] text-[#fff]"
              @click="openChangeName"
            >
              {{ $t("message.profile.complete") }}
            </button>
          </div>
          <div class="" v-if="nameChange">
            <div class="box">
              <div class="complete w-[656px] py-[20px] px-[20px] bg-[#f1f1f1]">
                <p>{{ $t("message.profile.completeName") }}</p>
              </div>
              <div class="changes w-[656px] h-[292px] p-[20px]">
                <div class="mark">
                  <div class="relative w-[300px] mt-2">
                    <h2 class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.formAddress") }}
                    </h2>
                    <select
                      class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[300px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                      v-model="selectedGender"
                    >
                      <option value="14600">Pleaseselect</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                    </select>
                    <span
                      class="arrow w-[7px] h-[7px] absolute right-[12px] bottom-5"
                    ></span>
                  </div>
                </div>
                <div class="flex gap-[20px] mt-[20px]">
                  <div class="email mt-[10px]">
                    <p class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.firstName") }}
                    </p>
                    <input
                      type="text "
                      class="input-bor px-[10px] py-[10px] w-[300px] rounded-md"
                      v-model="userName"
                    />
                  </div>
                  <div class="email mt-[10px]">
                    <p class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.lastName") }}
                    </p>
                    <input
                      type="text "
                      class="input-bor px-[10px] py-[10px] w-[300px] rounded-md"
                      v-model="userLastName"
                    />
                  </div>
                </div>
                <div class="btns flex gap-[10px] justify-end mt-[40px]">
                  <button
                    class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
                    @click="openChangeName"
                  >
                    {{ $t("message.profile.cancel") }}
                  </button>
                  <button
                    class="complete bg-orange-500 px-[20px] py-[8px] rounded-[8px] text-white"
                    @click="changeContactDataName"
                  >
                    {{ $t("message.profile.save") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
            v-if="!addressChange"
          >
            <div class="flex items-center gap-[20px]">
              <div class="profile-pic">
                <p class="font-medium">{{ $t("message.profile.address") }}</p>
                <p class="font-normal text-[14px]">
                  {{ userAddressStreet }} {{ userAddressNr }}
                  {{ userAddressZip }} {{ userAddressCity }}
                  {{ userAddCountry }}
                </p>
              </div>
            </div>
            <button
              class="complete bg-[#094559] px-[10px] py-[8px] rounded-[8px] text-[#fff]"
              @click="openAddressChange"
            >
              {{ $t("message.profile.complete") }}
            </button>
          </div>
          <div class="" v-if="addressChange">
            <div class="box">
              <div class="complete w-[656px] py-[20px] px-[20px] bg-[#f1f1f1]">
                <p>{{ $t("message.profile.completeAddress") }}</p>
              </div>
              <div class="changes w-[656px] h-[350px] p-[20px]">
                <div class="top flex items-center gap-[40px] w-[656px]">
                  <div class="mark">
                    <div class="w-[440px] mt-2">
                      <h2 class="text-sm lg:text-[14px]">
                        {{ $t("message.profile.street") }}
                      </h2>
                      <input
                        class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[440px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                        v-model="userAddressStreet"
                      />
                    </div>
                  </div>
                  <div class="email mt-[10px]">
                    <p class="text-sm lg:text-[14px]">№</p>
                    <input
                      type="text "
                      class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[140px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                      v-model="userAddressNr"
                    />
                  </div>
                </div>
                <div class="top flex items-center gap-[40px] w-[656px]">
                  <div class="email mt-[10px]">
                    <p class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.postcode") }}
                    </p>
                    <input
                      type="text "
                      class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[140px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                      v-model="userAddressZip"
                    />
                  </div>
                  <div class="mark">
                    <div class="w-[440px] mt-2">
                      <h2 class="text-sm lg:text-[14px]">
                        {{ $t("message.profile.city") }}
                      </h2>
                      <input
                        class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[440px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                        v-model="userAddressCity"
                      />
                    </div>
                  </div>
                </div>
                <div class="relative mt-2">
                  <h2 class="text-sm lg:text-[14px]">
                    {{ $t("message.profile.country") }}
                  </h2>
                  <select
                    class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[620px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                    v-model="selectedCountry"
                  >
                    <optgroup>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="AL">Albania</option>
                      <option value="AT">Austria</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="AD">Andorra</option>
                      <option value="BR">Brazil</option>
                      <option value="BG">Bulgaria</option>
                      <option value="CA">Canada</option>
                      <option value="HR">Croatia</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="EG">Egypt</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="GR">Greece</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IE">Ireland</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="JO">Jordan</option>
                      <option value="KW">Kuwait</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MK">Macedonia</option>
                      <option value="MT">Malta</option>
                      <option value="MX">Mexico</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="ME">Montenegro</option>
                      <option value="MA">Morocco</option>
                      <option value="NL">Netherlands</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NG">Nigeria</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="SM">San Marino</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="RS">Serbia</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="ZA">South Africa</option>
                      <option value="KR">South Korea</option>
                      <option value="ES">Spain</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="TW">Taiwan</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">USA</option>
                    </optgroup>
                  </select>
                  <span
                    class="arrow w-[7px] h-[7px] absolute right-2 bottom-5"
                  ></span>
                </div>

                <div class="btns flex gap-[10px] justify-end mt-[30px]">
                  <button
                    class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
                    @click="openAddressChange"
                  >
                    {{ $t("message.profile.cancel") }}
                  </button>
                  <button
                    class="complete bg-orange-500 px-[20px] py-[8px] rounded-[8px] text-white"
                    @click="changeContactDataAddress"
                  >
                    {{ $t("message.profile.save") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
            v-if="!numberChanges"
          >
            <div class="flex items-center gap-[20px]">
              <div class="profile-pic">
                <p class="font-medium">
                  {{ $t("message.profile.phoneNumber") }}
                </p>
                <p class="font-normal text-[14px]">
                  {{ userCountryCode }} {{ userNumberPre }}
                  {{ userPhoneNumber }}
                </p>
              </div>
            </div>
            <button
              class="complete bg-[#094559] px-[10px] py-[8px] rounded-[8px] text-[#fff]"
              @click="openNumberChange"
            >
              {{ $t("message.profile.complete") }}
            </button>
          </div>
          <div class="" v-if="numberChanges">
            <div class="box">
              <div class="complete w-[656px] py-[20px] px-[20px] bg-[#f1f1f1]">
                <p>{{ $t("message.profile.completeNumber") }}</p>
              </div>
              <div class="changes w-[656px] h-[200px] p-[20px]">
                <div class="mark flex gap-[15px]">
                  <div class="relative w-[141px]">
                    <h2 class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.countryCode") }}
                    </h2>
                    <select
                      class="mark-select mt-[5px] w-[200px] lg:w-[150px] xl:w-[141px] h-[44px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                      v-model="userCountryCode"
                    >
                      <option value="1">+1 (CA)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+7">+7 (RU)</option>
                      <option value="+20">+20 (EG)</option>
                      <option value="+27">+27 (ZA)</option>
                      <option value="+30">+30 (GR)</option>
                      <option value="+31">+31 (NL)</option>
                      <option value="+32">+32 (BE)</option>
                      <option value="+33">+33 (FR)</option>
                      <option value="+34">+34 (ES)</option>
                      <option value="+36">+36 (HU)</option>
                      <option value="+39">+39 (IT)</option>
                      <option value="+40">+40 (RO)</option>
                      <option value="+41">+41 (CH)</option>
                      <option value="+43">+43 (AT)</option>
                      <option value="+44">+44 (GB)</option>
                      <option value="+45">+45 (DK)</option>
                      <option value="+46">+46 (SE)</option>
                      <option value="+47">+47 (NO)</option>
                      <option value="+48">+48 (PL)</option>
                      <option value="+49">+49 (DE)</option>
                      <option value="+52">+52 (MX)</option>
                      <option value="+55">+55 (BR)</option>
                      <option value="+64">+64 (NZ)</option>
                      <option value="+81">+81 (JP)</option>
                      <option value="+82">+82 (KR)</option>
                      <option value="+90">+90 (TR)</option>
                      <option value="+212">+212 (MA)</option>
                      <option value="+216">+216 (TN)</option>
                      <option value="+234">+234 (NG)</option>
                      <option value="+251">+251 (ET)</option>
                      <option value="+298">+298 (FO)</option>
                      <option value="+351">+351 (PT)</option>
                      <option value="+352">+352 (LU)</option>
                      <option value="+353">+353 (IE)</option>
                      <option value="+354">+354 (IS)</option>
                      <option value="+355">+355 (AL)</option>
                      <option value="+356">+356 (MT)</option>
                      <option value="+357">+357 (CY)</option>
                      <option value="+358">+358 (FI)</option>
                      <option value="+359">+359 (BG)</option>
                      <option value="+370">+370 (LT)</option>
                      <option value="+371">+371 (LV)</option>
                      <option value="+372">+372 (EE)</option>
                      <option value="+373">+373 (MD)</option>
                      <option value="+375">+375 (BY)</option>
                      <option value="+376">+376 (AD)</option>
                      <option value="+377">+377 (MC)</option>
                      <option value="+378">+378 (SM)</option>
                      <option value="+380">+380 (UA)</option>
                      <option value="+381">+381 (RS)</option>
                      <option value="+382">+382 (ME)</option>
                      <option value="+385">+385 (HR)</option>
                      <option value="+386">+386 (SI)</option>
                      <option value="+387">+387 (BA)</option>
                      <option value="+389">+389 (MK)</option>
                      <option value="+420">+420 (CZ)</option>
                      <option value="+421">+421 (SK)</option>
                      <option value="+423">+423 (LI)</option>
                      <option value="+886">+886 (TW)</option>
                      <option value="+961">+961 (LB)</option>
                      <option value="+962">+962 (JO)</option>
                      <option value="+965">+965 (KW)</option>
                      <option value="+966">+966 (SA)</option>
                      <option value="+968">+968 (OM)</option>
                      <option value="+971">+971 (AE)</option>
                      <option value="+972">+972 (IL)</option>
                    </select>
                    <span
                      class="arrow w-[7px] h-[7px] absolute right-[12px] bottom-5"
                    ></span>
                  </div>

                  <div class="email mt-[5px]">
                    <p class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.prefix") }}
                    </p>
                    <input
                      type="text "
                      class="input-bor px-[10px] py-[10px] w-[141px] rounded-md"
                      v-model="userNumberPre"
                    />
                  </div>
                  <div class="email mt-[5px]">
                    <p class="text-sm lg:text-[14px]">
                      {{ $t("message.profile.phoneNumber") }}
                    </p>
                    <input
                      type="text "
                      class="input-bor px-[10px] py-[10px] w-[300px] rounded-md"
                      v-model="userPhoneNumber"
                    />
                  </div>
                </div>
                <div class="btns flex gap-[10px] justify-end mt-[40px]">
                  <button
                    class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
                    @click="openNumberChange"
                  >
                    {{ $t("message.profile.cancel") }}
                  </button>
                  <button
                    class="complete bg-orange-500 px-[20px] py-[8px] rounded-[8px] text-white"
                    @click="changeContactDataNumber"
                  >
                    {{ $t("message.profile.save") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile mt-[30px]">
          <h2 class="text-[26px] font-semibold">
            {{ $t("message.profile.docs") }}
          </h2>
          <div class="box">
            <div
              class="w-[656px] h-[84px] p-[10px] flex items-center justify-between"
            >
              <div
                class="w-[656px] h-[84px] p-[10px] flex items-center justify-between"
              >
                <div class="flex items-center gap-[20px]">
                  <div class="profile-pic">
                    <p class="font-medium">
                      {{ $t("message.profile.invoices") }}
                    </p>
                    <p class="font-normal text-[14px]">
                      {{ $t("message.profile.packages") }}
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="complete bg-[#fff] w-[141px] py-[6px] text-[14px] rounded-[4px] text-[#094559] font-medium"
              >
                {{ $t("message.profile.none") }}
              </button>
            </div>
          </div>
        </div>
        <div class="profile mt-[30px]">
          <h2 class="text-[26px] font-semibold">
            {{ $t("message.profile.privacy") }}
          </h2>
          <div class="box">
            <div
              class="w-[656px] h-[120px] p-[15px] flex items-center justify-between"
            >
              <div class="w-[656px] p-[15px] flex items-center justify-between">
                <div class="flex items-center gap-[20px]">
                  <div class="profile-pic">
                    <p class="font-medium">
                      {{ $t("message.profile.newsletter") }}
                    </p>
                    <p class="font-normal text-[12px]">
                      {{ $t("message.register.recieveEmails") }}
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="complete bg-[#fff] w-[141px] py-[6px] text-[14px] rounded-[4px] text-[#094559] font-medium"
              >
                {{ $t("message.profile.none") }}
              </button>
            </div>
          </div>
          <div class="box">
            <div
              class="w-[656px] h-[120px] p-[15px] flex items-center justify-between"
            >
              <div class="w-[656px] p-[15px] flex items-center justify-between">
                <div class="flex items-center gap-[20px]">
                  <div class="profile-pic">
                    <p class="font-medium">
                      {{ $t("message.profile.market") }}
                    </p>
                    <p class="font-normal text-[12px]">
                      {{ $t("message.profile.agree") }}
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="complete bg-[#fff] w-[141px] py-[6px] text-[14px] rounded-[4px] text-[#094559] font-medium"
              >
                {{ $t("message.profile.none") }}
              </button>
            </div>
          </div>
        </div>
        <div class="profile mt-[30px]">
          <h2 class="text-[26px] font-semibold">
            {{ $t("message.profile.delete") }}
          </h2>
          <div
            class="box w-[656px] h-[84px] p-[15px] flex items-center justify-between"
          >
            <div class="flex items-center gap-[20px]">
              <div class="icon w-[30px]">
                <svg
                  data-v-53d99ea3=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="profile"
                >
                  <g data-v-53d99ea3="" data-name="Layer 2">
                    <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
                    <path
                      data-v-53d99ea3=""
                      d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="profile-pic">
                <p class="font-medium">{{ userE }}</p>
                <p class="font-normal">
                  {{ $t("message.profile.since") }}
                </p>
              </div>
            </div>
            <v-dialog v-model="dialog" width="200px">
              <template v-slot:activator="{ props }">
                <button
                  class="complete bg-[#094559] px-[10px] py-[8px] rounded-[8px] text-[#fff]"
                  v-bind="props"
                >
                  {{ $t("message.profile.delete") }}
                </button>
              </template>

              <v-card>
                <v-card-text class="mx-auto"> Are you sure? </v-card-text>
                <div class="flex items-center w-[120px] mx-auto">
                  <v-card-actions>
                    <v-btn color="error" block @click="dialog = false"
                      >No</v-btn
                    >
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn color="success" block @click="userDelete">Yes</v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import http from "../../../axios.config";
export default {
  setup() {
    const showPassword = ref(false);

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };
    return {
      toggleShowPassword,
      showPassword,
    };
  },
  data() {
    return {
      userI: "",
      userE: "",
      userECh: "",
      userName: "",
      userCountryCode: "",
      userNumberPre: "",
      selectedGender: "",
      userAddressStreet: "",
      userAddressNr: "",
      userAddressZip: "",
      userAddressCity: "",
      selectedCountry: "",
      nameChange: false,
      userNumber: "",
      changeLogin: false,
      newPasswordLogin: "",
      currentPasswordLogin: "",
      userName: "",
      userLastName: "",
      addressChange: false,
      dialog: false,
      numberChanges: false,
      userPhoneNumber: "",
      userAddressCountry: "",
    };
  },
  watch: {
    selectedImg(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.changeProfilImage();
      }
    },
  },
  methods: {
    handleFileChange() {
      const formData = new FormData();
      const file = this.$refs.fileInput.files[0];
      formData.append("photo", file);
      formData.append("id", this.userI);
      console.log(file);

      http.put("/user/edit/photo", formData).then((response) => {
        const responseData = response.data;
        localStorage.setItem("u-img-prof", responseData.data.user_image_url);
        localStorage.setItem("u-img-alt", responseData.data.user_image_name);
        window.location.reload();
      });
    },
    changeContactDataNumber() {
      this.numberChanges = !this.numberChanges;
      http
        .put("/user/edit/phone", {
          user_id: this.userI,
          country_code: this.userCountryCode,
          prefix: this.userNumberPre,
          phone_number: this.userPhoneNumber,
        })
        .then((response) => {
          const responseData = response.data;
          localStorage.setItem("u-code", responseData.data.user_country_code);
          localStorage.setItem("u-pre", responseData.data.user_number_prefix);
          localStorage.setItem("u-phone", responseData.data.user_phone_number);
        });
    },
    openNumberChange() {
      this.numberChanges = !this.numberChanges;
    },
    openDataLogin() {
      this.changeLogin = !this.changeLogin;
    },
    openAddressChange() {
      this.addressChange = !this.addressChange;
    },
    changeLoginData() {
      http
        .put("/user/edit/mail", {
          user_id: this.userI,
          user_email: this.userECh,
          user_new_password: this.newPasswordLogin,
        })
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
          localStorage.setItem("u-e", responseData.data.user_email);
          localStorage.setItem("u-p", responseData.data.user_password);
        });
      window.location.reload();
    },
    changeContactDataAddress() {
      this.addressChange = !this.addressChange;
      http
        .put("/user/edit/address", {
          user_id: this.userI,
          street: this.userAddressStreet,
          near: this.userAddressNr,
          zip: this.userAddressZip,
          country: this.selectedCountry,
          city: this.userAddressCity,
        })
        .then((response) => {
          const responseData = response.data;
          localStorage.setItem("u-d-s", responseData.data.user_address_street);
          localStorage.setItem("u-d-nr", responseData.data.user_address_nr);
          localStorage.setItem("u-d-z", responseData.data.user_address_zip);
          localStorage.setItem("u-d-c", responseData.data.user_address_city);
          localStorage.setItem(
            "u-d-co",
            responseData.data.user_address_country
          );
        });
    },
    userDelete() {
      http.delete(`user/delete/${this.userI}`).then((res) => {
        console.log(res.data);
        localStorage.clear();
        this.$router.push({ name: "home" });
        if (localStorage.getItem("u-com") == null) {
          localStorage.setItem("u-com", false);
        } else if (localStorage.getItem("logged-in") == null) {
          localStorage.setItem("logged-in", false);
        }
        window.location.reload();
      });
      this.dialog = false;
    },
    openChangeName() {
      this.nameChange = !this.nameChange;
    },
    changeContactDataName() {
      this.nameChange = !this.nameChange;
      console.log(this.selectedGender, this.userLastName, this.userName);
      http
        .put("/user/edit/name", {
          user_id: this.userI,
          gender: this.selectedGender,
          first_name: this.userName,
          last_name: this.userLastName,
        })
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
          localStorage.setItem("u-fn", responseData.data.user_first_name);
          localStorage.setItem("u-ln", responseData.data.user_last_name);
          localStorage.setItem("u-g", responseData.data.user_gender);
        });
    },
  },
  created() {
    this.userI = localStorage.getItem("u-i");
    this.userE = localStorage.getItem("u-e");
    this.userECh = localStorage.getItem("u-e");
    this.userName = localStorage.getItem("u-fn");
    if (this.userName === "null") {
      this.userName = "Noname";
    }
    this.userLastName = localStorage.getItem("u-ln");
    if (this.userLastName === "null") {
      this.userLastName = "";
    }
    this.selectedGender = localStorage.getItem("u-g");
    if (this.userLastName === "null") {
      this.userLastName = "";
    }
    this.userAddressStreet = localStorage.getItem("u-d-s");
    if (this.userAddressStreet === "null") {
      this.userAddressStreet = "No Address";
    }
    this.userAddressNr = localStorage.getItem("u-d-nr");

    if (this.userAddressNr === "null") {
      this.userAddressNr = "";
    }
    this.userAddressZip = localStorage.getItem("u-d-z");

    if (this.userAddressZip === "null") {
      this.userAddressZip = "";
    }
    this.userAddressCity = localStorage.getItem("u-d-c");

    if ((this.userAddressCity = "null")) {
      this.userAddressCity = "";
    }
    this.userAddressCountry = localStorage.getItem("u-d-co");

    if (this.userAddressCountry === "null") {
      this.userAddressCountry = "";
    }
    this.userCountryCode = localStorage.getItem("u-code");
    if (this.userCountryCode === "null") {
      this.userCountryCode = "No Number";
    }
    this.userNumberPre = localStorage.getItem("u-pre");
    if (this.userNumberPre === "null") {
      this.userNumberPre = "";
    }
    this.userPhoneNumber = localStorage.getItem("u-phone");
    if (this.userPhoneNumber === "null") {
      this.userPhoneNumber = "";
    }
  },
};
</script>
<style scoped>
.box {
  border: 1px solid gray;
}
.input-bor {
  border: 1px solid #000;
}
.custom-file-label {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #094559;
  border-radius: 4px;
  display: inline-block;
}

/* Стилизация кнопки "Обзор" (по желанию) */
.custom-file-label {
  padding: 5px 10px;
  background-color: #094559;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.input-file {
  display: none;
}
</style>
