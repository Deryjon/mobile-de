<template>
  <div class="for-example">
    <div class="filters-selects flex gap-[20px]">
      <div class="relative">
        <h2 class="text-sm lg:text-[14px] mt-2">
          Condition
        </h2>
        <select
          class="mark-select mt-[5px] w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="Beliebig"
        >
          <option value="14600">Any</option>
					<option class="">New</option>
					<option class="">Used</option>
					<option class="">Rental</option>
					<option class="">Crash Car</option>
					<option class="">Classic</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute left-[155px] bottom-4"></span>
      </div>
      <div class="relative">
        <h2 class="text-sm lg:text-[14px] mt-2">
          Condition
        </h2>
        <select
          class="mark-select mt-[5px] w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="Beliebig"
        >
          <option value="14600">Driving site</option>
					<option class="">Left side</option>
					<option class="">Right side</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute left-[155px] bottom-4"></span>
      </div>
    </div>
    <div class="top lg:flex w-[250px] sm:w-[350px] items-center gap-[20px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">
            {{ $t("message.selects.mark") }}
          </h2>
          <select
            class="mark-select mt-[5px] w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedMark"
            @change="fetchModels()"
          >
            <option value="14600" selected>Beliebig</option>
            <optgroup>
              <option
                v-for="make in makes"
                :key="make"
                :value="make.car_make_name"
              >
                {{ make.car_make_name }}
              </option>
              <option value="other">other</option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>

      <div class="relative">
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.model") }}
        </h2>
        <select
          class="mark-select mt-[5px] w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          placeholder="Beliebig"
          :disabled="isModelSelectDisabled"
        >
          <option value="14600">Beliebig</option>
          <option
            v-for="model in models"
            :key="model"
            :value="model.car_model_name"
            class=""
          >
            {{ model.car_model_name }}
          </option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div>
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="relative mt-[5px]">
          <input
            placeholder="Beliebig"
            class="no-spinner mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
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
            <option value="1985">1985</option>
            <option value="1980">1980</option>
            <option value="1975">1975</option>
            <option value="1970">1970</option>
            <option value="1965">1965</option>
            <option value="1960">1960</option>
            <option value="1900">1900</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div>
      <div class="">
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.kilometr") }}
        </h2>
        <!-- KIllometer bis -->
        <div class="marke_select_div flex relative mt-[5px]">
          <input
            placeholder="Beliebig"
            id="inputYear"
            class="mark_input mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
            readonly
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:right-[0px] text-[10px] lg:text-[12px]"
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
            class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:right-[7px] lg:top-[13px]"
          ></span>
        </div>
      </div>
    </div>
    <div
      class="bottom-all lg:flex w-[250px] lg mt-[5px]:w-full sm:w-[350px] items-center gap-[20px]"
    >
      <div>
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.ad") }}
        </h2>
        <div class="Kaufen_div lg:flex text-[14px]">
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
          <div class="mt-[14px]">
            <h2 class="text-sm lg:text-[14px]">
              {{ $t("message.selects.price") }}
            </h2>
            <div class="marke_select_div relative">
              <input
                placeholder="Beliebig"
                class="mark_input text-[12px] mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
                v-model="price"
              />
              <select
                class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                v-model="selectedPrice"
                @change="updateSelectPrice"
              >
                <option value="500">500 €</option>
                <option value="1000">1,000 €</option>
                <option value="1500">1,500 €</option>
                <option value="2000">2,000 €</option>
                <option value="2500">2,500 €</option>
                <option value="3000">3,000 €</option>
                <option value="3500">3,500 €</option>
                <option value="4000">4,000 €</option>
                <option value="4500">4,500 €</option>
                <option value="5000">5,000 €</option>
                <option value="6000">6,000 €</option>
                <option value="7000">7,000 €</option>
                <option value="8000">8,000 €</option>
                <option value="9000">9,000 €</option>
                <option value="10000">10,000 €</option>
                <option value="11000">11,000 €</option>
                <option value="12000">12,000 €</option>
                <option value="13000">13,000 €</option>
                <option value="14000">14,000 €</option>
                <option value="15000">15,000 €</option>
                <option value="17500">17,500 €</option>
                <option value="20000">20,000 €</option>
                <option value="22500">22,500 €</option>
                <option value="25000">25,000 €</option>
                <option value="27500">27,500 €</option>
                <option value="30000">30,000 €</option>
                <option value="35000">35,000 €</option>
                <option value="40000">40,000 €</option>
                <option value="45000">45,000 €</option>
                <option value="50000">50,000 €</option>
                <option value="55000">55,000 €</option>
                <option value="60000">60,000 €</option>
                <option value="70000">70,000 €</option>
                <option value="80000">80,000 €</option>
                <option value="90000">90,000 €</option>
              </select>
              <span
                class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
              ></span>
            </div>
          </div>
          <div class="relative">
            <h2 class="mt-2 text-sm lg:text-[14px]">
              {{ $t("message.selects.zip") }}
            </h2>
            <input
              class="mark_input_zip text-[12px]  mark-select mt-[5px] w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
              type="text"
              placeholder="Beliebig"
              v-model="cityName"
            />
            <div
              class="icon absolute top-[30px] sm:left-[330px] lg:top-[43px] left-[230px] lg:left-[130px] xl:left-[150px] cursor-pointer"
              @click="getLocation()"
            >
              <img src="../../../assets/images/icon-location.svg" alt="" />
            </div>
          </div>
          <FilterBtn />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import FilterBtn from "../../../components/FilterBtn.vue";
export default {
  data() {
    return {
      selectedMake: "",
      selectedPrice: "",
      selectedYear: "",
      killometres: "",
      price: "",
      activeTab: "tab-1",
      cityName: "",
      makes: [],
      selectedMark: "14600",
      models: [],
      modelYears: [],
      years: "",
    };
  },
  methods: {
    updateSelect() {
      this.killometres = this.selectedMake;
      this.selectedMake = this.selectedYear;
    },
    updateSelectPrice() {
      this.price = this.selectedPrice;
      this.selectedPrice = this.selectedMake;
    },
    updateSelectYear() {
      this.years = this.selectedYear;
      this.selectedYear = this.selectedMake;
    },
    showTab1() {
      this.activeTab = "tab-1";
      console.log(this.selectedMark);
    },
    async showTab2() {
      this.activeTab = "tab-2";
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
          const city =
            data.address.city ||
            data.address.village ||
            data.address.town ||
            data.address.hamlet ||
            data.address.suburb ||
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

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `https://sellcenter.onrender.com/api/v1/car/model?mark_id=${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      axios
        .get(apiUrl)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data.data;
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
  },
  components: { FilterBtn },
  mounted() {
    // const apiUrl = 'https://api.api-ninjas.com/v1/cars/make'
    // const apiUrl = "https://api.nhtsa.gov/SafetyRatings/modelyear/2023";
    const apiUrl = "https://sellcenter.onrender.com/api/v1/car/marks";
    axios
      .get(apiUrl)
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
    this.fetchModelYears();
  },
  computed: {
    isModelSelectDisabled() {
      return this.selectedMark === "14600"; // "Beliebig" value
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
</style>
