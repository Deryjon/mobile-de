<template>
  <v-container class="lg:flex justify-between">
    <div class="left">
      <div class="tab-buttons mt-[0px]">
        <button
          class="login w-[240px] h-[54px]"
          @click="setActive('tab-1')"
          :class="{ active: isActive('tab-1') }"
        >
          Login
        </button>

        <button
          class="forget w-[240px] h-[54px]"
          @click="setActive('tab-2')"
          :class="{ active: isActive('tab-2') }"
        >
          Register
        </button>
      </div>
      <div class="tab-content bg-[#fff] w-[480px]">
        <div class="tab-panel" v-show="isActive('tab-1')">
          <div class="for-example">
            <v-sheet
              width="480"
              height="480"
              class="mx-auto shadow-md px-[40px] rounded-md"
            >
              <HeaderLogo class="mx-auto w-[130px] h-[50px]" />

              <v-form @submit.prevent="signUp">
                <p class="font-bold text-[24px] text-center mt-[10px]">
                  Hello! Welcome back!
                </p>
                <div class="flex flex-col mt-[15px]">
                  <label for="email" class="text-[14px] font-medium"
                    >E-Mail address</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                    placeholder="you@example.com"
                    v-model="emailLogin"
                    @input="validateEmailLogin"
                  />
                  <span
                    v-if="!isEmailLoginValid"
                    class="text-red-600 text-sm mt-1"
                    >Please enter a valid email address.</span
                  >
                </div>
                <div class="flex flex-col mt-[20px]">
                  <label for="password" class="text-[14px] font-medium"
                    >Password</label
                  >
                  <div class="relative rounded-md shadow-sm">
                    <input
                      @input="validatePasswordLogin"
                      id="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                      placeholder="Your Password"
                      v-model="passwordLogin"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
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
                  <span
                    v-if="!isPasswordLoginValid"
                    class="text-red-600 text-sm mt-1"
                    >Password must be at least 8 characters long.</span
                  >
                </div>

                <p
                  class="text-sm text-gray-600 font-medium underline cursor-pointer ml-1 mt-4"
                >
                  Forget password?
                </p>
                <button
                  type="submit"
                  :disabled="!isFormLoginValid"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e04b00] rounded-md mt-[30px]"
                  @click="LoginUser(emailLogin, passwordLogin)"
                  :class="{ 'opacity-50': !isFormLoginValid }"
                >
                  Login
                </button>
              </v-form>
            </v-sheet>
          </div>
        </div>
        <div class="tab-panel" v-show="isActive('tab-2')">
          <div class="for-example">
            <v-sheet
              width="480"
              height="600"
              class="mx-auto shadow-md px-[40px] rounded-md"
            >
              <HeaderLogo class="mx-auto" />
              <v-form @submit.prevent="createNewUser">
                <p class="font-bold text-[24px] text-center">
                  Create your sellcenter account!
                </p>
                <div class="flex flex-col mt-[15px]">
                  <label for="email" class="text-[14px] font-medium"
                    >E-Mail address</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                    placeholder="you@example.com"
                    v-model="emailRegister"
                    @input="validateEmail"
                  />
                  <span v-if="!isEmailValid" class="text-red-600 text-sm mt-1">
                    Please enter a valid email address.
                  </span>
                </div>

                <div class="flex flex-col mt-[20px]">
                  <label for="password" class="text-[14px] font-medium"
                    >Password</label
                  >
                  <div class="relative rounded-md shadow-sm">
                    <input
                      @input="validatePassword"
                      v-model="passwordRegister"
                      id="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="block w-full mt-[5px] pl-3 pr-10 py-2 rounded-md border-black hover:shadow-lg"
                      placeholder="Your Password"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
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
                          <path
                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <span
                    v-if="!isPasswordValid"
                    class="text-red-600 text-sm mt-1"
                    >Password must be at least 8 characters long.</span
                  >
                </div>

                <p class="conditions text-[14px] mt-[20px] mb-[20px]">
                  The <span>General Terms and Conditions</span> apply.
                  Information on the way all data are processed can be found in
                  our <span>Privacy Policy</span>.
                </p>
                <label class="custom-checkbox">
                  <input
                    type="checkbox"
                    v-model="isChecked"
                    @click="toggleShowCheckbox()"
                  />
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    width="1em"
                  >
                    <!-- Insert your SVG arrow icon here -->
                    <path
                      v-if="isChecked"
                      fill="#FFFFFF"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  I would like to receive emails from mobile.de about offers,
                  surveys and information on products and services from
                  mobile.de and Kleinanzeigen (can be cancelled at any time in
                  the account settings).
                </label>
                <button
                  @click="createNewUser(emailRegister, passwordRegister)"
                  type="submit"
                  :disabled="!isFormRegisterValid"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e04b00] rounded-md mt-[20px]"
                  :class="{ 'opacity-50': !isFormRegisterValid }"
                >
                  Register
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
    };
  },
  methods: {
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

    createNewUser(email, password) {
      http
        .post("/user/register", {
          user_email: email,
          user_password: password,
        })
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
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
          localStorage.setItem("u-d-co", responseData.data.user_address_country);
          localStorage.setItem("u-code", responseData.data.user_country_code);
          localStorage.setItem("u-pre", responseData.data.user_number_prefix);
          localStorage.setItem("u-phone", responseData.data.user_phone_number);
          localStorage.setItem("u-bal", responseData.data.user_balance);
          localStorage.setItem("r-tok", responseData.token);
          if (localStorage.getItem("r-tok")) {
            // Set a flag in local storage to indicate successful login
            localStorage.setItem("logged-in", "true");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },

    LoginUser(email, password) {
      http
        .post("/user/login", {
          user_email: email,
          user_password: password,
        })
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
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
          localStorage.setItem("u-d-co", responseData.data.user_address_country);
          localStorage.setItem("u-code", responseData.data.user_country_code);
          localStorage.setItem("u-pre", responseData.data.user_number_prefix);
          localStorage.setItem("u-phone", responseData.data.user_phone_number);
          localStorage.setItem("u-bal", responseData.data.user_balance);
          localStorage.setItem("r-tok", responseData.token);
          if (localStorage.getItem("r-tok")) {
            // Set a flag in local storage to indicate successful login
            localStorage.setItem("logged-in", "true");
            // window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    },
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
      localStorage.removeItem("logged-in"); // Clear the flag
    }
  },
};
// ... rest of your component code ...
</script>
<style scoped>
.login,
.forget {
  border-bottom: 0.5px solid rgb(216, 216, 216);
}

.login.active,
.forget.active {
  border: none; /* Add this line to remove the border for active buttons */
}

.login.active {
  border-right: 0.5px solid rgb(216, 216, 216); /* Add this line to add the right border for inactive login button */
}

.forget.active {
  border-left: 0.5px solid rgb(216, 216, 216); /* Add this line to add the left border for inactive forget button */
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
.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #ffffff;
  background: #e04b00;
}
input:focus {
  box-shadow: 0px 0px 1px 4px rgba(58, 190, 213, 0.671);
}
</style>
