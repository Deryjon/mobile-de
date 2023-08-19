<template>
  <div class="mt-[10px] p-[20px]">
    <h3>Fuel Type</h3>
    <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[10px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDiesel"
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
      <PowerComponentTechnic />
    </div>
    <div class="tab-2" v-show="showTab2">
      <RangeComponentTechnic />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import PowerComponentTechnic from "./PowerComponentTechnic.vue";
import RangeComponentTechnic from "./RangeComponentTechnical.vue";

export default {
  setup() {
    const activeTab = ref("tab-1");
    const showTab1 = ref(true);
    const showTab2 = ref(false);
    const isCheckedDiesel = ref(true);
    const isCheckedDisElect = ref(false);
    const isCheckedGas = ref(false);
    const isCheckedOther = ref(false);
    const isCheckedPetrol = ref(false);
    const isCheckedElectro = ref(false);
    const isCheckedHydro = ref(false);
    const isCheckedHydbrid = ref(false);
    const isCheckedPetElect = ref(false);
    const isCheckedLPG = ref(false);
    const isCheckedEthan = ref(false);
    const toggleShowCheckbox = (index) => {
      showTab1.value = index === 0; // Показать tab-1 при выборе Diesel
      showTab2.value = index !== 0; // Показать tab-2 при выборе чего-либо кроме Diesel

      for (let i = 0; i < isCheckedDiesel.length; i++) {
        if (i !== index) {
          isCheckedDiesel[i] = false;
        }
      }
      isCheckedDiesel[index] = true;
    };

    return {
      isCheckedGas,
      isCheckedPetrol,
      isCheckedElectro,
      isCheckedHydro,
      isCheckedDisElect,
      isCheckedHydbrid,
      isCheckedDiesel,
      isCheckedOther,
      isCheckedPetElect,
      isCheckedLPG,
      isCheckedEthan,
      activeTab,
			showTab1,
			showTab2,
      toggleShowCheckbox,
    };
  },
  data() {
    return {};
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
