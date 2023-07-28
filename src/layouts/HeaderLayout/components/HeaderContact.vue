<template>
  <button
    class="btn rounded-[10px] w-[130px] lg:w-[90px] xl:w-[120px] px-[10px] py-[6px] lg:py-[6px] lg:px-[15px] xl:px-[28px] text-base lg:text-[14px] font-normal  lg:mt-[25px] text-center"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
  >
    {{ $t("message.header.contact") }}
  </button>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    return {
      isDarkMode,
      toggleDarkMode,
    };
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
