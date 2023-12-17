<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3>Others</h3>
    <div class="filter-cars flex flex-wrap   mt-[10px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] lg:w-[130px] items-center h-[40px] pb-[20px]"
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
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedEmergency"
          @click="toggleShowCheckbox(1, 'Box')"
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
        Box
      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCentral"
          @click="toggleShowCheckbox(2, 'Catalytic Converter')"
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
        Catalytic Converter
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSpeed"
          @click="toggleShowCheckbox(3, 'Electric Starter')"
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
        Electric Starter
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAdaptive"
          @click="toggleShowCheckbox(4, 'Kickstarter')"
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
        Kickstarter
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedTyre"
          @click="toggleShowCheckbox(5, 'Roll-over Bar')"
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
        Roll-over Bar
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] lg:w-[120px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedLastChanges"
          @click="toggleShowCheckbox(6, 'Windshield')"
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
        Windshield
      </label>
      
    </div>
  </div>
</template>
<script>
import http from "@/axios.config";
import {useMotorbikeStore} from "@/store/motorbikeDataStore"
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
      this.updateMotorbikeData();
    },
		updateMotorbikeData() {
      const motorbikeStore = useMotorbikeStore();
      motorbikeStore.motorcycleData.others = this.selectedOthers;
      motorbikeStore.updateMotorbikeData();
    },
  },
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
