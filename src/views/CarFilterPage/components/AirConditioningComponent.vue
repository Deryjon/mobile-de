<template>
  <div class="condition lg:p-[20px] mt-[15px]">
    <h3 class="text-[16px]">Air conditioning</h3>
    <div class="radios-type flex flex-wrap gap-x-[60px] gap-y-[10px] mt-[20px]">
      <label class="w-[200px]" for="air-any" @click="selectAirbag('AnyAir')">
        <input
         
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'AnyAir',
            'bg-orange': selectedCondition === 'AnyAir',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px] text-[14px]">Any</span>
      </label>
      <label class="w-[200px]" for="manual" @click="selectAirbag('Manual')">
        <input
          type="radio"
         
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Manual',
            'bg-orange': selectedCondition === 'Manual',
          }"
          
        />
        <span class="ml-[10px] text-[14px]"
          >Manual or automatic climatisation
        </span>
      </label>
      <label
        class="w-[200px]"
        for="auto-climat"
        @click="selectAirbag('Auto-Climat')"
      >
        <input
          type="radio"
        
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Auto-Climat',
            'bg-orange': selectedCondition === 'Auto-Climat',
          }"
        />
        <span class="ml-[10px] text-[14px]"
          >Automatic climatisation, 2 zones
        </span>
      </label>

      <label
        class="w-[200px]"
        for="auto2"
        @click="selectAirbag('Auto-Climat2')"
      >
        <input
          type="radio"
   
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Auto-Climat2',
            'bg-orange': selectedCondition === 'Auto-Climat2',
          }"
        />
        <span class="ml-[10px] text-[14px]"
          >Automatic climatisation, 4 zones</span
        >
      </label>
      <label for='noclimat' class="w-[200px]" @click="selectAirbag('NoClimat')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'NoClimat',
            'bg-orange': selectedCondition === 'NoClimat',
          }"
        />
        <span class="ml-[10px] text-[14px]">No climatisation</span>
      </label>
      <label class="w-[200px]" for="autoclimat" @click="selectAirbag('AutoClimat')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'AutoClimat',
            'bg-orange': selectedCondition === 'AutoClimat',
          }"
        />
        <span class="ml-[10px] text-[14px]">Automatic air conditioning </span>
      </label>
      <label class="w-[200px]" for="climat4" @click="selectAirbag('Auto-Climat3')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Auto-Climat3',
            'bg-orange': selectedCondition === 'Auto-Climat3',
          }"
        />
        <span class="ml-[10px] text-[14px]"
          >Automatic climatisation, 3 zones
        </span>
      </label>
    </div>
		
  </div>
</template>
<script>
import http from "../../../axios.config";
import {useCarStore} from "@/store/carDataStore"
export default {
  data() {
    return {
      selectedCondition: "AnyAir",
    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
  },
  methods: {
    updateCarData() {
			const carStore = useCarStore();
      const carData = carStore.carData;
      carData.car_air_conditioning = this.selectCondition;
      carStore.updateCarData();
    },
    selectAirbag(condition) {
      this.selectedCondition = condition;
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
