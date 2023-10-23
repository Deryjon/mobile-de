<template>
  <BasicFilterSection />
	<TechnicalFilterSection/>
	<ExteriorFilterSection/>
	<OfferDetailsSection/>
	<v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">

		<FilterBtn class="ml-auto" @click="goMotorhomeList">
        <p class="text-white text-[18px] lg:text-[16px]">
          {{ this.count }} {{ $t("message.results.result") }}
        </p>
      </FilterBtn>	</v-container>
</template>
<script>
import BasicFilterSection from "./sections/BasicFilterSection.vue";
import ExteriorFilterSection from "./sections/ExteriorFilterSection.vue";
import OfferDetailsSection from "./sections/OfferDetailsSection.vue";
import TechnicalFilterSection from "./sections/TechnicalFilterSection.vue";
import FilterBtn from "../../components/FilterBtn.vue";
import {useVehicleStore} from "../../store/agriculturalDataStore"
export default {
	data() {
		return {
			vehicleStore: useVehicleStore(),
			count: "",
		};
	},
	methods: {
		goMotorhomeList() {
			this.$router.push({ name: "agricultural-list" })
		}
	},
	watch: {
		"vehicleStore.count": function (newCount, oldCount) {
			this.count = newCount;
		},
	},
  components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
