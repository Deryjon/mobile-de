<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3>Features</h3>
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedABS"
          @click="toggleShowCheckbox(0, 'ABS')"
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
            v-if="isCheckedABS"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        ABS
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedEmergency"
          @click="toggleShowCheckbox(1, 'Emergency brake assist')"
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
            v-if="isCheckedEmergency"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Emergency brake assist
      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCentral"
          @click="toggleShowCheckbox(2, 'Keyless central locking')"
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
            v-if="isCheckedCentral"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Keyless central locking
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSpeed"
          @click="toggleShowCheckbox(3, '	Speed limit control system')"
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
            v-if="isCheckedSpeed"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Speed limit control system
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAdaptive"
          @click="toggleShowCheckbox(4, 'Adaptive cornering lights')"
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
            v-if="isCheckedAdaptive"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Adaptive cornering lights
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedTyre"
          @click="toggleShowCheckbox(5, 'Emergency tyre')"
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
            v-if="isCheckedTyre"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Emergency tyre
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedLastChanges"
          @click="toggleShowCheckbox(6, 'Lane change assist')"
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
            v-if="isCheckedLastChanges"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Lane change assist
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSportsPackage"
          @click="toggleShowCheckbox(7, 'Sports package')"
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
            v-if="isCheckedSportsPackage"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Sports package
      </label>
    </div>
  </div>
</template>
<script>
import { useTruckStore } from "../../../store/truckDataStore";
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";
export default {
  data() {
    return {
      isCheckedABS: false,
      isCheckedEmergency: false,
      isCheckedCentral: false,
      isCheckedSpeed: false,
      isCheckedAdaptive: false,
      isCheckedTyre: false,
      isCheckedLastChanges: false,
      isCheckedSportsPackage: false,
      selectedOthers: [],
    };
  },
  methods: {
    updateTruckData() {
      const truckStore = useTruckStore();
      (truckStore.truckData.features =
        this.selectedOthers),
        truckStore.updateTruckData();
    },
    toggleShowCheckbox(index, otherName) {
      const isChecked = !this.selectedOthers.includes(otherName);
      if (isChecked) {
        this.selectedOthers.push(otherName);
      } else {
        const carIndex = this.selectedOthers.indexOf(otherName);
        if (carIndex !== -1) {
          this.selectedOthers.splice(carIndex, 1);
        }
      }
     
      this.updateTruckData();
    },
  },
  components: { TrailerCoupling },
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
  fill: #fff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #fff;
  background: #e04b00;
}
</style>
