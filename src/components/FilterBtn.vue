<template>
  <div
    class="resultast_div flex items-center gap-[10px] lg:gap-[5px] w-full lg:w-[160px] xl:w-[170px] h-[35px] bg-[#e04b00]  rounded-[8px] mt-[30px] lg:mt-[20px]"
  >
    <svg
      class="icon ml-[45px] sm:ml-[90px] lg:ml-[3px] xl:ml-[15px]"
      viewBox="0 0 24 24"
      fill="none"
      width="16"
      height="16"
    >
      <path
        d="M16.215 18.336a9 9 0 112.121-2.121L23.121 21 21 23.121l-4.785-4.785zM11 17.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"
        fill="#fff"
      ></path>
    </svg>

    <p class="text-white text-[18px] lg:text-[16px]">1000</p>
    <h1 class="text-white text-[18px] lg:text-[16px]">
      {{ $t("message.results.result") }}
    </h1>
  </div>
</template>
<script>

export default {
}
</script>
