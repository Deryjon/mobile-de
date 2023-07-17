<template>
  <div class="for-example">
    <div class="top flex items-center gap-[20px]">
			<div class="mark">
        <div>
          <div class="relative">
            <h2>Make</h2>
            <select
              class="mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            >
              <option>Beliebig</option>

              <option value="1900">Audi</option>
              <option value="3500">BMW</option>
              <option value="17200">Mercedes-Benz</option>
              <option value="25200">Volkswagen</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
        </div>
      </div>
      <div class="relative">
        <h2>Model</h2>
        <select
          class="mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
          placeholder="Beliebig"
        >
          <option value="">Beliebig</option>
          <option value="71">2002</option>
          <option value="110">214 Active Tourer</option>
          <option value="116">214 Gran Tourer</option>
          <option value="106">216</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div>
        <h2>Registration from</h2>
        <div class="mark-select relative">
          <input
            placeholder="Beliebig"
            class="no-spinner mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal"
            type="number"
            pattern="\d*"
            v-model="selectedYear"
          />
          <select
            class="mark-input2 bg-[#807e7e] w-[20px] h-[35px] outline-none py-[7px] absolute lg:right-[28px] xl:right-[0px]"
            v-model="selectedYear"
            @change="updateSelect"
          >
            <option value="50">50 € mtl</option>
            <option value="100">100 € mtl</option>
            <option value="150">150 € mtl</option>
            <option value="200">200 € mtl</option>
            <option value="250">250 € mtl</option>
            <option value="300">300 € mtl</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute lg:right-[35px] xl:right-[7px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <div class="">
        <h2>Kilometer bis</h2>
        <div class="marke_select_div flex">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
          />
          <select
            class="mark-input2 bg-[#807e7e] w-[20px] h-[35px] outline-none py-[7px] absolute lg:right-[55px] xl:right-[0px]"
            v-model="killometres"
            @change="updateSelect"
          >
            <option value="5000">5.000 km</option>
            <option value="10000">10.000 km</option>
            <option value="20000">20.000 km</option>
            <option value="30000">30.000 km</option>
            <option value="40000">40.000 km</option>
            <option value="50000">50.000 km</option>
            <option value="60000">60.000 km</option>
            <option value="70000">70.000 km</option>
            <option value="80000">80.000 km</option>
            <option value="90000">90.000 km</option>
            <option value="100000">100.000 km</option>
            <option value="125000">125.000 km</option>
            <option value="150000">150.000 km</option>
            <option value="175000">175.000 km</option>
            <option value="200000">200.000 km</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute lg:right-[61px] xl:right-[7px] top-[38px]"
          ></span>
        </div>
      </div>
    </div>
    <div class="bottom-all flex gap-[20px]">
      <div class="relative">
        <h2 class="mt-2">Category</h2>

        <select
          class="mark-select mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px]"
        >
          <option>Beliebig</option>

          <option value="1900">Audi</option>
          <option value="3500">BMW</option>
          <option value="17200">Mercedes-Benz</option>
          <option value="25200">Volkswagen</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>

      <div class="tab-content">
        <div class="bottom tab-panel flex items-center gap-[20px]">
          <div class="mt-2">
            <h2 class="bis">Price up to</h2>
            <div class="marke_select_div">
              <input
                placeholder="Beliebig"
                class="mark_input mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
                v-model="price"
                @change="updateSelect"
              />
              <select
                class="marke_input2 mark-input2 bg-[#807e7e] w-[20px] h-[35px] right-[320px] xl:right-[380px] outline-none py-[7px] absolute"
                v-model="price"
              >
							<option value="50">50 € mtl</option>
            <option value="100">100 € mtl</option>
            <option value="150">150 € mtl</option>
            <option value="200">200 € mtl</option>
            <option value="250">250 € mtl</option>
            <option value="300">300 € mtl</option>
              </select>
              <span
                class="arrow w-[7px] h-[7px] absolute lg:right-[325px] xl:right-[386px] top-[105px]"
              ></span>
            </div>
          </div>
          <div>
            <h2 class="mt-2">City or ZIP code</h2>
            <input
              class="mark_input_zip mark-select w-[100px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
            />
          </div>
          <div
            class="resultast_div flex items-center gap-[8px] w-[100px] lg:w-[170px] h-[35px] bg-[#e04b00] rounded-[8px] mt-[30px] px-[20px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.215 18.336a9 9 0 112.121-2.121L23.121 21 21 23.121l-4.785-4.785zM11 17.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"
                fill="#fff"
              ></path>
            </svg>
            <p class="text-white">1000</p>
            <h1 class="text-white">results</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedMake: "",
      selectedYear: "",
      killometres: "",
      price: "",
    };
  },

  methods: {
    updateInput() {
      this.selectedYear = this.selectedMake;
      this.killometres = this.selectedMake;
    },
    updateSelect() {
      this.selectedMake = this.selectedYear;
      this.selectedMake = this.killometres;
  },
}}
</script>
<style>
.mark-input2 {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
.Kaufen:hover {
  box-shadow: 0 0 2px 1px #eaccb4;
}
.active-Kaufen {
  background-color: #fffaf6;
  border: 1px solid #eaccb4;
  color: #000;
}
</style>
