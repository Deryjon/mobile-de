<template>
  <div class="mt-[10px] p-[20px]">
    <h3>Parking sensors</h3>
    <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedRear"
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
            v-if="isCheckedRear"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Rear
      </label>
      <label
        class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedFront"
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
            v-if="isCheckedFront"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Front
      </label>
      <label
        class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedCamera"
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
            v-if="isCheckedCamera"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Camera
      </label>
      <label
        class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isChecked360"
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
            v-if="isChecked360"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        360° camera
      </label>
      <label
        class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]"
      >
        <input
          type="checkbox"
          v-model="isCheckedSelf"
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
            v-if="isCheckedSelf"
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
        Self-steering systems
      </label>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";

export default {
  setup() {
    const isCheckedRear = ref(false);
    const isCheckedFront = ref(false);
    const isCheckedCamera = ref(false);
    const isChecked360 = ref(false);
    const isCheckedSelf = ref(false);
    const toggleShowCheckbox = (index) => {
      for (let i = 0; i < isCheckedRear.length; i++) {
        if (i !== index) {
          isCheckedRear[i] = false;
        }
      }
      isCheckedRear[index] = true;
    };

    return {
      isCheckedRear,
      isCheckedFront,
      isCheckedCamera,
      isChecked360,
      isCheckedSelf,
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
