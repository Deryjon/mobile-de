<template>
  <v-container class="max-w-[1120px]">
    <div class="flex justify-between items-center">

      <PathLink class="w-[200px] xl:w-[300px]">{{ $t("message.list_page.car") }}</PathLink>

      <MoreFilterBtn/>
    </div>
    <div class="sections">
      <YourAccount />	
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";
import MoreFilterBtn from "@/components/MoreFilterBtn.vue";

export default {
  components: {
    PathLink,
    YourAccount,
    MoreFilterBtn
  },
};
</script>

<style>

</style>
