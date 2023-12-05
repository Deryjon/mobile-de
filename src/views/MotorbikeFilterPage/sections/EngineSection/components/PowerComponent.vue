<template>
  <div class="lg:pl-[20px]">
    <div
      class="price-tab  items-center gap-x-[20px] lg:gap-[80px]"
    >
     
     
   
    <!-- transmision -->
		<h3 class="">Transmission</h3>
    <div class="flex flex-wrap gap-x-[20px] lg:gap-x-[100px]">
      <div
        class="
			"
      >
        <label class="custom-checkbox flex items-center h-10 lg:w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedAutomatic"
            @click="toggleShowCheckbox(0, 'Automatic transmission')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon mt-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedAutomatic"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Automatic transmission</span>
        </label>
      </div>
      <div class="">
        <label class="custom-checkbox flex items-center h-10 lg:w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedSemi"
            @click="toggleShowCheckbox(1, 'Semi-automatic')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon mt-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedSemi"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Semi-automatic</span>
        </label>
      </div>
      <div class="">
        <label class="custom-checkbox flex items-center h-10 lg:w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedManual"
            @click="toggleShowCheckbox(2, 'Manual gearbox')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon mt-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedManual"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Manual gearbox </span>
        </label>
      </div>
    </div>
		<div
      class="duration flex items-center gap-x-[20px] lg:gap-[80px]
			mt-[20px]
			"
    >
      <div>
        <h2 class="text-sm lg:text-[16px] mt-2">Cubic capacity</h2>
        <div class="cubic dropdown-container">
          <div class="input-container flex relative mt-[10px]">
            <input
              type="from"
              class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from"
              v-model="cubic"
              @focus="openCubicDropdown"
              @input="filterOptions"
              @blur="openCubicDropdown"
            />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openCubicDropdown"
            >
              <span
                class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
              ></span>
            </div>
          </div>
          <ul
            v-if="isOpenCubic"
            class="dropdown-options w-[150px] lg:w-[200px] text-[10px] lg:text-[12px]"
          >
            <li @click="selectCubic('any')" data-key="">Any</li>
            <li @click="selectCubic('1000')" data-key="1000">1,000 cm³</li>
            <li @click="selectCubic('1200')" data-key="1200">1,200 cm³</li>
            <li @click="selectCubic('1400')" data-key="1400">1,400 cm³</li>
            <li @click="selectCubic('1600')" data-key="1600">1,600 cm³</li>
            <li @click="selectCubic('1800')" data-key="1800">1,800 cm³</li>
            <li @click="selectCubic('2000')" data-key="2000">2,000 cm³</li>
            <li @click="selectCubic('2600')" data-key="2600">2,600 cm³</li>
            <li @click="selectCubic('3000')" data-key="3000">3,000 cm³</li>
            <li @click="selectCubic('5000')" data-key="5000">5,000 cm³</li>
            <li @click="selectCubic('7500')" data-key="7500">7,500 cm³</li>
            <li @click="selectCubic('8000')" data-key="8000">8,000 cm³</li>
            <li @click="selectCubic('9000')" data-key="9000">9,000 cm³</li>
          </ul>
        </div>
      </div>
      <div class="cubic-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="cubicTo"
            @focus="openCubicToDropdown"
            @input="filterOptions"
            @blur="openCubicToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openCubicToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenCubicTo"
          class="dropdown-options w-[150px] lg:w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectCubicTo('any')" data-key="">Any</li>
          <li @click="selectCubicTo('1000')" data-key="1000">1,000 cm³</li>
          <li @click="selectCubicTo('1200')" data-key="1200">1,200 cm³</li>
          <li @click="selectCubicTo('1400')" data-key="1400">1,400 cm³</li>
          <li @click="selectCubicTo('1600')" data-key="1600">1,600 cm³</li>
          <li @click="selectCubicTo('1800')" data-key="1800">1,800 cm³</li>
          <li @click="selectCubicTo('2000')" data-key="2000">2,000 cm³</li>
          <li @click="selectCubicTo('2600')" data-key="2600">2,600 cm³</li>
          <li @click="selectCubicTo('3000')" data-key="3000">3,000 cm³</li>
          <li @click="selectCubicTo('5000')" data-key="5000">5,000 cm³</li>
          <li @click="selectCubicTo('7500')" data-key="7500">7,500 cm³</li>
          <li @click="selectCubicTo('8000')" data-key="8000">8,000 cm³</li>
          <li @click="selectCubicTo('9000')" data-key="9000">9,000 cm³</li>
        </ul>
      </div>
    </div>
    
    </div>
  </div>
</template>
<script>
import axios from "axios";
import http from "@/axios.config";
import {useMotorbikeStore} from "@/store/motorbikeDataStore"
export default {
  data() {
    return {
      price: "",
      cubic: "",
      cubicTo: "",
      selectedYear: "",
      selectedtoYear: "",
      years: "",
      modelYears: [],
      modeltoYears: [],
      killometres: "",
      selectedMake: "",
      selectedPrice: "",
      isPrivateSelected: false,
      isCommercialSelected: false,
      isRadioNewSelected: false,
      selectedCondition: "",
      power: "",
      powerTo: "",
      consumptionFuel: "any",
      stickerEmission: "any",
      classEmision: "any",
      isOpenPower: false,
      isOpenPowerTo: false,
      isOpenCubic: false,
      isOpenCubicTo: false,
      isCheckedHistory: false,
      isCheckedAutomatic: false,
      isCheckedParticulate: false,
      isCheckedManual: false,
      isCheckedSemi: false,
			selectedTransmision: [],
    };
  },
  watch: {
    power(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    powerTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    cubic(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    cubicTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    consumptionFuel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    stickerEmission(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    classEmision(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
  },
  methods: {
		toggleShowCheckbox(index, transName) {
      const isChecked = !this.selectedTransmision.includes(transName);
      if (isChecked) {
        this.selectedTransmision.push(transName);
      } else {
        const transIndex = this.selectedTransmision.indexOf(transName);
        if (transIndex !== -1) {
          this.selectedTransmision.splice(transIndex, 1);
        }
      }
			this.updateMotorbikeData()
    },
		updateMotorbikeData() {
      const motorbikeStore = useMotorbikeStore();
      motorbikeStore.motorcycleData.transmission = this.selectedTransmision;
      motorbikeStore.updateMotorbikeData();
    },
    openCubicToDropdown() {
      this.isOpenCubicTo = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeCubicToDropdownOnClickOutside
      );
    },
    selectCubicTo(option) {
      this.cubicTo = option;
      this.isOpenCubicTo = false;
    },
    closeCubicToDropdown() {
      this.isOpenCubicTo = false;
    },
    closeCubicToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".cubic-to");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenCubicTo = false;
        document.removeEventListener(
          "click",
          this.closeCubicToDropdownOnClickOutside
        );
      }
    },
    //
    openCubicDropdown() {
      this.isOpenCubic = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeCubicDropdownOnClickOutside);
    },
    selectCubic(option) {
      this.cubic = option;
      this.isOpenCubic = false;
    },
    closeCubicDropdown() {
      this.isOpenCubic = false;
    },
    closeCubicDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".cubic");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenCubic = false;
        document.removeEventListener(
          "click",
          this.closeCubicDropdownOnClickOutside
        );
      }
    },
    //
    openPowerToDropdown() {
      this.isOpenPowerTo = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closePowerToDropdownOnClickOutside
      );
    },
    selectPowerTo(option) {
      this.powerTo = option;
      this.isOpenPowerTo = false;
    },
    closePowerToDropdown() {
      this.isOpenPowerTo = false;
    },
    closePowerToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".power-to");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPowerTo = false;
        document.removeEventListener(
          "click",
          this.closePowerToDropdownOnClickOutside
        );
      }
    },
    //
    openPowerDropdown() {
      this.isOpenPower = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePowerDropdownOnClickOutside);
    },
    selectPower(option) {
      this.power = option;
      this.isOpenPower = false;
    },
    closePowerDropdown() {
      this.isOpenPower = false;
    },
    closePowerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".power");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPower = false;
        document.removeEventListener(
          "click",
          this.closePowerDropdownOnClickOutside
        );
      }
    },
    //
    selectCondition(condition) {
      this.selectedCondition = condition;
    },

    updateSelectYear() {
      this.years = this.selectedYear;
      this.selectedYear = this.selectedMake;
    },
    updateSelect() {
      this.killometres = this.selectedMake;
      this.selectedMake = this.selectedYear;
    },
    updateSelectPrice() {
      this.price = this.selectedPrice;
      this.selectedPrice = this.selectedMake;
    },
    fetchModelYears() {
      const apiUrl = "https://api.nhtsa.gov/SafetyRatings";
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          this.modelYears = data.Results.map((result) => result.ModelYear);
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },

    toggleHpSelection() {
      // ... другой код ...
      this.selectedCondition = this.isPrivateSelected ? "Hp" : "";
    },

    togglekWSelection() {
      // ... другой код ...
      this.selectedCondition = this.iskWSelected ? "kW" : "";
    },
  },
  mounted() {
    this.fetchModelYears();
  },
};
</script>
<style>
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
.mark-select {
  border: 1px solid #111;
}
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

.line {
  border: 1px solid grey;
  height: 1px;
}
</style>
