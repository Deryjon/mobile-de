<template>
  <div class="pl-[20px]">
    <div
      class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[80px]"
    >
      <div class="power dropdown-container">
        <h2 class="text-sm lg:text-[14px] mt-2">Power</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="power"
            @focus="openPowerDropdown"
            @input="filterOptions"
            @blur="openPowerDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPowerDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenPower"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectPower('34')" data-key="34">34</li>
          <li @click="selectPower('50')" data-key="50">50</li>
          <li @click="selectPower('60')" data-key="60">60</li>
          <li @click="selectPower('75')" data-key="75">75</li>
          <li @click="selectPower('90')" data-key="90">90</li>
          <li @click="selectPower('101')" data-key="101">101</li>
          <li @click="selectPower('118')" data-key="118">118</li>
          <li @click="selectPower('131')" data-key="131">131</li>
          <li @click="selectPower('150')" data-key="150">150</li>
          <li @click="selectPower('200')" data-key="200">200</li>
          <li @click="selectPower('252')" data-key="252">252</li>
          <li @click="selectPower('303')" data-key="303">303</li>
          <li @click="selectPower('358')" data-key="358">358</li>
          <li @click="selectPower('402')" data-key="402">402</li>
          <li @click="selectPower('454')" data-key="454">454</li>
        </ul>
      </div>
      <!-- <div class="price">
        <h2 class="mt-2 text-sm lg:text-[14px]">Power</h2>
        <div class="marke_select_div relative mt-[10px]">
          <input
            placeholder="from"
            class="mark_input text-[12px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number"
            pattern="\d*"
            v-model="price"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            v-model="selectedPrice"
            @change="updateSelectPrice"
          >
            <option value="34">34</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="75">75</option>
            <option value="90">90</option>
            <option value="101">101</option>
            <option value="118">118</option>
            <option value="131">131</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="252">252</option>
            <option value="303">303</option>
            <option value="358">358</option>
            <option value="402">402</option>
            <option value="454">454</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div> -->
      <div class="power-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="powerTo"
            @focus="openPowerToDropdown"
            @input="filterOptions"
            @blur="openPowerToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPowerToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenPowerTo"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectPowerTo('34')" data-key="34">34</li>
          <li @click="selectPowerTo('50')" data-key="50">50</li>
          <li @click="selectPowerTo('60')" data-key="60">60</li>
          <li @click="selectPowerTo('75')" data-key="75">75</li>
          <li @click="selectPowerTo('90')" data-key="90">90</li>
          <li @click="selectPowerTo('101')" data-key="101">101</li>
          <li @click="selectPowerTo('118')" data-key="118">118</li>
          <li @click="selectPowerTo('131')" data-key="131">131</li>
          <li @click="selectPowerTo('150')" data-key="150">150</li>
          <li @click="selectPowerTo('200')" data-key="200">200</li>
          <li @click="selectPowerTo('252')" data-key="252">252</li>
          <li @click="selectPowerTo('303')" data-key="303">303</li>
          <li @click="selectPowerTo('358')" data-key="358">358</li>
          <li @click="selectPowerTo('402')" data-key="402">402</li>
          <li @click="selectPowerTo('454')" data-key="454">454</li>
        </ul>
      </div>
      <!-- <div class="marke_select_div relative mt-[36px]">
        <input
          placeholder="up to"
          class="mark_input text-[12px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
          type="number"
          pattern="\d*"
          v-model="price"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedPrice"
          @change="updateSelectPrice"
        >
          <option value="34">34</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="75">75</option>
          <option value="90">90</option>
          <option value="101">101</option>
          <option value="118">118</option>
          <option value="131">131</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="252">252</option>
          <option value="303">303</option>
          <option value="358">358</option>
          <option value="402">402</option>
          <option value="454">454</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div> -->
      <label for="condition-any" class="mt-[30px]">
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Hp',
            'bg-orange': selectedCondition === 'Hp',
          }"
          @click="selectCondition('Hp')"
        />
        <span class="ml-[10px]">Hp</span>
      </label>
      <label
        for="condition-any"
        @click="selectCondition('kW')"
        class="mt-[30px]"
      >
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'kW',
            'bg-orange': selectedCondition === 'kW',
          }"
        />
        <span class="ml-[10px]">kW</span>
      </label>
    </div>

    <div
      class="duration flex items-center gap-x-[20px] lg:gap-[80px] mt-[20px] lg:mt-[40px]"
    >
      <div>
        <h2 class="text-sm lg:text-[14px] mt-2">Cubic capacity</h2>
        <div class="cubic dropdown-container">
          <div class="input-container flex relative mt-[10px]">
            <input
              type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
            class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
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
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
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
    <!-- transmision -->
    <div class="flex gap-[40px] lg:gap-[100px]">
      <div
        class="
			"
      >
        <h3 class="mt-[20px] lg:mt-[60px]">Transmission</h3>
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

          <span class="text-sm">Automatic transmission</span>
        </label>
      </div>
      <div class="mt-[43px] lg:mt-[84px]">
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

          <span class="text-sm">Semi-automatic</span>
        </label>
      </div>
      <div class="mt-[43px] lg:mt-[84px]">
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

          <span class="text-sm">Manual gearbox </span>
        </label>
      </div>
    </div>
    <!-- valid -->
    <div
      class="valid-until mt-[30px] lg:mt-[80px] flex flex-wrap  items-center gap-x-[20px] lg:gap-[60px]"
    >
      <div class="relative mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">
          Fuel consumption (combined) up to
        </h2>
        <select
          class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] mt-[10px] lg:text-[12px]"
          v-model="consumptionFuel"
        >
          <option value="any" selected>Any</option>
          <option value="new">New</option>
          <option value="18">18</option>
          <option value="12">12</option>
          <option value="9">9</option>
          <option value="6">6</option>
          <option value="3">3</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <div class="marke_select_div relative mt-[14px] lg:mt-4 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emissions Sticker</h2>
        <select
          class="mark-select mt-[20px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="stickerEmission"
        >
          <option value="any" selected>Any</option>
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <div class="marke_select_div relative mt-[20px] lg:mt-7 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emission Class</h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="classEmision"
        >
          <option value="any" selected>Any</option>
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
        <input
          type="checkbox"
          v-model="isCheckedParticulate"
          @click="toggleShowCheckbox"
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
            v-if="isCheckedParticulate"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Particulate filter </span>
      </label>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import http from "../../../axios.config";
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
        this.fetchData();
      }
    },
    powerTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
    cubic(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
    cubicTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
    consumptionFuel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
    stickerEmission(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
    classEmision(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
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
      console.log("selectedtranss изменен:", this.selectedTransmision)
			this.fetchData()
    },
    fetchData() {
      http
        .get("/cars/count", {
          car_power_from: this.power,
          car_power_up_to: this.powerTo,
          car_cubic_capacity_from: this.cubic,
          car_cubic_capacity_to: this.cubicTo,
          transmission: this.inputKilometer,
          car_fuel_consumption: this.consumptionFuel,
          car_emissions_sticker: this.stickerEmission,
          car_emission_class: this.classEmision,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        });
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
