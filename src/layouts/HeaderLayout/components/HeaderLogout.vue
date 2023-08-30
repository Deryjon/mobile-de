<template>
  <button
    v-if="!hasToken"
    class="btn outline-none rounded-[10px] w-[130px] lg:w-[120px] px-[10px] py-[6px] lg:py-[10px] lg:px-[12px] text-xs font-normal lg:mt-[39px]"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
    @click="gotoLogin"
  >
    {{ $t("message.header.login") }}
  </button>
  <div   v-else class="dropdown-container mt-[40px]">
    <div
      @click="openProfileDropdown"
    
      class="profile-icon w-[30px]  cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile">
        <g data-name="Layer 2">
          <circle cx="16" cy="6.96" r="6"></circle>
          <path
            d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
          ></path>
        </g>
      </svg>
			<ul v-if="isProfileSetting" class="dropdown-options w-[130px]">
				<li class="p-[5px]">settings</li>
				<li @click="" class="p-[5px]">log out</li>
			</ul>
    </div>
  </div>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";
export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();
    const hasToken = localStorage.getItem("r-tok") !== null;

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const currentLanguage = computed(() => i18nStore.currentLanguage);
    const updateTranslate = () => i18nStore.updateTranslation();

    return {
      hasToken,
      isDarkMode,
      toggleDarkMode,
      currentLanguage,
      updateTranslate,
    };
  },
  data() {
    return {
      isProfileSetting: false,
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    openProfileDropdown() {
      this.isProfileSetting = !this.isProfileSetting
    },
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
  background-color: #f0f0f0;
}
</style>
