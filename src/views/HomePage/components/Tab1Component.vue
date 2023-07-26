<template>
  <div class="for-example">
    <div class="top lg:flex w-[250px] sm:w-[350px] items-center gap-[20px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[16px]">
            {{ $t("message.selects.mark") }}
          </h2>
          <select
            class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px]"
          >
            <option value="14600">Beliebig</option>
            <optgroup>
              <option value="14600">Lamborghini</option>
              <option value="14700">Lancia</option>
              <option value="14800">Land Rover</option>
              <option value="14845">Landwind</option>
              <option value="31933">LEVC</option>
              <option value="15200">Lexus</option>
              <option value="15400">Ligier</option>
              <option value="15500">Lincoln</option>
              <option value="15900">Lotus</option>
              <option value="31934">Lynk &amp;Co</option>
              <option value="16200">Mahindra</option>
              <option value="16500">MAN</option>
              <option value="16600">Maserati</option>
              <option value="31896">Maxus</option>
              <option value="16700">Maybach</option>
              <option value="16800">Mazda</option>
              <option value="137">McLaren</option>
              <option value="17200">Mercedes-Benz</option>
              <option value="17300">MG</option>
              <option value="30011">Microcar</option>
              <option value="17500">MINI</option>
              <option value="17700">Mitsubishi</option>
              <option value="17900">Morgan</option>
              <option value="31954">NIO</option>
              <option value="18700">Nissan</option>
              <option value="18875">NSU</option>
              <option value="18975">Oldsmobile</option>
              <option value="19000">Opel</option>
              <option value="31955">ORA</option>
              <option value="149">Pagani</option>
              <option value="19300">Peugeot</option>
              <option value="19600">Piaggio</option>
              <option value="19800">Plymouth</option>
              <option value="4">Polestar</option>
              <option value="20000">Pontiac</option>
              <option value="20100">Porsche</option>
              <option value="20200">Proton</option>
              <option value="20700">Renault</option>
              <option value="21600">Rolls-Royce</option>
              <option value="21700">Rover</option>
              <option value="125">Ruf</option>
              <option value="21800">Saab</option>
              <option value="22000">Santana</option>
              <option value="22500">Seat</option>
              <option value="22900">Skoda</option>
              <option value="23000">Smart</option>
              <option value="188">speedART</option>
              <option value="100">Spyker</option>
              <option value="23100">Ssangyong</option>
              <option value="23500">Subaru</option>
              <option value="23600">Suzuki</option>
              <option value="247">SWM</option>
              <option value="23800">Talbot</option>
              <option value="23825">Tata</option>
              <option value="189">TECHART</option>
              <option value="135">Tesla</option>
              <option value="24100">Toyota</option>
              <option value="24200">Trabant</option>
              <option value="24400">Triumph</option>
              <option value="24500">TVR</option>
              <option value="25200">Volkswagen</option>
              <option value="25100">Volvo</option>
              <option value="25300">Wartburg</option>
              <option value="113">Westfield</option>
              <option value="31956">WEY</option>
              <option value="25650">Wiesmann</option>
              <option value="1400">Andere</option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>
      <div class="relative">
        <h2 class="text-sm lg:text-[16px] mt-2">
          {{ $t("message.selects.model") }}
        </h2>
        <select
          class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
        <h2 class="text-sm lg:text-[16px] mt-2">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="mark-select relative">
          <input
            placeholder="Beliebig"
            class="no-spinner mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal"
            type="number"
            pattern="\d*"
            v-model="selectedYear"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px]"
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
        <h2 class="text-sm lg:text-[16px] mt-2">
          {{ $t("message.selects.kilometr") }}
        </h2>
        <!-- KIllometer bis -->
        <div class="marke_select_div flex relative">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
            class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:right-[7px] lg:top-[13px]"
          ></span>
        </div>
      </div>
    </div>
    <div
      class="bottom-all lg:flex w-[250px] lg:w-full sm:w-[350px] items-center gap-[20px]"
    >
      <div>
        <h2 class="mt-2 text-sm lg:text-[16px]">
          {{ $t("message.selects.ad") }}
        </h2>
        <div class="Kaufen_div">
          <button
            class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1"
            :class="{ 'active-Kaufen': activeTab === 'tab-1' }"
          >
            {{ $t("message.btn.sell") }}
          </button>
          <button
            class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2"
            :class="{ 'active-Kaufen': activeTab === 'tab-2' }"
          >
            {{ $t("message.btn.buy") }}
          </button>
        </div>
      </div>
      <div class="tab-content">
        <div class="bottom tab-panel lg:flex items-center gap-[20px]">
          <div class="mt-2">
            <h2 class="text-sm lg:text-[16px]">
              {{ $t("message.selects.price") }}
            </h2>
            <div class="marke_select_div">
              <input
                placeholder="Beliebig"
                class="mark_input mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
                v-model="price"
                @change="updateSelect"
              />
            </div>
          </div>
          <div class="relative">
            <h2 class="mt-2 text-sm lg:text-[16px]">
              {{ $t("message.selects.zip") }}
            </h2>
            <input
              class="mark_input_zip mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
							v-model="cityName"
            />
						<div class="icon absolute top-[30px] sm:left-[330px] lg:top-[38px] left-[230px] lg:left-[130px] xl:left-[150px] cursor-pointer" @click="getLocation()">
							<img src="../../../assets/images/icon-location.svg" alt="">
						</div>
          </div>
          <FilterBtn />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import axios from "axios";
import FilterBtn from "../../../components/FilterBtn.vue";
export default {
  data() {
    return {
      selectedMake: "",
      selectedYear: "",
      killometres: "",
      price: "",
      activeTab: "tab-1",
			cityName: "",
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
    async showTab2() {
      this.activeTab = "tab-2";
      const res = http.get("https://api.auto-data.net/image-database");

      console.log(res.data);
    },
		async getLocation() {
      try {
        const coordinates = await this.$getLocation();
        console.log("Latitude:", coordinates.lat);
        console.log("Longitude:", coordinates.lng);
        
        // Выполняем обратное геокодирование
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&format=json`;
        const response = await axios.get(url);

        if (response.status === 200) {
          const data = response.data;
          const city = data.address.city || data.address.village || data.address.town || data.address.hamlet || data.address.suburb || "Unknown";
          this.cityName = city; // Сохраняем результат в свойство данных cityName
        } else {
          console.log("Failed to retrieve city name");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { FilterBtn },
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
select:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}
input:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

select:focus {
  outline: none;
  box-shadow: 0 0 2px 1px #6a6acc;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
