<template>
  <div class="lg:pl-[20px] xl:p-[20px]">
    <h3>        {{ $t("message.filter_page.material.title") }}
</h3>
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAlcantra"
          @click="toggleShowCheckbox(0, 'Alcantra')"
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
            v-if="isCheckedAlcantra"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.alcantra") }}

      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCloth"
          @click="toggleShowCheckbox(1, 'Cloth')"
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
            v-if="isCheckedCloth"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.cloth") }}

      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedPartLeather"
          @click="toggleShowCheckbox(2, 'Part leather')"
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
            v-if="isCheckedPartLeather"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.lether") }}
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedVelour"
          @click="toggleShowCheckbox(3, 'Velour')"
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
            v-if="isCheckedVelour"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.velour") }}

      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedFullLeather"
          @click="toggleShowCheckbox(4, 'Full Leather')"
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
            v-if="isCheckedFullLeather"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.full") }}
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedOther"
          @click="toggleShowCheckbox(5, 'Other')"
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
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.material.other") }}
      </label>
    </div>
  </div>
</template>
<script>
import { useCarStore } from "@/store/carDataStore";
import http from '../../../axios.config';
export default {
  data() {
    return {
      isCheckedAlcantra: false,
      isCheckedCloth: false,
      isCheckedPartLeather: false,
      isCheckedVelour: false,
      isCheckedFullLeather: false,
      isCheckedOther: false,
			selectedMaterial: []
    };
  },
	methods:{
	  updateCarData() {
      const carStore = useCarStore();
      const carData = carStore.carData;
      carData.interior_material = this.selectedMaterial;
      carStore.updateCarData();
    },
    toggleShowCheckbox(index, materialName) {
      const isChecked = !this.selectedMaterial.includes(materialName);
      if (isChecked) {
        this.selectedMaterial.push(materialName);
      } else {
        const carIndex = this.selectedMaterial.indexOf(materialName);
        if (carIndex !== -1) {
          this.selectedMaterial.splice(carIndex, 1);
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
  fill: #fff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #fff;
  background: #e04b00;
}
</style>
