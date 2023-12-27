<template>
  <section class="basic-filter">
    <v-container class="max-w-[1140px]">
      <div
        class="relative filter xl:h-[800px] lg:h-[850px] md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] mx-auto mt-[0] lg:mt-[50px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">{{ $t("message.filter_page.titles.offer") }} </h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <VendorComponent />
        <AdOnlineSinceComponent />
        <AdsFiltersComponent />
        <DamagedVehiclesComponent />
        <div class="search mt-[30px] pl-[21px]">
          <h2 class="mt-2 text-sm lg:text-[14px]">
            {{ $t("message.filter_page.searchvehicle") }}
          </h2>
          <div class="marke_select_div relative mt-[10px]">
            <input
              placeholder="e.g. drive mode switch, LTE, thermal glazing ..."
              class="mark_input mark-select w-full lg:w-[150px] xl:w-[435px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] text-[14px] font-normal pr-[30px]"
             
            />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import VendorComponent from "../components/VendorComponent.vue";
import AdsFiltersComponent from "../components/AdsFiltersComponent.vue";
import AdOnlineSinceComponent from "../components/AdOnlineSinceComponent.vue";
import DamagedVehiclesComponent from "../components/DamagedVehiclesComponent.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    VendorComponent,
    AdsFiltersComponent,
    AdOnlineSinceComponent,
    DamagedVehiclesComponent,
  },
};
</script>

<style >
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
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
``
