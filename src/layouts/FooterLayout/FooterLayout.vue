<template>
  <footer
    class=""
    :class="{ 'bg-[#93b7c2]': isDarkMode, 'bg-[#e8f4f8]': !isDarkMode }"
  >
    <v-container class="w-[1240]">
      <div class="actions flex h-[50px] items-center gap-[10px]">
				<FooterActions class="hidden lg:flex mx-[150px]"/>
        
        <HeaderSwitcherTheme class="mt-[2	0px] hidden lg:flex" />
        <HeaderContact class="mb-[15px] hidden lg:flex" />
      </div>
    </v-container>
  </footer>
</template>
<script>
import FooterActions from "../FooterLayout/components/FooterActions.vue";
import HeaderSwitcherTheme from "../HeaderLayout/components/HeaderSwitcherTheme.vue";
import HeaderContact from "../HeaderLayout/components/HeaderContact.vue";
import { useDarkModeStore } from "@/store/dark-mode.js";
import { computed } from "vue";
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
    HeaderSwitcherTheme,
    HeaderContact,
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
