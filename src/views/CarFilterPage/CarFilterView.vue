<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<InteriorFilterSection/>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import InteriorFilterSection from "./sections/InteriorFilterSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";

export default {
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, InteriorFilterSection },
};
</script>
<style scoped></style>
