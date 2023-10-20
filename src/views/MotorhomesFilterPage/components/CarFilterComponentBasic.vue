<template>
  <div class="mt-[10px] p-[20px]">
    <h3 class="text-[16px]">Vehicle type</h3>
    <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAlcoves"
          @click="toggleShowCheckbox(0, 'Alcoves')"
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
            v-if="isCheckedAlcoves"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Alcoves
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedIntegrated"
          @click="toggleShowCheckbox(1, 'Integrated')"
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
            v-if="isCheckedIntegrated"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Integrated
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorHomesPickup"
          @click="toggleShowCheckbox(2, 'Motor Homes/Pickup')"
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
            v-if="isCheckedMotorHomesPickup"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Motor Homes/Pickup
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedOther"
          @click="toggleShowCheckbox(3, 'Other')"
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
        Other
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCabin"
          @click="toggleShowCheckbox(4, 'Cabin')"
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
            v-if="isCheckedCabin"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Cabin
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMobileHome"
          @click="toggleShowCheckbox(5, 'Mobile Home')"
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
            v-if="isCheckedMobileHome"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Mobile Home
      </label>
      <!-- estate -->
      <label
        class="custom-checkbox flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedPartlyIntegrated"
          @click="toggleShowCheckbox(6, 'Partly Integrated')"
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
            v-if="isCheckedPartlyIntegrated"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-[14px]">Partly Integrated</span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedCaravan"
          @click="toggleShowCheckbox(7, 'Caravan')"
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
            v-if="isCheckedCaravan"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Caravan</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorHomesOther"
          @click="toggleShowCheckbox(8, 'Motor Homes, Other')"
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
            v-if="isCheckedMotorHomesOther"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Motor Homes, Other</span>
      </label>
      <!-- sports -->
      <label
        class="custom-checkbox flex gap-3 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedVan"
          @click="toggleShowCheckbox(9, 'Van')"
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

        <span class="text-[14px]">Van</span>
      </label>
      <!-- off-road -->
    </div>
  </div>
  <div class="tab-content">
    <div class="tab-1"></div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useMotorhomeStore } from "@/store/motorhomeDataStore";
export default {
  data() {
    return {
      isCheckedAlcoves: false,
      isCheckedIntegrated: false,
      isCheckedMotorHomesPickup: false,
      isCheckedStreetFight: false,
      isCheckedCombinationSide: false,
      isCheckedMobileHome: false,
      isCheckedPartlyIntegrated: false,
      isCheckedCaravan: false,
      isCheckedCabin: false,
      isCheckedMotorHomesOther: false,
      isCheckedVan: false,
      isCheckedOther: false,
      type: [],
    };
  },
  methods: {
    updateMotorhomeData() {
      const motorhomeStore = useMotorhomeStore();
      motorhomeStore.motorhomeData.types = this.selectedVehicleType;
      motorhomeStore.updateMotorhomeData();
    },
    toggleShowCheckbox(index, fuelName) {
      const isChecked = !this.type.includes(fuelName);
      if (isChecked) {
        this.type.push(fuelName);
      } else {
        const fuelIndex = this.type.indexOf(fuelName);
        if (fuelIndex !== -1) {
          this.type.splice(fuelIndex, 1);
        }
      }
      this.updateMotorhomeData();
    },
  },
  components: {},
};
</script>
<style scoped>
select {
  scrollbar-width: none;
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
