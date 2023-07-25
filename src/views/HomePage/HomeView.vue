<template>
  <main>
    <HeaderLayoutVue />
    <SearchSection />
  </main>
</template>

<script>
import SearchSection from "./sections/SearchSection.vue";
import HeaderLayoutVue from "../..//layouts/HeaderLayout/HeaderLayout.vue";
export default {
  created() {
  
  },
  components: {
    HeaderLayoutVue,
    SearchSection,
  },
};

// Директива v-focus
export const focusDirective = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
};
</script>

<style scoped></style>
