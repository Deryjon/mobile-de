<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3>Parking sensors</h3>
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAwning"
          @click="toggleShowCheckbox(0, 'Awning')"
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
            v-if="isCheckedAwning"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Awning
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDisabledAccessible"
          @click="toggleShowCheckbox(1, 'DisabledAccessible')"
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
            v-if="isCheckedDisabledAccessible"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Disabled accessible
      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedRearGarage"
          @click="toggleShowCheckbox(2, 'RearGarage')"
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
            v-if="isCheckedRearGarage"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Rear garage
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSolarEnergySystem"
          @click="toggleShowCheckbox(3, 'Solar Energy System')"
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
            v-if="isCheckedSolarEnergySystem"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Solar Energy System
      </label>
    </div>
  </div>
</template>
<script>
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";
import http from '../../../axios.config'
export default {
  data() {
    return {
      isCheckedAwning: false,
      isCheckedDisabledAccessible: false,
      isCheckedRearGarage: false,
      isCheckedSolarEnergySystem: false,
      isCheckedSelf: false,
			selectedParking: []
    };
  },
	methods: {
    fetchData() {
      http
        .get("/cars/count", {
          parking_sensors: this.selectedParking,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
        });
    },
    toggleShowCheckbox(index, parkingName) {
      const isChecked = !this.selectedParking.includes(parkingName);
      if (isChecked) {
        this.selectedParking.push(parkingName);
      } else {
        const index = this.selectedParking.indexOf(parkingName);
        if (index !== -1) {
          this.selectedParking.splice(index, 1);
        }
      }
      console.log("selectedParking изменен:", this.selectedParking)
			this.fetchData()
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
