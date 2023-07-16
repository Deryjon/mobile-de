<template>
  <div class="for-example">
    <div class="top flex items-center gap-[20px]">
      <div class="mark">
        <div>
          <div class="relative">
            <h2>Mark</h2>
            <select
              class="mark-select w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px]"
            >
              <option>Beliebig</option>
              <optgroup label="Top-Marken">
                <option value="1900">Audi</option>
                <option value="3500">BMW</option>
                <option value="17200">Mercedes-Benz</option>
                <option value="25200">Volkswagen</option>
              </optgroup>
              <optgroup label="Alle Marken">
                <option value="140">Abarth</option>
                <option value="203">AC</option>
                <option value="375">Acura</option>
                <option value="31930">Aiways</option>
                <option value="800">Aixam</option>
                <option value="900">Alfa Romeo</option>
                <option value="1100">ALPINA</option>
                <option value="121">Artega</option>
                <option value="1750">Asia Motors</option>
                <option value="1700">Aston Martin</option>
                <option value="1900">Audi</option>
                <option value="2000">Austin</option>
                <option value="1950">Austin Healey</option>
                <option value="31863">BAIC</option>
                <option value="3100">Bentley</option>
                <option value="3500">BMW</option>
                <option value="3850">Borgward</option>
                <option value="4025">Brilliance</option>
                <option value="4350">Bugatti</option>
                <option value="4400">Buick</option>
                <option value="31953">BYD</option>
                <option value="4700">Cadillac</option>
                <option value="112">Casalini</option>
                <option value="5300">Caterham</option>
                <option value="83">Chatenet</option>
                <option value="5600">Chevrolet</option>
                <option value="5700">Chrysler</option>
                <option value="5900">Citroën</option>
                <option value="6200">Cobra</option>
                <option value="6325">Corvette</option>
                <option value="3">Cupra</option>
                <option value="6600">Dacia</option>
                <option value="6800">Daewoo</option>
                <option value="7000">Daihatsu</option>
                <option value="7400">DeTomaso</option>
                <option value="31864">DFSK</option>
                <option value="7700">Dodge</option>
                <option value="255">Donkervoort</option>
                <option value="235">DS Automobiles</option>
                <option value="31931">e.GO</option>
                <option value="31932">Elaris</option>
                <option value="8600">Ferrari</option>
                <option value="8800">Fiat</option>
                <option value="172">Fisker</option>
                <option value="9000">Ford</option>
                <option value="205">GAC Gonow</option>
                <option value="204">Gemballa</option>
                <option value="270">Genesis</option>
                <option value="9900">GMC</option>
                <option value="122">Grecav</option>
                <option value="186">Hamann</option>
                <option value="10850">Holden</option>
                <option value="11000">Honda</option>
                <option value="11050">Hummer</option>
                <option value="11600">Hyundai</option>
                <option value="11650">Infiniti</option>
                <option value="11900">Isuzu</option>
                <option value="12100">Iveco</option>
                <option value="30708">JAC</option>
                <option value="12400">Jaguar</option>
                <option value="12600">Jeep</option>
                <option value="13200">Kia</option>
                <option value="13450">Koenigsegg</option>
                <option value="13900">KTM</option>
                <option value="14400">Lada</option>
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
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
        </div>
      </div>
      <div class="relative">
        <h2>Modell</h2>
        <select
          class="marke_select w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
            class="no-spinner mark_input outline-none bg-white w-[170px] h-[35px] rounded-[10px] py-[6px] px-[5px] font-normal"
            type="number"
            pattern="\d*"
            v-model="selectedYear"
          />
          <select
            class="mark-input2 bg-[#807e7e] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px]"
            v-model="selectedYear"
            @change="updateSelect"
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1985">1985</option>
            <option value="1980">1980</option>
            <option value="1975">1975</option>
            <option value="1970">1970</option>
            <option value="1965">1965</option>
            <option value="1960">1960</option>
            <option value="1900">1900</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-4"
          ></span>
        </div>
      </div>
      <div class="">
        <h2>Kilometer bis</h2>
        <div class="marke_select_div flex">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
          />
          <select
            class="mark-input2 bg-[#807e7e] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px]"
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
            class="arrow w-[7px] h-[7px] absolute right-[7px] top-[38px]"
          ></span>
        </div>
      </div>
    </div>
    <div class="bottom-all flex gap-[20px]">
      <div>
        <h2 class="mt-2">Type of ad</h2>
        <div class="Kaufen_div">
          <button
            class="Kaufen p-[4px] w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1"
            :class="{ 'active-Kaufen': activeTab === 'tab-1' }"
          >
            Sell
          </button>
          <button
            class="Kaufen p-[4px] w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2"
            :class="{ 'active-Kaufen': activeTab === 'tab-2' }"
          >
            Buy
          </button>
        </div>
      </div>
      <div class="tab-content">
        <div
          class="bottom tab-panel flex items-center gap-[20px]"
          v-show="activeTab === 'tab-1'"
        >
          <div class="mt-2">
            <!-- <h2 class="bis active-bis">Price up to</h2> -->
            <h2 class="bis">Price up to</h2>
            <div class="marke_select_div">
              <input
                placeholder="Beliebig"
                class="mark_input w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
								v-model="price"
            @change="updateSelect"
              />
              <select
                class="marke_input2 mark-input2 bg-[#807e7e] w-[20px] h-[35px] right-[380px] outline-none py-[7px] absolute"
								v-model="price"
              >
                <option value="500">500 €</option>
                <option value="1000">1.000 €</option>
                <option value="1500">1.500 €</option>
                <option value="2000">2.000 €</option>
                <option value="2500">2.500 €</option>
                <option value="3000">3.000 €</option>
                <option value="3500">3.500 €</option>
                <option value="4000">4.000 €</option>
                <option value="4500">4.500 €</option>
                <option value="5000">5.000 €</option>
                <option value="6000">6.000 €</option>
                <option value="7000">7.000 €</option>
                <option value="8000">8.000 €</option>
                <option value="9000">9.000 €</option>
                <option value="10000">10.000 €</option>
                <option value="11000">11.000 €</option>
                <option value="12000">12.000 €</option>
                <option value="13000">13.000 €</option>
                <option value="14000">14.000 €</option>
                <option value="15000">15.000 €</option>
                <option value="17500">17.500 €</option>
                <option value="20000">20.000 €</option>
                <option value="22500">22.500 €</option>
                <option value="25000">25.000 €</option>
                <option value="27500">27.500 €</option>
                <option value="30000">30.000 €</option>
                <option value="35000">35.000 €</option>
                <option value="40000">40.000 €</option>
                <option value="45000">45.000 €</option>
                <option value="50000">50.000 €</option>
                <option value="55000">55.000 €</option>
                <option value="60000">60.000 €</option>
                <option value="70000">70.000 €</option>
                <option value="80000">80.000 €</option>
                <option value="90000">90.000 €</option>
              </select>
              <span
                class="arrow w-[7px] h-[7px] absolute right-[386px] top-[105px]"
              ></span>
            </div>
          </div>
          <div>
            <h2 class="mt-2">City or ZIP code</h2>
            <input
              class="mark_input_zip w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
            />
          </div>
          <div
            class="resultast_div flex items-center gap-[8px] w-[170px] h-[35px] bg-[#e04b00] rounded-[8px] mt-[30px] px-[20px]"
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
        <div
          class="bottom tab-panel flex items-center gap-[20px]"
          v-show="activeTab === 'tab-2'"
        >
          <div class="mt-2">
            <!-- <h2 class="bis active-bis">Price up to</h2> -->
            <h2 class="bis">Leasing rate up to</h2>
            <div class="marke_select_div">
              <input
                placeholder="Beliebig"
                class="mark_input w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
								v-model="price"
            @change="updateSelect"
              />
              <select
                class="marke_input2 mark-input2 bg-[#807e7e] w-[20px] h-[35px] right-[380px] outline-none py-[7px] absolute"
								v-model="price"
              >
                <option value="500">500 €</option>
                <option value="1000">1.000 €</option>
                <option value="1500">1.500 €</option>
                <option value="2000">2.000 €</option>
                <option value="2500">2.500 €</option>
                <option value="3000">3.000 €</option>
                <option value="3500">3.500 €</option>
                <option value="4000">4.000 €</option>
                <option value="4500">4.500 €</option>
                <option value="5000">5.000 €</option>
                <option value="6000">6.000 €</option>
                <option value="7000">7.000 €</option>
                <option value="8000">8.000 €</option>
                <option value="9000">9.000 €</option>
                <option value="10000">10.000 €</option>
                <option value="11000">11.000 €</option>
                <option value="12000">12.000 €</option>
                <option value="13000">13.000 €</option>
                <option value="14000">14.000 €</option>
                <option value="15000">15.000 €</option>
                <option value="17500">17.500 €</option>
                <option value="20000">20.000 €</option>
                <option value="22500">22.500 €</option>
                <option value="25000">25.000 €</option>
                <option value="27500">27.500 €</option>
                <option value="30000">30.000 €</option>
                <option value="35000">35.000 €</option>
                <option value="40000">40.000 €</option>
                <option value="45000">45.000 €</option>
                <option value="50000">50.000 €</option>
                <option value="55000">55.000 €</option>
                <option value="60000">60.000 €</option>
                <option value="70000">70.000 €</option>
                <option value="80000">80.000 €</option>
                <option value="90000">90.000 €</option>
              </select>
							<span
                class="arrow w-[7px] h-[7px] absolute right-[386px] top-[105px]"
              ></span>
            </div>
          </div>
          <div>
            <h2 class="mt-2">City or ZIP code</h2>
            <input
              class="mark_input_zip w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
            />
          </div>
          <div
            class="resultast_div flex items-center gap-[8px] w-[170px] h-[35px] bg-[#e04b00] rounded-[8px] mt-[30px] px-[20px]"
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
  computed: {
    isTabActive() {
      return this.activeTab === "tab-1";
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
