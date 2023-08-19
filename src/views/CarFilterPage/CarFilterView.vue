<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";

export default {
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection },
};
</script>
<style scoped></style>
