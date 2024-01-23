<template>
  <div
    class="salon-filter flex flex-wrap gap-x-[20px] lg:gap-x-[60px] items-center  xl:p-[20px]"
  >
    <!-- seats -->
    <div class="seats dropdown-container">
      <h2 class="mt-2 text-sm lg:text-[14px]">{{ $t("message.filter_page.numseat") }}</h2>
      <div class="input-container flex relative mt-[10px]">
        <input
          type="from"
          class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="from"
          v-model="numberSeats"
          @focus="openSeatsDropdown"
          @blur="openSeatsDropdown"
        />

        <div
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          @click="openSeatsDropdown"
        >
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <ul
        v-if="seatsOpen"
        class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
      >
        <ul>
          <li key="" @click="selectNumberSeats('Any')">{{ $t("message.filter_page.any") }}</li>
          <li key="2" @click="selectNumberSeats('2')">2</li>
          <li key="3" @click="selectNumberSeats('3')">3</li>
          <li key="4" @click="selectNumberSeats('4')">4</li>
          <li key="5" @click="selectNumberSeats('5')">5</li>
          <li key="6" @click="selectNumberSeats('6')">6</li>
          <li key="7" @click="selectNumberSeats('7')">7</li>
          <li key="8" @click="selectNumberSeats('8')">8</li>
          <li key="9" @click="selectNumberSeats('9')">9</li>
        </ul>
      </ul>
    </div>
    <div class="seats-to dropdown-container">
      <div class="input-container flex relative mt-[35px]">
        <input
          type="from"
          class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="to"
          v-model="numberSeatsTo"
          @focus="openSeatsToDropdown"
          @blur="openSeatsToDropdown"
        />

        <div
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          @click="openSeatsToDropdown"
        >
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <ul
        v-if="seatsToOpen"
        class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
      >
        <ul>
          <li key="" @click="selectNumberSeatsTo('Any')">{{ $t("message.filter_page.any") }}</li>
          <li key="2" @click="selectNumberSeatsTo('2')">2</li>
          <li key="3" @click="selectNumberSeatsTo('3')">3</li>
          <li key="4" @click="selectNumberSeatsTo('4')">4</li>
          <li key="5" @click="selectNumberSeatsTo('5')">5</li>
          <li key="6" @click="selectNumberSeatsTo('6')">6</li>
          <li key="7" @click="selectNumberSeatsTo('7')">7</li>
          <li key="8" @click="selectNumberSeatsTo('8')">8</li>
          <li key="9" @click="selectNumberSeatsTo('9')">9</li>
        </ul>
      </ul>
    </div>
    <div class="seats relative mt-2">
      <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.numdoor") }}</h2>
      <select
        class="mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
        v-model="numDoor"
      >
        <option value="">{{ $t("message.filter_page.any") }}</option>
        <option value="2/3">2/3</option>
        <option value="3/5">3/5</option>
        <option value="6/7">6/7</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
    </div>
    <div class="seats relative mt-2">
      <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.sliddoor") }}</h2>
      <select
        class="mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
        v-model="slidingDoor"
      >
        <option value="" selected>{{ $t("message.filter_page.any") }}</option>
        <option class="Left">{{ $t("message.side.left") }}</option>
        <option class="Right">{{ $t("message.side.right") }}</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import { useCarStore } from "@/store/carDataStore";
export default {
  data() {
    return {
      numberSeats: "",
      numberSeatsTo: "",
      seatsOpen: false,
      seatsToOpen: false,
      numDoor: "",
      slidingDoor: "",
    };
  },
  watch: {
    numberSeats(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    numDoor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    slidingDoor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
  },
  methods: {
    updateCarData() {
      const carStore = useCarStore();
      carStore.carData.car_number_seats = this.numberSeats;
      carStore.carData.car_number_door = this.numDoor;
      carStore.carData.car_sliding_door = this.slidingDoor;
      carStore.updateCarData();
    },
    openSeatsDropdown() {
      this.seatsOpen = true;
      document.addEventListener("click", this.closeSeatsDropdownOnClickOutside);
    },
    closeSeatsDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".seats");
      if (!dropdownElement.contains(event.target)) {
        this.seatsOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },
    selectNumberSeats(option) {
      this.numberSeats = option;
      this.seatsOpen = false;
    },
    closeSeatsDropdown() {
      this.seatsOpen = false;
      document.removeEventListener(
        "click",
        this.closeSeatsDropdownOnClickOutside
      );
    },
    openSeatsToDropdown() {
      this.seatsToOpen = true;
      document.addEventListener(
        "click",
        this.closeSeatsToDropdownOnClickOutside
      );
    },
    closeSeatsToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".seats-to");
      if (!dropdownElement.contains(event.target)) {
        this.seatsToOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsToDropdownOnClickOutside
        );
      }
    },
    selectNumberSeatsTo(option) {
      this.numberSeatsTo = option;
      this.seatsToOpen = false;
    },
    closeSeatsToDropdown() {
      this.seatsToOpen = false;
      document.removeEventListener(
        "click",
        this.closeSeatsToDropdownOnClickOutside
      );
    },
  },
};
</script>
<style scoped>
.mark-select {
  border: 1px solid #111;
}
.mark-input2 {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}

.dropdown-options {
  position: absolute;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-options li {
  padding: 0.5em;
  cursor: pointer;
}

.dropdown-options li:hover {
  background-color: #f0f0f0;
}
</style>
