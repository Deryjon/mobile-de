<template>
	<div class="action lg:hidden">
		<button
    class="burger-btn w-9 h-9 mt-3  flex justify-center items-center lg:hidden order-3"
    @click="$emit('openMenu')"
  >
    <img src="../../../assets/images/burger.svg" alt="burger-btn" />
  </button>
	</div>
</template>
<script>
export default{
	
}
</script>