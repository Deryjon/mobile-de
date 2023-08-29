<template>
  <button
	v-if="!hasToken"
    class="btn bg-transparent dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[150px] h-[35px] outline-none bg-white rounded-[10px] py-[8px] px-[24px] font-normal pr-[30px] text-[10px] lg:text-[11px]"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
    @click="gotoLogin"
  >
    {{ $t("message.header.login") }}
  </button>
  <div v-else class="profile-icon w-[30px] mt-[20px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="profile">
      <g data-name="Layer 2">
        <circle cx="16" cy="6.96" r="6"></circle>
        <path
          d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
        ></path>
      </g>
    </svg>
  </div>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";
export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();
		const hasToken = localStorage.getItem("token-registere") !== null;


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
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
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
</style>
