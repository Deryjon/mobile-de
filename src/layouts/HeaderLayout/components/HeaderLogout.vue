<template>
  <div class="">
    <button v-if="!hasToken"
      class="btn outline-none rounded-[10px] w-[200px] lg:w-[120px] px-[10px] py-[6px] lg:py-[10px] lg:px-[6px] text-xs font-normal mt-[10px]  lg:mt-[17px] bg-[#feed00]"
      :class="{ 'bg-[#feed00]': isDarkMode, 'bg-transparent': isDarkMode }" @click="gotoLogin">
      {{ $t("message.header.login") }}
    </button>
    <div v-else class="settings dropdown-container mt-[18px]">
      <div>
        <div @click="openProfileDropdown" class="profile-icon xl:w-[200px] flex items-center gap-[10px] cursor-pointer">
          <svg data-v-53d99ea3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile" width="30px">
            <g data-v-53d99ea3="" data-name="Layer 2">
              <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6" fill="green"></circle>
              <path data-v-53d99ea3=""
                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
                fill="green"></path>
            </g>
          </svg>

          <p v-if="!uComValue" class=" font-bold text-[#479ef3eb] py-2 text-[16px] rounded-[8px]">
            {{ userName }}
          </p>
          <p v-if="uComValue" class=" font-bold text-[#479ef3eb] py-2 text-[16px] rounded-[8px]">
            {{ companyName }}
          </p>
        </div>

        <ul v-if="isProfileSetting" class="dropdown-options w-[160px]">
          <div v-if="!uComValue" class="btns flex items-center p-[10px]" @click="goSettings()">
            <div class="icon-settings w-[24px]">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  d="M83.172 41.128a1.75 1.75 0 0 0-2.25 2.68A26.32 26.32 0 0 1 90.357 64a1.75 1.75 0 0 0 3.5 0 29.8 29.8 0 0 0-10.685-22.872z" />
                <path
                  d="M64 40.143A23.857 23.857 0 1 0 87.857 64 23.884 23.884 0 0 0 64 40.143zm0 44.215A20.357 20.357 0 1 1 84.357 64 20.38 20.38 0 0 1 64 84.357z" />
                <path
                  d="M122.55 54.882a1.751 1.751 0 0 0-1.73-1.482h-16.64a41.166 41.166 0 0 0-4.28-10.319l11.763-11.764a1.749 1.749 0 0 0 .176-2.27 59.2 59.2 0 0 0-12.887-12.89 1.753 1.753 0 0 0-2.27.176L84.919 28.1A41.166 41.166 0 0 0 74.6 23.819V7.18a1.751 1.751 0 0 0-1.482-1.73 59.968 59.968 0 0 0-18.236 0A1.751 1.751 0 0 0 53.4 7.18v16.64a41.166 41.166 0 0 0-10.319 4.28L31.317 16.333a1.751 1.751 0 0 0-2.27-.176 59.2 59.2 0 0 0-12.89 12.891 1.749 1.749 0 0 0 .176 2.27L28.1 43.081A41.166 41.166 0 0 0 23.819 53.4H7.18a1.751 1.751 0 0 0-1.73 1.482 59.72 59.72 0 0 0 0 18.236A1.751 1.751 0 0 0 7.18 74.6h16.64a41.166 41.166 0 0 0 4.28 10.319L16.333 96.683a1.749 1.749 0 0 0-.176 2.27 59.2 59.2 0 0 0 12.891 12.891 1.75 1.75 0 0 0 2.27-.176L43.081 99.9a41.166 41.166 0 0 0 10.319 4.281v16.64a1.751 1.751 0 0 0 1.481 1.729 59.72 59.72 0 0 0 18.236 0 1.751 1.751 0 0 0 1.483-1.73v-16.64a41.166 41.166 0 0 0 10.319-4.28l11.764 11.763a1.751 1.751 0 0 0 2.27.176 59.2 59.2 0 0 0 12.891-12.891 1.749 1.749 0 0 0-.176-2.27L99.9 84.919a41.166 41.166 0 0 0 4.281-10.319h16.64a1.751 1.751 0 0 0 1.729-1.481 59.72 59.72 0 0 0 0-18.236zM119.3 71.1h-16.492a1.751 1.751 0 0 0-1.707 1.362 37.675 37.675 0 0 1-4.886 11.79 1.751 1.751 0 0 0 .243 2.171l11.66 11.66a55.657 55.657 0 0 1-10.035 10.035l-11.66-11.66a1.752 1.752 0 0 0-2.171-.243 37.675 37.675 0 0 1-11.79 4.886 1.751 1.751 0 0 0-1.362 1.707V119.3a56.632 56.632 0 0 1-14.2 0v-16.492a1.751 1.751 0 0 0-1.362-1.707 37.675 37.675 0 0 1-11.79-4.886 1.749 1.749 0 0 0-2.171.243l-11.66 11.66a55.657 55.657 0 0 1-10.035-10.035l11.66-11.66a1.751 1.751 0 0 0 .243-2.171 37.675 37.675 0 0 1-4.885-11.79 1.751 1.751 0 0 0-1.708-1.362H8.7a56.327 56.327 0 0 1 0-14.2h16.492a1.751 1.751 0 0 0 1.708-1.362 37.675 37.675 0 0 1 4.886-11.79 1.751 1.751 0 0 0-.243-2.171l-11.66-11.66a55.657 55.657 0 0 1 10.034-10.035l11.66 11.66a1.75 1.75 0 0 0 2.171.243 37.675 37.675 0 0 1 11.79-4.885 1.751 1.751 0 0 0 1.362-1.708V8.7a56.632 56.632 0 0 1 14.2 0v16.492a1.751 1.751 0 0 0 1.362 1.708 37.675 37.675 0 0 1 11.79 4.886 1.752 1.752 0 0 0 2.171-.243l11.66-11.66a55.657 55.657 0 0 1 10.035 10.035l-11.66 11.66a1.751 1.751 0 0 0-.243 2.171 37.675 37.675 0 0 1 4.886 11.79 1.751 1.751 0 0 0 1.707 1.362H119.3a56.327 56.327 0 0 1 0 14.2z" />
              </svg>
            </div>
            <li class="p-[5px]">Settings</li>
          </div>
          <div @click="goSettingsCompany" v-if="uComValue" class="btns mt-[-5px] flex items-center p-[10px]">
            <div class="icon-settings w-[24px]">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  d="M83.172 41.128a1.75 1.75 0 0 0-2.25 2.68A26.32 26.32 0 0 1 90.357 64a1.75 1.75 0 0 0 3.5 0 29.8 29.8 0 0 0-10.685-22.872z" />
                <path
                  d="M64 40.143A23.857 23.857 0 1 0 87.857 64 23.884 23.884 0 0 0 64 40.143zm0 44.215A20.357 20.357 0 1 1 84.357 64 20.38 20.38 0 0 1 64 84.357z" />
                <path
                  d="M122.55 54.882a1.751 1.751 0 0 0-1.73-1.482h-16.64a41.166 41.166 0 0 0-4.28-10.319l11.763-11.764a1.749 1.749 0 0 0 .176-2.27 59.2 59.2 0 0 0-12.887-12.89 1.753 1.753 0 0 0-2.27.176L84.919 28.1A41.166 41.166 0 0 0 74.6 23.819V7.18a1.751 1.751 0 0 0-1.482-1.73 59.968 59.968 0 0 0-18.236 0A1.751 1.751 0 0 0 53.4 7.18v16.64a41.166 41.166 0 0 0-10.319 4.28L31.317 16.333a1.751 1.751 0 0 0-2.27-.176 59.2 59.2 0 0 0-12.89 12.891 1.749 1.749 0 0 0 .176 2.27L28.1 43.081A41.166 41.166 0 0 0 23.819 53.4H7.18a1.751 1.751 0 0 0-1.73 1.482 59.72 59.72 0 0 0 0 18.236A1.751 1.751 0 0 0 7.18 74.6h16.64a41.166 41.166 0 0 0 4.28 10.319L16.333 96.683a1.749 1.749 0 0 0-.176 2.27 59.2 59.2 0 0 0 12.891 12.891 1.75 1.75 0 0 0 2.27-.176L43.081 99.9a41.166 41.166 0 0 0 10.319 4.281v16.64a1.751 1.751 0 0 0 1.481 1.729 59.72 59.72 0 0 0 18.236 0 1.751 1.751 0 0 0 1.483-1.73v-16.64a41.166 41.166 0 0 0 10.319-4.28l11.764 11.763a1.751 1.751 0 0 0 2.27.176 59.2 59.2 0 0 0 12.891-12.891 1.749 1.749 0 0 0-.176-2.27L99.9 84.919a41.166 41.166 0 0 0 4.281-10.319h16.64a1.751 1.751 0 0 0 1.729-1.481 59.72 59.72 0 0 0 0-18.236zM119.3 71.1h-16.492a1.751 1.751 0 0 0-1.707 1.362 37.675 37.675 0 0 1-4.886 11.79 1.751 1.751 0 0 0 .243 2.171l11.66 11.66a55.657 55.657 0 0 1-10.035 10.035l-11.66-11.66a1.752 1.752 0 0 0-2.171-.243 37.675 37.675 0 0 1-11.79 4.886 1.751 1.751 0 0 0-1.362 1.707V119.3a56.632 56.632 0 0 1-14.2 0v-16.492a1.751 1.751 0 0 0-1.362-1.707 37.675 37.675 0 0 1-11.79-4.886 1.749 1.749 0 0 0-2.171.243l-11.66 11.66a55.657 55.657 0 0 1-10.035-10.035l11.66-11.66a1.751 1.751 0 0 0 .243-2.171 37.675 37.675 0 0 1-4.885-11.79 1.751 1.751 0 0 0-1.708-1.362H8.7a56.327 56.327 0 0 1 0-14.2h16.492a1.751 1.751 0 0 0 1.708-1.362 37.675 37.675 0 0 1 4.886-11.79 1.751 1.751 0 0 0-.243-2.171l-11.66-11.66a55.657 55.657 0 0 1 10.034-10.035l11.66 11.66a1.75 1.75 0 0 0 2.171.243 37.675 37.675 0 0 1 11.79-4.885 1.751 1.751 0 0 0 1.362-1.708V8.7a56.632 56.632 0 0 1 14.2 0v16.492a1.751 1.751 0 0 0 1.362 1.708 37.675 37.675 0 0 1 11.79 4.886 1.752 1.752 0 0 0 2.171-.243l11.66-11.66a55.657 55.657 0 0 1 10.035 10.035l-11.66 11.66a1.751 1.751 0 0 0-.243 2.171 37.675 37.675 0 0 1 4.886 11.79 1.751 1.751 0 0 0 1.707 1.362H119.3a56.327 56.327 0 0 1 0 14.2z" />
              </svg>
            </div>
            <li class="">My company</li>
          </div>
          <div @click="logOut" class="btns flex items-center p-[10px] mt-[-20px]">
            <div class="icon-settings w-[24px]">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  d="M13.076 97.083a1.75 1.75 0 0 0 1.75-1.75V66.667a1.75 1.75 0 0 0-3.5 0v28.666a1.75 1.75 0 0 0 1.75 1.75zM122.38 64.97c.027-.041.046-.085.069-.128a1.037 1.037 0 0 0 .146-.348c.015-.051.035-.1.045-.152a1.755 1.755 0 0 0 0-.685c-.01-.053-.03-.1-.045-.152a1.733 1.733 0 0 0-.054-.174 1.692 1.692 0 0 0-.092-.174c-.023-.042-.042-.086-.069-.127a1.75 1.75 0 0 0-.22-.269l-12.509-12.509a1.75 1.75 0 0 0-2.475 2.475l9.524 9.523H63.424a1.75 1.75 0 0 0 0 3.5H116.7l-9.523 9.523a1.75 1.75 0 1 0 2.475 2.475l12.508-12.509a1.75 1.75 0 0 0 .22-.269z" />
                <path
                  d="M95.424 72.25a1.75 1.75 0 0 0-1.75 1.75v36.9H48.633V17.1h45.041V54a1.75 1.75 0 1 0 3.5 0V15.35a1.75 1.75 0 0 0-1.75-1.75H48.633V6.5a1.75 1.75 0 0 0-2.461-1.6L6.365 22.593a1.751 1.751 0 0 0-1.039 1.6v79.615a1.751 1.751 0 0 0 1.039 1.6L46.172 123.1a1.75 1.75 0 0 0 2.461-1.6v-7.1h46.791a1.75 1.75 0 0 0 1.75-1.75V74a1.75 1.75 0 0 0-1.75-1.75zm-50.291 46.558L8.826 102.67V25.33L45.133 9.192z" />
              </svg>
            </div>
            <li class="p-[5px]">Log out</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";
import { useActiveTab4 } from "@/store/activeTab4Component.js";  // Импорт стора useActiveTab4

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();
    const hasToken = localStorage.getItem("r-tok") !== null;

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const currentLanguage = computed(() => i18nStore.currentLanguage);
    const updateTranslate = () => i18nStore.updateTranslation();

    const uComValue = computed(() => localStorage.getItem("u-com") === "true");


    const activeTab4Store = useActiveTab4();
    const computedIsOpen = computed(() => activeTab4Store.computedIsOpen);

    const handleMenuClick = () => {
      activeTab4Store.toggleMenu();
    };
    return {
      hasToken,
      isDarkMode,
      toggleDarkMode,
      currentLanguage,
      updateTranslate,
      uComValue,
      computedIsOpen,
      handleMenuClick,
    };
  },
  data() {
    return {
      activeTab4Store: useActiveTab4(),
      isProfileSetting: false,
      userName: "Noname",
      companyName: "No Company",
    };
  },
  methods: {
    gotoLogin() {
      this.activeTab4Store.toggleMenu()
      this.$router.push({ name: "login" });
    },

    goSettings() {
      this.activeTab4Store.toggleMenu()
      this.$router.push({ name: "profile-settings" });
    },
    goSettingsCompany() {
      this.activeTab4Store.toggleMenu()
      this.$router.push({ name: "company-settings" });

    },
    logOut() {
      this.activeTab4Store.toggleMenu()
      localStorage.removeItem("r-tok");
      localStorage.removeItem("r-tok");
      localStorage.removeItem("hasReloaded");
      localStorage.removeItem("logged-in");
      localStorage.removeItem("com-i");
      localStorage.removeItem("u-e");
      localStorage.removeItem("com-city");
      localStorage.removeItem("name");
      localStorage.removeItem("u-ln");
      localStorage.removeItem("com-country");
      localStorage.removeItem("com-prefix");
      localStorage.removeItem("u-d-s");
      localStorage.removeItem("com-radius");
      localStorage.removeItem("com-e");
      localStorage.removeItem("u-p");
      localStorage.removeItem("com-street");
      localStorage.removeItem("u-phone");
      localStorage.removeItem("u-fn");
      localStorage.removeItem("u-d-nr");
      localStorage.removeItem("u-i");
      localStorage.removeItem("u-g");
      localStorage.removeItem("com-numcode");
      localStorage.removeItem("com-number");
      localStorage.removeItem("u-numcode");
      localStorage.removeItem("u-code");
      localStorage.removeItem("com-nr");
      localStorage.removeItem("com-zip");
      localStorage.removeItem("com-name");
      localStorage.removeItem("u-pre");
      localStorage.removeItem("u-d-co");
      localStorage.removeItem("u-d-c");
      localStorage.removeItem("u-d-z");
      localStorage.setItem("logged-in", false);
      localStorage.setItem("hasReloaded", true);
      localStorage.setItem("u-com", false);
      window.location.reload();
    },
    openProfileDropdown() {
      this.isProfileSetting = !this.isProfileSetting;
      document.addEventListener(
        "click",
        this.closeProfileDropdownOnClickOutside
      );
    },
    closeProfileDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".settings");
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        this.isProfileSetting = false;
        document.removeEventListener(
          "click",
          this.closeProfileDropdownOnClickOutside
        );
      }
    },
  },
  created() {
    this.userName = localStorage.getItem("u-fn");
    this.companyName = localStorage.getItem("com-name");

    if (this.userName === 'null') {
      this.userName = "Noname";
    }

    if (this.companyName === null) {
      this.companyName = "Noname";
    }
  },
});
</script>
<style scoped>
.btn {
  border: 1px solid #444444;
}

.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}

.dropdown-options {
  position: absolute;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-options li {
  padding: 0.5em;
  cursor: pointer;
}

.dropdown-options li:hover {
  background: #fff;
}
</style>
