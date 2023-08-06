<template>
  <section class="basic-filter mt-[200px]">
    <v-container>
      <PathLink>My New Car</PathLink>
      <FilterTitle>Detailsuche: Pkw - neu oder gebraucht</FilterTitle>
      <FilterBtn class="ml-auto" />
      <div
        class="relative filter lg:h-[1300px] w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[1170px] bg-[#f5f5f5] h-[650px] mx-auto mt-[50px] rounded lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <div
          class="top lg:flex w-[250px] sm:w-[350px] items-center gap-[20px] mt-[10px] p-[20px]"
        >
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[16px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                v-model="selectedMark"
                @change="fetchModels"
              >
                <option value="14600" selected>Beliebig</option>
                <optgroup>
                  <option v-for="make in makes" :key="make" :value="make">
                    {{ make }}
                  </option>
                </optgroup>
              </select>
              <span
                class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
              ></span>
            </div>
          </div>

          <div class="relative">
            <h2 class="text-sm lg:text-[16px] mt-2">
              {{ $t("message.selects.model") }}
            </h2>
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="Beliebig"
              :disabled="isModelSelectDisabled"
            >
              <option value="14600">Beliebig</option>
              <option
                v-for="model in models"
                :key="model"
                :value="model"
                class=""
              >
                {{ model }}
              </option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[16px]">Variant</h2>
              <input
                class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                placeholder="e.g. GTI..."
              />
            </div>
          </div>
        </div>
        <div class="filter-cars flex flex-wrap gap-[50px] mt-[50px] p-[20px]">
					<!-- cabrio -->
          <label
            class="custom-checkbox flex gap-[15px] items-center h-[40px] w-[206px] pb-[20px]"
          >
					<input type="checkbox" v-model="isCheckedCabrio" @click="toggleShowCheckbox(0)" />
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedCabrio"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/cabriolet-icon.svg"
              alt=""
              class="w-[80px]"
            />
            Cabrio / Roadster
          </label>
          <!-- estate -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-4"
          >
					<input type="checkbox" v-model="isCheckedEstate" @click="toggleShowCheckbox(1)" class="form-checkbox h-5 w-5 text-indigo-600" />
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedEstate"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/estate-car-icon.svg"
              alt=""
              class="w-24 pt-[20px]"
            />
            <span class="text-lg">Estate Car</span>
          </label>

          <!-- saloon -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4"
          >
					<input type="checkbox" v-model="isCheckedSaloon" @click="toggleShowCheckbox(2)" class="form-checkbox h-5 w-5 text-indigo-600" />

            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedSaloon"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/saloon-car-icon.svg"
              alt=""
              class="w-24 pt-[20px]"
            />
            <span class="text-lg">Saloon</span>
          </label>
          <!-- small -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[20px]"
          >
					<input type="checkbox" v-model="isCheckedSmall" @click="toggleShowCheckbox(3)" class="form-checkbox h-5 w-5 text-indigo-600" />

            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedSmall"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/small-car-icon.svg"
              alt=""
              class="w-16 pt-[10px]"
            />
            <span class="text-lg">Small Car</span>
          </label>
          <!-- sports -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[20px]"
          >
					<input type="checkbox" v-model="isCheckedSuper" @click="toggleShowCheckbox(4)" class="form-checkbox h-5 w-5 text-indigo-600" />

            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedSuper"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/sports-car-icon.svg"
              alt=""
              class="w-20 pt-[18px]"
            />
            <span class="text-md">
Sports Car / Coupe</span>
          </label>
          <!-- off-road -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[23px]"
          >
					<input type="checkbox" v-model="isCheckedOff" @click="toggleShowCheckbox(5)" class="form-checkbox h-5 w-5 text-indigo-600" />
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedOff"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/car-suv-icon.svg"
              alt=""
              class="w-20 pt-[18px]"
            />
            <span class="text-sm">SUV / Off-road Vehicle / Pickup Truck</span>
          </label>
          <!-- off-road -->
          <label
            class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[23px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedVan"
              @click="toggleShowCheckbox()"
              class="form-checkbox h-5 w-5 text-indigo-600"
            />
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              width="1em"
            >
              <!-- Insert your SVG arrow icon here -->
              <path
                v-if="isCheckedVan"
                fill="#FFFFFF"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            <img
              src="../../../assets/icons/car-minibus-icon.svg"
              alt=""
              class="w-24 pt-[18px]"
            />
            <span class="text-sm">Van / Minibus</span>
          </label>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    // ... (other data and methods)

    const isCheckedVan = ref(false);
    const isCheckedOff = ref(false);
    const isCheckedSuper = ref(false);
    const isCheckedSmall = ref(false);
    const isCheckedSaloon = ref(false);
    const isCheckedEstate = ref(false);
    const isCheckedCabrio = ref(false);

		const toggleShowCheckbox = (index) => {
    isCheckedVan[index] = !isCheckedVan[index];
  };

    return {
      isCheckedOff,
			isCheckedSuper,
			isCheckedSmall,
			isCheckedSaloon,
      isCheckedVan,
			isCheckedEstate,
			isCheckedCabrio,
      toggleShowCheckbox,
    };
  },
  data() {
  return {
    makes: [],
    models: [],
    selectedMark: "14600",
    selectedMake: "",
    isModelSelectDisabled: false,
    checkboxStatus: [false, false, false, false, false, false], // Add this array to store checkbox status
  };
},
  components: { PathLink, FilterTitle, FilterBtn },
  methods: {
    fetchModels() {
      if (!this.selectedMark) {
        this.models = [];
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `https://api.nhtsa.gov/SafetyRatings/modelyear/2023/make/${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      axios
        .get(apiUrl)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data;

          // Проверяем, что ответ содержит поле "Results" с массивом объектов
          if (data && data.Results && Array.isArray(data.Results)) {
            // Извлекаем поле "Model" из каждого объекта и сохраняем в массив "models"
            this.models = data.Results.map((item) => item.Model);
            console.log(this.models);
            this.isModelSelectDisabled = false; // Enable the model select
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
  },
  mounted() {
    const apiUrl = "https://api.nhtsa.gov/SafetyRatings/modelyear/2023";

    // Выполняем GET-запрос к API с помощью Axios для получения марок
    axios
      .get(apiUrl)
      .then((response) => {
        // Получаем данные из ответа
        const data = response.data;

        // Проверяем, что ответ содержит поле "Results" с массивом объектов
        if (data && data.Results && Array.isArray(data.Results)) {
          // Извлекаем поле "Make" из каждого объекта и сохраняем в массив "makes"
          this.makes = data.Results.map((item) => item.Make);
          console.log(this.makes);
        } else {
          console.error("Некорректный формат ответа API.");
        }
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error.message);
      });
  },
};
</script>

<style scoped>
.line {
  border: 1px solid grey;
  height: 1px;
}
.custom-checkbox input[type="checkbox"] {
  display: none;
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
</style>
