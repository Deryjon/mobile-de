<template>
  <v-container class="">
    <PathLink>{{ $t("message.list_page.motorbike") }}</PathLink>
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
