<template>
  <header
    class=""
    :class="{ 'bg-[#93b7c2]': isDarkMode, 'bg-[#e8f4f8]': !isDarkMode }"
  >
    <v-container class="flex z-50 items-center   " 
		:class="{  'gap-[125px] max-w-[1150px]': hasToken,
      'gap-[0px] max-w-[1220px]': !hasToken,  }"
		>
      <HeaderLogo class="" />

      <div class="actions flex h-[50px] items-center gap-[5px]">
        <HeaderActions class="hidden lg:flex" />
        <HeaderMenuAction @openMenu="toggleMenu" />
        <HeaderSwitcherTheme class="mt-[40px] hidden lg:flex" />
        <HeaderContact class="mt-[25px] hidden lg:flex" />
        <HeaderLogout class="mt-[25px] hidden lg:flex" />
        <Transition name="menu">
          <HiddenMenu class="z-50" v-if="isOpen" @closeMenu="toggleMenu" />
        </Transition>
      </div>
    </v-container>
  </header>
</template>
<script>
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderActions from "./components/HeaderActions.vue";
import HeaderSwitcherTheme from "./components/HeaderSwitcherTheme.vue";
import HeaderContact from "./components/HeaderContact.vue";
import HeaderLogout from "./components/HeaderLogout.vue";
import HiddenMenu from "./components/HiddenMenu.vue";
import { useDarkModeStore } from "@/store/dark-mode.js";
import HeaderMenuAction from "./components/HeaderMenuAction.vue";
import { computed } from "vue";
export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const hasToken = computed(() => {
      const token = localStorage.getItem("r-tok");
      return !!token;
    });
    return {
      isDarkMode,
      toggleDarkMode,
      hasToken,
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
    HeaderLogo,
    HeaderActions,
    HeaderSwitcherTheme,
    HeaderContact,
    HeaderLogout,
    HiddenMenu,
    HeaderMenuAction,
  },
};
</script>
<style>
header {
  border-bottom: 1px solid #f39201;
}
.menu-enter-active,
.menu-leave-active {
  transition: 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}
.header-scrolled {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}
</style>
