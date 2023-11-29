<template>
  <BasicDataSection />
  <EngineSection />
  <FeaturesSection />
  <OfferDetailsSection />
  <v-container class="max-w-[1140px]">

    <FilterBtn class="ml-auto" @click="goMotorbikeList">
      <p class="text-white text-[18px] lg:text-[16px]" >
        {{ this.count }} {{ $t("message.results.result") }}
      </p>
    </FilterBtn>
  </v-container>
</template>
<script>
import BasicDataSection from './sections/BasidDataSection/BasicDataSection.vue';
import EngineSection from './sections/EngineSection/EngineSection.vue';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection.vue';
import OfferDetailsSection from './sections/OfferDetailsSection/OfferDetailsSection.vue';
import FilterBtn from '../../components/FilterBtn.vue';
import { useMotorbikeStore } from "@/store/motorbikeDataStore"
export default {
  data() {
    return {
      motorbikeStore: useMotorbikeStore(),
      count: "",
    };
  },
  methods: {
    goMotorbikeList() {
      this.$router.push({ name: "motorbike-list" })
    }
  },
  watch: {
    "motorbikeStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
  },
  mounted() {
    this.count = this.motorbikeStore.count;

  },
  components: { BasicDataSection, EngineSection, FeaturesSection, OfferDetailsSection, FilterBtn }
}
</script>
<style scoped></style>