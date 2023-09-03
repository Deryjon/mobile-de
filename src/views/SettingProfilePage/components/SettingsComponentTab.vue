<template>
  <div class="set p-[40px]">
    <div class="your-setting">
      <h2 class="text-[32px] font-semibold">Your account settings</h2>
      <p class="mt-[5px] font-normal text-gray-600">
        Your customer number: {{ userI }}
      </p>
    </div>
    <div class="profile mt-[30px]">
      <h2 class="text-[26px] font-semibold">Profile</h2>
      <div
        class="box w-[656px] h-[84px] p-[15px] flex items-center justify-between"
      >
        <div class="flex items-center gap-[20px]">
          <div class="icon w-[30px]">
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
          <div class="profile-pic">
            <p class="font-medium">Profile picture</p>
            <p class="font-normal">(Only visible for you)</p>
          </div>
        </div>
        <button
          class="complete bg-[#094559] px-[10px] py-[8px] rounded-[8px] text-[#fff]"
        >
          Complete
        </button>
      </div>
    </div>
    <div class="profile mt-[30px]">
      <h2 class="text-[26px] font-semibold">Login Data</h2>
      <div class="box">
        <div
          class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
        >
          <div class="flex items-center gap-[20px]">
            <div class="profile-pic">
              <p class="font-medium">E-mail Address</p>
              <p class="font-normal text-[14px]">{{ userE }}</p>
            </div>
          </div>
        </div>
        <div
          class="w-[656px] h-[84px] p-[15px] flex items-center justify-between"
        >
          <div class="flex items-center gap-[20px]">
            <div class="profile-pic">
              <p class="font-medium">Password</p>
              <p class="font-normal text-[14px]">•••••••••••••</p>
            </div>
          </div>
          <button
            class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
            @click="openDataLogin"
          >
            Change
          </button>
        </div>
      </div>
      <div class="box w-[658px] h-[420px] p-[15px]" v-if="changeLogin">
        <div class="current-email">
          <p class="font-medium">Current e-mail address</p>
          <p class="current-email font-normal text-[14px]">{{ userE }}</p>
        </div>
        <div class="email mt-[10px]">
          <input
            type="text "
            class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
            v-model="userECh"
          />
        </div>
        <div class="current-email mt-[30px] mb-[20px]">
          <p class="font-medium">Change password </p>
        </div>
				<label for="" class="mt-[10px] text-[14px]">New password </label>
        <div class="new flex mb-[30px]">
          <input
            type="text "
            class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
            v-model="userNewPass"
          />
        </div>
				<label for="" class="text-[14px]">Current password </label>
        <div class="current flex">
          <input
            type="text "
            class="input-bor px-[10px] py-[10px] w-[400px] rounded-md"
            v-model="userCurrentPass"
          />
        </div>
        
				<div class="btns flex gap-[10px] justify-end">

					<button
							class="complete bg-[#fff] px-[10px] py-[8px] rounded-[8px] text-[#094559]"
							
						>
							Cancel
						</button>
					<button
							class="complete bg-orange-500 px-[20px] py-[8px] rounded-[8px] text-white"
							
						>
							Save
						</button>
				</div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userI: "",
      userE: "",
      userECh: "",
      changeLogin: false,
    };
  },
  methods: {
    openDataLogin() {
      this.changeLogin = !this.changeLogin;
    },
  },
  created() {
    this.userI = localStorage.getItem("u-i");
    this.userE = localStorage.getItem("u-e");
    this.userECh = localStorage.getItem("u-e");
  },
};
</script>
<style scoped>
.box {
  border: 1px solid gray;
}
.input-bor {
  border: 1px solid #000;
}
</style>
