<template>
  <v-container class="max-w-[1120px]">
    <PathLink>Van list</PathLink>
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
