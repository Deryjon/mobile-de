<template>
  <div class="mt-[10px] lg:p-[20px]">
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[20px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedAdsImg"
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
            v-if="isCheckedAdsImg"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Ads with pictures
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedVideo"
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
            v-if="isCheckedVideo"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Ads with video
      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedDiscount"
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
            v-if="isCheckedDiscount"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
				Discount offers
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedNon"
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
            v-if="isCheckedNon"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Non-smoker vehicle
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedTaxi"
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
            v-if="isCheckedTaxi"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Taxi
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedVAT"
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
            v-if="isCheckedVAT"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        VAT reclaimable
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedWarranty"
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
            v-if="isCheckedWarranty"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Warranty
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedEnvironmental"
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
            v-if="isCheckedEnvironmental"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        With environmental bonus
      </label>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";

export default {
  setup() {
    const isCheckedAdsImg = ref(false);
    const isCheckedVideo = ref(false);
    const isCheckedDiscount = ref(false);
    const isCheckedNon = ref(false);
    const isCheckedTaxi = ref(false);
    const isCheckedVAT = ref(false);
    const isCheckedWarranty = ref(false);
    const isCheckedEnvironmental = ref(false);
    const toggleShowCheckbox = (index) => {
      for (let i = 0; i < isCheckedAdsImg.length; i++) {
        if (i !== index) {
          isCheckedAdsImg[i] = false;
        }
      }
      isCheckedAdsImg[index] = true;
    };

    return {
      isCheckedAdsImg,
      isCheckedVideo,
      isCheckedDiscount,
      isCheckedNon,
      isCheckedTaxi,
      isCheckedVAT,
      isCheckedWarranty,
      isCheckedEnvironmental,
      toggleShowCheckbox,
    };
  },
  data() {
    return {};
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
