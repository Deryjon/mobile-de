<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3 class="text-[16px]">{{ $t("message.filter_page.vehtyp") }}</h3>
    <div class="filter-cars flex flex-wrap gap-x-[40px] lg:gap-x-[60px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedChopperCruis"
          @click="toggleShowCheckbox(1, 'Chopper/Cruiser')"
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
            v-if="isCheckedChopperCruis"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor") }}
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorBicycle"
          @click="toggleShowCheckbox(2, 'Motor-assisted Bicycle/Small Moped')"
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
            v-if="isCheckedMotorBicycle"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor1") }}

      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedRacing"
          @click="toggleShowCheckbox(3, 'Racing')"
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
            v-if="isCheckedRacing"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor2") }}

      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedStreetFight"
          @click="toggleShowCheckbox(4, 'Streetfighter')"
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
            v-if="isCheckedStreetFight"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor3") }}

      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCombinationSide"
          @click="toggleShowCheckbox(5, 'Combination/Sidecar')"
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
            v-if="isCheckedCombinationSide"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor4") }}
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorcycle"
          @click="toggleShowCheckbox(6, 'Motorcycle')"
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
            v-if="isCheckedMotorcycle"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.motorbike.motor5") }}

      </label>
      <!-- estate -->
      <label
        class="custom-checkbox flex gap-4 text-[14px] items-center h-10 w-[140px] lg:w-[206px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedRally"
          @click="toggleShowCheckbox(7, 'Rally/Cross')"
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
            v-if="isCheckedRally"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-[14px]">        {{ $t("message.filter_page.motorbike.motor6") }}
</span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[140px] lg:w-[200px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedSuperMoto"
          @click="toggleShowCheckbox(8, 'Super Moto')"
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
            v-if="isCheckedSuperMoto"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">        {{ $t("message.filter_page.motorbike.motor7") }}
</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDirtBike"
          @click="toggleShowCheckbox(9, 'Dirt Bike')"
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
            v-if="isCheckedDirtBike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">        {{ $t("message.filter_page.motorbike.motor8") }}
</span>
      </label>
      <!-- sports -->
      <label
        class="custom-checkbox flex gap-3 items-center h-10 w-[140px] lg:w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedNikedBike"
          @click="toggleShowCheckbox(10, 'Naked Bike')"
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
            v-if="isCheckedNikedBike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">        {{ $t("message.filter_page.motorbike.motor9") }}
</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[140px] lg:w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedOther"
          @click="toggleShowCheckbox(20, 'Other')"
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
        <span class="text-sm">        {{ $t("message.filter_page.other") }}
 </span>
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
      isCheckedChopperCruis: false,
      isCheckedMotorBicycle: false,
      isCheckedRacing: false,
      isCheckedStreetFight: false,
      isCheckedCombinationSide: false,
      isCheckedMotorcycle: false,
      isCheckedRally: false,
      isCheckedSuperMoto: false,
      isCheckedDirtBike: false,
      isCheckedNikedBike: false,
      isCheckedScooter: false,
      isCheckedTourer: false,
      isCheckedEnduroTouring: false,
      isCheckedPocketbike: false,
      isCheckedSportsBike: false,
      isCheckedTrike: false,
      isCheckedLightWeight: false,
      isCheckedQuad: false,
      isCheckedSportTouring: false,
      isCheckedOther: false,
      selectedVehicleType: [],
    };
  },
  methods: {
    updateMotorbikeData() {
      const motorbikeStore = useMotorbikeStore();
      motorbikeStore.motorcycleData.type = this.selectedVehicleType;
      motorbikeStore.updateMotorbikeData();
    },

    toggleShowCheckbox(index, fuelName) {
      const isChecked = !this.selectedVehicleType.includes(fuelName);
      if (isChecked) {
        this.selectedVehicleType.push(fuelName);
      } else {
        const fuelIndex = this.selectedVehicleType.indexOf(fuelName);
        if (fuelIndex !== -1) {
          this.selectedVehicleType.splice(fuelIndex, 1);
        }
      }
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
