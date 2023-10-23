<template>
  <div class="p-[20px]">
    <h3 class="text-[16px]">Driving Mode</h3>
    <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedShaftDrive"
          @click="toggleShowCheckbox(0, 'Shaft drive')"
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
            v-if="isCheckedShaftDrive"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Shaft drive
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedChainDrive"
          @click="toggleShowCheckbox(1, 'Chain drive')"
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
            v-if="isCheckedChainDrive"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Chain drive
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedBeltDrive"
          @click="toggleShowCheckbox(2, 'Belt drive')"
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
            v-if="isCheckedBeltDrive"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Belt drive
      </label>
    </div>
  </div>
  <div class="tab-content">
    <div class="tab-1"></div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useMotorbikeStore } from "@/store/motorbikeDataStore";
export default {
  data() {
    return {
      isCheckedShaftDrive: false,
      isCheckedChainDrive: false,
      isCheckedBeltDrive: false,
			selectedDrive: []
    };
  },
	methods:{
		updateMotorbikeData() {
      const motorbikeStore = useMotorbikeStore();
      motorbikeStore.motorcycleData.driving_mode = this.selectedVehicleType;
      motorbikeStore.updateMotorbikeData();
    },
		toggleShowCheckbox(index, fuelName) {
      const isChecked = !this.selectedDrive.includes(fuelName);
      if (isChecked) {
        this.selectedDrive.push(fuelName);
      } else {
        const fuelIndex = this.selectedDrive.indexOf(fuelName);
        if (fuelIndex !== -1) {
          this.selectedDrive.splice(fuelIndex, 1);
        }
      }
			console.log(this.selectedDrive);
      this.updateMotorbikeData();
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
