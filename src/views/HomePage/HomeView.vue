<template>
  <main>
    <HeaderLayoutVue />
    <SearchSection />
		<RentSection/>
  </main>
</template>

<script>
import SearchSection from "./sections/SearchSection.vue";
import HeaderLayoutVue from "../../layouts/HeaderLayout/HeaderLayout.vue";
import RentSection from "./sections/RentSection.vue";
export default {
  components: {
    HeaderLayoutVue,
    SearchSection,
    RentSection
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
