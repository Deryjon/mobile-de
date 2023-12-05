<template>
  <div class="action lg:hidden">
    <button
      class="burger-btn w-9 h-9 mt-3 flex justify-center items-center lg:hidden order-3"
      @click="handleMenuClick"
    >
      <img src="../../../assets/images/burger.svg" alt="burger-btn" />
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useActiveTab4 } from "@/store/activeTab4Component";

export default {
  setup() {
    const activeTab4Store = useActiveTab4();
    const computedIsOpen = computed(() => activeTab4Store.computedIsOpen);

    const handleMenuClick = () => {
      activeTab4Store.toggleMenu(); // Вызываем метод toggleMenu из стора при клике на кнопку
    };

    return {
      computedIsOpen,
      handleMenuClick,
    };
  },
};
</script>
