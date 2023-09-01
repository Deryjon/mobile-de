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
created() {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded && this.$route.name === 'home') { // Замените 'home' на имя вашего маршрута для главной страницы
      location.reload();
      localStorage.setItem('hasReloaded', 'true');
    }
}
}	


</script>

<style scoped></style>
