<template>
  <div class="for-example ">
    <div class="cars lg:flex  gap-[40px]">
      <div class="cars_cars flex pl-[30px] lg:block gap-[20px] sm:gap-[100px]">
        <div
          class="cars_cars_car2  cursor-pointer lg:text-[14px] w-[150px] hover:bg-gray-200 "
        >
          <img
            alt="Agricultural"
            style="color: transparent"
            src="../../../assets/images/truckess.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center w-full">Trucks over 7.5 t</h3>
        </div>
        <div
          class="cars_cars_car  cursor-pointer lg:text-[14px] w-[150px]  hover:bg-gray-200"
        >
          <img
            alt="buses"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/busess.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center">Buses and Coaches</h3>
        </div>
      </div>
      <div	 class="cars_cars_car flex lg:block gap-[20px] sm:gap-[100px]">
        <div
          class="cars_car2 w-[150px]  cursor-pointer lg:text-[14px] 10px] lg:mt-[0px] hover:bg-gray-200"
        >
          <img
            alt="Agricultural"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/rucks-over-mini.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center lg:text-[14px]">Trucks over 7.5 t</h3>
        </div>
        <div
          class="mt-[15px] w-[150px]  cursor-pointer lg:text-[14px] hover:bg-gray-200"
        >
          <img
            alt="buses"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/buses.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center lg:text-[14px]">Buses and Coaches</h3>
        </div>
      </div>
      <div class="cars_cars_car flex lg:block gap-[20px] sm:gap-[100px]">
        <div class="cars_car2 w-[150px] hover:bg-gray-200 cursor-pointer	">
          <img
            alt="Agricultural"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/vans.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center lg:text-[14px]">Trucks over 7.5 t</h3>
        </div>
        <div class="cars_cars w-[150px] px-[10px] hover:bg-gray-200 cursor-pointer">
          <img
            alt="buses"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/machines.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center lg:text-[14px]">Buses and Coaches</h3>
        </div>
      </div>
      <div class="cars_cars w-[150px] flex lg:block gap-[20px] sm:gap-[100px]">
        <div class="cars_cars_car2  cursor-pointer lg:text-[14px] hover:bg-gray-200">
          <img
            alt="Agricultural"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/coaches.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center">Trucks over 7.5 t</h3>
        </div>
        <div
          class="cars_cars_car  cursor-pointer lg:text-[14px] flex_car hover:bg-slate-300"
        >
          <img
            alt="buses"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/trucks-noim.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center">Buses and Coaches</h3>
        </div>
      </div>
      <div class="cars_cars flex lg:block">
        <div class="cars_car2  cursor-pointer lg:text-[14px] hover:bg-gray-200">
          <img
            alt="Agricultural"
            data-nimg="1"
            style="color: transparent"
            src="../../../assets/images/trucks-over.svg"
            class="mx-auto w-[70px] lg:h-[50px]"
          />
          <h3 class="cars_taxt text-center">Trucks over 7.5 t</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@media screen and (min-width: 1024px) {
  .cars_cars_car2 {
    border-right: 1px solid #35373d;
    border-bottom: 1px solid #35373d;

    outline: hidden;
  }
  .cars_car2 {
    border-bottom: 1px solid #35373d;

    outline: hidden;

    text-align: center;
  }
  .cars_cars_car {
    border-right: 1px solid #35373d;
    text-align: center;
  }
}
</style>
