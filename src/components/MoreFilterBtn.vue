<template>
  <button
    class=""
    :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode }"
    @click="redirectToLink()"
  >
    <slot></slot>
  </button>
</template>

<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);

    return {
      isDarkMode,
    };
  },
  methods: {
    redirectToLink() {
      this.$router.push(this.$attrs.to);
    },
  },
};
</script>
