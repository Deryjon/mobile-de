<template>
  <div class="pl-[20px]">
    <div class="price-tab flex items-center gap-[80px]">
      <div class="price">
        <h2 class="mt-2 text-sm lg:text-[16px]">Power</h2>
        <div class="marke_select_div relative mt-[10px]">
          <input
            placeholder="from"
            class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
      </div>
      <div class="marke_select_div relative mt-[36px]">
        <input
          placeholder="up to"
          class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
      <label for="condition-any" class="mt-[30px]"	>
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
        @click="selectCondition('Commercial')"
        class="mt-[30px]"
      >
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Commercial',
            'bg-orange': selectedCondition === 'Commercial',
          }"
        />
        <span class="ml-[10px]">Commercial use</span>
      </label>
    </div>
   
    <div class="duration flex items-center gap-[80px] mt-[20px]">
      <div>
        <h2 class="text-sm lg:text-[16px] mt-2">Duration</h2>
        <div class="relative mt-[10px]">
          <input
            placeholder="from"
            class="no-spinner mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="years"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            v-model="selectedYear"
            @change="updateSelectYear"
          >
            <option v-for="year in modelYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[6px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <div class="relative mt-[35px]">
        <input
          placeholder="to"
          class="no-spinner mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
          type="number"
          pattern="\d*"
          v-model="years"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedtoYear"
          @change="updateSelectYear"
        >
          <option v-for="year in modeltoYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
    </div>
    <div class="kilometres mt-[20px] flex items-center gap-[80px]">
      <div class="">
        <h2 class="text-sm lg:text-[16px] mt-2">Mileage per year</h2>
        <!-- KIllometer bis -->
        <div class="marke_select_div flex relative">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
            readonly
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:left-[180px] text-[10px] lg:text-[12px]"
            v-model="selectedMake"
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
            class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:left-[185px] lg:top-[13px]"
          ></span>
        </div>
      </div>
      <div class="marke_select_div flex relative mt-[30px]">
        <input
          placeholder="Beliebig"
          id="inputYear"
          class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          type="number"
          pattern="\d*"
          v-model="killometres"
          readonly
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:left-[180px] text-[10px] lg:text-[12px]"
          v-model="selectedMake"
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
          class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:left-[185px] lg:top-[13px]"
        ></span>
      </div>
    </div>
		<div class="line mt-[40px]"></div>
    <!-- valid -->
    <div class="valid-until mt-[40px] flex items-center gap-[80px]">
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[16px]">HU valid until</h2>
        <select
          class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
        >
          <option value="14600" selected>Any</option>
          <option value="">New</option>
          <option value="">18</option>
          <option value="">12</option>
          <option value="">9</option>
          <option value="">6</option>
          <option value="">3</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div class="marke_select_div relative mt-2">
        <h2 class="text-sm lg:text-[16px]">Previous owners</h2>
        <select
          class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
        >
          <option value="14600" selected>Any</option>
          <option value="">Up to 1</option>
          <option value="">Up to 2</option>
          <option value="">Up to 3</option>
          <option value="">Up to 4</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <label class="custom-checkbox flex items-center h-10 w-[170px] mt-[25px]">
        <input
          type="checkbox"
          v-model="isCheckedHistory"
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
            v-if="isCheckedHistory"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm p]b-[20px">Full Service History</span>
      </label>
      <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
        <input
          type="checkbox"
          v-model="isCheckedRoad"
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
            v-if="isCheckedRoad"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Roadworthy</span>
      </label>
    </div>
    <!-- country -->
    <div class="valid-until mt-[20px] flex items-center gap-[80px]">
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[16px]">Country</h2>
        <select
          class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
        >
          <optgroup>
            <option value="14600" selected>Any</option>
          </optgroup>
          <optgroup>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="AL">Albania</option>
            <option value="AT">Austria</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="AD">Andorra</option>
            <option value="BR">Brazil</option>
            <option value="BG">Bulgaria</option>
            <option value="CA">Canada</option>
            <option value="HR">Croatia</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="EG">Egypt</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FO">Faroe Islands</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KW">Kuwait</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MK">Macedonia</option>
            <option value="MT">Malta</option>
            <option value="MX">Mexico</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="ME">Montenegro</option>
            <option value="MA">Morocco</option>
            <option value="NL">Netherlands</option>
            <option value="NZ">New Zealand</option>
            <option value="NG">Nigeria</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="SM">San Marino</option>
            <option value="SA">Saudi Arabia</option>
            <option value="RS">Serbia</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="ZA">South Africa</option>
            <option value="KR">South Korea</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="TW">Taiwan</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">USA</option>
          </optgroup>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div class="marke_select_div relative mt-2">
        <h2 class="text-sm lg:text-[16px]">City / zip code</h2>
        <input
          class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          type="number"
          pattern="\d*"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const isCheckedHistory = ref(false);
    const isCheckedRoad = ref(false);

    const toggleShowCheckbox = (index) => {
      isCheckedRoad[index] = !isCheckedRoad[index];
    };

    return {
      isCheckedRoad,
      isCheckedHistory,
      toggleShowCheckbox,
    };
  },
  data() {
    return {
      price: "",
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
    };
  },
  methods: {
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

    togglePrivateSelection() {
      // ... другой код ...
      this.selectedCondition = this.isPrivateSelected ? "Hp" : "";
    },

    toggleCommercialSelection() {
      // ... другой код ...
      this.selectedCondition = this.isCommercialSelected ? "Commercial" : "";
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
