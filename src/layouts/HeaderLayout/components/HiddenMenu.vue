<template>
  <div
    class="hidden-menu bg-[#F8FCFF] fixed left-0 top-0 w-full h-full p-5 flex flex-col"
  >
    <div class="wrapper">
      <div class="head flex items-center justify-between pt-3">
        <HeaderLinks />
        <HeaderLogo @click="$emit('closeMenu')" class="order-2" />
        <button
          class="close-btn w-7 h-7 flex justify-center items-center order-3"
          @click="$emit('closeMenu')"
        >
          <img src="../../../assets/images/times.svg" alt="times-icon" />
        </button>
      </div>
      <div class="body flex flex-col">
		
        <HeaderSwitcherTheme />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderActions from "./HeaderActions.vue";
import HeaderSwitcherTheme from "./HeaderSwitcherTheme.vue";
export default {
  components: { HeaderLogo, HeaderActions, HeaderSwitcherTheme },
  data() {
    return {};
  },
};
</script>
<style scoped>
.btn {
  background: #ffff;
  .img {
    background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
  }
}
</style>
