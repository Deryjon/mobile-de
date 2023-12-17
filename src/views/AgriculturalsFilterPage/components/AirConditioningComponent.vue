<template>
  <div class="condition lg:p-[20px]">
    <h3 class="text-[16px]">Air conditioning</h3>
    <div class="radios-type flex flex-wrap gap-x-[60px] gap-y-[10px] mt-[20px]">
      <label class="w-[200px]" for="air-any" @click="selectAirbag('Any')">
        <input
          id="air-any"
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Any',
            'bg-orange': selectedCondition === 'Any',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px] text-[14px]">Any</span>
      </label>
      <label class="w-[200px]" for="manual">
        <input
          type="radio"
          id="manual"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Manual or automatic climatisation',
            'bg-orange': selectedCondition === 'Manual or automatic climatisation',
          }"
          @click="selectAirbag('Manual or automatic climatisation')"
        />
        <span class="ml-[10px] text-[14px]"
          >Manual or automatic climatisation
        </span>
      </label>
      <label
        class="w-[200px]"
        for="auto-climat"
        @click="selectAirbag('Automatic climatisation, 2 zones')"
      >
        <input
          type="radio"
          id="auto-climat"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Automatic climatisation, 2 zones',
            'bg-orange': selectedCondition === 'Automatic climatisation, 2 zones',
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
          id="auto2"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Automatic climatisation, 4 zones',
            'bg-orange': selectedCondition === 'Automatic climatisation, 4 zones',
          }"
        />
        <span class="ml-[10px] text-[14px]"
          >Automatic climatisation, 4 zones</span
        >
      </label>
      <label class="w-[200px]" @click="selectAirbag('No climatisation')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'No climatisation',
            'bg-orange': selectedCondition === 'No climatisation',
          }"
        />
        <span class="ml-[10px] text-[14px]">No climatisation</span>
      </label>
      <label class="w-[200px]" @click="selectAirbag('Automatic air conditioning')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Automatic air conditioning',
            'bg-orange': selectedCondition === 'Automatic air conditioning',
          }"
        />
        <span class="ml-[10px] text-[14px]">Automatic air conditioning </span>
      </label>
      <label class="w-[200px]" @click="selectAirbag('Automatic climatisation, 3 zones')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Automatic climatisation, 3 zones',
            'bg-orange': selectedCondition === 'Automatic climatisation, 3 zones',
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
import {useVehicleStore} from "@/store/agriculturalDataStore"
export default {
  data() {
    return {
      selectedCondition: "AnyAir",
      vehicleStore: useVehicleStore(),

    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateAgriculturalData();
      }
    },
  },
  methods: {
    updateAgriculturalData() {
      const vehicleStore = useVehicleStore();
      (vehicleStore.vehicleData.vehicle_air_conditioning =
        this.selectedCondition),
        vehicleStore.updateAgriculturalData();
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
