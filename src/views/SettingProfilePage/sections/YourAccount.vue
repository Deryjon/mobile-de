<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <div class="tabs w-[200px] h-[680px] bg-[#0000001f] p-[20px]">
      <div class="top flex items-center mt-[10px]">
        <div class="icon w-[35px] h-[35px] mx-[15px]">
          <svg
            data-v-53d99ea3=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="profile"
          >
            <g data-v-53d99ea3="" data-name="Layer 2">
              <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
              <path
                data-v-53d99ea3=""
                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="changes">
          <p class="email text-[14px]">{{ userEmail.slice(0, 10) }}</p>
          <p class="email text-[14px] underline cursor-pointer">Edit</p>
        </div>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="tabs-btn">
        <button
          class="flex gap-[8px] items-center mt-[20px] w-[194px]"
					@click="setActive('tab-1')"
					:class="{ active: isActive('tab-1') }"

        >
          <svg
            class="SvgIcon___NxY1e"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g fill="currentColor">
              <path
                d="M4 3C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4Z"
              ></path>
              <path
                d="M14 11C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14Z"
              ></path>
              <path
                d="M3 16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V16Z"
              ></path>
              <path
                d="M14 3C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H14Z"
              ></path>
            </g>
          </svg>
          Overview
        </button>

        <button class="flex gap-[8px] items-center mt-[20px] w-[194px]"
				@click="setActive('tab-2')"
				:class="{ active: isActive('tab-2') }"

				>
          <svg
            class="sdOa3"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.501 14h-8.5l-4 4v-4L2.5 14a1.5 1.5 0 01-1.5-1.5V3.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5zm3-8h2a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-1.5v4l-4-4h-5.5a1.5 1.5 0 01-1.5-1.5v-1h7.5a3 3 0 003-3V6z"
              fill="currentColor"
            ></path>
          </svg>
          Messages
        </button>
      </div>
    </div>
    <section
      class="tabs-content settings relative w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[870px] bg-[#0000001f] h-[1670px] flex"
    >
	<div class="" v-show="isActive('tab-1')">
		<MessagesTab/>
	</div>
	<div class="" v-show="isActive('tab-2')">
		<OverviewTab/>
	</div>
	</section>
  </v-container>
</template>
<script>
import MessagesTab from '../components/MessagesComponentTab.vue'
import OverviewTab from '../components/OverviewComponentTab.vue'
export default {
  data() {
    return {
      userEmail: "",
      activeTab: "tab-1",
    };
  },
  methods: {
    setActive(tab) {
			this.activeTab = tab
		},
		isActive(tab){
this.activeTab === tab
		}
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
	components:{
		MessagesTab, OverviewTab
	}
};
</script>
<style scoped>
.line {
  border: 0.5px solid rgb(190, 190, 190);
}
</style>
