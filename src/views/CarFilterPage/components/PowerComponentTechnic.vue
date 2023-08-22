<template>
  <div class="pl-[20px]">
    <div class="price-tab flex items-center gap-[80px]">
      <div class="price">
        <h2 class="mt-2 text-sm lg:text-[14px]">Power</h2>
        <div class="marke_select_div relative mt-[10px]">
          <input
            placeholder="from"
            class="mark_input text-[12px] mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
          class="mark_input text-[12px] mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
      <label for="condition-any" class="mt-[30px]">
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
        @click="selectCondition('kW')"
        class="mt-[30px]"
      >
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'kW',
            'bg-orange': selectedCondition === 'kW',
          }"
        />
        <span class="ml-[10px]">kW</span>
      </label>
    </div>

    <div class="duration flex items-center gap-[80px] mt-[40px]">
      <div>
        <h2 class="text-sm lg:text-[14px] mt-2">Cubic capacity</h2>
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
    <!-- transmision -->
    <div class="flex gap-[100px]">
      <div
        class="
			"
      >
        <h3 class="mt-[60px]">Transmission</h3>
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedAutomatic"
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
              v-if="isCheckedAutomatic"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm"> Automatic transmission</span>
        </label>
      </div>
      <div class="mt-[84px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedSemi"
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
              v-if="isCheckedSemi"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Semi-automatic</span>
        </label>
      </div>
      <div class="mt-[84px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedManual"
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
              v-if="isCheckedManual"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Manual gearbox </span>
        </label>
      </div>
    </div>
    <!-- valid -->
    <div class="valid-until mt-[80px] flex items-center gap-[60px]">
      <div class="relative mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">
          Fuel consumption (combined) up to
        </h2>
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
      <div class="marke_select_div relative mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emissions Sticker</h2>
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
      <div class="marke_select_div relative mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emission Class</h2>
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
      <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
        <input
          type="checkbox"
          v-model="isCheckedParticulate"
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
            v-if="isCheckedParticulate"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Particulate filter </span>
      </label>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const isCheckedHistory = ref(false);
    const isCheckedAutomatic = ref(false);
    const isCheckedParticulate = ref(false);
    const isCheckedManual = ref(false);
    const isCheckedSemi = ref(false);

    const toggleShowCheckbox = (index) => {
      isCheckedRoad[index] = !isCheckedRoad[index];
    };

    return {
      isCheckedAutomatic,
      isCheckedHistory,
      isCheckedParticulate,
      isCheckedManual,
      isCheckedSemi,
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

    toggleHpSelection() {
      // ... другой код ...
      this.selectedCondition = this.isPrivateSelected ? "Hp" : "";
    },

    togglekWSelection() {
      // ... другой код ...
      this.selectedCondition = this.iskWSelected ? "kW" : "";
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
