<template>
	<div class=" flex flex-wrap gap-[40px]  lg:mt-[0px]">
	  <div class="socials ">
		  <h3 class="font-bold ">About Sellcenter</h3>
		  <ul class=" flex flex-col ">
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'about-us' }">Press</router-link>
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'news' }">Work at Blocket</router-link>
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'contact' }">Contact Us</router-link>
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'home' }">Inspiration</router-link>
			  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'home' }">Tips and guides</router-link>
		  </ul>
	  </div>
	  <div class="socials">
		<h3 class="font-bold">Security</h3>
		<ul class="flex flex-col ">
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'secutiry-customer' }"
			>Customer security</router-link
		  >
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'login' }"
			>Fake emails</router-link
		  >
		  <li class="text text-[10px] lg:text-[14px]"><a href="">Our Offer</a></li>
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'price-list' }"
			>Report annoying advertising</router-link
		  >
		</ul>
	  </div>
	
	  <div class="socials">
		<h3 class="font-bold">Terms</h3>
		<ul class="flex flex-col">
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'login' }"
			>Terms of Use</router-link
		  >
		  <router-link class="text text-[10px] lg:text-[14px]  " :to="{ name: 'login' }"
			>Personal data management</router-link
		  >
		
		</ul>
	  </div>
	
	
	  <div class="socials ">
		<h3 class="font-bold">Cookies</h3>
		<ul class="flex flex-col">
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'login' }"
			>Cookie settings</router-link
		  >
		  <router-link class="text text-[10px] lg:text-[14px]" :to="{ name: 'login' }"
			>For companies</router-link
		  >
		
		</ul>
	  </div>
	</div>
  </template>
  <script>
  export default {};
  </script>
  <style scoped>
.text{
	height: 10px;
}
</style>
  