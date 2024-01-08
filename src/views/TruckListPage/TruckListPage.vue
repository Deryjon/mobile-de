<template>
  <v-container class="max-w-[1140px]">
    <PathLink>{{ $t("message.list_page.truck") }}</PathLink>
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
