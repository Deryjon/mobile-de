<template>
  <div class="condition p-[20px]">
    <h3>Vendor</h3>
    <div class="radios-type flex gap-[40px] mt-[10px]">
      <label for="vendor-any" @click="selectVendor('Any')">
        <input
          type="radio"
          id="vendor-any"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Any',
            'bg-orange': selectedVendor === 'Any',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px]">Any</span>
      </label>
      <label for="vendor-private">
        <input
          type="radio"
          id="vendor-private"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Private',
            'bg-orange': selectedVendor === 'Private',
          }"
          @click="selectVendor('Private')"
        />
        <span class="ml-[10px]">Private seller</span>
      </label>
      <label for="vendor-dealer" @click="selectVendor('Dealer')">
        <input
          type="radio"
          id="vendor-dealer"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Dealer',
            'bg-orange': selectedVendor === 'Dealer',
          }"
        />
        <span class="ml-[10px]">Dealer </span>
      </label>
      <label for="vendor-dealer" @click="selectVendor('Company')">
        <input
          type="radio"
          id="vendor-dealer"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Company',
            'bg-orange': selectedVendor === 'Company',
          }"
        />
        <span class="ml-[10px]">Company vehicles</span>
      </label>
    </div>
    <div class="dealer-rating  mt-[50px]">
      <h3>Dealer rating </h3>
      <div class="flex gap-[40px] mt-[20px]">
        <label
          class="custom-checkbox flex items-center h-10 w-[155px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
            :class="{ 'bg-[#ccc] cursor-help': isRadioNewSelected }"
            v-model="isCheckedAny"
            @click="toggleShowCheckbox(5)"
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
              v-if="isCheckedAny"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Any</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[145px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedFromThree"
            @click="toggleShowCheckbox(0)"
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
              v-if="isCheckedFromThree"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">from 3</span>
					<img src="" alt="">
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[134px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedfromFour"
            @click="toggleShowCheckbox(1)"
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
              v-if="isCheckedfromFour"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">from 4</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[190px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedFive"
            @click="toggleShowCheckbox(2)"
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
              v-if="isCheckedFive"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">from  5</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedVendor: "Any",
      isRadioNewSelected: false,
    };
  },
  setup() {
    const isCheckedAny = ref(false);
    const isCheckedFromThree = ref(false);
    const isCheckedfromFour = ref(false);
    const isCheckedFive = ref(false);

    const toggleShowCheckbox = (index) => {
      isCheckedAny[index] = !isCheckedAny[index];
    };

    return {
      isCheckedAny,
      isCheckedFromThree, 
      isCheckedFive,
      isCheckedfromFour,
      toggleShowCheckbox,
    };
  },
  methods: {
    selectVendor(condition) {
      this.selectedVendor = condition;
      if (condition === "Private" || condition === "Company") {
  this.isRadioNewSelected = true;
  this.isCheckedAny = false;
  this.isCheckedFromThree = false;
  this.isCheckedDemon = false;
  this.isCheckedfromFour = false;
} else {
  this.isRadioNewSelected = false;
  this.isCheckedAny = false;
  this.isCheckedFromThree = false;
  this.isCheckedDemon = false;
  this.isCheckedfromFour = false;
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
