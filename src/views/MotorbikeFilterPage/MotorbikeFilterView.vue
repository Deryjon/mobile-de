<template>
<BasicDataSection/>
<EngineSection/>
<FeaturesSection/>
<OfferDetailsSection/>
<v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">

<FilterBtn class="ml-auto" />
</v-container>
</template>
<script>
import BasicDataSection from './sections/BasidDataSection/BasicDataSection.vue';
import EngineSection from './sections/EngineSection/EngineSection.vue';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection.vue';
import OfferDetailsSection from './sections/OfferDetailsSection/OfferDetailsSection.vue';
import FilterBtn from '../../components/FilterBtn.vue';
export default{
    components: { BasicDataSection, EngineSection, FeaturesSection, OfferDetailsSection, FilterBtn }
}
</script>
<style scoped>
</style>