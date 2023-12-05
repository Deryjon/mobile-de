<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3 class="text-[16px]">Vehicle type</h3>
    <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedChopperCruis"
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
            v-if="isCheckedChopperCruis"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Chopper/Cruiser
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorBicycle"
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
            v-if="isCheckedMotorBicycle"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Motor-assisted Bicycle/Small Moped
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedRacing"
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
            v-if="isCheckedRacing"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Racing
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedStreetFight"
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
            v-if="isCheckedStreetFight"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Streetfighter
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCombinationSide"
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
            v-if="isCheckedCombinationSide"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Combination/Sidecar
      </label>
      <label
        class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedMotorcycle"
          @click="toggleShowCheckbox(1)"
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
        Motorcycle
      </label>
      <!-- estate -->
      <label
        class="custom-checkbox flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedRally"
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
            v-if="isCheckedRally"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-[14px]">Rally/Cross </span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[200px] pb-4"
      >
        <input
          type="checkbox"
          v-model="isCheckedSuperMoto"
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
            v-if="isCheckedSuperMoto"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Super Moto</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDirtBike"
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
            v-if="isCheckedDirtBike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Dirt Bike</span>
      </label>
      <!-- sports -->
      <label
        class="custom-checkbox flex gap-3 items-center h-10 w-[206px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedNikedBike"
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
            v-if="isCheckedNikedBike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">Naked Bike</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedScooter"
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
            v-if="isCheckedScooter"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Scooter</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedTourer"
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
            v-if="isCheckedTourer"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Tourer</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedEnduroTouring"
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
            v-if="isCheckedEnduroTouring"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Enduro/Touring Enduro
</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedPocketbike"
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
            v-if="isCheckedPocketbike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Pocketbike
</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSportsBike"
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
            v-if="isCheckedSportsBike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Sports/Super Sports Bike
</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedTrike"
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
            v-if="isCheckedTrike"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Trike
</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedLightWeight"
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
            v-if="isCheckedLightWeight"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Lightweight Motorcycle/Motorbike

</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedQuad"
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
            v-if="isCheckedQuad"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Quad

</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSportTouring"
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
            v-if="isCheckedSportTouring"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Sport Touring Motorcycles


</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[206px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedOther"
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
            v-if="isCheckedOther"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">Other


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

export default {
  setup() {
    const isCheckedChopperCruis = ref(false);
    const isCheckedMotorBicycle = ref(false);
    const isCheckedRacing = ref(false);
    const isCheckedStreetFight = ref(false);
    const isCheckedCombinationSide = ref(false);
    const isCheckedMotorcycle = ref(false);
    const isCheckedRally = ref(false);
    const isCheckedSuperMoto = ref(false);
    const isCheckedDirtBike = ref(false);
    const isCheckedNikedBike = ref(false);
    const isCheckedScooter = ref(false);
    const isCheckedTourer = ref(false);
    const isCheckedEnduroTouring = ref(false);
    const isCheckedPocketbike = ref(false);
    const isCheckedSportsBike = ref(false);
    const isCheckedTrike = ref(false);
    const isCheckedLightWeight = ref(false);
    const isCheckedQuad = ref(false);
    const isCheckedSportTouring = ref(false);
    const isCheckedOther = ref(false);
    const toggleShowCheckbox = (index) => {
      for (let i = 0; i < isCheckedChopperCruis.length; i++) {
        if (i !== index) {
          isCheckedChopperCruis[i] = false;
        }
      }
      isCheckedChopperCruis[index] = true;
    };

    return {
      isCheckedRacing,
      isCheckedCombinationSide,
      isCheckedMotorcycle,
      isCheckedRally,
      isCheckedMotorBicycle,
      isCheckedSuperMoto,
      isCheckedChopperCruis,
      isCheckedStreetFight,
      isCheckedDirtBike,
      isCheckedNikedBike,
      isCheckedScooter,
      isCheckedTourer,
      isCheckedEnduroTouring,
      isCheckedPocketbike,
      isCheckedSportsBike,
      isCheckedTrike,
      isCheckedLightWeight,
      isCheckedQuad,
      isCheckedSportTouring,
      isCheckedOther,
      toggleShowCheckbox,
    };
  },
  data() {
    return {};
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
