<template>
  <div class="pl-[20px]">
    
    <!-- transmision -->
    <div class="flex gap-[40px] lg:gap-x-[100px]">
      <div
        class="
			"
      >
        <h3 class="">{{ $t("message.filter_page.transmission.title") }}</h3>
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
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

          <span class="text-sm">{{ $t("message.filter_page.transmission.auto") }}</span>
        </label>
      </div>
      <div class="mt-[24px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
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

          <span class="text-sm">{{ $t("message.filter_page.transmission.semi") }}</span>
        </label>
      </div>
      <div class="mt-[24px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
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

          <span class="text-sm">{{ $t("message.filter_page.transmission.manual") }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import http from "../../../axios.config";
import { useForkliftStore } from "../../../store/forkliftDataStore";
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
        this.updateForkliftData();
      }
    },
    powerTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
      }
    },
    cubic(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
      }
    },
    cubicTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
      }
    },
    consumptionFuel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
      }
    },
    stickerEmission(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
      }
    },
    classEmision(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateForkliftData();
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
			this.updateForkliftData()
    },
    updateForkliftData() {
      const forkliftStore = useForkliftStore();
      (forkliftStore.forkliftData.transmission =
        this.selectedTransmision),
        forkliftStore.updateForkliftData();
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
