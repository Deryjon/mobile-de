<template>
  <main>
		<link rel="icon" href="./assets/images/logo.png">
    <RouterView />
  </main>
</template>
<script>
import HeaderLayoutVue from './layouts/HeaderLayout/HeaderLayout.vue'
export default{
	mounted(){
		document.title = 'SellCenter'
	},
	components: {HeaderLayoutVue}
}
</script>
