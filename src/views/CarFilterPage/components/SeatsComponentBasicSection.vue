<template>
  <div class="salon-filter flex flex-wrap gap-x-[80px] items-center p-[20px]">
    <!-- seats -->
    <div class="seats">
      <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
      <div class="marke_select_div relative mt-[10px]">
        <input
          placeholder="from"
          class="mark_input mark-select text-[14px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
    </div>

    <!-- seats -->
    <div class="marke_select_div relative mt-[35px]">
        <input
          placeholder="to"
          class="mark_input mark-select text-[14px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
      </div>
    <!-- doors -->
    <div class="seats relative mt-2">
      <h2 class="text-sm lg:text-[14px]">Number of doors</h2>
      <select
        class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
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
        class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
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
      selectedNumberSeats: "",
      numberSeatsTo: "",
      selectedNumberSeatsTo: "",
      selectedMake: "",
    };
  },
  methods: {
    updateSelectNumberSeats() {
      this.numberSeats = this.selectedNumberSeats;
      this.selectedNumberSeats = this.selectedMake;
    },
    updateSelectNumberSeatsTo() {
      this.numberSeatsTo = this.selectedNumberSeatsTo;
      this.selectedNumberSeatsTo = this.selectedMake;
    },
  },
};
</script>
<style scoped>
.mark-select {
  border: 1px solid #111;
}
.mark-input2{
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
</style>
