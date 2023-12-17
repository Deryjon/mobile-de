<template>
  <v-container class="max-w-[1140px]">
    <span></span>
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
    YourAccount,
  },
  created() {
    const isLoggedIn = localStorage.getItem("logged-in");
    if (isLoggedIn === "false") {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style></style>
