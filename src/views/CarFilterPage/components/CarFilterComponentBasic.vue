<template>
  <div
    class="filter-cars flex flex-wrap gap-[40px] mt-[20px] lg:mt-[50px] lg:p-[20px]"
  >
    <!-- cabrio -->
    <label
      class="custom-checkbox flex gap-[10px] items-center h-[40px] w-[206px] pb-[20px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedCabrio"
        @click="toggleShowCheckbox(0, 'Cabrio / Roadster')"
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
          v-if="isCheckedCabrio"
          fill="#FFFFFF"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <img
        src="../../../assets/icons/cabriolet-icon.svg"
        alt=""
        class="w-[90px] pt-[20px]"
      />
      <span class="text-sm">{{ $t("message.filter_page.car.car1") }}</span>
    </label>
    <!-- estate -->
    <label class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-4">
      <input
        type="checkbox"
        v-model="isCheckedEstate"
        @click="toggleShowCheckbox(1, 'Estate Car')"
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
      <span class="text-sm">{{ $t("message.filter_page.car.car2") }}</span>
    </label>

    <!-- saloon -->
    <label class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4">
      <input
        type="checkbox"
        v-model="isCheckedSaloon"
        @click="toggleShowCheckbox(2, 'Saloon')"
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
      <span class="text-sm">{{ $t("message.filter_page.car.car3") }}</span>
    </label>
    <!-- small -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[20px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedSmall"
        @click="toggleShowCheckbox(3, 'Small Car')"
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
          v-if="isCheckedSmall"
          fill="#FFFFFF"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <img
        src="../../../assets/icons/small-car-icon.svg"
        alt=""
        class="w-[75px] pt-[10px]"
      />
      <span class="text-sm">{{ $t("message.filter_page.car.car4") }}</span>
    </label>
    <!-- sports -->
    <label class="custom-checkbox flex items-center h-10 w-[230px] pb-[20px]">
      <input
        type="checkbox"
        v-model="isCheckedSuper"
        @click="toggleShowCheckbox(4, 'Sports Car / Coupe')"
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
          v-if="isCheckedSuper"
          fill="#FFFFFF"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <img
        src="../../../assets/icons/sports-car-icon.svg"
        alt=""
        class="w-28 pt-[18px]"
      />
      <span class="text-sm">{{ $t("message.filter_page.car.car5") }}</span>
    </label>
    <!-- off-road -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[23px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedOff"
        @click="toggleShowCheckbox(5, 'SUV / Off-road Vehicle / Pickup Truck')"
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
      <span class="text-sm">{{ $t("message.filter_page.car.car7") }}</span>
    </label>
    <label
      class="custom-checkbox b flex gap-4 items-center h-10 w-[230px] pb-[23px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedSUV"
        @click="toggleShowCheckbox(5, 'SUV / Off-road Vehicle / Pickup Truck')"
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
          v-if="isCheckedSUV"
          fill="#FFFFFF"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <svg class="svg-icon" style="width: 70px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M403.929088 608.405504l-127.557632 0 0-12.148736 115.408896 0 0-166.836224c-238.825472 7.913472-313.718784 47.241216-314.454016 47.644672l-5.849088-10.641408c3.084288-1.708032 78.536704-41.795584 326.187008-49.352704l6.264832-0.190464L403.929088 608.405504z"  /><path d="M37.963776 561.330176l-12.148736 0 0-56.184832c0-6.559744 1.898496-11.163648 5.636096-13.703168 2.953216-2.004992 6.381568-2.08896 8.921088-1.482752l299.780096 0 0-57.704448 12.148736 0 0 69.853184-314.05056-0.024576c-0.14336 0.60416-0.284672 1.56672-0.284672 3.06176L37.965824 561.330176z"  /><path d="M986.036224 465.580032l-12.148736 0c0-33.632256-20.191232-125.78816-25.102336-147.712L462.04928 317.868032l-50.36032 84.598784-10.440704-6.21568 53.895168-90.529792 503.332864 0 1.079296 4.7104C960.636928 315.138048 986.036224 426.110976 986.036224 465.580032z"  /><path d="M474.802176 282.94144l460.613632 0 0 12.148736-460.613632 0 0-12.148736Z"  /><path d="M681.82016 429.217792 422.152192 429.217792 422.152192 417.069056 669.671424 417.069056 669.671424 316.84608 681.82016 316.84608Z"  /><path d="M669.671424 438.839296l12.148736 0 0 163.49184-12.148736 0 0-163.49184Z"  /><path d="M422.152192 598.796288l269.289472 0 0 12.148736-269.289472 0 0-12.148736Z"  /><path d="M911.118336 315.328512l12.148736 0 0 135.65952-12.148736 0 0-135.65952Z"  /><path d="M996.155392 404.922368l12.148736 0 0 156.407808-12.148736 0 0-156.407808Z"  /><path d="M986.036224 559.312896 973.887488 559.312896 973.887488 476.803072 705.107968 476.803072 705.107968 464.654336 986.036224 464.654336Z"  /><path d="M644.366336 499.070976 624.625664 499.070976 624.625664 486.92224 632.219648 486.92224 632.219648 480.350208 644.366336 480.350208Z"  /><path d="M705.974272 647.12704l-434.8928 0-16.46592-14.166016 0-16.881664c-44.21632-55.81824-91.717632-57.810944-123.901952-49.53088-34.557952 8.873984-56.19712 30.418944-57.075712 35.934208l0.012288 32.493568L0 634.976256 0 574.23872l53.147648 0 0 12.148736L12.148736 586.387456l0 36.44416L61.50144 622.831616l0-20.50048c0-11.945984 24.02304-33.52576 56.174592-44.548096 31.557632-10.795008 92.78464-18.41152 147.808256 52.471808l1.282048 1.64864 0 15.48288 8.82688 7.591936 423.622656 0c8.398848-13.369344 39.340032-61.333504 57.894912-72.747008l1.232896-0.759808 1.447936-0.118784c0.700416-0.059392 69.50912-5.517312 122.112 0.012288l2.24256 0.237568 1.542144 1.636352c1.304576 1.388544 30.90432 32.956416 43.941888 58.830848l82.225152 0 0-36.44416-59.222016 0 0-12.148736L1024 573.476864l0 60.741632-102.121472 0-1.613824-3.571712c-9.703424-21.520384-35.38944-50.313216-41.914368-57.432064-46.800896-4.651008-105.846784-0.641024-116.04992 0.118784-15.505408 10.84416-44.464128 54.560768-54.54848 70.907904L705.974272 647.12704z"  /><path d="M817.989632 747.290624c-42.565632 0-77.195264-34.629632-77.195264-77.195264 0-42.555392 34.629632-77.185024 77.195264-77.185024 42.555392 0 77.185024 34.629632 77.185024 77.185024C895.174656 712.660992 860.545024 747.290624 817.989632 747.290624zM817.989632 605.059072c-35.862528 0-65.048576 29.171712-65.048576 65.036288s29.184 65.048576 65.048576 65.048576 65.036288-29.184 65.036288-65.048576S853.854208 605.059072 817.989632 605.059072z"  /><path d="M817.989632 704.52224c-18.980864 0-34.428928-15.446016-34.428928-34.428928s15.446016-34.41664 34.428928-34.41664 34.41664 15.433728 34.41664 34.41664S836.972544 704.52224 817.989632 704.52224zM817.989632 647.827456c-12.290048 0-22.280192 9.990144-22.280192 22.267904 0 12.290048 9.988096 22.280192 22.280192 22.280192 12.27776 0 22.267904-9.988096 22.267904-22.280192C840.257536 657.815552 830.26944 647.827456 817.989632 647.827456z"  /><path d="M159.954944 747.290624c-42.565632 0-77.195264-34.629632-77.195264-77.195264 0-42.555392 34.629632-77.185024 77.195264-77.185024s77.195264 34.629632 77.195264 77.185024C237.152256 712.660992 202.522624 747.290624 159.954944 747.290624zM159.954944 605.059072c-35.862528 0-65.048576 29.171712-65.048576 65.036288s29.184 65.048576 65.048576 65.048576 65.048576-29.184 65.048576-65.048576S195.81952 605.059072 159.954944 605.059072z"  /><path d="M159.954944 704.52224c-18.980864 0-34.41664-15.446016-34.41664-34.428928s15.433728-34.41664 34.41664-34.41664 34.41664 15.433728 34.41664 34.41664S178.937856 704.52224 159.954944 704.52224zM159.954944 647.827456c-12.27776 0-22.267904 9.990144-22.267904 22.267904 0 12.290048 9.988096 22.280192 22.267904 22.280192 12.27776 0 22.267904-9.988096 22.267904-22.280192C182.222848 657.815552 172.234752 647.827456 159.954944 647.827456z"  /></svg>

      
      <span class="text-sm">{{ $t("message.filter_page.car.car6") }}</span>
    </label>
    <!-- off-road -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[23px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedVan"
        @click="toggleShowCheckbox(6, 'Van / Minibus')"
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
        class="w-[70px] pt-[8px]"
      />
      <span class="text-sm">{{ $t("message.filter_page.car.car8") }}</span>
    </label>
  </div>
</template>
<script>
import http from "../../../axios.config";
import {useCarStore} from '@/store/carDataStore'
export default {
  data() {
    return {
      isCheckedVan: false,
      isCheckedOff: false,
      isCheckedSuper: false,
      isCheckedSmall: false,
      isCheckedSaloon: false,
      isCheckedEstate: false,
      isCheckedCabrio: false,
      selectedCars: [],
    };
  },
  methods: {
		updateCarData() {
      const carStore = useCarStore();
      carStore.carData.body = this.selectedCars
      carStore.updateCarData();
    },
    toggleShowCheckbox(index, carName) {
      const isChecked = !this.selectedCars.includes(carName);
      if (isChecked) {
        this.selectedCars.push(carName);
      } else {
        const carIndex = this.selectedCars.indexOf(carName);
        if (carIndex !== -1) {
          this.selectedCars.splice(carIndex, 1);
        }
      }
			this.updateCarData()
    },
  },
};
</script>
<style scoped>
select {
  scrollbar-width: none; /*For Firefox*/
  -ms-overflow-style: none;
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
