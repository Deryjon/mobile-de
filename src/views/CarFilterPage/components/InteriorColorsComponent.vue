<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3>{{ $t("message.filter_page.exterior_color.title_inter") }}</h3>
    <div class="filter-cars flex flex-wrap gap-x-[20px] mt-[20px]">
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedBeige"
          @click="toggleShowCheckbox(0, 'Beige')"
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
            v-if="isCheckedBeige"
            fill="#000000"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.exterior_color.beige") }}
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedBrown"
          @click="toggleShowCheckbox(1, 'Brown')"
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
            v-if="isCheckedBrown"
            fill="#000000"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.exterior_color.brown") }}
      </label>
      <label
        class="custom-checkbox custom-grey flex gap-3 items-center h-10 w-[100px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedGrey"
          @click="toggleShowCheckbox(2, 'Grey')"
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
            v-if="isCheckedGrey"
            fill="#000000"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-[14px]">{{ $t("message.filter_page.exterior_color.grey") }}</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox custom-black flex gap-4 items-center h-10 w-[100px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedBlack"
          @click="toggleShowCheckbox(3, 'Black')"
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
            v-if="isCheckedBlack"
            fill="#000000"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">{{ $t("message.filter_page.exterior_color.black") }}</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox custom-purple flex gap-4 items-center h-10 w-[100px] pb-[23px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedOther"
          @click="toggleShowCheckbox(4, 'Other')"
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
            fill="#000000"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        <span class="text-sm">{{ $t("message.filter_page.exterior_color.other") }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import http from "../../../axios.config";
import { useCarStore } from "@/store/carDataStore";
export default {
  data() {
    return {
      isCheckedBeige: false,
      isCheckedBrown: false,
      isCheckedGrey: false,
      isCheckedBlack: false,
      isCheckedOther: false,
			selectedColor: []
    };
  },
	methods:{
		updateCarData() {
      const carStore = useCarStore();
      const carData = carStore.carData;
      carData.interior_colour = this.selectedColor;
      carStore.updateCarData();
    },
		toggleShowCheckbox(index, colorName) {
      const isChecked = !this.selectedColor.includes(colorName);
      if (isChecked) {
        this.selectedColor.push(colorName);
      } else {
        const carIndex = this.selectedColor.indexOf(colorName);
        if (carIndex !== -1) {
          this.selectedColor.splice(carIndex, 1);
        }
      }
			this.updateCarData()

    },
	}
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
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #000;
}
.custom-beige .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: rgb(210, 210, 183);
}
.custom-beige input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: rgb(210, 210, 183);
}

.custom-brown input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: #804030;
}

.custom-brown .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: #804030;
}
.custom-gold input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: gold;
}

.custom-gold .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: gold;
}
.custom-green input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: green;
}

.custom-green .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: green;
}
.custom-red input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: red;
}

.custom-red .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: red;
}
.custom-silver input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: silver;
}

.custom-silver .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: silver;
}
.custom-white input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: white;
}

.custom-white .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: white;
}
.custom-blue input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: blue;
}

.custom-blue .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: blue;
}
.custom-yellow input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: yellow;
}

.custom-yellow .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: yellow;
}
.custom-grey input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: grey;
}

.custom-grey .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: grey;
}
.custom-orange input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: orange;
}

.custom-orange .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: orange;
}
.custom-black input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: rgb(37, 37, 37);
}

.custom-black .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: rgb(37, 37, 37);
}
.custom-purple input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: purple;
}

.custom-purple .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: purple;
}
.custom-purple input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: #ffffff;
}

.custom-purple .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: #ffffff;
}
</style>
