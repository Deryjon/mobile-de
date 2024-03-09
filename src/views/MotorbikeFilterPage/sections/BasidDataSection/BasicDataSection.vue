<template>
  <section class="basic-filter mt-[200px]">
    <v-container class="max-w-[1140px]">
      <PathLink>{{ $t("message.filter_page.vehicle.motorbike") }}</PathLink>

      <FilterTitle>Search: Motorbikes - new or used
</FilterTitle>
      <FilterBtn class="ml-auto" @click="goMotorbikeList">
        <p class="text-white text-[18px] lg:text-[16px]">
          {{ this.count }} {{ $t("message.results.result") }}
        </p>
      </FilterBtn>
      <div
        class="relative filter md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] mx-auto mt-[50px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">{{ $t("message.filter_page.titles.basic") }}</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <ConditionComponentBasic />
        <div
          class="top flex gap-[20px] sm:w-[350px] items-center sm:gap-[20px] lg:gap-x-[80px] mt-[10px] lg:p-[20px]"
        >
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[14px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                v-model="selectedMark"
              >
                <option value="" selected>Beliebig</option>
                <optgroup>
                  <option
                    v-for="make in makes"
                    :key="make"
                    :value="make.motorcycle_make_name"
                  >
                    {{ make.motorcycle_make_name }}
                  </option>
                  <option value="other">{{ $t("message.filter_page.other") }}</option>
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
            <input
              class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="e. g. Brutale 1090, R 1200 …"
              type="text"
              v-model="selectedModel"
            />
          </div>
        </div>
        <VehicleTypeComponent />
        <PowerComponent />
      </div>
    </v-container>
  </section>
</template>
<script>
import PathLink from "../../../../ui/PathLink.vue";
import FilterTitle from "../../../../ui/FilterTitle.vue";
import FilterBtn from "../../../../components/FilterBtn.vue";
import ConditionComponentBasic from "./components/ConditionComponentBasicData.vue";
import VehicleTypeComponent from "./components/VehicleTypeComponent.vue";
import PowerComponent from "./components/PowerComponent.vue";
import http from "../../../../axios.config";
import { useMotorbikeStore } from "@/store/motorbikeDataStore";
export default {
  data() {
    return {
      makes: [],
      selectedMark: "",
      selectedModel: "",
      count: "",
      motorbikeStore: useMotorbikeStore(),
    };
  },
  watch: {
    selectedMark(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    selectedModel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorbikeData();
      }
    },
    "motorbikeStore.count": function (newCount, oldCount) {
      this.count = newCount;
    },
  },
  methods: {
    goMotorbikeList() {
      this.$router.push({ name: "motorbike-list" })
    },
    updateMotorbikeData() {
      const motorcycleStore = useMotorbikeStore();
      motorcycleStore.motorcycleData.motorcycle_make = this.selectedMark;
      motorcycleStore.motorcycleData.motorcycle_model = this.selectedModel;
      motorcycleStore.updateMotorbikeData();
    },
    async fetchMarks() {
      await http
        .get("/motorcycle/marks")
        .then((response) => {
          const data = response.data.data;
          console.log(response);
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
  },
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    ConditionComponentBasic,
    VehicleTypeComponent,
    PowerComponent,
  },
  mounted() {
    this.count = this.motorbikeStore.count;

    this.fetchMarks();
  },
};
</script>
<style scoped></style>
<style>
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
</style>
