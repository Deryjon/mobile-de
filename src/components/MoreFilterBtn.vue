<template>
  <div
    class="flex items-center gap-3 justify-end m-auto mt-[10px] lg:text-[16px] text-right w-[380px] sm:w-[520px] lg:w-[850px] xl:w-[980px] cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      id="filter"
      class="w-[20px] h-[20px]"
      :class="{ black: isDarkMode }"
      :stroke="svgStrokeColor"
      :fill="svgFillColor"
    >
      <path
        d="M4 10h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2H22.91A6 6 0 0 0 11.09 8H4a1 1 0 0 0 0 2zM17 5a4 4 0 1 1-4 4A4 4 0 0 1 17 5zM44 23H36.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2H25.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM31 28a4 4 0 1 1 4-4A4 4 0 0 1 31 28zM44 38H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM17 43a4 4 0 1 1 4-4A4 4 0 0 1 17 43z"
        data-name="Layer 15"
        width="20px"
        height="20px"
        :fill="svgFillColor"
        :stroke="svgStrokeColor"
      ></path>
    </svg>
    <button
      class=""
      :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode }"
    >
      {{ $t("message.filter.btn") }}
    </button>
  </div>
</template>
<script>
import HeaderSwitcherTheme from "../layouts/HeaderLayout/components/HeaderSwitcherTheme.vue";
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
  components: { HeaderSwitcherTheme },
  computed: {
    svgStrokeColor() {
      return this.isDarkMode ? "white" : "#000";
    },
    svgFillColor() {
      return this.isDarkMode ? "white" : "#000";
    },
  },
};
</script>
