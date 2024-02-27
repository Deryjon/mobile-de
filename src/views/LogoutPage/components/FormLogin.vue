<template>
  <v-container class="lg:flex justify-between">
    <div class="left">
      <div class="tab-buttons flex mt-[0px]">
        <button class="login w-[50%] lg:w-[240px] h-[54px]" @click="setActive('tab-1')"
          :class="{ active: isActive('tab-1') }">
          {{ $t("message.register.login") }}
        </button>

        <button class="forget w-[50%] lg:w-[240px] h-[54px]" @click="setActive('tab-2')"
          :class="{ active: isActive('tab-2') }">
          {{ $t("message.register.register") }}
        </button>
      </div>
      <div class="tab-content bg-[#fff] w-full">
        <div class="" v-show="isActive('tab-1')">
          <div class="for-example">
            <v-sheet class="w-full  lg:h-[530px] mx-auto shadow-md px-[40px] rounded-md">
              <HeaderLogo class="mx-auto w-[130px] h-[50px]" />

              <v-form @submit.prevent="signUp">
                <p class="font-bold text-[24px] text-center mt-[10px]">
                  {{ $t("message.register.back") }}
                </p>
                <div class="flex flex-col mt-[15px]">
                  <label for="email" class="text-[14px] font-medium">{{
                    $t("message.register.email")
                  }}</label>
                  <input id="email" type="email"
                    class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                    placeholder="you@example.com" v-model="emailLogin" @input="validateEmailLogin" />
                  <span v-if="!isEmailLoginValid" class="text-red-600 text-sm mt-1">{{ $t("message.register.validEmail")
                  }}</span>
                </div>
                <div class="flex flex-col mt-[20px]">
                  <label for="password" class="text-[14px] font-medium">{{
                    $t("message.register.password")
                  }}</label>
                  <div class="relative rounded-md shadow-sm">
                    <input @input="validatePasswordLogin" id="password" :type="showPassword ? 'text' : 'password'"
                      class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                      placeholder="Your Password" v-model="passwordLogin" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button @click="toggleShowPassword" class="h-5 w-5 text-gray-400 focus:outline-none">
                        <svg v-if="showPassword" class="pt-[3px]" xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 640 512">
                          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path
                            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                        </svg>
                        <svg v-else class="pt-[3px]" xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 576 512">
                          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path
                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <span v-if="!isPasswordLoginValid" class="text-red-600 text-sm mt-1">{{ $t("message.register.atLeast")
                  }}</span>
                  <span v-if="isPasswordWrong" class="text-red-600 text-sm mt-1">Wrong password or email
                  </span>
                </div>

                <p @click="goForget" class="text-sm text-gray-600 font-medium underline cursor-pointer ml-1 mt-4">
                  {{ $t("message.register.forget") }}
                </p>
                <button type="submit" :disabled="!isFormLoginValid"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e04b00] rounded-md my-[30px]"
                  :class="{ 'opacity-50': !isFormLoginValid }">
                  {{ $t("message.register.login") }}
                </button>
              </v-form>
            </v-sheet>
          </div>
        </div>
        <div class="tab-panel" v-show="isActive('tab-2')">
          <div class="for-example">
            <v-sheet class="w-full lg:w-[480px] mx-auto shadow-md px-[40px] rounded-md">
              <HeaderLogo class="mx-auto" />
              <v-form @submit.prevent="createNewUser">
                <p class="font-bold text-[24px] text-center">
                  {{ $t("message.register.title") }}
                </p>
                <div class="flex flex-col mt-[15px]">
                  <label for="email" class="text-[14px] font-medium">
                    {{ $t("message.register.email") }}
                  </label>
                  <input id="email" type="email"
                    class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                    placeholder="you@example.com" v-model="emailRegister" @input="validateEmail" />
                  <span v-if="!isEmailValid" class="text-red-600 text-sm mt-1">
                    {{ $t("message.register.validEmail") }}
                  </span>
                  <span v-if="isPasswordWrong" class="text-red-600 text-sm mt-1">
                    Email already taken
                  </span>
                </div>
                <div class="flex flex-col mt-[20px]">
                  <label for="password" class="text-[14px] font-medium">
                    {{ $t("message.register.password") }}
                  </label>
                  <div class="relative rounded-md shadow-sm">
                    <input @input="validatePassword" v-model="passwordRegister" id="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                      placeholder="Your Password" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button @click="toggleShowPassword" class="h-5 w-5 text-gray-400 focus:outline-none">
                        <svg v-if="showPassword" class="pt-[3px]" xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 640 512">
                          <path
                            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                        </svg>
                        <svg v-else class="pt-[3px]" xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 576 512">
                          <path
                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <span v-if="!isPasswordValid" class="text-red-600 text-sm mt-1">
                    {{ $t("message.register.atLeast") }}
                  </span>
                </div>
                <div class="flex gap-[30px] mt-[20px]">
                  <label class="">
                    <input type="radio" id="user-rad" value="false" @click="handleRadioClick(false)"
                      v-model="userCompany" />
                    {{ $t("message.register.private") }}
                  </label>
                  <label class="">
                    <input type="radio" id="user-com" value="true" v-model="userCompany"
                      @click="handleRadioClick(true)" />
                    {{ $t("message.register.company") }}
                  </label>
                </div>

                <p class="conditions text-[14px] mt-[20px] mb-[20px]">
                  {{ $t("message.register.the") }}
                  <span> {{ $t("message.register.conditions") }}</span>
                  {{ $t("message.register.information")
                  }}<span> {{ $t("message.register.policy") }}</span>.
                </p>
                <label class="custom-checkbox">
                  <input type="checkbox" v-model="isChecked" @click="toggleShowCheckbox" />
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
                    <!-- Insert your SVG arrow icon here -->
                    <path v-if="isChecked" fill="#FFFFFF"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  {{ $t("message.register.recieveEmails") }}
                </label>
                <button @click="
                  createNewUser(emailRegister, passwordRegister, userCompany)
                  " type="submit" :disabled="!isFormRegisterValid"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e04b00] rounded-md mt-[20px] mb-[10px]"
                  :class="{ 'opacity-50': !isFormRegisterValid }">
                  {{ $t("message.register.register") }}
                </button>
              </v-form>
            </v-sheet>
          </div>
        </div>
      </div>
    </div>
    <div class="right hidden lg:block w-[480px] p-[30px]">
      <RightTabComponent />
    </div>
  </v-container>
</template>
<script>
import { ref } from "vue";
import HeaderLogo from "@/layouts/HeaderLayout/components/HeaderLogo.vue";
import http from "@/axios.config";
import RightTabComponent from "./RightTabComponent.vue";

export default {
  setup() {
    const activeTab = ref("tab-1");
    const setActive = (tab) => {
      activeTab.value = tab;
    };
    const isActive = (tab) => {
      return activeTab.value === tab;
    };

    const isChecked = ref(false);
    const showPassword = ref(false);

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleShowCheckbox = () => {
      isChecked.value = !isChecked.value;
    };

    return {
      setActive,
      isActive,
      showPassword,
      toggleShowPassword,
      toggleShowCheckbox,
    };
  },
  data() {
    return {
      emailRegister: "",
      passwordRegister: "",
      emailLogin: "",
      passwordLogin: "",
      isEmailValid: false,
      isPasswordValid: false,
      isEmailLoginValid: false,
      isPasswordLoginValid: false,
      isChecked: false,
      userCompany: false,
      isPasswordWrong: false,
    };
  },
  methods: {
    signUp() {
      // Ваша логика регистрации или отправки данных
      this.LoginUser(this.emailLogin, this.passwordLogin);
    },

    goForget() {
      this.$router.push({ name: "forget" })
    },
    validateEmail() {
      // Ваш код валидации email
      // Пример проверки на корректность email:
      this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailRegister);
    },
    validatePassword() {
      // Ваш код валидации пароля
      // Пример проверки на длину пароля:
      this.isPasswordValid = this.passwordRegister.length >= 8;
    },

    validateEmailLogin() {
      // Ваш код валидации email
      // Пример проверки на корректность email:
      this.isEmailLoginValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        this.emailLogin
      );
    },
    validatePasswordLogin() {
      // Ваш код валидации пароля
      // Пример проверки на длину пароля:
      this.isPasswordLoginValid = this.passwordLogin.length >= 8;
    },
    handleRadioClick(value) {
      console.log(value);
    },
    createNewUser(email, password) {
      http
        .post("/user/register", {
          user_email: email,
          user_password: password,
          user_company: this.userCompany,
        })
        .then((response) => {
          const responseData = response.data;

          if (response.data.status === 200) {

            localStorage.setItem("u-i", responseData.data.user_id);
            localStorage.setItem("u-e", responseData.data.user_email);
            localStorage.setItem("u-p", responseData.data.user_password);
            localStorage.setItem("u-fn", responseData.data.user_first_name);
            localStorage.setItem("u-ln", responseData.data.user_last_name);
            localStorage.setItem("u-g", responseData.data.user_gender);
            localStorage.setItem("u-d-s", responseData.data.user_address_street);
            localStorage.setItem("u-d-nr", responseData.data.user_address_nr);
            localStorage.setItem("u-d-z", responseData.data.user_address_zip);
            localStorage.setItem("u-d-c", responseData.data.user_address_city);
            localStorage.setItem("u-com", responseData.data.user_company);
            localStorage.setItem("com-i", false);
            localStorage.setItem("u-img-prof", responseData.data.user_image_url);
            localStorage.setItem(
              "u-d-co",
              responseData.data.user_address_country
            );
            localStorage.setItem("u-code", responseData.data.user_country_code);
            localStorage.setItem("u-pre", responseData.data.user_number_prefix);
            localStorage.setItem("u-phone", responseData.data.user_phone_number);
            localStorage.setItem("u-bal", responseData.data.user_balance);
            localStorage.setItem("r-tok", responseData.token);

            if (localStorage.getItem("r-tok")) {
              localStorage.setItem("logged-in", "true");
              this.$router.push({ name: "home" });
            }
          }
          else if (response.data.status === 401, 402, 404) {
            this.isPasswordWrong = !this.isPasswordWrong
          }
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },

    // LoginUser(email, password) {
    //   http
    //     .post("/user/login", {
    //       user_email: email,
    //       user_password: password,
    //     })
    //     .then((response) => {
    //       const responseData = response.data;
    //       if (response.data.status === 200) {
    //         localStorage.setItem("u-i", responseData.data.user_id);
    //         localStorage.setItem("u-e", responseData.data.user_email);
    //        localStorage.setItem("u-p", responseData.data.user_password);
    //        localStorage.setItem("u-fn", responseData.data.user_first_name);
    //        localStorage.setItem("u-ln", responseData.data.user_last_name);
    //        localStorage.setItem("u-g", responseData.data.user_gender);
    //        localStorage.setItem("u-d-s", responseData.data.user_address_street);
    //        localStorage.setItem("u-d-nr", responseData.data.user_address_nr);
    //        localStorage.setItem("u-d-z", responseData.data.user_address_zip);
    //        localStorage.setItem("u-d-c", responseData.data.user_address_city);
    //        localStorage.setItem("u-com", responseData.data.user_company);
    //        localStorage.setItem("com-i", responseData.data.company_id);
    //        localStorage.setItem("u-img-prof", responseData.data.user_image_url);
    //        localStorage.setItem(
    //          "u-d-co",
    //          responseData.data.user_address_country
    //        );
    //        localStorage.setItem("u-code", responseData.data.user_country_code);
    //        localStorage.setItem("u-pre", responseData.data.user_number_prefix);
    //        localStorage.setItem("u-phone", responseData.data.user_phone_number);
    //        localStorage.setItem("u-bal", responseData.data.user_balance);
    //        localStorage.setItem("r-tok", responseData.token);

    //        if (localStorage.getItem("u-com") === "true") {
    //       this.$router.push({ name: "company-settings" });
    //       window.location.reload()
    //     } else {
    //       this.$router.push({ name: "profile-settings" });
    //     }

    //     localStorage.setItem("logged-in", "true");

    //      }
    //      else if (response.data.status === 401 || response.data.status === 402 || response.data.status === 404) {
    //     this.isPasswordWrong = !this.isPasswordWrong;
    //   }
    //     })

    // },
    LoginUser(email, password) {
      http.post("/user/login", {
        user_email: email,
        user_password: password,
      }).then((response) => {
        const responseData = response.data;
        if (responseData.status === 200) {
          localStorage.setItem("u-i", responseData.data.user_id);
          localStorage.setItem("u-com", responseData.data.user_company);
          localStorage.setItem("u-img-prof", responseData.data.user_image_url);
          localStorage.setItem("r-tok", responseData.token);
          localStorage.setItem("u-e", responseData.data.user_email);
          if (responseData.data.user_company === true) {
            const userId = localStorage.getItem("u-i");
            http.get(`/company/${userId}`).then((response) => {
              const responseData = response.data;
              localStorage.setItem("com-city", responseData.data.company_address_city);
              localStorage.setItem("com-country", responseData.data.company_address_country);
              localStorage.setItem("com-nr", responseData.data.company_address_nr);
              localStorage.setItem("com-radius", responseData.data.company_address_radius);
              localStorage.setItem("com-street", responseData.data.company_address_street);
              localStorage.setItem("com-zip", responseData.data.company_address_zip);
              localStorage.setItem("com-numcode", responseData.data.company_country_code);
              localStorage.setItem("com-i", responseData.data.company_id);
              localStorage.setItem("com-e", responseData.data.company_mail);
              localStorage.setItem("com-name", responseData.data.company_name);
              localStorage.setItem("com-prefix", responseData.data.company_number_prefix);
              localStorage.setItem("com-number", responseData.data.company_phone_number);
              window.location.reload()
            })
          } else {
            localStorage.setItem("u-e", responseData.data.user_email);
            localStorage.setItem("u-p", responseData.data.user_password);
            localStorage.setItem("u-fn", responseData.data.user_first_name);
            localStorage.setItem("u-ln", responseData.data.user_last_name);
            localStorage.setItem("u-g", responseData.data.user_gender);
            localStorage.setItem("u-d-s", responseData.data.user_address_street);
            localStorage.setItem("u-d-nr", responseData.data.user_address_nr);
            localStorage.setItem("u-d-z", responseData.data.user_address_zip);
            localStorage.setItem("u-d-c", responseData.data.user_address_city);
            localStorage.setItem("com-i", responseData.data.company_id);
            localStorage.setItem("u-img-prof", responseData.data.user_image_url);
            localStorage.setItem("u-d-co", responseData.data.user_address_country);
            localStorage.setItem("u-code", responseData.data.user_country_code);
            localStorage.setItem("u-pre", responseData.data.user_number_prefix);
            localStorage.setItem("u-phone", responseData.data.user_phone_number);
            localStorage.setItem("u-bal", responseData.data.user_balance);
            window.location.reload()

            this.$router.push({ name: "profile-settings" });
          }
          localStorage.setItem("logged-in", "true");
        } else if (responseData.status === 401 || responseData.status === 402 || responseData.status === 404) {
          this.isPasswordWrong = true;
        }
      }).catch(error => {
        console.error("Error during login:", error);
        // Handle error
      });
    },

    fetchCompanyData() {
      const userId = localStorage.getItem("u-i");
      http.get(`/company/${userId}`).then((response) => {
        const responseData = response.data;
        localStorage.setItem("com-city", responseData.data.company_address_city);
        localStorage.setItem("com-country", responseData.data.company_address_country);
        localStorage.setItem("com-nr", responseData.data.company_address_nr);
        localStorage.setItem("com-radius", responseData.data.company_address_radius);
        localStorage.setItem("com-street", responseData.data.company_address_street);
        localStorage.setItem("com-zip", responseData.data.company_address_zip);
        localStorage.setItem("com-numcode", responseData.data.company_country_code);
        localStorage.setItem("com-i", responseData.data.company_id);
        localStorage.setItem("com-e", responseData.data.company_mail);
        localStorage.setItem("com-name", responseData.data.company_name);
        localStorage.setItem("com-prefix", responseData.data.company_number_prefix);
        localStorage.setItem("com-number", responseData.data.company_phone_number);
      })
    }

  },
  components: { HeaderLogo, RightTabComponent },
  computed: {
    isFormRegisterValid() {
      return this.isEmailValid && this.isPasswordValid && this.isChecked;
    },
    isFormLoginValid() {
      return this.isEmailLoginValid && this.isPasswordLoginValid;
    },
  },

  created() {
    const isLoggedIn = localStorage.getItem("logged-in");
    if (isLoggedIn === "true") {
      this.$router.push({ name: "home" });
    }
  },
};
// ... rest of your component code ...
</script>
<style scoped>
input[type="radio"] {
  /* Убираем стандартные стили радиокнопок */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Задаем размер радиокнопки */
  width: 20px;
  height: 20px;
  /* Создаем круглую форму */
  border-radius: 50%;
  border: 1px solid gray;
  /* Позиционируем радиокнопку относительно базовой линии текста */
  vertical-align: middle;
  /* Убираем внутренние отступы, чтобы радиокнопка была ближе к тексту */
  margin: 0;
  padding: 0;
}

.login,
.forget {
  border-bottom: 0.5px solid rgb(216, 216, 216);
}

.login.active,
.forget.active {
  border: none;
  /* Add this line to remove the border for active buttons */
}

.login.active {
  border-right: 0.5px solid rgb(216, 216, 216);
  /* Add this line to add the right border for inactive login button */
}

.forget.active {
  border-left: 0.5px solid rgb(216, 216, 216);
  /* Add this line to add the left border for inactive forget button */
}

.active {
  background: #ffffff;
  color: #e04b00;
  border: none;
}

#email {
  border: 1px solid rgb(165, 164, 164);
}

#password {
  border: 1px solid rgb(165, 164, 164);
}

.conditions span {
  color: #e04b00;
  text-decoration: underline;
}

.custom-checkbox input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #ffffff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked+.icon {
  fill: #ffffff;
  background: #e04b00;
}

input:focus {
  box-shadow: 0px 0px 1px 4px rgba(58, 190, 213, 0.671);
}

input[type="radio"]:focus {
  box-shadow: none;
}

input[type="radio"]:checked {
  background: orange;
  box-shadow: transparent;
}
</style>