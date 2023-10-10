<template>
  <div class="for-example">
    <div class="flex flex-wrap" v-show="activeDiv === ('1')">
      <div
        class="w-[200px] bor bor-b hover:bg-gray-300 pb-[25px]"
        @click="toggleDiv('2')"
      >
        <img
          alt="Agricultural"
          style="color: transparent"
          src="../../../assets/images/truckess.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />
        <h3 class="text-center text-[14px]">Trucks over 7.5 t</h3>
      </div>
      <div
        class="w-[200px] bor bor-b hover:bg-gray-300 pb-[25px]"
        @click="toggleDiv('3')"
      >
        <img
          alt="Agricultural"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/rucks-over-mini.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Trailer</h3>
      </div>

      <div
        class="w-[200px] bor bor-b hover:bg-gray-300 pb-[25px]"
        @click="toggleDiv('4')"
      >
        <img
          alt="Agricultural"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/vans.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Vans/trucks up to 7.5 t</h3>
      </div>
      <div
        class="w-[200px] bor bor-b hover:bg-gray-300 pb-[25px]"
        @click="toggleDiv('5')"
      >
        <img
          alt="buses"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/trucks-noim.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Semi-Trailer Trucks</h3>
      </div>

      <div
        class="w-[200px] hover:bg-gray-300 bor-b pb-[25px]"
        @click="toggleDiv('6')"
      >
        <img
          alt="Agricultural"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/trucks-over.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />
        <h3 class="text-center text-[14px]">Semi-Trailer</h3>
      </div>
      <div
        class="w-[200px] hover:bg-gray-300 bor pt-[20px]"
        @click="toggleDiv('7')"
      >
        <img
          alt="buses"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/busess.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Buses and Coaches</h3>
      </div>

      <div
        class="w-[200px] hover:bg-gray-300 bor pt-[20px]"
        @click="toggleDiv('8')"
      >
        <img
          alt="buses"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/buses.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Agricultural Vehicles</h3>
      </div>
      <div
        class="w-[200px] hover:bg-gray-300 bor pt-[20px]"
        @click="toggleDiv('9')"
      >
        <img
          alt="buses"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/machines.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />

        <h3 class="text-center text-[14px]">Construction Machines</h3>
      </div>

      <div
        class="w-[200px] hover:bg-gray-300 bor pt-[20px]"
        @click="toggleDiv('10')"
      >
        <img
          alt="Agricultural"
          data-nimg="1"
          style="color: transparent"
          src="../../../assets/images/coaches.svg"
          class="mx-auto w-[70px] lg:h-[50px]"
        />
        <h3 class="text-center text-[14px]">Forklift trucks</h3>
      </div>
    </div>
    <div v-show="activeDiv === ('2')">
      <Tab5Components />
    </div>
    <div v-show="activeDiv === ('3')">
      <Tab6Components />
    </div>
    <div v-show="activeDiv === ('4')">
      <Tab7Components />
    </div>
    <div v-show="activeDiv === ('5')">
      <Tab8Components />
    </div>
    <div v-show="activeDiv === ('6')">
      <Tab9Components />
		</div>
      <div v-show="activeDiv === ('7')">
        <Tab10Components />
      </div>
      <div v-show="activeDiv === ('8')">
        <Tab11Components />
      </div>

      <div v-show="activeDiv === ('9')">
        <Tab12Components />
      </div>

      <div v-show="activeDiv === ('10')">
        <Tab13Components />
      </div>
    
  </div>
</template>
<script>
import Tab5Components from "./OthersCars/Tab5Components.vue";
import Tab6Components from "./OthersCars/Tab6Components.vue";
import Tab7Components from "./OthersCars/Tab7Components.vue";
import Tab8Components from "./OthersCars/Tab8Components.vue";
import Tab9Components from "./OthersCars/Tab9Components.vue";
import Tab10Components from "./OthersCars/Tab10Components.vue";
import Tab11Components from "./OthersCars/Tab11Components.vue";
import Tab12Components from "./OthersCars/Tab12Components.vue";
import Tab13Components from "./OthersCars/Tab13Components.vue";
import { useActiveTab4 } from "@/store/activeTab4Component";
export default {
  data() {
    return {
      // activeDiv: 1,
    };
  },
  methods: {
    toggleDiv(divNumber) {
      const store = useActiveTab4();
      store.activeDiv = divNumber;
    },
  },
  computed: {
    activeDiv() {
      const store = useActiveTab4();
      return store.activeDiv;
    },
  },

  components: {
    Tab5Components,
    Tab6Components,
    Tab7Components,
    Tab8Components,
    Tab9Components,
    Tab10Components,
    Tab11Components,
    Tab12Components,
    Tab13Components,
  },
};
</script>

<style scoped>
.bor {
  border-right: 1px solid #111;
}
.bor-b {
  border-bottom: 1px solid #111;
}
</style>
