<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<InteriorFilterSection/>
	<OfferDetailsSection/>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import InteriorFilterSection from "./sections/InteriorFilterSection.vue";
import OfferDetailsSection from "./sections/OfferDetailsSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";

export default {
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, InteriorFilterSection, OfferDetailsSection },
};
</script>
<style scoped></style>
