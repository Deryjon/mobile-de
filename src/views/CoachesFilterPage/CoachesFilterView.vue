<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<OfferDetailsSection/>
	<v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">

		<FilterBtn class="ml-auto" />
	</v-container>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import OfferDetailsSection from "./sections/OfferDetailsSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";
import FilterBtn from "../../components/FilterBtn.vue";

export default {
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
