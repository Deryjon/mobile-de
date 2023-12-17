<template>
  <div class=" flex gap-[40px] mt-[-60px]">

    <div class="socials">
      <h3 class="font-bold">Security</h3>
      <ul class="flex flex-col ">
        <router-link class="text text-[14px]" :to="{ name: 'login' }"
          >Customer security</router-link
        >
        <router-link class="text text-[14px]" :to="{ name: 'login' }"
          >Fake emails</router-link
        >
        <li class="text text-[14px]"><a href="">Our Offer</a></li>
        <router-link class="text text-[14px]" :to="{ name: 'price-list' }"
          >Report annoying advertising</router-link
        >
      </ul>
    </div>
  
    <div class="socials">
      <h3 class="font-bold">Terms</h3>
      <ul class="flex flex-col">
        <router-link class="text text-[14px]" :to="{ name: 'login' }"
          >Terms of Use</router-link
        >
        <router-link class="text text-[14px]  " :to="{ name: 'login' }"
          >Personal data management</router-link
        >
      
      </ul>
    </div>
  
  
    <div class="socials">
      <h3 class="font-bold">Cookies</h3>
      <ul class="flex flex-col">
        <router-link class="text text-[14px]" :to="{ name: 'login' }"
          >Cookie settings</router-link
        >
        <router-link class="text text-[14px]" :to="{ name: 'login' }"
          >For companies</router-link
        >
      
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
