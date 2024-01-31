<template>
  <div class="for-example">
    <div class="top sm:flex flex-wrap  gap-x-[50px]  w-[250px] sm:w-[450px] md:w-[550px] lg:w-[850px] xl:w-[950px] items-center  lg:gap-x-[40px] xl:gap-x-[80px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">
            {{ $t("message.selects.mark") }}
          </h2>
          <select
            class="mark-select mt-[5px] w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedMark" @change="fetchModels()">
            <option value="" selected>Beliebig</option>
            <optgroup>
              <option v-for="make in makes" :key="make" :value="make.trailer_make_name">
                {{ make.trailer_make_name }}
              </option>
              <option value="other">other</option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-[-42px] sm:right-[10px] lg:right-2 bottom-4"></span>
        </div>
      </div>

      <div class="relative">
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.model") }}
        </h2>
        <input
          class="mark-select mt-[5px] w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
         type="text" placeholder="Beliebig" v-model="selectedModel"/>

      </div>
      <div class="years dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="input-container flex relative mt-[10px]">
          <input type="from"
            class="dropdown-input mark_input mark-select  w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from" v-model="inputValue" @focus="openDropdown" @input="filterOptions" @blur="openDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="isOpen" class="dropdown-options w-[170px] text-[10px] lg:text-[12px]">
         
          <li key="1920" @click="selectOption('1920')">1920</li>
  <li key="1921" @click="selectOption('1921')">1921</li>
  <li key="1922" @click="selectOption('1922')">1922</li>
  <li key="1923" @click="selectOption('1923')">1923</li>
  <li key="1924" @click="selectOption('1924')">1924</li>
  <li key="1925" @click="selectOption('1925')">1925</li>
  <li key="1926" @click="selectOption('1926')">1926</li>
  <li key="1927" @click="selectOption('1927')">1927</li>
  <li key="1928" @click="selectOption('1928')">1928</li>
  <li key="1929" @click="selectOption('1929')">1929</li>
  <li key="1930" @click="selectOption('1930')">1930</li>
  <li key="1931" @click="selectOption('1931')">1931</li>
  <li key="1932" @click="selectOption('1932')">1932</li>
  <li key="1933" @click="selectOption('1933')">1933</li>
  <li key="1934" @click="selectOption('1934')">1934</li>
  <li key="1935" @click="selectOption('1935')">1935</li>
  <li key="1936" @click="selectOption('1936')">1936</li>
  <li key="1937" @click="selectOption('1937')">1937</li>
  <li key="1938" @click="selectOption('1938')">1938</li>
  <li key="1939" @click="selectOption('1939')">1939</li>
  <li key="1940" @click="selectOption('1940')">1940</li>
  <li key="1941" @click="selectOption('1941')">1941</li>
  <li key="1942" @click="selectOption('1942')">1942</li>
  <li key="1943" @click="selectOption('1943')">1943</li>
  <li key="1944" @click="selectOption('1944')">1944</li>
  <li key="1945" @click="selectOption('1945')">1945</li>
  <li key="1946" @click="selectOption('1946')">1946</li>
  <li key="1947" @click="selectOption('1947')">1947</li>
  <li key="1948" @click="selectOption('1948')">1948</li>
  <li key="1949" @click="selectOption('1949')">1949</li>
  <li key="1950" @click="selectOption('1950')">1950</li>
  <li key="1951" @click="selectOption('1951')">1951</li>
  <li key="1952" @click="selectOption('1952')">1952</li>
  <li key="1953" @click="selectOption('1953')">1953</li>
  <li key="1954" @click="selectOption('1954')">1954</li>
  <li key="1955" @click="selectOption('1955')">1955</li>
  <li key="1956" @click="selectOption('1956')">1956</li>
  <li key="1957" @click="selectOption('1957')">1957</li>
  <li key="1958" @click="selectOption('1958')">1958</li>
  <li key="1959" @click="selectOption('1959')">1959</li>
  <li key="1960" @click="selectOption('1960')">1960</li>
  <li key="1961" @click="selectOption('1961')">1961</li>
  <li key="1962" @click="selectOption('1962')">1962</li>
  <li key="1963" @click="selectOption('1963')">1963</li>
  <li key="1964" @click="selectOption('1964')">1964</li>
  <li key="1965" @click="selectOption('1965')">1965</li>
  <li key="1966" @click="selectOption('1966')">1966</li>
  <li key="1967" @click="selectOption('1967')">1967</li>
  <li key="1968" @click="selectOption('1968')">1968</li>
  <li key="1969" @click="selectOption('1969')">1969</li>
  <li key="1970" @click="selectOption('1970')">1970</li>
  <li key="1971" @click="selectOption('1971')">1971</li>
  <li key="1972" @click="selectOption('1972')">1972</li>
  <li key="1973" @click="selectOption('1973')">1973</li>
  <li key="1974" @click="selectOption('1974')">1974</li>
  <li key="1975" @click="selectOption('1975')">1975</li>
  <li key="1976" @click="selectOption('1976')">1976</li>
  <li key="1977" @click="selectOption('1977')">1977</li>
  <li key="1978" @click="selectOption('1978')">1978</li>
  <li key="1979" @click="selectOption('1979')">1979</li>
  <li key="1980" @click="selectOption('1980')">1980</li>
  <li key="1981" @click="selectOption('1981')">1981</li>
  <li key="1982" @click="selectOption('1982')">1982</li>
  <li key="1983" @click="selectOption('1983')">1983</li>
  <li key="1984" @click="selectOption('1984')">1984</li>
  <li key="1985" @click="selectOption('1985')">1985</li>
  <li key="1986" @click="selectOption('1986')">1986</li>
  <li key="1987" @click="selectOption('1987')">1987</li>
  <li key="1988" @click="selectOption('1988')">1988</li>
  <li key="1989" @click="selectOption('1989')">1989</li>
  <li key="1990" @click="selectOption('1990')">1990</li>
  <li key="1991" @click="selectOption('1991')">1991</li>
  <li key="1992" @click="selectOption('1992')">1992</li>
  <li key="1993" @click="selectOption('1993')">1993</li>
  <li key="1994" @click="selectOption('1994')">1994</li>
  <li key="1995" @click="selectOption('1995')">1995</li>
  <li key="1996" @click="selectOption('1996')">1996</li>
  <li key="1997" @click="selectOption('1997')">1997</li>
  <li key="1998" @click="selectOption('1998')">1998</li>
  <li key="1999" @click="selectOption('1999')">1999</li>
  <li key="2000" @click="selectOption('2000')">2000</li>
  <li key="2001" @click="selectOption('2001')">2001</li>
  <li key="2002" @click="selectOption('2002')">2002</li>
  <li key="2003" @click="selectOption('2003')">2003</li>
  <li key="2004" @click="selectOption('2004')">2004</li>
  <li key="2005" @click="selectOption('2005')">2005</li>
  <li key="2006" @click="selectOption('2006')">2006</li>
  <li key="2007" @click="selectOption('2007')">2007</li>
  <li key="2008" @click="selectOption('2008')">2008</li>
  <li key="2009" @click="selectOption('2009')">2009</li>
  <li key="2010" @click="selectOption('2010')">2010</li>
  <li key="2011" @click="selectOption('2011')">2011</li>
  <li key="2012" @click="selectOption('2012')">2012</li>
  <li key="2013" @click="selectOption('2013')">2013</li>
  <li key="2014" @click="selectOption('2014')">2014</li>
  <li key="2015" @click="selectOption('2015')">2015</li>
  <li key="2016" @click="selectOption('2016')">2016</li>
  <li key="2017" @click="selectOption('2017')">2017</li>
  <li key="2018" @click="selectOption('2018')">2018</li>
  <li key="2019" @click="selectOption('2019')">2019</li>
  <li key="2020" @click="selectOption('2020')">2020</li>
  <li key="2021" @click="selectOption('2021')">2021</li>
  <li key="2022" @click="selectOption('2022')">2022</li>
  <li key="2023" @click="selectOption('2023')">2023</li>
  <li key="2024" @click="selectOption('2024')">2024</li>
  <li key="2025" @click="selectOption('2025')">2025</li>
  <li key="2026" @click="selectOption('2026')">2026</li>
  <li key="2027" @click="selectOption('2027')">2027</li>
  <li key="2028" @click="selectOption('2028')">2028</li>
  <li key="2029" @click="selectOption('2029')">2029</li>
  <li key="2030" @click="selectOption('2030')">2030</li>
  <li key="2031" @click="selectOption('2031')">2031</li>
  <li key="2032" @click="selectOption('2032')">2032</li>
  <li key="2033" @click="selectOption('2033')">2033</li>
  <li key="2034" @click="selectOption('2034')">2034</li>
  <li key="2035" @click="selectOption('2035')">2035</li>
  <li key="2036" @click="selectOption('2036')">2036</li>
  <li key="2037" @click="selectOption('2037')">2037</li>
  <li key="2038" @click="selectOption('2038')">2038</li>
  <li key="2039" @click="selectOption('2039')">2039</li>
  <li key="2040" @click="selectOption('2040')">2040</li>
  <li key="2041" @click="selectOption('2041')">2041</li>
  <li key="2042" @click="selectOption('2042')">2042</li>
  <li key="2043" @click="selectOption('2043')">2043</li>
  <li key="2044" @click="selectOption('2044')">2044</li>
  <li key="2045" @click="selectOption('2045')">2045</li>
        </ul>
      </div>
      <div class="kilometer dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.kilometr") }}
        </h2>
        <div class="kilometers input-container flex relative mt-[10px]">
          <input type="from"
            class="dropdown-input mark_input mark-select w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from" v-model="inputKilometer" @focus="openKilmeterDropdown" @input="filterOptions"
            @blur="openKilmeterDropdown" />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openKilmeterDropdown">
            <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
          </div>
        </div>
        <ul v-if="isOpenKilometer" class="dropdown-options w-[170px] text-[10px] lg:text-[12px]">
          <li data-key="5000" @click="selectKilometer('5000')">5.000 km</li>
          <li data-key="10000" @click="selectKilometer('10000')">10.000 km</li>
          <li data-key="20000" @click="selectKilometer('20000')">20.000 km</li>
          <li data-key="30000" @click="selectKilometer('30000')">30.000 km</li>
          <li data-key="40000" @click="selectKilometer('40000')">40.000 km</li>
          <li data-key="50000" @click="selectKilometer('50000')">50.000 km</li>
          <li data-key="60000" @click="selectKilometer('60000')">60.000 km</li>
          <li data-key="70000" @click="selectKilometer('70000')">70.000 km</li>
          <li data-key="80000" @click="selectKilometer('80000')">80.000 km</li>
          <li data-key="90000" @click="selectKilometer('90000')">90.000 km</li>
          <li data-key="100000" @click="selectKilometer('100000')">
            100.000 km
          </li>
          <li data-key="125000" @click="selectKilometer('125000')">
            125.000 km
          </li>
          <li data-key="150000" @click="selectKilometer('150000')">
            150.000 km
          </li>
          <li data-key="175000" @click="selectKilometer('175000')">
            175.000 km
          </li>
          <li data-key="200000" @click="selectKilometer('200000')">
            200.000 km
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-all lg:flex w-[300px] lg:w-[800px] sm:w-[350px] items-center gap-[80px] lg:gap-[40px] xl:gap-x-[80px]">
      <div>
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.ad") }}
        </h2>
        <div class="Kaufen_div lg:flex text-[14px]">
          <button class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1" :class="{ 'active-Kaufen': activeTab === 'sell' }">
            {{ $t("message.btn.sell") }}
          </button>
          <button class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2" :class="{ 'active-Kaufen': activeTab === 'buy' }">
            {{ $t("message.btn.buy") }}
          </button>
          <!-- <button class="Kaufen p-[4px] w-[150px] lg:w-[75px] xl:w-[85px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab3" :class="{ 'active-Kaufen': activeTab === 'rent' }">
            {{ $t("message.btn.rent") }}
          </button> -->
        </div>
      </div>
      <div class="tab-content">
        <div class="bottom tab-panel sm:flex flex-wrap items-center lg:gap-[40px] xl:gap-x-[80px] sm:w-[450px] md:w-[550px] lg:w-[700px] sm:gap-x-[50px]" >
          <div class="price dropdown-container">
            <h2 class="mt-2 text-sm lg:text-[14px]">
              {{ $t("message.selects.priceFrom") }}
            </h2>
            <div class="input-container flex relative mt-[10px]">
              <input type="from"
                class="dropdown-input mark_input mark-select w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
                placeholder="from" v-model="inputPrice" @focus="openPriceDropdown" @input="filterOptions"
                @blur="closePriceDropdown" />

              <div
                class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                @click="openPriceDropdown">
                <span
                  class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
              </div>
            </div>
            <ul v-if="isOpenPrice" class="dropdown-options w-[170px] text-[10px] lg:text-[12px]">
              <li data-key="500" @click="selectPrice('500')">500 €</li>
              <li data-key="1000" @click="selectPrice('1000')">1,000 €</li>
              <li data-key="1500" @click="selectPrice('1500')">1,500 €</li>
              <li data-key="2000" @click="selectPrice('2000')">2,000 €</li>
              <li data-key="2500" @click="selectPrice('2500')">2,500 €</li>
              <li data-key="3000" @click="selectPrice('3000')">3,000 €</li>
              <li data-key="3500" @click="selectPrice('3500')">3,500 €</li>
              <li data-key="4000" @click="selectPrice('4000')">4,000 €</li>
              <li data-key="4500" @click="selectPrice('4500')">4,500 €</li>
              <li data-key="5000" @click="selectPrice('5000')">5,000 €</li>
              <li data-key="6000" @click="selectPrice('6000')">6,000 €</li>
              <li data-key="7000" @click="selectPrice('7000')">7,000 €</li>
              <li data-key="8000" @click="selectPrice('8000')">8,000 €</li>
              <li data-key="9000" @click="selectPrice('9000')">9,000 €</li>
              <li data-key="10000" @click="selectPrice('10000')">10,000 €</li>
              <li data-key="11000" @click="selectPrice('11000')">11,000 €</li>
              <li data-key="12000" @click="selectPrice('12000')">12,000 €</li>
              <li data-key="13000" @click="selectPrice('13000')">13,000 €</li>
              <li data-key="14000" @click="selectPrice('14000')">14,000 €</li>
              <li data-key="15000" @click="selectPrice('15000')">15,000 €</li>
              <li data-key="17500" @click="selectPrice('17500')">17,500 €</li>
              <li data-key="20000" @click="selectPrice('20000')">20,000 €</li>
              <li data-key="22500" @click="selectPrice('22500')">22,500 €</li>
              <li data-key="25000" @click="selectPrice('25000')">25,000 €</li>
              <li data-key="27500" @click="selectPrice('27500')">27,500 €</li>
              <li data-key="30000" @click="selectPrice('30000')">30,000 €</li>
              <li data-key="35000" @click="selectPrice('35000')">35,000 €</li>
              <li data-key="40000" @click="selectPrice('40000')">40,000 €</li>
              <li data-key="45000" @click="selectPrice('45000')">45,000 €</li>
              <li data-key="50000" @click="selectPrice('50000')">50,000 €</li>
              <li data-key="55000" @click="selectPrice('55000')">55,000 €</li>
              <li data-key="60000" @click="selectPrice('60000')">60,000 €</li>
              <li data-key="70000" @click="selectPrice('70000')">70,000 €</li>
              <li data-key="80000" @click="selectPrice('80000')">80,000 €</li>
              <li data-key="90000" @click="selectPrice('90000')">90,000 €</li>
            </ul>
          </div>
          <div class="relative">
            <h2 class="mt-2 text-sm lg:text-[12px]">
              {{ $t("message.selects.zip") }}
            </h2>
            <input
              class="mark_input_zip text-[12px] mark-select mt-[5px] w-[300px] sm:w-[200px] md:w-[250px] lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text" placeholder="Beliebig" v-model="cityName" />
            <div
              class="icon absolute top-[35px] right-[10px] sm:left-[330px] lg:top-[43px] lg:right-0   lg:left-[130px] xl:left-[150px] cursor-pointer"
              @click="getLocation()">
              <img src="../../../../assets/images/icon-location.svg" alt="" />
            </div>
          </div>
          <FilterBtn  @click="goTrailerList">
						<p class="text-white text-[18px] lg:text-[16px]">{{this.count}} {{ $t("message.results.result") }}</p>
					</FilterBtn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/axios.config";
import axios from "axios";
import FilterBtn from "@/components/FilterBtn.vue";
import {useTrailerStore} from "../../../../store/trailerDataStore"
import { useActiveTab4 } from "../../../../store/activeTab4Component";

export default {
  data() {
    return {
      store: useActiveTab4(),
      trailerStore: useTrailerStore(),
			count: "",
      selectedMake: "",
      selectedPrice: "",
      selectedYear: "",
      killometres: "",
      price: "",
      activeTab: "sell",
      cityName: "",
      makes: [],
      selectedMark: "",
      models: [],
      modelYears: [],
      years: "",
      isOpen: false,
      isOpenKilometer: false,
      isOpenPrice: false,
      inputValue: "",
      inputKilometer: "",
      inputPrice: "",
      options: [],
      filteredOptions: [],
      selectedModel: "",
      selectedDriving: "",
      selectedCondition: "",
    };
  },
  watch: {
    selectedMark(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    selectedModel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    inputValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    inputKilometer(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    activeTab(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    inputPrice(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    cityName(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    selectedDriving(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData()
      }
    },
    "trailerStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
  },
  methods: {
    updateTrailerData() {
      const trailerStore = useTrailerStore();
        (trailerStore.trailerData.trailer_make =
          this.selectedMark),
        (trailerStore.trailerData.trailer_model =
          this.selectedModel),
        (trailerStore.trailerData.trailer_firt_date_year_from =
          this.inputValue),
        (trailerStore.trailerData.trailer_mileage_from =
          this.inputKilometer),
        (trailerStore.trailerData.trailer_payment_type =
          this.activeTab),
        (trailerStore.trailerData.trailer_price_from =
          this.inputPrice),
        (trailerStore.trailerData.city =
          this.cityName),
        trailerStore.updateTrailerData();
    },
    showTab1() {
      this.activeTab = "sell";
    },
    async showTab2() {
      this.activeTab = "buy";
    },
    async showTab3() {
      this.activeTab = "rent";
    },
    async getLocation() {
      try {
        const coordinates = await this.$getLocation();
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&format=json`;

        const headers = {
          'Accept-Language': 'en'
        };

        const response = await axios.get(url, { headers });

        if (response.status === 200) {
          const data = response.data;
          const city =
            data.address.city ||
            data.address.village ||
            data.address.town ||
            data.address.hamlet ||
            data.address.suburb ||
            data.display_name ||
            "Unknown";
          this.cityName = city; // Сохраняем результат в свойство данных cityName
        } else {
          console.log("Failed to retrieve city name");
        }
      } catch (error) {
        console.log(error);
      }
    },
    fetchModels() {
      if (!this.selectedMark) {
        this.models = [];
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }
      localStorage.setItem("mark", this.selectedMark);
      http
        .get(`/car/model?mark_id=${this.selectedMark}`)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data;
          if (data) {
            this.models = data;
            console.log(this.models);
            this.isModelSelectDisabled = false;
          } else {
            console.error("Некорректный формат ответа API.");
            this.isModelSelectDisabled = true; // Disable the model select on error
          }
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error.message);
          this.isModelSelectDisabled = true; // Disable the model select on error
        });
    },
    postModels() {
      localStorage.setItem("mark-model", this.selectedModel);
    },
    fetchModelYears() {
      const apiUrl = "https://api.nhtsa.gov/SafetyRatings";
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          this.options = data.Results.map((result) => result.ModelYear);
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },
    openDropdown() {
      this.isOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeDropdownOnClickOutside);
    },
    closeDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    openKilmeterDropdown() {
      this.isOpenKilometer = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeKilometerDropdownOnClickOutside
      );
    },
    closeKilometerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".kilometers");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenKilometer = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    openPriceDropdown() {
      this.isOpenPrice = false;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdown);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPrice = false;
        document.removeEventListener(
          "click",
          this.closePriceDropdownOnClickOutside
        );
      }
    },
    selectOption(option) {
      this.inputValue = option;
      localStorage.setItem("reg-year", this.inputValue);
      this.isOpen = false;
    },
    selectKilometer(option) {
      this.inputKilometer	 = option;
      this.isOpenKilometer = false;
      localStorage.setItem("kilometer", this.inputKilometer);
    },
    selectPrice(option) {
      this.inputPrice = option;
      this.isOpenPrice = false;
      localStorage.setItem("price", this.inputPrice);
    },
    closeDropdown() {
      this.isOpen = false;
    },
    closeKilometerDropdown() {
      this.isOpenKilometer = false;
    },
    closePriceDropdown() {
      this.isOpenKilometer = false;
    },
		goTrailerList(){
			 	this.$router.push({ name: "trailer-list" });
         this.store.setActiveDiv("");

		},
    fetchMarks(){
      http
      .get("/trailer/marks")
      .then((response) => {
        const data = response.data.data;
        if (data) {
          this.makes = data;
        } else {
          console.error("Некорректный формат ответа API.");
        }
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error.message);
      });
    }
  },
  components: { FilterBtn },
  mounted() {
    this.count = this.trailerStore.count
    this.fetchMarks();
    this.updateTrailerData();
  },
  created() {
    this.count = this.trailerStore.count
    this.updateTrailerData();
  },
  computed: {
    isModelSelectDisabled() {
      return this.selectedMark === "14600"; 
    },
    filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
};
</script>
<style scoped>
.mark-input2 {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
select::-webkit-scrollbar {
  width: 0;
}

/*Убрать полосу прокрутки для всей страницы*/
::-webkit-scrollbar {
  width: 0;
}
.mark-select {
  border: 1px solid #111;
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
