<template>
  <div class="socials">
		<h3 class="font-bold ">Company</h3>
		<ul class=" flex flex-col gap-[10px]">
			<li class="text text-[14px]" ><a href="" @click="goAboutPage">About us</a></li>
			<li class="text text-[14px] "><a href="">Newsroom</a></li>
			<li class="text text-[14px]"><a href="">Careers</a></li>
			<li class="text text-[14px]"><a href="">Adversting</a></li>
			<li class="text text-[14px]"><a href="">Contact</a></li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		goAboutPage(){
			this.$router.push({name: 'about-us'})
		}
	}
};
</script>
<style scoped></style>
