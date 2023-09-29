<template>
  <div class="socials">
		<h3 class="font-bold ">Dealer</h3>
		<ul class=" flex flex-col gap-[10px]">
			<router-link class="text text-[14px]" :to="{ name: 'login' }">Login</router-link>
			<router-link class="text text-[14px]" :to="{ name: 'login' }">Register</router-link>
			<li class="text text-[14px]"><a href="">Our Offer</a></li>
			<li class="text text-[14px]"><a href="">Price list</a></li>
			<li class="text text-[14px]"><a href="">Terms and Conditions</a></li>
		</ul>
	</div>
</template>
<script>
export default {};
</script>
<style scoped></style>
