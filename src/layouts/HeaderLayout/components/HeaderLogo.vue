<template>
  <div class="header-logo flex items-center w-[200px] h-[70px] cursor-pointer" @click="goHome()">
    <div class="logo lg:ml-0 w-[80px] lg:w-[80px] h-[45px] lg:h-[54px] ">
      <img src="../../../assets/images/logo.png" alt="header-logo" />
    </div>
    <p
      class="text-[28px] font-extrabold mt-[50px] title"
      :class="{ 'text-black' : isDarkMode, 'text-black' : !isDarkMode }"
    >
      SellCenter
    </p>
  </div>
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
	methods: {
		goHome(){
			this.$router.push({ name: "home" });		}
	}
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

.title {
  font-family: "Roman";
}

/* Text color based on dark/light mode */
.text-dark {
  /* Your dark mode text color */
  color: #ffffff;
}

.text-light {
  /* Your light mode text color */
  color: #4a5568;
}
</style>
