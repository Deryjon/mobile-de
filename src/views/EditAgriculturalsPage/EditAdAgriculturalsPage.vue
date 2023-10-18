<template>
  <v-container class="w-[1120px]">
    <PathLink>Edit Ad</PathLink>
    <div class="sections mt-[20px]">
      <EditSection />
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import EditSection from "./sections/EditAgriculturalsSection.vue";

export default {
  components: {
    PathLink,
    EditSection
  },
  created() {
    // После успешной аутентификации

  

// Проверка, что значение существует и строго равно "false"
const isLoggedIn = localStorage.getItem("logged-in");
if (isLoggedIn === "false") {
  // Перенаправление на страницу "home"
  this.$router.push({ name: "home" });
}

  }
};
</script>

<style></style>
