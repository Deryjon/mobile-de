<template>
  <section class="search ">
    <v-container class="max-w-[1130px]">
      <div
        class="search relative w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1120px] mx-auto  bg-[#0000001f] h-[850px] sm:h-[550px] lg:h-[240px] flex"
      >
        <div class="tabs h-full">
          <div class="nav-tabs flex lg:flex-col lg:mt-[-0.01px]">
            <div
              class="nav-item  lg:w-[80px] bg-[#d3d3d3] py-[20.35px] w-[87.5px] xs:w-[100px] sm:w-[150px] md:w-[187.5px] hover:bg-[#0000001f]"
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
              class="nav-item  lg:w-[80px] bg-[#d3d3d3] py-[20px] w-[87.5px] xs:w-[100px] sm:w-[150px] md:w-[187.5px] hover:bg-[#0000001f]"
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
              class="nav-item  lg:w-[80px] bg-[#d3d3d3] py-[20px] w-[87.5px] xs:w-[100px] sm:w-[150px] md:w-[187.5px] hover:bg-[#0000001f]"
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
              class="nav-item  lg:w-[80px] bg-[#d3d3d3] py-[20px] w-[87.5px] xs:w-[100px] sm:w-[150px] md:w-[187.5px] hover:bg-[#0000001f]"
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
        </div>
        <div class="tab-content absolute top-[80px] lg:top-[50px] xs:left-[30px] sm:left-[50px]  lg:left-[80px] p-[20px]">
          <div class="tab-panel" v-show="isActive('tab-1')"> 
            <Tab1Component
              class="absolute  lg:top-[-50px]  "
            />
          </div>
          <div class="tab-panel" v-show="isActive('tab-2')">
            <div class="for-example">
              <Tab2Component class="lg:top-[-20px] absolute" />
            </div>
          </div>
          <div class="tab-panel" v-show="isActive('tab-3')">
            <div class="for-example">
              <Tab3Component class="lg:top-[-20px] absolute" />
            </div>
          </div>
          <div class="tab-panel" v-show="isActive('tab-4')">
            <div class="for-example">
              <Tab4Components class=" mt-[-10px] lg:mt-[-55px]" />
            </div>
          </div>
        </div>
      </div>
      <MoreFilterBtn v-show="isActive('tab-1')" />
      <MotorbikeFilterBtn v-show="isActive('tab-2')" />
      <VansFilterBtn v-show="isActive('tab-3')" />
      <FilterAllBtn v-if="store.activeDiv === '2'" @click="goTruckFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '3'" @click="goTrailerFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '4'" @click="goVanFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '5'" @click="goSemitruckFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '6'" @click="goSemitrailerFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '7'" @click="goCoacheFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '8'" @click="goVehicleFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '9'" @click="goMachineFilter"/>
      <FilterAllBtn v-if="store.activeDiv === '10'" @click="goForkliftFilter"/>
    </v-container>
  </section>
</template>
<script>
import Tab1Component from "../components/Tab1Component.vue";
import Tab2Component from "../components/Tab2Component.vue";
import Tab3Component from "../components/Tab3Component.vue";
import Tab4Components from "../components/Tab4Components.vue";
import MoreFilterBtn from "../../../components/MoreFilterBtn.vue";
import MotorbikeFilterBtn from "../../../components/MotorbikeFilterBtn.vue";
import VansFilterBtn from "../../../components/VansFilterBtn.vue";
import FilterAllBtn from "../../../components/FilterAllBtn.vue";
import { useDarkModeStore } from "../../../store/dark-mode";
import { useActiveTab4 } from "../../../store/activeTab4Component";
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
    const store = useActiveTab4();
    const setActive = (tab) => {
      activeTab.value = tab;
      store.setActiveDiv("1");
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
	data(){
		return{
store: useActiveTab4()
		}
	},
	methods:{
		goTruckFilter(){
			this.$router.push({ name: "trucks-filter" });
			 this.store.setActiveDiv("");
		},
		goTrailerFilter(){
			this.$router.push({ name: "trailer-filter" });
			 this.store.setActiveDiv("");
		},
		goVanFilter(){
			this.$router.push({ name: "van-filter" });
			 this.store.setActiveDiv("");
		},
		goSemitruckFilter(){
			this.$router.push({ name: "semitruck-filter" });
			 this.store.setActiveDiv("");
		},
		goSemitrailerFilter(){
			this.$router.push({ name: "semitrailer-filter" });
			 this.store.setActiveDiv("");
		},
		goCoacheFilter(){
			this.$router.push({ name: "coache-filter" });
			 this.store.setActiveDiv("");
		},
		goVehicleFilter(){
			this.$router.push({ name: "agricultural-filter" });
			 this.store.setActiveDiv("");
		},
		goMachineFilter(){
			this.$router.push({ name: "machine-filter" });
			 this.store.setActiveDiv("");
		},
		goForkliftFilter(){
			this.$router.push({ name: "forklift-filter" });
			 this.store.setActiveDiv("");
		},
	},
  data() {
    return {
      store: useActiveTab4(),
    };
  },
  components: {
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Components,
    MoreFilterBtn,
    MotorbikeFilterBtn,
    VansFilterBtn,
		FilterAllBtn
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
  background: #0000001f;
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