<template>
  <v-container class="max-w-[1140px]">
    <div class="flex justify-between items-center">
      <PathLink>{{ $t("message.list_page.forklift") }}</PathLink>
      <FilterAllBtn @click="goTruckFilter"/>

    </div>
    <div class="sections">
      <YourAccount />	
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";
import FilterAllBtn from "@/components/FilterAllBtn.vue";

export default {
  components: {
    PathLink,
    YourAccount,
    FilterAllBtn
  },
  methods:{
    goTruckFilter(){
			this.$router.push({ name: "forklift-filter" });
		},
  }
};
</script>

<style>

</style>
