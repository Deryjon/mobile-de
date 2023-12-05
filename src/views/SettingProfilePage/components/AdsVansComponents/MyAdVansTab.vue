<template>
  <div class="set lg:p-[40px] w-[210px] xs:w-full lg:w-[750px] xl:w-[900px]">
    <div class="add" v-if="createAdd">
      <div class="ads">
        <p class="car-text font-bold text-[18px] md:text-[25px] lg:text-[30px]">My Van Ads</p>
      </div>
      <div class="">
				<p class="car-text font-bold text-[14px] md:text-[16px] lg:text-[20px] mt-[20px]">Create new ad</p>
				<SellButton class="ml-[90px] xs:ml-[50%] sm:ml-[65%] md:ml-[70%] lg:ml-[78.4%]  lg:w-[140px] mt-[20px]" @click="handleCancelCreateAdd" />
			</div>
      <div
			class="btn w-[500px] h-[350px] hover:bg-orange-200 mx-auto mt-[40px] pt-[10px] cursor-pointer rounded-[20px]"
			@click="createVanAdd"
			v-if="isVanAdd"
      >
        <p class="text-[100px] mx-auto w-[50px] h-[120px]">+</p>
        <p class="text-[18px] font-medium mx-auto w-[360px]">
          Do you have any treasures in your garage?
        </p>
        <p class="text-center w-[310px] mx-auto">
          Whether you want to run a Direct Sale for the quickest sale or an ad
          for the best price, we offer you the right option for selling your
          vehicles!
        </p>
        <SellButton class="mx-[33%]" />
      </div>
			<MyAddsAll />
    </div>
    <div class="form-ad" v-if="!createAdd">
			<FormCreateAdd :createAdd="createAdd" @cancel-create-add="handleCancelCreateAdd" />
    </div>   
  </div>
</template>
<script>
import SellButton from "../../../../ui/SellButton.vue";
import FormCreateAdd from "./FormCreateAdd.vue";
import MyAddsAll from "./MyAddsAll.vue";
export default {
  data() {
    return {
      createAdd: true,
      isVanAdd: false,
    };
  },
  methods: {
		updateCreateAdd(newValue) {
      this.createAdd = newValue;
    },
    handleCancelCreateAdd() {
      this.createAdd = !this.createAdd;
    },
  },
  components: {
    FormCreateAdd,
    MyAddsAll,
    SellButton,
  },
  created() {

	},
};
</script>
<style scoped>
.btn {
  border: 1px gray inset;
}
</style>
