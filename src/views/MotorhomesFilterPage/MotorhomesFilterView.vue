<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<OfferDetailsSection/>
	<v-container class="max-w-[1140px]">

		<FilterBtn class="ml-auto" @click="goMotorhomeList">
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
import { useMotorhomeStore } from "@/store/motorhomeDataStore";
export default {
	data() {
    return {
      motorhomeStore: useMotorhomeStore(),
      count: "",
    };
  },
  mounted() {
    this.count = this.motorhomeStore.count;
  },
  methods:{
    goMotorhomeList(){
      this.$router.push({name: "motorhome-list"})
    }
  },
	watch: {
    "motorhomeStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
  },
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
