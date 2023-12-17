<template>
  <main>
    <v-container class="max-w-[1110px]">
      <div
        class="div border-green-200 h-[300px] p-10 flex flex-col gap-[20px] justify-center items-center"
      >
        <p class="mx-auto text-green-600 w-[300px] text-center">
          {{ $t("message.payment.completed") }}
        </p>
        <p>{{ $t("message.payment.text") }}</p>
        <p>{{ $t("message.payment.price") }}</p>
        <button
          class="bg-green-500 px-[20px] py-[10px] text-white"
          @click="goHome"
        >
          {{ $t("message.payment.back") }}
        </button>
      </div>
    </v-container>
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
  border: 3px rgb(0, 94, 0) solid;
}
</style>
