<template>
  <v-container class="max-w-[1120px]">
    <div class="flex justify-between items-center">

      <PathLink class="w-[200px] xl:w-[300px]">{{ $t("message.list_page.motorhome") }}</PathLink>
<VansFilterBtn/>
    </div>

    <div class="sections">
      <YourAccount />	
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";
import VansFilterBtn from "@/components/VansFilterBtn.vue"
export default {
  components: {
    PathLink,
    YourAccount,
    VansFilterBtn
  },
};
</script>

<style>

</style>
