<template>
  <main :class="{ 'bg-[rgb(59 130 246 / 0.5)]': isDarkMode, 'bg-white': !isDarkMode }" >
    <div class="">

    </div>
		<HeaderLayoutVue/>
    <RouterView />
		<FooterLayout/>
  </main>
</template>
<script>
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
import HeaderLayoutVue from './layouts/HeaderLayout/HeaderLayout.vue'
import { useDarkModeStore } from "@/store/dark-mode.js";
import { computed } from "vue";

export default{
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();


    return {
      isDarkMode,
      toggleDarkMode, 
    };
  },
	components: { HeaderLayoutVue, FooterLayout }
}
</script>
