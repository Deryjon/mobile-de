<template>
  <button
    class="btn outline-none rounded-[10px] w-[130px] lg:w-[120px] px-[10px] py-[6px] lg:py-[10px] lg:px-[5px] text-xs font-normal	lg:mt-[25px]"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
    @click="gotoLogin"
  >
  {{ $t('message.header.login') }}
  </button>
</template>
<script>
import { useDarkModeStore } from "@/store/index.js";
import { useI18nStore } from "../../../store/i18n.js";
import { defineComponent, computed } from "vue";
export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();
    const i18nStore = useI18nStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const currentLanguage = computed(() => i18nStore.currentLanguage);
    const updateTranslate = () => i18nStore.updateTranslation();

    return {
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
  border: 1px solid #7b7c80;
}
.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}
</style>
