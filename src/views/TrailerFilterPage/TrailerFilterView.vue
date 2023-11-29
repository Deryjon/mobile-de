<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<!-- <ExteriorFilterSection/> -->
	<OfferDetailsSection/>
	<v-container class="max-w-[1140px]">

		<FilterBtn @click="goTrailerList" class="ml-auto">
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
import { useTrailerStore } from "../../store/trailerDataStore";
export default {
  data() {
		return {
			count: "",
			trailerStore: useTrailerStore(),
		};
	},
	methods: {
		goTrailerList() {
			this.$router.push({ name: "trailer-list" })
		}
	},
	watch:{
		"trailerStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
	},
	mounted() {
		this.count = this.trailerStore.count
	},
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
