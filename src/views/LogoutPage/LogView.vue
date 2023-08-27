<template>
	<section class="login ">

		<v-container>
		<FormLogin/>
		</v-container>
	</section>
</template>
<script>
import FormLogin from './components/FormLogin.vue'
export default{
components:{ FormLogin }
}
</script>
<style scoped>
.login{
	height: 100vh;
	background: #f5f5f5;
}
</style>