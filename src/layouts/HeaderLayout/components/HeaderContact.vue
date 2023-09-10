<template>
  <div class="flex row relative mt-[40px]">
    <button
      class="bg-transparent mark-select w-[180px] lg:w-[150px] xl:w-[140px] h-[35px] outline-none rounded-[10px] py-[9px] px-12 font-normal text-[10px] lg:text-[10px]"
      :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
      @click="openModal"
    >
      {{ $t("message.header.contact") }}
    </button>

    <!-- Модальное окно -->
    <div class="contact-modal w-[350px]" v-if="showContactModal">
      <!-- Содержимое модального окна -->
      <!-- Например, соц. сети и контактные данные -->

			<ul>
				<li class="flex items-center h-[40px] gap-[15px]">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
					<a href="https://www.instagram.com/jakhongirov.1/">jakhongirov.1</a>
				</li>
				<li class="flex items-center h-[40px] gap-[15px]">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
					<a href="https://t.me/jakhongirov_1">jakhongirov_1</a>
				</li>
			</ul>
			
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
	methods:{
		openModal(){
			this.showContactModal = !this.showContactModal
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
