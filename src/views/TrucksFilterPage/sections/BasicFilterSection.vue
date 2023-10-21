<template>
  <section class="basic-filter mt-[200px]">
    <v-container class="w-[700px] lg:w-[900px] xl:w-[1110px]">
      <PathLink>Truck Filter</PathLink>
      <FilterTitle>Detailsuche: Pkw - neu oder gebraucht</FilterTitle>
      <FilterBtn @click="goMotorhomeList" class="ml-auto">
        <p class="text-white text-[18px] lg:text-[16px]">
          {{ this.count }} {{ $t("message.results.result") }}
        </p>
      </FilterBtn>
      <div
        class="relative filter md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] mx-auto mt-[50px] rounded p-[10px] lg:p-[27px]">
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <ConditionComponent />
        <div class="top sm:flex w-[250px] sm:w-[350px] items-center sm:gap-[20px] lg:gap-[80px] mt-[10px] p-[20px]">
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[14px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                v-model="selectedMark" @change="fetchModels()">
                <option value="14600" selected>Beliebig</option>
                <optgroup>
                  <option v-for="make in makes" :key="make" :value="make.truck_make_name">
                    {{ make.truck_make_name }}
                  </option>
                  <option value="other">other</option>
                </optgroup>
              </select>
              <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
            </div>
          </div>

          <div class="rela tive">
            <h2 class="text-sm lg:text-[14px] mt-2">
              {{ $t("message.selects.model") }}
            </h2>
            <input
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              type="text" v-model="selectedModel" />
          </div>
          <div class="relative">
            <h2 class="text-sm lg:text-[14px] mt-2">Category</h2>
            <select
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              v-model="selectedCategory">
              <option value="" data-track-as="any">Any</option>
              <option value="BeveragesTruck">Beverage</option>
              <option value="BoxTruck">Box</option>
              <option value="BreakdownTruck">Breakdown truck</option>
              <option value="CarCarrierTruck">Car carrier</option>
              <option value="CementMixerTruck">Cement mixer</option>
              <option value="ChassisTruck">Chassis</option>
              <option value="ConcretePump">Concrete Pump</option>
              <option value="DumperTruck">Dumper truck</option>
              <option value="MilkTankTruck">Food Carrier</option>
              <option value="GrainTruck">Grain Truck</option>
              <option value="HorsesTruck">Horses</option>
              <option value="HydraulicWorkPlatformTruck">
                Hydraulic work platform
              </option>
              <option value="JumboTruck">Jumbo Truck</option>
              <option value="SkipLorryTruck">Mining truck</option>
              <option value="RefrigeratorBodyTruck">Refrigerator body</option>
              <option value="RefuseTruck">Refuse truck</option>
              <option value="RollOffTipperTruck">Roll-off tipper</option>
              <option value="StakeBodyTruck">Stake body</option>
              <option value="StakeBodyAndTarpaulinTruck">
                Stake body and tarpaulin
              </option>
              <option value="SwapChassisTruck">Swap chassis</option>
              <option value="SweepingMachineTruck">Sweeping machine</option>
              <option value="TankBodiesTruck">Tank truck</option>
              <option value="Over7500_ThreeSidedTipper">
                Three-sided Tipper
              </option>
              <option value="TimberCarrierTruck">Timber carrier</option>
              <option value="TipperTruck">Tipper</option>
              <option value="TrafficConstructionTruck">
                Traffic construction
              </option>
              <option value="TruckMountedCraneTruck">
                Truck-mounted crane
              </option>
              <option value="VacuumAndPressureVehicleTruck">
                Vacuum and pressure vehicle
              </option>
              <option value="OtherTruckOver7500">
                Other trucks over 7.5 t
              </option>
            </select>
            <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
          </div>
        </div>
        <div class="tab-content lg:mt-[-10px] xl:mt-[0px]">
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
import http from "../../../axios.config";
import PaymentTab1Component from "../components/PaymentTab1Component.vue";
import { useTruckStore } from "../../../store/truckDataStore";
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
      makes: [],
      models: [],
      selectedMark: "14600",
      selectedPrice: "",
      isModelSelectDisabled: false,
      activeTab: "buy",
      price: "",
      selectedYear: "",
      selectedtoYear: "",
      years: "",
      modelYears: [],
      inputVariant: "",
      modeltoYears: [],
      killometres: "",
      count: "",
      selectedModel: "",
      selectedCategory: "",
    };
  },
  watch: {
    selectedMark(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTruckData();
      }
    },
    selectedModel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTruckData();
      }
    },
    selectedCategory(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTruckData();
      }
    },
    activeTab(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTruckData();
      }
    },
  },
  methods: {
    updateTruckData() {
      const truckStore = useTruckStore();
      (truckStore.truckData.truck_make =
        this.selectedMark),
      (truckStore.truckData.truck_model =
        this.selectedModel),
      (truckStore.truckData.truck_category =
        this.selectedCategory),
        truckStore.updateTruckData();
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
    this.selectedMark = localStorage.getItem("mark");

    http
      .get("/truck/marks")
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
  max-height: 35px;
  /* Измените значение по вашему усмотрению */
  overflow-y: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Добавьте прокрутку при необходимости */
.mark-input2::-webkit-scrollbar {
  width: 3px;
  /* Ширина полосы прокрутки */
}

.mark-input2::-webkit-scrollbar-thumb {
  background-color: #888;
  /* Цвет полосы прокрутки */
  border-radius: 2.5px;
  /* Закругление полосы прокрутки */
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
