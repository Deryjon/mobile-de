<template>
  <div
    class="salon-filter flex flex-wrap gap-x-[20px] lg:gap-x-[80px] items-center pl-[20px] xl:p-[20px]"
  >
    <!-- seats -->
    <div class="seats dropdown-container">
      <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
      <div class="input-container flex relative mt-[10px]">
        <input
          type="from"
          class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="from"
          v-model="numberSeats"
          @focus="openSeatsDropdown"
          @blur="closeSeatsDropdown"
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
        class="dropdown-options w-[170px] text-[10px] lg:text-[12px]"
      >
        <ul>
          <li key="any" @click="selectNumberSeats('Any')">Any</li>
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
    <!-- <div class="seats">
      <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
      <div class="marke_select_div relative mt-[10px]">
        <input
          placeholder="from"
          class="mark_input mark-select text-[14px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
          type="number"
          pattern="\d*"
          v-model="numberSeats"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedNumberSeats"
          @change="updateSelectNumberSeats"
        >
          <option value="any">Any</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
    </div> -->

    <!-- seats -->
    <div class="seats dropdown-container">
      <div class="input-container flex relative mt-[35px]">
        <input
          type="from"
          class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="from"
          v-model="numberSeatsTo"
          @focus="openSeatsToDropdown"
          @blur="closeSeatsToDropdown"
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
        class="dropdown-options w-[170px] text-[10px] lg:text-[12px]"
      >
        <ul>
          <li key="any" @click="selectNumberSeatsTo('Any')">Any</li>
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
    <!-- <div class="marke_select_div relative mt-[35px]">
      <input
        placeholder="to"
        class="mark_input mark-select text-[14px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
        type="number"
        pattern="\d*"
        v-model="numberSeatsTo"
      />
      <select
        class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
        v-model="selectedNumberSeatsTo"
        @change="updateSelectNumberSeatsTo"
      >
        <option value="any">Any</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <span
        class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
      ></span>
    </div> -->
    <!-- doors -->
    <div class="seats relative mt-2">
      <h2 class="text-sm lg:text-[14px]">Number of doors</h2>
      <select
        class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
      >
        <option value="">Any</option>
        <option value="">2/3</option>
        <option value="">3/5</option>
        <option value="">6/7</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
    </div>
    <!-- sliding-door -->
    <div class="seats relative mt-2">
      <h2 class="text-sm lg:text-[14px]">Sliding door</h2>
      <select
        class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
      >
        <option value="">Any</option>
        <option value="">Sliding door right</option>
        <option value="">Sliding door left</option>
        <option value="">Sliding door both-sided</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberSeats: "",
      numberSeatsTo: "",

      seatsOpen: false,
      seatsToOpen: false,
    };
  },
  methods: {
    openSeatsDropdown() {
      this.seatsOpen = true;
      this.filteredOptions = this.options;
    },
    selectNumberSeats(option) {
      this.numberSeats = option;
      this.seatsOpen = false;
    },
    closeSeatsDropdown() {
      this.seatsOpen = false;
    },
    openSeatsToDropdown() {
      this.seatsToOpen = true;
      this.filteredOptions = this.options;
    },
    selectNumberSeatsTo(option) {
      this.numberSeatsTo = option;
      this.seatsToOpen = false;
    },
    closeSeatsToDropdown() {
      this.seatsToOpen = false;
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
