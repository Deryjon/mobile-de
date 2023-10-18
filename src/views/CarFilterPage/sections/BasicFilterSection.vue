<template>
  <section class="basic-filter mt-[200px]">
    <v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">
      <PathLink>My New Car</PathLink>
      <FilterTitle>Detailsuche: Pkw - neu oder gebraucht</FilterTitle>
      <FilterBtn class="ml-auto" @click="goMotorbikeList">
        <p class="text-white text-[18px] lg:text-[16px]">
          {{ this.count }} {{ $t("message.results.result") }}
        </p>
      </FilterBtn>
      <div
        class="relative filter xl:h-[1600px] lg:h-[1500px] md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] h-[1500px] mx-auto mt-[50px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <div
          class="top sm:flex w-[250px] sm:w-[350px] items-center sm:gap-[20px] lg:gap-[80px] mt-[10px] p-[20px]"
        >
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[14px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                v-model="selectedMark"
                @change="fetchModels()"
              >
                <option value="" selected>Beliebig</option>
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
              <span
                class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
              ></span>
            </div>
          </div>

          <div class="relative">
            <h2 class="text-sm lg:text-[14px] mt-2">
              {{ $t("message.selects.model") }}
            </h2>
            <select
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              :disabled="isModelSelectDisabled"
              v-model="selectedModel"
            >
              <option value="" selected>Beliebig</option>
              <option :value="selectedModel" selected>
                {{ selectedModel }}
              </option>
              <option
                v-for="model in models"
                :key="model"
                :value="model.car_model_name"
                class=""
              >
                {{ model.car_model_name }}
              </option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[14px]">Variant</h2>
              <input
                class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                placeholder="e.g. GTI..."
                v-model="inputVariant"
              />
            </div>
          </div>
        </div>
        <CarFilterComponentBasic />
        <SeatsComponent />
        <ConditionComponent />
        <div class="line h-[1px] border lg:mt-[-10px] xl:mt-[50px]"></div>
        <div class="lg:mt-[-10px] xl:mt-[30px] p-[20px]">
          <h2 class="mt-2 text-sm lg:text-[14px]">Payment type</h2>
          <div class="Kaufen_div mt-[10px]">
            <button
              class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[218px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
              @click="showTab1"
              :class="{ 'active-Kaufen': activeTab === 'buy' }"
            >
              {{ $t("message.btn.buy") }}
            </button>
            <button
              class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[218px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
              @click="showTab2"
              :class="{ 'active-Kaufen': activeTab === 'sell' }"
            >
              {{ $t("message.btn.sell") }}
            </button>
          </div>
        </div>
        <div class="tab-content lg:mt-[-10px] xl:mt-[30px]">
          <div class="buy">
            <PaymentTab1Component />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import CarFilterComponentBasic from "../components/CarFilterComponentBasic.vue";
import ConditionComponent from "../components/ConditionComponentBasic.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import SeatsComponent from "../components/SeatsComponentBasicSection.vue";
import axios from "axios";
import { useCarStore } from "@/store/carDataStore";
import http from "../../../axios.config";
import PaymentTab1Component from "../components/PaymentTab1Component.vue";
export default {
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    SeatsComponent,
    CarFilterComponentBasic,
    ConditionComponent,
    PaymentTab1Component,
  },
  data() {
    return {
      carStore: useCarStore(),
      makes: [],
      models: [],
      selectedMark: "",
      selectedPrice: "",
      isModelSelectDisabled: false,
      activeTab: "buy",
      price: "",
      selectedYear: "",
      selectedtoYear: "",
      years: "",
      modelYears: [],
      inputVariant: "",
      count: "",
      modeltoYears: [],
      killometres: "",
      selectedModel: "",
    };
  },
  watch: {
    selectedMark(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    selectedModel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    inputVariant(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    activeTab(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateCarData();
      }
    },
    count(newValue) {},
  },
  methods: {
    updateCarData() {
      const carStore = useCarStore();
      carStore.carData.car_make = this.selectedMark;
      carStore.carData.car_model = this.selectedModel;
      carStore.carData.car_variant = this.inputVariant;
      carStore.carData.car_payment_type = this.activeTab;
      carStore.updateCarData();
    },
    async fetchModels() {
      if (!this.selectedMark) {
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      // Выполняем GET-запрос к API с помощью Axios
      await http
        .get(`/car/model?mark_id=${this.selectedMark}`)
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
    showTab1() {
      this.activeTab = "buy";
    },
    async showTab2() {
      this.activeTab = "sell";
    },
    toggleAnySelection() {
      // Обработчик клика на "Any"
      if (this.isAnySelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isAnySelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isAnySelected = true;
      }
    },
    toggleNewSelection() {
      // Обработчик клика на "Any"
      if (this.isNewSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isNewSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isNewSelected = true;
      }
    },
    toggleUsedSelection() {
      // Обработчик клика на "Any"
      if (this.isUsedSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isUsedSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isUsedSelected = true;
      }
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        this.isRadioNewSelected = true;
        this.isCheckedRegister = false;
        this.isCheckedEmploy = false;
        this.isCheckedDemon = false;
        this.isCheckedClassic = false;
      } else {
        this.isRadioNewSelected = false;
      }
    },
  },
  mounted() {
    this.count = this.carStore.count;
    http
      .get("/car/marks")
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
  },
};
</script>

<style scoped>
.mark-input2 {
  max-height: 35px; /* Измените значение по вашему усмотрению */
  overflow-y: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Добавьте прокрутку при необходимости */
.mark-input2::-webkit-scrollbar {
  width: 3px; /* Ширина полосы прокрутки */
}

.mark-input2::-webkit-scrollbar-thumb {
  background-color: #888; /* Цвет полосы прокрутки */
  border-radius: 2.5px; /* Закругление полосы прокрутки */
}
select:-webkit-scrollbar {
  /*For WebKit Browsers*/
  width: 0;
  height: 0;
}
.line {
  border: 1px solid grey;
  height: 1px;
}
.Kaufen:hover {
  box-shadow: 0 0 2px 1px #eaccb4;
}
.active-Kaufen {
  background-color: #fffaf6;
  border: 1px solid #eaccb4;
  color: #000;
}
.mark-select {
  border: 1px solid #111;
}
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
</style>
