<template>
  <div class="for-example">
    <div class="top lg:flex  w-[250px] sm:w-[350px] items-center gap-[20px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[16px] ">Mark</h2>
          <select
            class="mark-select w-full  lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px]"
          >
            <optgroup>
              <option value="14600">Lamborghini</option>
              <option value="14700">Lancia</option>
              <option value="14800">Land Rover</option>
              <option value="14845">Landwind</option>
             
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>
      <div class="relative">
        <h2 class="text-sm lg:text-[16px] mt-2">Model</h2>
        <select
          class="mark-select w-full   lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
        <h2 class="text-sm lg:text-[16px] mt-2" >Registration from</h2>
        <div class="mark-select relative">
          <input
            placeholder="Beliebig"
            class="no-spinner mark-select w-full   lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal"
            type="number"
            pattern="\d*"
            v-model="selectedYear"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] "
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
            class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <div class="">
        <h2 class="text-sm lg:text-[16px] mt-2">Kilometer bis</h2>
        <div class="marke_select_div flex">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input mark-select w-full   lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:right-[0px]"
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
            class="arrow w-[7px] h-[7px] absolute top-[230px] right-[7px] lg:right-[6px] xl:right-[7px] lg:top-[40px]"
          ></span>
        </div>
      </div>
    </div>
    <div class="bottom-all lg:flex  w-[250px] lg:w-full sm:w-[350px] items-center gap-[20px]">
      <div >
        <h2 class="mt-2 text-sm lg:text-[16px]">Type of ad</h2>
        <div class="Kaufen_div ">
          <button
            class="Kaufen p-[4px] w-[150px]  lg:w-[75px] xl:w-[85px]  bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1"
            :class="{ 'active-Kaufen': activeTab === 'tab-1' }"
          >
            Sell
          </button>
          <button
            class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2"
            :class="{ 'active-Kaufen': activeTab === 'tab-2' }"
          >
            Buy
          </button>
        </div>
      </div>
      <div class="tab-content">
        <div class="bottom tab-panel lg:flex items-center gap-[20px]">
          <div class="mt-2">
            <h2 class="text-sm lg:text-[16px]">Price up to</h2>
            <div class="marke_select_div">
              <input
                placeholder="Beliebig"
                class="mark_input mark-select  w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
                v-model="price"
                @change="updateSelect"
              />
              
            </div>
          </div>
          <div>
            <h2 class="mt-2 text-sm lg:text-[16px]">City or ZIP code</h2>
            <input
              class="mark_input_zip mark-select  w-full  lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
            />
          </div>
          <div
            class="resultast_div flex items-center gap-[20px] lg:gap-[5px] w-full  lg:w-[150px] xl:w-[170px] h-[35px] bg-[#e04b00] rounded-[8px] mt-[30px]"
          >
            <svg
              class="icon  ml-[45px] sm:ml-[90px] lg:ml-[20px]"
              viewBox="0 0 24 24"
              fill="none"
							width="16"
							height="16"
            >
              <path
                d="M16.215 18.336a9 9 0 112.121-2.121L23.121 21 21 23.121l-4.785-4.785zM11 17.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"
                fill="#fff"
              ></path>
            </svg>

            <p class="text-white text-[18px] lg:text-[16px]">1000</p>
            <h1 class="text-white text-[18px] lg:text-[16px]">results</h1>
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
			activeTab: "tab-1",
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
			
      if (this.selectedMake === "tab-1") {
        this.activeTab = "tab-1";
      } else if (this.selectedMake === "tab-2") {
        this.activeTab = "tab-2";
      }
			
    },
		showTab1() {
      this.activeTab = "tab-1";
    },
    showTab2() {
      this.activeTab = "tab-2";
    },
  },
};
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
