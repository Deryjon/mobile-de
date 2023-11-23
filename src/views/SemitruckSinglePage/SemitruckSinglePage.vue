<template>
  <v-container class="max-w-[1140px]">
    <PathLink>Semitruck Single</PathLink>
    <div class="sections">
      <YourSetAd />
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourSetAd from "./sections/YourSetAd.vue";

export default {
  components: {
    PathLink,
    YourSetAd
  },
};
</script>

<style>

</style>
