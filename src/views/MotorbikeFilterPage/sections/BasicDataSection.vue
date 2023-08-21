<template>
  <section class="basic-filter mt-[200px]">
    <v-container>
      <PathLink>My New Motorbike </PathLink>

      <FilterTitle>Detailsuche: Pkw - neu oder gebraycht</FilterTitle>
      <FilterBtn />	

    </v-container>
  </section>
</template>
<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
export default {
  components: { PathLink, FilterTitle, FilterBtn },
};
</script>
<style scoped></style>

