<template>
  <div class="set p-[40px] w-[870px]">
    <div class="add car" v-if="createAdd">
      <div class="">
        <p class="car-text font-bold text-[30px]">My Car Ads</p>
        <p class="car-text font-bold text-[20px] mt-[20px]">Create new ad</p>
      </div>
      <div
        class="btn w-[200px] h-[190px] bg-orange-600 mx-auto mt-[40px] pt-[20px] cursor-pointer rounded-[20px]"
        @click="createCarAdd"
      >
        <p class="text-[70px] mx-auto w-[40px]">+</p>
        <p class="add mx-auto w-[150px]">Sell your car for free</p>
      </div>
    </div> 
		<div class="form-ad"  v-if="!createAdd">
			<FormCreateAdd/>
		</div>
  </div>
</template>
<script>
import FormCreateAdd from '../components/FormCreateAdd.vue'
export default {
  data() {
    return {
      createAdd: true,
    };
  },
  methods: {
    createCarAdd() {
			this.createAdd = !this.createAdd
		},
  },
	components:{
		FormCreateAdd
	}
};
</script>
<style scoped></style>
