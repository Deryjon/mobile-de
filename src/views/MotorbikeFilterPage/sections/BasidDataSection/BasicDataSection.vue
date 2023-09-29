<template>
  <section class="basic-filter mt-[200px]">
    <v-container class="w-[1140px]">
      <PathLink>My New Motorbike </PathLink>

      <FilterTitle>Detailsuche: Pkw - neu oder gebraycht</FilterTitle>
      <FilterBtn class="ml-auto" />

      <div
        class="relative filter   md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] mx-auto mt-[50px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
				<ConditionComponentBasic/>
				<div
          class="top sm:flex w-[250px] sm:w-[350px] items-center  sm:gap-[20px] lg:gap-x-[80px] mt-[10px] p-[20px]"
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
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="e. g. Brutale 1090, R 1200 …"

                      />
          </div>
        </div>
				<VehicleTypeComponent/>
				<PowerComponent/>
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
export default {
  components: { PathLink, FilterTitle, FilterBtn, ConditionComponentBasic, VehicleTypeComponent, PowerComponent },
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