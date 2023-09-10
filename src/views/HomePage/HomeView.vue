<template>
  <main class="">
		<SwiperSection/>
    <SearchSection />
		<RentSection/>
		<MagazinSection/>
		<FinanceSection/>
  </main>
</template>

<script>
import SearchSection from "./sections/SearchSection.vue";
import HeaderLayoutVue from "../../layouts/HeaderLayout/HeaderLayout.vue";
import RentSection from "./sections/RentSection.vue";
import SwiperSection from "./sections/SwiperSection.vue";
import MagazinSection from "./sections/MagazinSection.vue";
import FinanceSection from "./sections/FinanceSection.vue";
export default {
  components: {
    HeaderLayoutVue,
    SearchSection,
    RentSection,
    SwiperSection,
    MagazinSection,
    FinanceSection
},
created() {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded && localStorage.getItem('r-tok')) { 
      location.reload();
      localStorage.setItem('hasReloaded', 'true');
    }
}
}	


</script>

<style scoped></style>
