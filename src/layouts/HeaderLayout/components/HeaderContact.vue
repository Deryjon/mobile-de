<template>
  <div class="flex  w-[200px] lg:w-[150px] relative mt-[20px] lg:mt-[40px]">
    <button
      class="bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[140px] h-[35px] outline-none rounded-[10px] py-[9px] px-12 font-normal text-[12px] lg:text-[10px]"
      :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
      @click="openModal"
    >
      {{ $t("message.header.contact") }}
    </button>

    <div class="contact-modal w-[350px]" v-if="showContactModal">
      <p class="text-center">Europian Sellcenter Welcome</p>
			<div class="flex items-center gap-[10px] mx-auto w-[140px]">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>

				<p class="text-center">Adress Morocco</p>
			</div>
			<div class="flex items-center gap-[10px] mx-auto w-[140px]">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>

				<p class="text-center">Adress Sweden</p>
			</div>
			<div class="flex items-center gap-[10px] mx-auto w-[235px]">
				<p class="text-center">Morocco 00212-645-17-00-81</p>
			</div>
			<div class="flex items-center gap-[10px] mx-auto w-[235px]">
				<p class="text-center">Sweden 0046-722-56-30-02</p>
			</div>
			<div class="flex items-center gap-[10px] mx-auto w-[235px]">
				<p class="text-center">England 0044-7990-45-89-39</p>
			</div>
    </div>
  </div>
</template>

<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    // Состояние для отображения/скрытия модального окна
    const showContactModal = ref(false);

    return {
      isDarkMode,
      toggleDarkMode,
      showContactModal,
    };
  },
  methods: {
    openModal() {
      this.showContactModal = !this.showContactModal;
    },
  },
});
</script>

<style scoped>
.btn {
  border: 1px solid #444444;
}
.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

/* Стили для модального окна */
.contact-modal {
  position: absolute;
  top: 50px;
  right: -100px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2); /* Тень снизу */
  z-index: 1000; /* Убедитесь, что модальное окно находится над всеми остальными элементами */
}
</style>
