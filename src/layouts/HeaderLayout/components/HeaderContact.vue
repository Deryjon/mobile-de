<template>
  <button
    class="btn outline-none rounded-[10px] w-[130px] lg:w-[90px] px-[10px] py-[6px] lg:py-[6px] lg:px-[15px] text-base font-normal lg:mt-[25px]"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
  >
    Contact
  </button>
</template>
<script>
import { useDarkModeStore } from "@/store/index.js";
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
