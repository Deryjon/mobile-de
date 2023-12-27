<template>
  <section class="basic-filter">
    <v-container class="max-w-[1140px]">
      <div
        class="relative filter md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5]  mx-auto mt-[0] lg:mt-[50px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">{{ $t("message.filter_page.titles.inter") }}</h3>
        <div class="line h-[1px] border mt-[10px]"></div>	
        <InteriorColorsComponent />    
				<InteriorMaterialComponent/> 
				<AirbagsComponentInterior/> 
				<AirConditioningComponent/> 
				<ExtrasComponent/>
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import InteriorColorsComponent from "../components/InteriorColorsComponent.vue";
import InteriorMaterialComponent from "../components/InteriorMaterialComponent.vue";
import AirbagsComponentInterior from "../components/AirbagsComponentInterior.vue";
import AirConditioningComponent from "../components/AirConditioningComponent.vue";
import ExtrasComponent from "../components/ExtrasComponent.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    InteriorColorsComponent,
    InteriorMaterialComponent,
    AirbagsComponentInterior,
		AirConditioningComponent,
		ExtrasComponent
}
}
</script>

<style scoped>
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
