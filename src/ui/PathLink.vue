<template>
	<div class="path-sections flex items-center">
			<a class="ml-[6px] text-xs lg:text-sm text-[#D9D9D9]">Home</a>
			<div class="icon-prev ml-[10px] lg:ml-[22px]">
				<img
					src="../assets/images/path-svg-link.svg"
					alt="path-svg-link"
					class="w-[8px] "
				/>
			</div>
			<a
				class="about-path-link text-xs text-[#7A7A7A] ml-[10px] lg:ml-[22px] lg:text-sm"
			>
			 <slot/>
			</a>
		</div>
</template>
<script>
export default{

}
</script>