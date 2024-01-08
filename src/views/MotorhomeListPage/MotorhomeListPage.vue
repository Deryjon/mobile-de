<template>
  <v-container class="max-w-[1120px]">
    <PathLink>{{ $t("message.list_page.motorhome") }}</PathLink>
    <div class="sections">
      <YourAccount />	
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";

export default {
  components: {
    PathLink,
    YourAccount
  },
};
</script>

<style>

</style>
