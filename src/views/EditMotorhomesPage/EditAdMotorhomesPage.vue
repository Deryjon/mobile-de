<template>
  <v-container class="max-w-[1140px]">
    <PathLink>{{ $t("message.filter_page.editmotorhome") }}</PathLink>
    <div class="sections mt-[20px]">
      <EditSection />
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import EditSection from "./sections/EditMotorhomesSection.vue";

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
