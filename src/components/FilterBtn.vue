<template>
  <div

    class="resultast_div flex items-center px-[50px] lg:px-[10px] gap-[10px] lg:gap-[5px] w-[300px] lg:w-[150px] xl:w-[170px] h-[35px] bg-[#e04b00]  rounded-[8px] mt-[30px] lg:mt-[35px] cursor-pointer
		"
		>


    <svg
      class="icon ml-[45px]  lg:ml-[3px] xl:ml-[18px]"
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

    <slot></slot>
  </div>
</template>
<script>

export default {
	methods:{
		// goCarList(){
		// 	this.$router.push({ name: "car-list" });
		// }
	}
}
</script>
