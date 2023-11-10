<template>
  <div class="socials ">
		<h3 class="font-bold ">Company</h3>
		<ul class=" flex flex-col ">
		<router-link class="text text-[14px]" :to="{ name: 'about-us' }">About</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'news' }">Newsroom</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'home' }">Careers</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'home' }">Adversting</router-link>
			<router-link class="text text-[14px]" :to="{ name: 'contact' }">Contact</router-link>
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
	}
};
</script>
<style scoped></style>
