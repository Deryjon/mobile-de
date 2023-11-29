<template>
  <div class="mt-[10px] lg:p-[20px]">
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
      <!-- cabrio -->
      <label class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
        <input type="checkbox" v-model="isCheckedAwning" @click="toggleShowCheckbox(0, 'Alloy wheels')" />
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
          <!-- Insert your SVG arrow icon here -->
          <path v-if="isCheckedAwning" fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        Alloy wheels
      </label>
      <label class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
        <input type="checkbox" v-model="isCheckedDisabledAccessible" @click="toggleShowCheckbox(1, 'Compressor')" />
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
          <!-- Insert your SVG arrow icon here -->
          <path v-if="isCheckedDisabledAccessible" fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        Compressor
      </label>
      <label class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
        <input type="checkbox" v-model="isCheckedRearGarage" @click="toggleShowCheckbox(2, 'Crane')" />
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
          <!-- Insert your SVG arrow icon here -->
          <path v-if="isCheckedRearGarage" fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        Crane
      </label>
      <label class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
        <input type="checkbox" v-model="isCheckedSolarEnergySystem" @click="toggleShowCheckbox(3, 'Tail lift')" />
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
          <!-- Insert your SVG arrow icon here -->
          <path v-if="isCheckedSolarEnergySystem" fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        Tail lift
      </label>
    </div>
    <div class="flex flex-wrap items-center gap-[10px] lg:gap-[40px]">
      <div class="length dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px] lg:w-[200px]">Permissible (GVW)</h2>
        <div class="input-container flex relative mt-[10px]">
          <input type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from" v-model="lengthGVW" @focus="openlenthGVWoDropdown" @blur="openlenthGVWoDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openlenthGVWoDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="lengthGVWOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
          <ul>
            <li data-value="0" @click="selectNumberlengthGVW('0')">1,000 kg</li>
            <li data-value="2000" @click="selectNumberlengthGVW('2000')">
              2,000 kg
            </li>
            <li data-value="5000" @click="selectNumberlengthGVW('5000')">
              5,000 kg
            </li>
            <li data-value="6000" @click="selectNumberlengthGVW('6000')">
              6,000 kg
            </li>
            <li data-value="7000" @click="selectNumberlengthGVW('7000')">
              7,000 kg
            </li>

          </ul>
        </ul>
      </div>
      <div class="length-to dropdown-container">

        <div class="input-container flex relative mt-[38px]">
          <input type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="to" v-model="lengthGVWTo" @focus="openlenthGVWToDropdown" @blur="openlenthGVWToDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openlenthGVWToDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="lengthGVWToOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">

          <li data-value="0" @click="selectNumberlengthGVWTo('0')">1,000 kg</li>
          <li data-value="2000" @click="selectNumberlengthGVWTo('2000')">
            2,000 kg
          </li>
          <li data-value="5000" @click="selectNumberlengthGVWTo('5000')">
            5,000 kg
          </li>
          <li data-value="6000" @click="selectNumberlengthGVWTo('6000')">
            6,000 kg
          </li>
          <li data-value="7000" @click="selectNumberlengthGVWTo('7000')">
            7,000 kg
          </li>


        </ul>
      </div>
      <div class="number dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px] lg:w-[200px]">Load capacity </h2>
        <div class="input-container flex relative mt-[10px]">
          <input type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from" v-model="numberBunks" @focus="openNumberBunksDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openNumberBunksDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="numberBunksOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
          <ul>
            <li data-value="0" @click="selectNumberBunks('4x2')">4x2</li>
            <li data-value="2000" @click="selectNumberBunks('4x4')">
              4x4 
            </li>
            <li data-value="6x2" @click="selectNumberBunks('6x2')">
              6x2
            </li>
            <li data-value="6x4" @click="selectNumberBunks('6x4')">
              6x4
            </li>
            <li data-value="7000" @click="selectNumberBunks('6x6')">
              6x6
            </li>
            <li data-value="8x4" @click="selectNumberBunks('8x4')">
              8x4
            </li>
            <li data-value="8x6" @click="selectNumberBunks('8x6')">
              8x6
            </li>
            <li data-value="8x8" @click="selectNumberBunks('8x8')">
              8x8
            </li>

          </ul>
        </ul>
      </div>
      <div class="number-to dropdown-container mt-7">
        <div class="input-container flex relative mt-[10px]">
          <input type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from" v-model="numberBunksTo" @focus="openNumberBunksToDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openNumberBunksToDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="numberBunksToOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
          <ul>
            <li data-value="0" @click="selectNumberBunksTo('4x2')">4x2</li>
            <li data-value="2000" @click="selectNumberBunksTo('4x4')">
              4x4 
            </li>
            <li data-value="6x2" @click="selectNumberBunksTo('6x2')">
              6x2
            </li>
            <li data-value="6x4" @click="selectNumberBunksTo('6x4')">
              6x4
            </li>
            <li data-value="7000" @click="selectNumberBunksTo('6x6')">
              6x6
            </li>
            <li data-value="8x4" @click="selectNumberBunksTo('8x4')">
              8x4
            </li>
            <li data-value="8x6" @click="selectNumberBunksTo('8x6')">
              8x6
            </li>
            <li data-value="8x8" @click="selectNumberBunksTo('8x8')">
              8x8
            </li>

          </ul>
        </ul>
      </div>
      <div class="marke_select_div relative mt-[14px] lg:mt-2 lg:w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Axles</h2>
        <select
          class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="axles">
          <option value="" selected>Any</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
      </div>
      
    </div>
  </div>
</template>
<script>
import { useTrailerStore } from '../../../store/trailerDataStore';
export default {
  data() {
    return {
      isCheckedAwning: false,
      isCheckedDisabledAccessible: false,
      isCheckedRearGarage: false,
      isCheckedSolarEnergySystem: false,
      isCheckedSelf: false,
      selectedParking: [],
      selectedVehicle: '',
      axles: "",
      radio: "",
      parking: "",
      cruiseControl: "",
      airConditioning: "",
      trailerCoupling: "",
      price: "",
      priceOpen: false,
      priceTo: "",
      drivinCab: "",
      priceToOpen: false,
      lengthGVW: "",
      lengthGVWOpen: false,
      lengthGVWTo: "",
      lengthGVWToOpen: false,
      numberBunks: "",
      numberBunksOpen: false,
      numberBunksTo: "",
      numberBunksToOpen: false,
    };
  },
  watch: {
    axles(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    drivinCab(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    radio(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    parking(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    cruiseControl(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    airConditioning(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    trailerCoupling(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    price(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    priceTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    lengthGVW(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    lengthGVWTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    numberBunks(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
    numberBunksTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
  },
  methods: {
    updateTrailerData() {
      const trailerStore = useTrailerStore();
      const trailerData = trailerStore.trailerData;
      trailerData.trailer_axles = this.axles;
      trailerData.trailer_gvw_from = this.lengthGVW;
      trailerData.trailer_gvw_to = this.lengthGVWTo;
      trailerData.trailer_load_capacity_from = this.numberBunks;
      trailerData.trailer_load_capacity_to = this.numberBunksTo;
      trailerStore.updateTrailerData();
    },
    toggleShowCheckbox(index, parkingName) {
      const isChecked = !this.selectedParking.includes(parkingName);
      if (isChecked) {
        this.selectedParking.push(parkingName);
      } else {
        const index = this.selectedParking.indexOf(parkingName);
        if (index !== -1) {
          this.selectedParking.splice(index, 1);
        }
      }
    },
    // price
    openPriceDropdown() {
      this.priceOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdownOnClickOutside);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price");
      if (!dropdownElement.contains(event.target)) {
        this.priceOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },
    //price to
    openPriceToDropdown() {
      this.priceToOpen = true;
      document.addEventListener(
        "click",
        this.closePriceToDropdownOnClickOutside
      );
    },
    closePriceToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price-to");
      if (!dropdownElement.contains(event.target)) {
        this.priceToOpen = false;
        document.removeEventListener(
          "click",
          this.closePriceToDropdownOnClickOutside
        );
      }
    },
    selectNumberPriceTo(option) {
      this.priceTo = option;
      this.priceToOpen = false;
    },
    closePriceToDropdown() {
      this.priceOpenTo = false;
    },
    selectNumberPrice(option) {
      this.price = option;
      this.priceOpen = false;
    },
    closePriceDropdown() {
      this.priceOpen = false;
    },
    //price to
    openlenthGVWToDropdown() {
      this.lengthGVWToOpen = true;
      document.addEventListener(
        "click",
        this.closelenthGVWToDropdownOnClickOutside
      );
    },
    closelenthGVWToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".length-to");
      if (!dropdownElement.contains(event.target)) {
        this.lengthGVWToOpen = false;
        document.removeEventListener(
          "click",
          this.closelenthGVWToDropdownOnClickOutside
        );
      }
    },
    selectNumberlengthGVWTo(option) {
      this.lengthGVWTo = option;
      this.lengthGVWToOpen = false;
    },
    closelengthGVWToDropdown() {
      this.lengthGVWOpenTo = false;
    },

    //price 
    openlenthGVWoDropdown() {
      this.lengthGVWOpen = true;
      document.addEventListener(
        "click",
        this.closelenthGVWDropdownOnClickOutside
      );
    },
    closelenthGVWDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".length");
      if (!dropdownElement.contains(event.target)) {
        this.lengthGVWOpen = false;
        document.removeEventListener(
          "click",
          this.closelenthGVWDropdownOnClickOutside
        );
      }
    },
    selectNumberlengthGVW(option) {
      this.lengthGVW = option;
      this.lengthGVWOpen = false;
    },
    closelengthGVWDropdown() {
      this.lengthGVWOpen = false;
    },
    //price to
    openNumberBunksToDropdown() {
      this.numberBunksToOpen = true;
      document.addEventListener(
        "click",
        this.closenumberBunksToDropdownOnClickOutside
      );
    },
    closenumberBunksToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".number-to");
      if (!dropdownElement.contains(event.target)) {
        this.numberBunksToOpen = false;
        document.removeEventListener(
          "click",
          this.closenumberBunksToDropdownOnClickOutside
        );
      }
    },
    selectNumberBunksTo(option) {
      this.numberBunksTo = option;
      this.numberBunksToOpen = false;
    },
    closenumberBunksToDropdown() {
      this.numberBunksOpenTo = false;
    },

    //price 
    openNumberBunksDropdown() {
      this.numberBunksOpen = true;
      document.addEventListener(
        "click",
        this.closenumberBunksDropdownOnClickOutside
      );
    },
    closenumberBunksDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".number");
      if (!dropdownElement.contains(event.target)) {
        this.numberBunksOpen = false;
        document.removeEventListener(
          "click",
          this.closenumberBunksDropdownOnClickOutside
        );
      }
    },
    selectNumberBunks(option) {
      this.numberBunks = option;
      this.numberBunksOpen = false;
    },
    closenumberBunksDropdown() {
      this.numberBunksOpen = false;
    },

  },
  components: {},
};
</script>
<style scoped>
select {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.custom-checkbox input[type="checkbox"] {
  display: none;
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
  fill: #fff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked+.icon {
  fill: #fff;
  background: #e04b00;
}
</style>
