<template>
  <header>
    <v-container class="flex items-center  justify-between">
      <HeaderLogo />

			<div class="actions flex h-[50px] items-center gap-[10px] ">

				<HeaderActions />
				<HeaderSwitcherTheme class="mt-[21px]"/>
				<HeaderContact class="mt-[21px]"/>
				<HeaderLogout class="mt-[21px]"/>
			</div>
    </v-container>
  </header>
</template>
<script>
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderActions from "./components/HeaderActions.vue";
import HeaderSwitcherTheme from "./components/HeaderSwitcherTheme.vue";
import HeaderContact from "./components/HeaderContact.vue";
import HeaderLogout from "./components/HeaderLogout.vue";
export default {
  components: {
    HeaderLogo,
    HeaderActions,
    HeaderSwitcherTheme,
    HeaderContact,
    HeaderLogout,
  },
};
</script>
<style>
header{
	border-bottom: 1px solid #f39201;
}
</style>