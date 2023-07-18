<template>
  <div class="header-logo flex items-center w-[200px] h-[70px]">
    <div class="logo lg:ml-0 w-[80px] lg:w-[80px] h-[45px] lg:h-[54px] mb-3">
      <img src="../../../assets/images/logo.png" alt="header-logo" />
    </div>
    <p class="text-[26px] font-extrabold pt-6 title" :class="{ 'dark': isDarkMode }">SellCenter</p>
  </div>
</template>

<script>
import { useDarkModeStore } from '@/store/index.js';
import { defineComponent, computed } from 'vue';

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
/* Dark mode styles */
.dark .bg-gray-600 {
  background-color: #4a5568;
}

.dark .text-gray-700 {
  color: #d1d5db;
}

.dark .text-white {
  color: #ffffff;
}

/* Light mode styles */
.light .bg-gray-400 {
  background-color: #edf2f7;
}

.light .text-gray-700 {
  color: #4a5568;
}

/* Other styles */
.font-extrabold {
  font-weight: 800;
}
.title{
	font-family: "Roman";
}
</style>
