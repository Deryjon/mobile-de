<template>
  <v-container class="w-[1120px]">
    <PathLink>Settings</PathLink>
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
  created() {
    // После успешной аутентификации

  

// // Проверка, что значение существует и строго равно "false"
// const isLoggedIn = localStorage.getItem("logged-in");
// if (isLoggedIn === "false") {
//   // Перенаправление на страницу "home"
//   this.$router.push({ name: "home" });
// }

  }
};
</script>

<style></style>
