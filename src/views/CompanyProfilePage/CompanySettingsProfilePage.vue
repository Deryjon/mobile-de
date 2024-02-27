<template>
  <v-container class="max-w-[1160px]">
    <PathLink>Settings</PathLink>
    <div class="sections">
      <YourAccount />
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";
import http from "../../axios.config";
export default {
  data() {
    return {
      userId: localStorage.getItem("u-i"),
    };
  },
  methods: {
  },
  components: {
    PathLink,
    YourAccount,
  },
  created() {
    this.userId = localStorage.getItem("u-i");
    
    const isLoggedIn = localStorage.getItem("logged-in");
    if (localStorage.getItem("com-i") == null) {
        localStorage.setItem("com-i", "false"); 
    }
    
      // this.getDataCompany();
}



};
</script>

<style></style>