<template>
  <section class="search">
    <v-container>
      <div
        class="search relative w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[1000px] bg-[#f5f5f5] h-[650px] lg:h-[240px] mt-[200px] mx-auto flex"
      >
        <div class="tabs h-full">
          <div class="nav-tabs flex lg:flex-col mt-[-0.01px]">
            <div
              class="nav-item lg:w-[80px] bg-[#d3d3d3] py-[20.35px] w-1/4 sm:w-1/4 hover:bg-[#f5f5f5]"
              @click="setActive('tab-1')"
              :class="{ active: isActive('tab-1') }"
            >
              <svg
                id="tabs_img"
                width="40"
                height="20"
                viewBox="0 0 96 48"
                class="mx-auto"
              >
                <path
                  d="M54 20c-.036.044 1-9 1-9h14c2 0 8 9 8 9H54zm-26 0l13.357-7.646S44 11 46 11h7s-.968 9.046-1 9H28zm58.5 1.5c-2-2-9.5-8.5-13.134-11.067C72.14 9.568 71 9 69 9H46c-3 0-8 3-8 3l-14 8s-6.5 1.5-10.5 2.5C11.42 23.02 9 25.131 9 27c0 1-.25 1.5-.5 2S8 30 8 31v2c0 2 1 3 3 3h2c0-4.973 4.029-9 9-9a9 9 0 019 9h32c0-4.973 4.029-9 9-9a9 9 0 019 9h5c2 0 3-1 3-3v-2c0-1-.25-1.5-.5-2s-.5-1-.5-2c0-2-.44-4.44-1.5-5.5zM65 36a7 7 0 1114 0 7 7 0 01-14 0zm3 .002A4 4 0 1075.998 36a4 4 0 00-7.998.002zM22 29a7.001 7.001 0 10.002 13.998A7.001 7.001 0 0022 29zm-.001 11a4 4 0 110-7.998A4 4 0 0122 40z"
                  :fill="isActive('tab-1') ? '#e04b00' : '#83888FFF'"
                ></path>
              </svg>
            </div>
            <div
              class="nav-item lg:w-[80px] bg-[#d3d3d3] py-[20px] w-1/4 sm:w-1/4 hover:bg-[#f5f5f5]"
              @click="setActive('tab-2')"
              :class="{ active: isActive('tab-2') }"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 96 48"
                fill="none"
                class="mx-auto"
              >
                <path
                  d="M74 14l-16.458 2.003L55.26 19h-5.184s-.576-3-3.576-4c-2.867-.956-5-1-5-1l-.5-3-3-3s-10.5 3-10.5 8c0 1.5 4.5 3 4.5 3l.51 3.572c.233.078.461.164.687.257l-1.02 1.748A8.978 8.978 0 0029 24a9.001 9.001 0 000 18c4.968 0 9-4.032 9-9a8.98 8.98 0 00-3.233-6.91l1.02-1.747A10.98 10.98 0 0140 33c0 .901-.108 1.777-.313 2.615C41.979 36.373 44.833 37 48 37c3.167 0 6.021-.627 8.313-1.385A11.025 11.025 0 0156 33c0-1.01.136-1.987.39-2.915l1.86.797A9.001 9.001 0 0067 42a9 9 0 10-7.567-13.875l-1.86-.797A10.993 10.993 0 0166.82 22L74.5 17.5 74 14zM62.025 32.5l4.384 1.879a1.5 1.5 0 001.182-2.758l-4.384-1.878A4.986 4.986 0 0166.998 28C69.758 28 72 30.24 72 33.002A5.002 5.002 0 0166.998 38a4.999 4.999 0 01-4.973-5.5zM28.998 28c.382 0 .753.043 1.11.124l-2.404 4.12a1.5 1.5 0 002.592 1.512l2.402-4.119A4.984 4.984 0 0134 33.002 5.002 5.002 0 0128.998 38 4.999 4.999 0 0124 33.002 5.001 5.001 0 0128.998 28z"
                  :fill="isActive('tab-2') ? '#e04b00' : '#83888FFF'"
                ></path>
              </svg>
            </div>
            <div
              class="nav-item lg:w-[80px] bg-[#d3d3d3] py-[20px] w-1/4 sm:w-1/4 hover:bg-[#f5f5f5]"
              @click="setActive('tab-3')"
              :class="{ active: isActive('tab-3') }"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 96 48"
                fill="none"
                class="mx-auto"
              >
                <path
                  d="M43 37h10V21H43v16zm35-17h4v-8h-4v8zm-16 0h12v-8H62v8zM42 38h12V12H42v26zM32 22l-13 2 5-12h8v10zM16 4s-1 2-1 4 1 4 1 4h5l-5 12s-3 1.5-4 3c-.666 1-1 1.904-1 4 0 1-.25 1.5-.5 2s-.5 1-.5 2v2c0 2 2.552 3 3 3h3a8 8 0 1116 0h28a8 8 0 1116 0h5.62L84 36.598V8c0-4.5-5-4-5-4H16zm14 36a6 6 0 11-12 0 6 6 0 0112 0zm-9 0a3 3 0 106 0 3 3 0 00-6 0zm47 6a6 6 0 100-12 6 6 0 000 12zm0-3a3 3 0 110-6 3 3 0 010 6z"
                  :fill="isActive('tab-3') ? '#e04b00' : '#83888FFF'"
                ></path>
              </svg>
            </div>
            <div
              class="nav-item lg:w-[80px] bg-[#d3d3d3] py-[20px] w-1/4 sm:w-1/4 hover:bg-[#f5f5f5]"
              @click="setActive('tab-4')"
              :class="{ active: isActive('tab-4') }"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 96 48"
                fill="none"
                class="mx-auto"
              >
                <path
                  d="M88 30V6H26.139v24H88zM11.544 12.91L11 14h13v-4l-10.995 1.833a2 2 0 00-1.46 1.078zM88 32H24V15.147H10.472L6 27.739V39.16L9 41h6.016a7.5 7.5 0 1114.967 0h37.033a7.5 7.5 0 0114.119-4H88v-5zM9.197 26.463L21 24.192l.027-7.121c-.002.032-8.996-.035-8.996-.035l-2.834 9.427zM80 40.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5 0a3 3 0 106 0 3 3 0 00-6 0zm-49 5.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-2.5a3 3 0 110-6 3 3 0 010 6z"
                  :fill="isActive('tab-4') ? '#e04b00' : '#83888FFF'"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="filter-btns lg:hidden h-[44px] sm:h-[57px] lg:h-[60px] flex items-start"
          >
            <!-- Добавлено: flex items-start -->
            <button
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full text-[10px] sm:text-[12px] sm:py-[17.1px] lg:py-[17.5px] w-[45px] sm:w-[75px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5]"
            >
              {{ $t("message.filter.new") }}
            </button>
            <button
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full text-[10px] sm:text-[12px] sm:py-[17.1px] lg:py-[17.5px] w-[45px] sm:w-[75px] lg:px-[15px] hover:bg-[#beb5b5]"
            >
              {{ $t("message.filter.used") }}
            </button>
            <button
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full text-[10px] sm:text-[12px] sm:py-[17.1px] lg:py-[17.5px] w-[45px] sm:w-[75px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5]"
            >
              {{ $t("message.filter.rent") }}
            </button>
            <button
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full w-[55px] sm:w-[94.5px] text-[10px] sm:text-[12px] sm:py-[21.5px] lg:py-[15.5px] sm:px-[0.3px] lg:px-[20px] hover:bg-[#beb5b5]"
            >
              {{ $t("message.filter.crash") }}
            </button>
            <select
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full px-[2px] text-[10px] sm:text-[12px] sm:py-[17.1px] lg:py-[17.5px] w-[110px] sm:w-[133.5px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5] cursor-pointer"
            >
              <option value="">{{ $t("message.side.title") }}</option>
              <option value="">{{ $t("message.side.left") }}</option>
              <option value="">{{ $t("message.side.right") }}</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-[68px] sm:right-[102px] top-[77px] sm:top-[83px]"
            ></span>
            <button
              class="filter-btn bg-[#d3d3d3] py-[12px] h-full text-[10px] sm:text-[12px] sm:py-[17.1px] lg:py-[17.5px] sm:px-[12px] lg:px-[20px] hover:bg-[#beb5b5]"
            >
              {{ $t("message.filter.classic") }}
            </button>
          </div>
        </div>

        <div class="filter-btns hidden lg:flex h-[30px] lg:h-[60px]">
          <button
            class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[17.5px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5]"
            @click="setActiveFilter('tab-1')"
            :class="{ activefilter: isActiveFilter('tab-1') }"
          >
            {{ $t("message.filter.new") }}
          </button>
          <button
            class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[14px] sm:px-[11.3px] lg:px-[3px] lg:w-[85px] hover:bg-[#beb5b5]"
            @click="setActiveFilter('tab-2')"
            :class="{ activefilter: isActiveFilter('tab-2') }"
          >
            {{ $t("message.filter.used") }}
          </button>
          <button
            class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[17.5px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5]"
            @click="setActiveFilter('tab-3')"
            :class="{ activefilter: isActiveFilter('tab-3') }"
          >
            {{ $t("message.filter.rent") }}
          </button>
          <button
            class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[6.5px] sm:px-[11.3px] lg:px-[15px] hover:bg-[#beb5b5]"
            @click="setActiveFilter('tab-4')"
            :class="{ activefilter: isActiveFilter('tab-4') }"
          >
            {{ $t("message.filter.crash") }}
          </button>
          <div class="relative">
            <select
              class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[17.5px] sm:px-[11.3px] lg:px-[20px] hover:bg-[#beb5b5] cursor-pointer"
            >
              <option value="">{{ $t("message.side.title") }}</option>
              <option value="">{{ $t("message.side.left") }}</option>
              <option value="">{{ $t("message.side.right") }}</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute lg:right-[10px] xl:right-[10px] top-[25px]"
            ></span>
          </div>
          <button
            class="filter-btn bg-[#d3d3d3] sm:py-[17.1px] lg:py-[6.5px] sm:px-[12px] lg:px-[20px] hover:bg-[#beb5b5]"
            @click="setActiveFilter('tab-5')"
            :class="{ activefilter: isActiveFilter('tab-5') }"
          >
            {{ $t("message.filter.classic") }}
          </button>
        </div>
        <div
          class="tab-content mt-[100px] sm:mt-[120px] lg:mt-[70px] absolute left-[60px] sm:left-[100px]"
        >
          <div class="tab-panel" v-show="isActive('tab-1')">
            <Tab1Component class=" " />
          </div>
          <div class="tab-panel" v-show="isActive('tab-2')">
            <div class="for-example">
              <Tab2Component class="" />
            </div>
          </div>
          <div class="tab-panel" v-show="isActive('tab-3')">
            <div class="for-example">
              <Tab3Component class=" " />
            </div>
          </div>
          <div class="tab-panel" v-show="isActive('tab-4')">
            <div class="for-example">
              <Tab4Components class="" />
            </div>
          </div>
        </div>
      </div>
      <MoreFilterBtn />
    </v-container>
  </section>
</template>
<script>
import Tab1Component from "../components/Tab1Component.vue";
import Tab2Component from "../components/Tab2Component.vue";
import Tab3Component from "../components/Tab3Component.vue";
import Tab4Components from "../components/Tab4Components.vue";
import MoreFilterBtn from "../../../components/MoreFilterBtn.vue";
import { useDarkModeStore } from "../../../store/dark-mode";
import { ref, watch, computed } from "vue";
export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();
    watch(
      isDarkMode,
      (newIsDarkMode) => {
        if (newIsDarkMode) {
          document.body.style.background = "#526d82";
        } else {
          document.body.style.background = "";
        }
      },
      { immediate: true }
    );
    const activeTab = ref("tab-1");
    const setActive = (tab) => {
      activeTab.value = tab;
    };
    const isActive = (tab) => {
      return activeTab.value === tab;
    };
    const activeFilterTab = ref("tab-1");
    const setActiveFilter = (tab) => {
      activeFilterTab.value = tab;
    };
    const isActiveFilter = (tab) => {
      return activeFilterTab.value === tab;
    };
    return {
      setActive,
      isActive,
      setActiveFilter,
      isActiveFilter,
      toggleDarkMode,
      isDarkMode,
    };
  },
  components: {
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Components,
    MoreFilterBtn,
  },
};
</script>
<style scoped>
.filter-btn {
  border: 1px solid #605e5e;
}
.filter-btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}
select {
  border: 1px solid #7b7c80;
}
input {
  border: 1px solid #7b7c80;
}

select:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}
input:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

select:focus {
  outline: none;
  box-shadow: 0 0 2px 1px #6a6acc;
}
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
.no-spinner::-webkit-inner-spin-button,
.no-spinner::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.mark-input2 {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.active svg path {
  fill: #e04b00;
}
.active {
  background: #f5f5f5;
}

.activefilter {
  background: #beb5b5;
}
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
</style>
