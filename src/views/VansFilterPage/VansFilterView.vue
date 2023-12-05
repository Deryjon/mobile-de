<template>
	<BasicFilterSection />
	<TechnicalFilterSection />
	<ExteriorFilterSection />
	<OfferDetailsSection />
	<v-container class="max-w-[1140px]">

		<FilterBtn class="ml-auto" @click="goVanList">
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
import { useVanStore } from "@/store/vanDataStore";
export default {
	data() {
		return {
			vanStore: useVanStore(),
			count: "",
		};
	},
	watch: {
		"vanStore.count": function (newCount, oldCount) {
			this.count = newCount;
		},
	},
	methods:{
		goVanList(){
			this.$router.push({name: "van-list"})
		}
	},
mounted(){
	this.count = this.vanStore.count;

},
	components: { BasicFilterSection, TechnicalFilterSection, ExteriorFilterSection, OfferDetailsSection, FilterBtn },
};
</script>
<style scoped></style>
