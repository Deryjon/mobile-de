<template>
  <div class="condition p-[20px]">
    <h3 class="text-[16px]">Vendor</h3>
    <div class="radios-type flex gap-[40px] mt-[20px]">
      <label for="vendor-any" @click="selectVendor('Any')">
        <input
          type="radio"
          id="vendor-any"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Any',
            'bg-orange': selectedVendor === 'Any',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px] text-[14px]">Any</span>
      </label>
      <label for="vendor-private">
        <input
          type="radio"
          id="vendor-private"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Private',
            'bg-orange': selectedVendor === 'Private',
          }"
          @click="selectVendor('Private')"
        />
        <span class="ml-[10px] text-[14px]">Private seller</span>
      </label>
      <label for="vendor-dealer" @click="selectVendor('Dealer')">
        <input
          type="radio"
          id="vendor-dealer"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Dealer',
            'bg-orange': selectedVendor === 'Dealer',
          }"
        />
        <span class="ml-[10px] text-[14px]">Dealer </span>
      </label>
      <label for="vendor-dealer" @click="selectVendor('Company')">
        <input
          type="radio"
          id="vendor-dealer"
          v-model="selectedVendor"
          :class="{
            'bg-transparent': selectedVendor !== 'Company',
            'bg-orange': selectedVendor === 'Company',
          }"
        />
        <span class="ml-[10px] text-[14px]">Company vehicles</span>
      </label>
    </div>
    <div class="dealer-rating mt-[50px]">
      <h3>Dealer rating</h3>
      <div class="flex gap-[60px] mt-[20px]">
        <label
          class="custom-checkbox flex items-center h-10 w-[100px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
            :class="{ 'bg-[#ccc] cursor-help': isRadioNewSelected }"
            v-model="isCheckedAny"
            @click="toggleShowCheckbox(0, 'Any')"
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
              v-if="isCheckedAny"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Any</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[145px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedFromThree"
            @click="toggleShowCheckbox(1, 'three rating')"
            :disabled="isRadioNewSelected"
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
              v-if="isCheckedFromThree"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm mr-[10px]">from</span>
          <div class="stars flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z"
              />
            </svg>
          </div>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[134px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedfromFour"
            @click="toggleShowCheckbox(2, 'four rating')"
            :disabled="isRadioNewSelected"
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
              v-if="isCheckedfromFour"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm mr-[15px]">from </span>
          <div class="stars flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z"
              />
            </svg>
          </div>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[190px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedFive"
            @click="toggleShowCheckbox(3, 'five rating')"
            :disabled="isRadioNewSelected"
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
              v-if="isCheckedFive"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm mr-[10px]">from </span>
          <div class="stars flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#ffd500"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>
		
  </div>
</template>
<script>
import http from "../../../axios.config";
import { useSemiTruckStore } from "../../../store/semitruckDataStore";
export default {
  data() {
    return {
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedVendor: "Any",
      isRadioNewSelected: false,
      isCheckedAny: true,
      isCheckedFromThree: false,
      isCheckedfromFour: false,
      isCheckedFive: false,
			rating: []
    };
  },
	watch: {
    selectedVendor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
  },
  methods: {
    updateSemiTruckData() {
      const semitruckStore = useSemiTruckStore();
      const semitruckData = semitruckStore.semitruckData;
      semitruckData.truck_vendor = this.selectedVendor;
      semitruckData.truck_dealer_rating = this.rating;
      semitruckStore.updateSemiTruckData();
    },
		toggleShowCheckbox(index, ratingName) {
      const isChecked = !this.rating.includes(ratingName);
      if (isChecked) {
        this.rating.push(ratingName);
      } else {
        const carIndex = this.rating.indexOf(ratingName);
        if (carIndex !== -1) {
          this.rating.splice(carIndex, 1);
        }
      }
			this.updateSemiTruckData()
    },
    selectVendor(condition) {
      this.selectedVendor = condition;
      if (condition === "Private" || condition === "Company") {
        this.isRadioNewSelected = true;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      } else {
        this.isRadioNewSelected = false;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      }
    },
  },
};
</script>
<style scoped>
input[type="radio"] {
  /* Убираем стандартные стили радиокнопок */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Задаем размер радиокнопки */
  width: 20px;
  height: 20px;
  /* Создаем круглую форму */
  border-radius: 50%;
  border: 1px solid gray;
  /* Позиционируем радиокнопку относительно базовой линии текста */
  vertical-align: middle;
  /* Убираем внутренние отступы, чтобы радиокнопка была ближе к тексту */
  margin: 0;
  padding: 0;
}

input[type="checkbox"]:disabled {
  opacity: 0.5;
  border: #ccc;
  /* Убираем возможность кликать на отключенный чекбокс */
  pointer-events: none;
  /* Убираем указатель курсора */
  cursor: none;
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
.custom-checkbox input[type="checkbox"] {
  display: none;
}
</style>
