<template>
  <main>
    <!-- <HeaderLayoutVue /> -->
    <RouterView />
  </main>
</template>
<script>
import HeaderLayoutVue from './layouts/HeaderLayout/HeaderLayout.vue'
export default{
	components: {HeaderLayoutVue}
}
</script>
