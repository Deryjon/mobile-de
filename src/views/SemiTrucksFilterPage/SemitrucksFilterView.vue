<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<OfferDetailsSection/>
	<v-container class="max-w-[1140px]">

		<FilterBtn class="ml-auto" @click="goSemiTruck">
        <p class="text-white text-[18px] lg:text-[16px]">
          {{ this.count }} {{ $t("message.results.result") }}
        </p>
      </FilterBtn>
	</v-container>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import OfferDetailsSection from "./sections/OfferDetailsSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";
import FilterBtn from "../../components/FilterBtn.vue";
import { useSemiTruckStore } from "../../store/semitruckDataStore";
export default {
	data() {
	  return {
		semitruckStore: useSemiTruckStore(),
		count: "",
	  };
	},
	methods:{
		goSemiTruck(){
			this.$router.push({name: "semitruck-list"})
		}
	},
	watch: {
	  "semitruckStore.count": function (newCount, oldCount) {
		this.count = newCount;
	  },
	},
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
