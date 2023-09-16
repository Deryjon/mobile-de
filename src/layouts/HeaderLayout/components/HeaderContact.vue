<template>
  <div class="flex row relative mt-[40px]">
    <button
      class="bg-transparent mark-select w-[180px] lg:w-[150px] xl:w-[140px] h-[35px] outline-none rounded-[10px] py-[9px] px-12 font-normal text-[12px] lg:text-[10px]"
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
			<div class="flex items-center gap-[10px] mx-auto w-[235px]">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
				<p class="text-center">Number 00212 6 45 17 00 81</p>
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
