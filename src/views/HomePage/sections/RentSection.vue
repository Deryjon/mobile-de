<template>
  <section class="rental-section">
		<v-container class="lg:w-[1030px]">
			 <div class="wrapper flex flex-col lg:flex-row lg:justify-between ">
				<div class="left-rent bg-[#f5f5f5] w-[380px] sm:w-[550px]  lg:w-[420px] xl:w-[480px] flex gap-[15px] p-[30px] mx-auto">
					<div class="img  lg:w-[200x] lg:h-[140px]">
						<img src="../../../assets/images/rent-section-img-1.jpg" alt="" class="w-full h-full  object-cover">
					</div>
					<div class="text">
						<h3 class="title font-bold text-[18px]">Geklickt. Gekauft. Geliefert.</h3>
						<p class="subtitle text-[15px] mt-[10px]">Autos online kaufen und liefern lassen - mit Online-Kauf von mobile.de</p>
						<button class="btn text-[15px] mt-[15px] border-gray-500">7974 Online-Kauf-Angebote</button>
					</div>
				</div>
				<div class="right-rent bg-[#f5f5f5] w-[380px] sm:w-[550px]  lg:w-[420px] xl:w-[480px] flex gap-[15px] p-[30px] mx-auto mt-[10px] lg:mt-[0px]">
					<div class="img sm:w-[386px] sm:h-[187px] lg:w-[200x] lg:h-[140px]">
						<img src="../../../assets/images/rent-section-img-1.jpg" alt="" class="w-full h-full  object-cover">
					</div>
					<div class="text">
						
						<h3 class="title font-bold text-[18px]">Leasing-Schnäppchen</h3>
						<p class="subtitle text-[15px] mt-[10px]">Exklusive Angebote für privat und gewerblich.</p>
						<button class="btn text-[15px] mt-[15px] border-gray-500">Leasing-Deals zeigen</button>
					</div>
				</div>
			 </div>
		</v-container>
	</section>
</template>
<script>
export default {};
</script>
<style scoped>
.btn{
	border: 1px solid gray;
	padding: 8px;
	border-radius: 5px;
	color: #094559;
}
</style>