<template>
  <main class="">
    <section class="h-[100vh] ">

      <v-container class="max-w-[1110px]  ">
        <div
          class="div border-red-400 bg-red-200 h-[300px] p-10 flex flex-col gap-[20px] justify-center items-center mt-[200px] "
        >
          <p class="mx-auto text-red-600 w-[300px] text-center">
            {{ $t("message.payment.completed") }}
          </p>
          <button
            class="bg-red-500 px-[20px] py-[10px] text-white"
            @click="goHome"
          >
            {{ $t("message.payment.back") }}
          </button>
        </div>
      </v-container>
    </section>
  </main>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style>
.div {
  border: 3px rgb(255, 2, 2) solid;
}
</style>
