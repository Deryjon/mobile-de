<template>
  <div class="set p-[40px] w-[870px]">
    <div class="add car" v-if="createAdd">
      <div class="">
        <p class="car-text font-bold text-[30px]">My Car Ads</p>
        <p class="car-text font-bold text-[20px] mt-[20px]">Create new ad</p>
      </div>
      <div
        class="btn w-[500px] h-[350px] hover:bg-orange-200 mx-auto mt-[40px] pt-[10px] cursor-pointer rounded-[20px]"
        @click="createCarAdd"
      >
        <p class="text-[100px] mx-auto w-[50px] h-[120px]">+</p>
				<p class="text-[18px] font-medium mx-auto w-[360px]" >Do you have any treasures in your garage?</p>
<p class="text-center w-[310px] mx-auto">Whether you want to run a Direct Sale for the quickest sale or an ad for the best price, we offer you the right option for selling your vehicles!</p>
        <p class="add mx-auto w-[170px] bg-[#e04b00] px-[10px] py-[10px] text-[#fff] mt-[20px]">Sell your car for free</p>
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
<style scoped>
.btn{
	border: 1px gray inset;
}
</style>
