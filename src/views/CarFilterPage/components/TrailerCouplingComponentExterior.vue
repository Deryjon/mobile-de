<template>
  <div class="condition p-[20px]">
    <h3>Trailer coupling</h3>
    <div
      class="radios-type flex gap-x-[10px] lg:gap-[30px] mt-[10px] text-[14px]"
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
        <span class="ml-[10px]">Any</span>
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
        <span class="ml-[10px]">Fix, detachable or swiveling</span>
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
        <span class="ml-[10px]">Detachable or swiveling </span>
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
        <span class="ml-[10px]">Swiveling</span>
      </label>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import { useCarStore } from "@/store/carDataStore";
export default {
  data() {
    return {
      selectedCondition: "AnyTrai",
    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
				this.updateCarData()
      }
    },
  },
  methods: {
    updateCarData() {
      const carStore = useCarStore();
      const carData = carStore.carData;
      carData.car_trailer_coupling = this.selectedCondition;

      carStore.updateCarData();
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
    },
    fetchData() {
      http
        .get("/cars/count", {
          car_trailer_coupling: this.selectedCondition,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        });
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
