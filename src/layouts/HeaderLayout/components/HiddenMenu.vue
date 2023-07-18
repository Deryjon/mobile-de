<template >
  <div
    class="hidden-menu fixed right-0 top-0 w-1/2 h-full p-5 flex flex-col "
	
    :class="{ 'bg-[#526d82]': isDarkMode, 'bg-[#F8FCFF]': !isDarkMode }"
  >
    <div class="wrapper"

		>
      <div class="head flex items-center justify-between pt-3">
        <HeaderLinks />

        <HeaderLogo @click="$emit('closeMenu')" class="order-2" />
        <button
          class="close-btn w-7 h-7 flex justify-center items-center order-3"
          @click="$emit('closeMenu')"
        >
          <img src="../../../assets/images/times.svg" alt="times-icon" />
        </button>
      </div>

      <div class="body ">
        <HeaderActions class="flex flex-col" />
        <HeaderSwitcherTheme
          class="flex justify-center mt-[10px]"
          @click="$emit('closeMenu')"
        />
        <HeaderContact class="flex justify-center mx-auto mt-[10px]" 
				@click="$emit('closeMenu')"
				/>
				<HeaderLogout class="flex justify-center mx-auto mt-[10px]"
				
				/>
      </div>
    </div>
  </div>
	
</template >

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderActions from "./HeaderActions.vue";
import HeaderSwitcherTheme from "./HeaderSwitcherTheme.vue";
import { useDarkModeStore } from "@/store/index.js";
import HeaderContact from "./HeaderContact.vue";
import HeaderLogout from "./HeaderLogout.vue";
import { computed } from "vue";

export default {
  components: { HeaderLogo, HeaderActions, HeaderSwitcherTheme, HeaderContact, HeaderLogout },
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
    return {};
  },
};
</script>

<style scoped>
.btn {
  background: #ffffff;
  .img {
    background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
  }
}
</style>
