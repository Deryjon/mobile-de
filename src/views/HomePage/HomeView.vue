<template>
  <main class="">
		<SwiperSection/>
    <SearchSection />
		<RentSection/>
		<MagazinSection/>
  </main>
</template>

<script>
import SearchSection from "./sections/SearchSection.vue";
import HeaderLayoutVue from "../../layouts/HeaderLayout/HeaderLayout.vue";
import RentSection from "./sections/RentSection.vue";
import SwiperSection from "./sections/SwiperSection.vue";
import MagazinSection from "./sections/MagazinSection.vue";
export default {
  components: {
    HeaderLayoutVue,
    SearchSection,
    RentSection,
    SwiperSection,
		MagazinSection,
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
