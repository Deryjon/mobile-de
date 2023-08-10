<template>
  <div class="filter-cars flex flex-wrap gap-[50px] mt-[50px] p-[20px]">
    <!-- cabrio -->
    <label
      class="custom-checkbox flex gap-[15px] items-center h-[40px] w-[206px] pb-[20px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedCabrio"
        @click="toggleShowCheckbox(0)"
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
        class="w-[80px]"
      />
      Cabrio / Roadster
    </label>
    <!-- estate -->
    <label class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-4">
      <input
        type="checkbox"
        v-model="isCheckedEstate"
        @click="toggleShowCheckbox(1)"
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
        class="w-20 pb-[10px]"
      />
      <span class="text-lg">Estate Car</span>
    </label>

    <!-- saloon -->
    <label class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4">
      <input
        type="checkbox"
        v-model="isCheckedSaloon"
        @click="toggleShowCheckbox(2)"
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
      <span class="text-lg">Saloon</span>
    </label>
    <!-- small -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[20px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedSmall"
        @click="toggleShowCheckbox(3)"
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
        class="w-16 pt-[10px]"
      />
      <span class="text-lg">Small Car</span>
    </label>
    <!-- sports -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[20px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedSuper"
        @click="toggleShowCheckbox(4)"
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
        class="w-20 pt-[18px]"
      />
      <span class="text-md"> Sports Car / Coupe</span>
    </label>
    <!-- off-road -->
    <label
      class="custom-checkbox flex gap-4 items-center h-10 w-[230px] pb-[23px]"
    >
      <input
        type="checkbox"
        v-model="isCheckedOff"
        @click="toggleShowCheckbox(5)"
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
</template>
<script>
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
      checkboxStatus: [false, false, false, false, false, false], // Add this array to store checkbox status
    };
  },
};
</script>
<style>
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