<template>
  <div
    class="hidden-menu fixed right-0 top-0 w-full h-full p-5 flex flex-col "
    :class="{ 'bg-[#526d82]': isDarkMode, 'bg-[#F8FCFF]': !isDarkMode }"
  >
    <div class="wrapper ">
      <div class="head flex items-center justify-between pt-3">
        <button
          class="close-btn w-7 h-7 flex justify-center items-center order-3"
          @click="closeMenu"
        >
          <img src="../../../assets/images/times.svg" alt="times-icon" />
        </button>
        <HeaderLogo  @click="closeMenu" class="order-2" />
      </div>

      <div class="body flex flex-col justify-center">
        <HeaderSwitcherTheme
          class=""
          @click="closeMenu"
        />
        <HeaderActions class="w-[180px]" />
        <HeaderContact
          class="ml-[23px]"
          @click="closeMenu"
        />
        <HeaderLogout
          class="ml-[23px] mt-[10px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderActions from "./HeaderActions.vue";
import HeaderSwitcherTheme from "./HeaderSwitcherTheme.vue";
import { useDarkModeStore } from "@/store/dark-mode.js";
import HeaderContact from "./HeaderContact.vue";
import HeaderLogout from "./HeaderLogout.vue";
import { useActiveTab4 } from "@/store/activeTab4Component.js";
import { computed } from "vue";

export default {
  components: { HeaderLogo, HeaderActions, HeaderSwitcherTheme, HeaderContact, HeaderLogout },
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const activeTab4Store = useActiveTab4();
    const computedIsOpen = computed(() => activeTab4Store.computedIsOpen);

    const closeMenu = () => {
      activeTab4Store.toggleMenu(); // Вызываем метод toggleMenu из стора при закрытии меню
    };

    return {
      isDarkMode,
      toggleDarkMode,
      closeMenu,
    };
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  background: #ffffff;    
}
</style>
