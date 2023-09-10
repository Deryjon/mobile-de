<template>
  <button
    class="bg-transparent mark-select w-[180px] lg:w-[150px] xl:w-[140px] h-[35px] outline-none rounded-[10px] py-[9px] px-12 font-normal  text-[10px] lg:text-[10px] mt-[42px]"
    :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
		@click="openContacts"
  >
    {{ $t("message.header.contact") }}
  </button>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
	methods:{
		openContacts(){
			
		}
	}
});
</script>
<style scoped>
.btn {
  border: 1px solid #444444;
}
.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}
</style>
