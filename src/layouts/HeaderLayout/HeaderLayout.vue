<template>
  <header>
    <v-container class="flex z-50 items-center justify-between">
      <HeaderLogo />

      <div class="actions flex h-[50px] items-center gap-[10px]">
        <HeaderActions class="hidden lg:flex"/>
        <HeaderMenuAction @openMenu="toggleMenu" />
        <HeaderSwitcherTheme class="mt-[21px] hidden lg:flex" />
        <HeaderContact class="mt-[21px] hidden lg:flex" />
        <HeaderLogout class="mt-[21px] hidden lg:flex" />
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

import HeaderMenuAction from "./components/HeaderMenuAction.vue";
export default {
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
