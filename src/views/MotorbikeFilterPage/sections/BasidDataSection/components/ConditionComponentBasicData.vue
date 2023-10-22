<template>
  <div class="condition p-[20px] mt-[20px]">
    <h3 class="text-[14px]">Condition</h3>
    <div
      class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[30px] mt-[10px] mb-[10px]"
    >
      <label for="any-1" @click="selectCondition('Any')">
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
      <label for="new" @click="selectCondition('New')">
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
      <label for="used" @click="selectCondition('Used')">
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
import { ref } from "vue";
import { useMotorbikeStore } from "@/store/motorbikeDataStore";
export default {
  data() {
    return {
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedCondition: "Any",
      isRadioNewSelected: false,
    };
  },
  setup() {
    const isCheckedRegister = ref(false);
    const isCheckedEmploy = ref(false);
    const isCheckedClassic = ref(false);
    const isCheckedDemon = ref(false);
    const motorbikeStore = useMotorbikeStore();

    const toggleShowCheckbox = (index) => {
      isCheckedRegister[index] = !isCheckedRegister[index];
    };

    return {
      isCheckedRegister,
      isCheckedEmploy,
      isCheckedDemon,
      isCheckedClassic,
      toggleShowCheckbox,
    };
  },
	watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
  },
  methods: {
		updateMotorbikeData() {
      const motorcycleStore = useMotorbikeStore();
      motorcycleStore.motorcycleData.motorcycle_condition = this.selectedCondition;
      motorcycleStore.updateMotorbikeData();
    },
    toggleAnySelection() {
      // Обработчик клика на "Any"
      if (this.isAnySelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isAnySelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isAnySelected = true;
      }
    },
    toggleNewSelection() {
      // Обработчик клика на "Any"
      if (this.isNewSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isNewSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isNewSelected = true;
      }
    },
    toggleUsedSelection() {
      // Обработчик клика на "Any"
      if (this.isUsedSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isUsedSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isUsedSelected = true;
      }
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
