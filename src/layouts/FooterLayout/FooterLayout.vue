<template>
  <footer
    class=""
    :class="{ 'bg-[#93b7c2]': isDarkMode, 'bg-[#e8f4f8]': !isDarkMode }"
  >
    <v-container class="max-w-[1140px] lg:flex justify-between items-center">
      <div class="actions flex flex-col lg:gap-[20px]">
        <FooterSocialLinks class="hidden lg:flex"/>
				<FooterActions class="hidden lg:flex "/>
        <FooterSwitcherTheme class="hidden lg:flex" />
      </div>
			<FooterCompanyLinks />
      <FooterSocialLinks class="lg:hidden flex justify-end"/>

    </v-container>
  </footer>
</template>
<script>
import FooterActions from "../FooterLayout/components/FooterActions.vue";
import FooterCompanyLinks from "../FooterLayout//components/FooterCompanyLinks.vue";
import FooterSwitcherTheme from "../FooterLayout//components/FooterSwitcherTheme.vue";
import { useDarkModeStore } from "@/store/dark-mode.js";
import { computed } from "vue";
import FooterSocialLinks from "./components/FooterSocialLinks.vue";
export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    FooterActions,
    FooterSwitcherTheme,
    FooterSocialLinks,
    FooterCompanyLinks,
},
};
</script>
<style scoped>
footer {
  border-bottom: 1px solid #f39201;
}
.header-scrolled {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}
</style>
