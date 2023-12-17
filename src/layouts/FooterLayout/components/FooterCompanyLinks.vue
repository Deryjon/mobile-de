<template>
  <div class="socials ">
		<h3 class="font-bold ">About Sellcenter</h3>
		<ul class=" flex flex-col ">
		<router-link class="text text-[14px]" :to="{ name: 'about-us' }">Press</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'news' }">Work at Blocket</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'contact' }">Contact Us</router-link>
		<router-link class="text text-[14px]" :to="{ name: 'home' }">Inspiration</router-link>
			<router-link class="text text-[14px]" :to="{ name: 'home' }">Tips and guides</router-link>
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
