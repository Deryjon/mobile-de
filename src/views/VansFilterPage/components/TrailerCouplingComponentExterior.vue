<template>
 <div class="condition lg:p-[20px]">
    <h3>{{ $t("message.filter_page.trailer.title") }}</h3>
    <div
      class="radios-type flex flex-wrap gap-[10px] lg:gap-[30px] mt-[10px] text-[14px]"
    >
      <label for="trai" @click="selectCondition('AnyTrai')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'AnyTrai',
            'bg-orange': selectedCondition === 'AnyTrai',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px]">{{ $t("message.filter_page.trailer.title") }}</span>
      </label>
      <label for="fix" @click="selectCondition('Fix')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Fix',
            'bg-orange': selectedCondition === 'Fix',
          }"
        />
        <span class="ml-[10px]">{{ $t("message.filter_page.trailer.fix") }}</span>
      </label>
      <label for="deta" @click="selectCondition('Detachable')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Detachable',
            'bg-orange': selectedCondition === 'Detachable',
          }"
        />
        <span class="ml-[10px]">{{ $t("message.filter_page.trailer.det") }}</span>
      </label>
      <label for="swiveling" @click="selectCondition('Swiveling')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Swiveling',
            'bg-orange': selectedCondition === 'Swiveling',
          }"
        />
        <span class="ml-[10px]">{{ $t("message.filter_page.trailer.swi") }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import { useVanStore } from "../../../store/vanDataStore";

export default {
  data() {
    return {
      selectedCondition: "AnyTrai",
    };
  },
	watch:{
		selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateVanData();
      }
    },
	},
  methods: {
    selectCondition(condition) {
      this.selectedCondition = condition;
    },
		updateVanData() {
      const vanStore = useVanStore();

      (vanStore.vanData.van_emission_class =
        this.van_trailer_coupling_fix),
        vanStore.updateVanData();
    },
  },
};
</script>
<style scoped>
input[type="radio"] {
  /* Убираем стандартные стили радиокнопок */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Задаем размер радиокнопки */
  width: 20px;
  height: 20px;
  /* Создаем круглую форму */
  border-radius: 50%;
  border: 1px solid gray;
  /* Позиционируем радиокнопку относительно базовой линии текста */
  vertical-align: middle;
  /* Убираем внутренние отступы, чтобы радиокнопка была ближе к тексту */
  margin: 0;
  padding: 0;
}

input[type="checkbox"]:disabled {
  opacity: 0.5;
  border: #ccc;
  /* Убираем возможность кликать на отключенный чекбокс */
  pointer-events: none;
  /* Убираем указатель курсора */
  cursor: none;
}
.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #ffffff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #ffffff;
  background: #e04b00;
}
.custom-checkbox input[type="checkbox"] {
  display: none;
}
</style>
