<template>
  <main >
    <v-container class="max-w-[1110px] h-[100vh]">
      <div
        class="div rounded-lg bg-[#AFE1AF] h-[300px] w-[600px] mt-[200px] mx-auto p-10 flex flex-col gap-[20px] justify-center items-center"
      >
        <p class="mx-auto text-black w-[300px] text-center">
          {{ $t("message.payment.completed") }}
        </p>
       
        <button
          class="bg-[#008080] px-[20px] py-[10px] text-white"
          @click="goHome"
        >
          {{ $t("message.payment.back") }}
        </button>
      </div>
    </v-container>
  </main>
</template>
<script>
import http from "../../../axios.config";
export default {
  data() {
    return {
      id: localStorage.getItem("u-i"),
      balance: localStorage.getItem("price-pay"),
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    fetchBalans() {
      http
        .put("/user/edit/balance", {
          id: parseInt(this.id),
          balance: parseInt(this.balance),
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.fetchBalans();
  },
};
</script>
<style scoped>
.div {
  border: 3px rgb(0, 94, 0) solid;
}
</style>
