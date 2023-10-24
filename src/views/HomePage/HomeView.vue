<template>
  <TheLoader v-if="isLoading"/>
  <main class="" v-else>
		<SwiperSection />
    <SearchSection />
		<RentSection/>
		<MagazinSection/>
		<FinanceSection/>
		<CarModelsSection/>
		
  </main>
</template>

<script>
import SearchSection from "./sections/SearchSection.vue";
import HeaderLayoutVue from "../../layouts/HeaderLayout/HeaderLayout.vue";
import RentSection from "./sections/RentSection.vue";
import SwiperSection from "./sections/SwiperSection.vue";
import MagazinSection from "./sections/MagazinSection.vue";
import FinanceSection from "./sections/FinanceSection.vue";
import CarModelsSection from "./sections/CarModelsSection.vue";
import TheLoader from "../../components/TheLoader.vue";
export default {
  components: {
    HeaderLayoutVue,
    SearchSection,
    RentSection,
    SwiperSection,
    MagazinSection,
    FinanceSection,
    CarModelsSection,
    TheLoader
},
data(){
return{
  isLoading: true,
}
},
methods:{
  handleVariableChange(newValue) {
      this.isLoading = newValue;
    }
},
mounted() {
  this.isLoading = false;  
	if (localStorage.getItem("u-com") == null) {
      localStorage.setItem("u-com", false);
    } else if (localStorage.getItem("logged-in") == null){
      localStorage.setItem("logged-in", false);

		}

    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded && localStorage.getItem('r-tok')) { 
      location.reload();
      localStorage.setItem('hasReloaded', 'true');
    }
}
}	


</script>

<style scoped></style>
