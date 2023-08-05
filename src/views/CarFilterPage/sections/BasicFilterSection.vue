<template>
  <section class="basic-filter mt-[200px]">
    <v-container>
      <PathLink>My New Car </PathLink>
			<FilterTitle>Detailsuche: Pkw - neu oder gebraycht</FilterTitle>
			<FilterBtn class="ml-auto"/>
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
