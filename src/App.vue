<template>
  <main>
		<link rel="icon" href="./assets/images/logo.png">
    <RouterView />
  </main>
</template>
<script>
import HeaderLayoutVue from './layouts/HeaderLayout/HeaderLayout.vue'
export default{
	components: {HeaderLayoutVue}
}
</script>
