<template>
  <div class="filter-cars p-[20px]">
    <h3 class="text-[16px]">Fuel type</h3>
    <div class="filter-cars flex flex-wrap gap-[50px] mt-[20px]">
      <label
        class="custom-checkbox flex gap-[10px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedPetrol"
          @click="toggleShowCheckbox(0, 'Petrol')"
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
            v-if="isCheckedPetrol"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm"> Petrol</span>
      </label>
      <!-- estate -->
      <label class="custom-checkbox flex gap-4 items-center h-10 pb-4">
        <input
          type="checkbox"
          v-model="isCheckedDiesel"
          @click="toggleShowCheckbox(1, 'Diesel')"
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
            v-if="isCheckedDiesel"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Diesel</span>
      </label>

      <!-- Electric -->
      <label class="custom-checkbox flex gap-4 items-center h-10 pb-4">
        <input
          type="checkbox"
          v-model="isCheckedElectric"
          @click="toggleShowCheckbox(2, 'Electric')"
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
            v-if="isCheckedElectric"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Electric</span>
      </label>
      <!-- Other -->
      <label class="custom-checkbox flex gap-4 items-center h-10 pb-[20px]">
        <input
          type="checkbox"
          v-model="isCheckedOther"
          @click="toggleShowCheckbox(3, 'Other')"
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
            v-if="isCheckedOther"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Other</span>
      </label>
    </div>
    <!-- cabrio -->
    <!-- sports -->
  </div>
</template>
<script>
import http from "@/axios.config";
import { useMotorbikeStore } from "@/store/motorbikeDataStore";
export default {
  data() {
    return {
      isCheckedVan: false,
      isCheckedOff: false,
      isCheckedSuper: false,
      isCheckedOther: false,
      isCheckedElectric: false,
      isCheckedDiesel: false,
      isCheckedPetrol: false,
      selectedFuel: [],
    };
  },
  methods: {
    updateMotorbikeData() {
      const motorbikeStoreStore = useMotorbikeStore();
      motorbikeStoreStore.motorcycleData.fuel_type = this.selectedFuel;
      motorbikeStoreStore.updateMotorbikeData();
    },
    toggleShowCheckbox(index, carName) {
      const isChecked = !this.selectedFuel.includes(carName);
      if (isChecked) {
        this.selectedFuel.push(carName);
      } else {
        const carIndex = this.selectedFuel.indexOf(carName);
        if (carIndex !== -1) {
          this.selectedFuel.splice(carIndex, 1);
        }
      }

      this.updateMotorbikeData();
    },
  },
  watch: {
    // selectedCars(new, old) {
    //   if (new !== old) {
    //     http
    //       .get("/cars/count", {
    //         body: this.selectedCars,
    //       })
    //       .then((response) => {
    //         const data = response.data;
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.error("Ошибка при выполнении запроса:", error);
    //       });
    //     console.log(123);
    //   }
    // },
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
