<template>
  <BasicFilterSection />
  <TechnicalFilterSection />
  <ExteriorFilterSection />
  <InteriorFilterSection />
  <OfferDetailsSection />
  <v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">
    <FilterBtn class="ml-auto" @click="goCarList">
      <p class="text-white text-[18px] lg:text-[16px]">
        {{ this.count }} {{ $t("message.results.result") }}
      </p>
    </FilterBtn>
  </v-container>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import InteriorFilterSection from "./sections/InteriorFilterSection.vue";
import OfferDetailsSection from "./sections/OfferDetailsSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";
import FilterBtn from "../../components/FilterBtn.vue";
import { useCarStore } from "@/store/carDataStore";
export default {
  setup() {
    const carStore = useCarStore();
  },
  data() {
    return {
      carStore: useCarStore(),
      count: "",
    };
  },
  methods:{
    goCarList(){
      this.$router.push({name: 'car-list'})
    }
  },
  watch: {
    "carStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
  },
  components: {
    BasicFilterSection,
    TechnicalFilterSection,
    ExteriorFilterSection,
    InteriorFilterSection,
    OfferDetailsSection,
    FilterBtn,
  },
};
</script>
<style scoped></style>
