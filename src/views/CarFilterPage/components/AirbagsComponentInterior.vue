<template>
  <div class="condition lg:p-[20px]">
    <h3>{{ $t("message.filter_page.airbags") }}</h3>
    <div class="radios-type flex flex-wrap gap-[20px] lg:gap-[30px] mt-[10px] xl:mt-[20px]">
      <label for="condition-ext" @click="selectAirbag('AnyExterior')">
        <input
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'AnyExterior',
            'bg-orange': selectedAirbag === 'AnyExterior',
          }"
          class="ml-10px"
        />
        <span class="ml-[2px] xl:ml-[10px] text-[14px]">{{ $t("message.filter_page.any") }}</span>
      </label>
      <label for="driver-airbag" @click="selectAirbag('Driver')">
        <input
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Driver',
            'bg-orange': selectedAirbag === 'Driver',
          }"
        />
        <span class="ml-[2px] xl:ml-[10px] text-[14px]">{{ $t("message.filter_page.driverair") }}</span>
      </label>
      <label for="front-airbag" @click="selectAirbag('Front')">
        <input
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Front',
            'bg-orange': selectedAirbag === 'Front',
          }"
        />
        <span class="ml-[2px] xl:ml-[10px] text-[14px]">{{ $t("message.filter_page.frontair") }}</span>
      </label>

      <label for="side-airbag" @click="selectAirbag('FrontAndSide')">
        <input
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'FrontAndSide',
            'bg-orange': selectedAirbag === 'FrontAndSide',
          }"
        />
        <span class="ml-[2px] xl:ml-[10px] text-[14px]"
          >{{ $t("message.filter_page.frontside") }}
        </span>
      </label>
      <label for="more-airbag" @click="selectAirbag('FrontAndSideMore')">
        <input
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'FrontAndSideMore',
            'bg-orange': selectedAirbag === 'FrontAndSideMore',
          }"
        />
        <span class="ml-[2px] xl:ml-[10px] text-[14px]"
          >{{ $t("message.filter_page.frontmore") }}
        </span>
      </label>
    </div>
  </div>
</template>
<script>
import { useCarStore } from "@/store/carDataStore";
export default {
  data() {
    return {
      selectedAirbag: "AnyExterior",
    };
  },
  watch: {
    selectedAirbag(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
  },
  methods: {
    updateCarData() {
      const carStore = useCarStore();
      const carData = carStore.carData;
      carData.car_airbags = this.selectedAirbag;
      carStore.updateCarData();
    },
    selectAirbag(condition) {
      this.selectedAirbag = condition;
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
