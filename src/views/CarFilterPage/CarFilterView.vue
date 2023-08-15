<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";

export default {
  components: { BasicFilterSection, TechnicalFilterSection },
};
</script>
<style scoped></style>
