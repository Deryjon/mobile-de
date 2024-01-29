<template>
  <v-container class="max-w-[1120px]">
    <div class="flex justify-between items-center">

      <PathLink class="w-[250px] xl:w-[400px]">Agricultural Vehicle list</PathLink>
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
			this.$router.push({ name: "agricultural-filter" });
		},
  }
};
</script>

<style>

</style>
