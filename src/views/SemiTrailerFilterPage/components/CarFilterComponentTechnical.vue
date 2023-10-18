<template>
  <div class="mt-[10px] p-[20px]">
    <h3 class="text-[16px]">Fuel Type</h3>
    <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDiesel"
          @click="toggleShowCheckbox(0, 'Diesel')"
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
        Diesel
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDisElect"
          @click="toggleShowCheckbox(1, 'Hybrid (diesel/electric)')"
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
            v-if="isCheckedDisElect"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Hybrid (diesel/electric)
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedGas"
          @click="toggleShowCheckbox(2, 'Natural Gas')"
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
            v-if="isCheckedGas"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Natural Gas
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
          v-model="isCheckedPetrol"
          @click="toggleShowCheckbox(4, 'Petrol')"
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
        Petrol
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedElectro"
          @click="toggleShowCheckbox(5, 'Electric')"
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
            v-if="isCheckedElectro"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Electric
      </label>
      <!-- estate -->
      <label
        class="custom-checkbox flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedHydro"
          @click="toggleShowCheckbox(6, 'Hydrogen')"
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
            v-if="isCheckedHydro"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-[14px]">Hydrogen</span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedHydbrid"
          @click="toggleShowCheckbox(7, 'Plug-in hybri')"
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
            v-if="isCheckedHydbrid"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Plug-in hybrid</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedPetElect"
          @click="toggleShowCheckbox(8, 'Hybrid (petrol/electric)')"
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
            v-if="isCheckedPetElect"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Hybrid (petrol/electric)</span>
      </label>
      <!-- sports -->
      <label
        class="custom-checkbox flex gap-3 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedLPG"
          @click="toggleShowCheckbox(9, 'LPG')"
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
            v-if="isCheckedLPG"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">LPG</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedEthan"
          @click="toggleShowCheckbox(10, 'Ethanol (FFV, E85, etc.)')"
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
            v-if="isCheckedEthan"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Ethanol (FFV, E85, etc.)</span>
      </label>
    </div>
  </div>
  <div class="tab-content">
    <div class="tab-1" v-show="showTab1">
      <!-- <PowerComponentTechnic /> -->
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import PowerComponentTechnic from "./PowerComponentTechnic.vue";
import RangeComponentTechnic from "./RangeComponentTechnical.vue";

export default {
  data() {
    return {
      isCheckedDiesel: false,
      isCheckedDisElect: false,
      isCheckedGas: false,
      isCheckedOther: false,
      isCheckedPetrol: false,
      isCheckedElectro: false,
      isCheckedHydro: false,
      isCheckedHydbrid: false,
      isCheckedPetElect: false,
      isCheckedLPG: false,
      isCheckedEthan: false,
      showTab1: true,
      showTab2: false,
      activeTab: "tab-1",
			selectedFuel: []
    };
  },
  methods: {
		fetchData() {
      http
        .get("/cars/count", {
          fuel_type: this.selectedFuel,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
        });
    },
		toggleShowCheckbox(index, fuelName) {
			this.showTab1 = index === 0;
      this.showTab2 = index !== 0;
      const isChecked = !this.selectedFuel.includes(fuelName);
      if (isChecked) {
        this.selectedFuel.push(fuelName);
      } else {
        const fuelIndex = this.selectedFuel.indexOf(fuelName);
        if (fuelIndex !== -1) {
          this.selectedFuel.splice(fuelIndex, 1);
        }
      }
      console.log("selectedCars изменен:", this.selectedFuel	)
			this.fetchData()
    },
    // toggleShowCheckbox(index) {
    // 
    //   for (let i = 0; i < this.isCheckedDiesel.length; i++) {
    //     if (i !== index) {
    //       this.$set(this.isCheckedDiesel, i, false);
    //     } else {
    //       this.$set(this.isCheckedDiesel, i, true);
    //     }
    //   }
    // },
  },
  components: { PowerComponentTechnic, RangeComponentTechnic },
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
