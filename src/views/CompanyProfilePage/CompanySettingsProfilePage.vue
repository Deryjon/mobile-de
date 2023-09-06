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

  

const isLoggedIn = localStorage.getItem("logged-in");
const isLoggedCompany = localStorage.getItem("u-com");
if (isLoggedIn === "false" || isLoggedCompany === "false") {
  // Перенаправление на страницу "home"
  this.$router.push({ name: "home" });
}

  }
};
</script>

<style></style>
