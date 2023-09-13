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
			<p>Europian Sellcenter  Welcome</p>
    Adress  Morocco
Number 00212 6 45 17 00 81


			
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
