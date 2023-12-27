<template>
  <div class="mt-[10px] lg:p-[20px]">
    <h3 class="text-[16px]">{{ $t("message.filter_page.features.security") }}</h3>
    <div class="filter-cars flex flex-wrap gap-x-[30px] gap-y-[8px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAlarmSystem"
          @click="toggleShowCheckboxExtras(0, 'Power Assisted Steering')"
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
            v-if="isCheckedAlarmSystem"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.features.power") }}
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDisable"
          @click="toggleShowCheckboxExtras(1, 'Protection roof')"
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
            v-if="isCheckedDisable"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        {{ $t("message.filter_page.features.roof") }}
      </label>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";

export default {
  data() {
    return {
      isCheckedAlarmSystem: false,
      isCheckedDisable: false,
      isCheckedHeated: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedSki: false,
      isCheckedElectric: false,
			extras: []
    };
  },
	methods:{
		fetchData() {
      http
        .get("/cars/count", {
          extras: this.extras,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
        });
    },
    toggleShowCheckboxExtras(index, extrasName) {
      const isChecked = !this.extras.includes(extrasName);
      if (isChecked) {
        this.extras.push(extrasName);
      } else {
        const carIndex = this.extras.indexOf(extrasName);
        if (carIndex !== -1) {
          this.extras.splice(carIndex, 1);
        }
      }
      console.log("extras изменен:", this.extras)
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
