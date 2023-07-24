<template>
  <main>
    <HeaderLayoutVue />
    <section>
      <v-container> 
				<SearchComponent/>
				
			</v-container>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import SearchComponent from "./components/SearchComponent.vue";

import HeaderLayoutVue from "../..//layouts/HeaderLayout/HeaderLayout.vue";
export default defineComponent({
  created() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    HeaderLayoutVue,
    SearchComponent
},
});

// Директива v-focus
export const focusDirective = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
};
</script>

<style scoped></style>
