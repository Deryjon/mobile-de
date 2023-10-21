<template>
  <div class="condition p-[20px]">
    <h3 class="text-[16px]">Type and condition</h3>
    <div
      class="radios-type flex flex-wrap gap-x-[0px] lg:gap-x-[100px] mt-[10px]"
    >
      <label for="any-cond" @click="selectCondition('Any')">
        <input
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
      <label for="new-cond"  @click="selectCondition('New')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'New',
            'bg-orange': selectedCondition === 'New',
          }"
         
        />
        <span class="ml-[10px] text-[14px]">New</span>
      </label>
      <label for="used-cond" @click="selectCondition('Used')">
        <input
          type="radio"
       
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Used',
            'bg-orange': selectedCondition === 'Used',
          }"
          
        />
        <span class="ml-[10px] text-[14px]">Used</span>
      </label>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import { useTruckStore } from "@/store/truckDataStore";
export default {
  data() {
    return {
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedCondition: "Any",
      isRadioNewSelected: false,
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      type: [],
    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTruckData();
      }
    },
  },
  methods: {
    updateTruckData() {
      const truckStore = useTruckStore();
      (truckStore.truckData.truck_condition =
        this.selectedCondition),
        truckStore.updateTruckData();
    },
    toggleShowCheckbox(index, typeName) {
      const isChecked = !this.type.includes(typeName);
      if (isChecked) {
        this.type.push(typeName);
      } else {
        const typeIndex = this.type.indexOf(typeName);
        if (typeIndex !== -1) {
          this.type.splice(typeIndex, 1);
        }
      }

      this.updateTruckData();
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        1;
        this.isRadioNewSelected = true;
        this.isCheckedRegister = false;
        this.isCheckedEmploy = false;
        this.isCheckedDemon = false;
        this.isCheckedClassic = false;
      } else {
        this.isRadioNewSelected = false;
      }
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
