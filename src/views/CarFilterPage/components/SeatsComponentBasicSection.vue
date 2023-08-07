<template>
<div class="salon-filter flex justify-between items-center p-[20px]">
          <!-- seats -->
          <div class="seats relative mt-2">
            <h2 class="text-sm lg:text-[16px]">Number of seats</h2>
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            >
              <option value="">Any</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute left-[154px] bottom-4"
            ></span>
          </div>
          <!-- seats -->
          <div class="seats relative mt-2">
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[29px]"
            >
              <option value="">Any</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute left-[154px] bottom-4"
            ></span>
          </div>
          <!-- doors -->
          <div class="seats relative mt-2">
            <h2 class="text-sm lg:text-[16px]">Number of doors</h2>
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            >
              <option value="">Any</option>
              <option value="">2/3</option>
              <option value="">3/5</option>
              <option value="">6/7</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute left-[154px] bottom-4"
            ></span>
          </div>
          <!-- sliding-door -->
          <div class="seats relative mt-2">
            <h2 class="text-sm lg:text-[16px]">Sliding door</h2>
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            >
              <option value="">Any</option>
              <option value="">Sliding door right</option>
              <option value="">Sliding door left</option>
              <option value="">Sliding door both-sided</option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute left-[154px] bottom-4"
            ></span>
          </div>
        </div>
</template>
<script>
export default{
	
}
</script>