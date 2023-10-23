<template>
  <main>
		<HeaderLayoutVue/>
    <RouterView />
		<FooterLayout/>
  </main>
</template>
<script>
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
import HeaderLayoutVue from './layouts/HeaderLayout/HeaderLayout.vue'
export default{
	components: { HeaderLayoutVue, FooterLayout }
}
</script>
