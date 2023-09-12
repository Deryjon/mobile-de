<template>
  <div class="condition p-[20px]">
    <h3 class="text-[14px]">Type and condition</h3>
    <div
      class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[244px] mt-[10px] mb-[10px]"
    >
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Any',
            'bg-orange': selectedCondition === 'Any',
          }"
          class="ml-10px"
          @click="selectCondition('Any')"
        />
        <span class="ml-[10px] text-[14px]">Any</span>
      </label>
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'New',
            'bg-orange': selectedCondition === 'New',
          }"
          @click="selectCondition('New')"
        />
        <span class="ml-[10px] text-[14px]">New</span>
      </label>
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Used',
            'bg-orange': selectedCondition === 'Used',
          }"
          @click="selectCondition('Used')"
        />
        <span class="ml-[10px] text-[14px]">Used</span>
      </label>
    </div>
    <div
      class="conditions flex flex-wrap gap-x-[0px] lg:gap-x-[140px] mt-[20px] lg:mt-[30px] xl:mt-[20px]"
    >
      <label
        class="custom-checkbox flex items-center h-10 w-[140px] pb-[23px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          :disabled="isRadioNewSelected"
          class="form-checkbox h-5 w-5 text-indigo-600"
          :class="{ 'bg-[#ccc] cursor-help': isRadioNewSelected }"
          v-model="isCheckedRegister"
          @click="toggleShowCheckbox(0, 'Pre-Registration')"
        />
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedRegister"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Pre-Registration</span>
      </label>
      <label
        class="custom-checkbox flex items-center h-10 w-[130px] pb-[23px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          v-model="isCheckedEmploy"
          @click="toggleShowCheckbox(1, 'Employees Car')"
          :disabled="isRadioNewSelected"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedEmploy"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Employee's Car</span>
      </label>
      <label
        class="custom-checkbox flex items-center h-10 w-[130px] pb-[23px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          v-model="isCheckedClassic"
          @click="toggleShowCheckbox(2, 'Classic Vehicle')"
          :disabled="isRadioNewSelected"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedClassic"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Classic Vehicle</span>
      </label>
      <label
        class="custom-checkbox flex items-center h-10 w-[190px] pb-[23px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          v-model="isCheckedDemon"
          @click="toggleShowCheckbox(3, 'Demonstration Vehicle')"
          :disabled="isRadioNewSelected"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedDemon"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Demonstration Vehicle</span>
      </label>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import http from "../../../axios.config";
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
			type: []
    };
  },
  setup() {},
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
  },
  methods: {
    fetchData() {
      http
        .get("/cars/count", {
          car_condition: this.selectedCondition,
					type: this.type
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        });
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
      console.log("selectedCars изменен:", this.type)
			this.fetchData()
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
