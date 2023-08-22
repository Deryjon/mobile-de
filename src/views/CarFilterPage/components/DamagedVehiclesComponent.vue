<template>
  <div class="flex items-center gap-[50px]">
    <div class="relative mt-2 w-[200px]">
      <h2 class="text-sm lg:text-[16px]">Damaged Vehicles</h2>
      <select
        class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
      >
        <option value="14600" selected>Any</option>
        <option value="">Do not show</option>
        <option value="">Only show</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
    </div>
    <div class="relative mt-2 w-[200px]">
      <h2 class="text-sm lg:text-[16px]">Commercial, Export/Import</h2>
      <select
        class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
      >
        <option value="14600" selected>Any</option>
        <option value="">Do not show</option>
        <option value="">Only show</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
    </div>
    <div class="relative mt-2 w-[200px]">
      <h2 class="text-sm lg:text-[16px]">Approved Used Programme</h2>
      <select
        class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
      >
        <option value="">Please select</option>
        <option value="Any">Any approved label</option>
        <option value="ASTON_MARTIN">Aston Martin Timeless</option>
        <option value="BMW">BMW Premium Selection</option>
        <option value="BENTLEY">Certified by Bentley</option>
        <option value="DS_CERTIFIED">DS Certified</option>
        <option value="FERRARI">Ferrari Approved</option>
        <option value="HYUNDAI_PROMISE">Hyundai Promise</option>
        <option value="JAGUAR">Jaguar APPROVED</option>
        <option value="KIA_ZERTIFIZIERTE_GEBRAUCHTWAGEN">
          Kia Zertifizierte Gebrauchtwagen
        </option>
        <option value="LANDROVER">Land Rover APPROVED</option>
        <option value="MASERATI">Maserati Approved</option>
        <option value="MERCEDES_TRANSPORTER">
          Mercedes-Benz Junge Sterne Transporter
        </option>
        <option value="MINI">MINI Gebrauchtwagen Next</option>
        <option value="NISSAN">Nissan Intelligent Choice</option>
        <option value="PORSCHE">Porsche Approved</option>
        <option value="SEAT">SEAT "Das Weltauto"</option>
        <option value="LAMBORGHINI">
          Selezione Lamborghini Certified Pre-Owned
        </option>
        <option value="SKODA">ŠKODA Plus</option>
        <option value="SPOTICAR">SPOTICAR</option>
        <option value="VW_TRADEPORT">Volkswagen TradePort</option>
        <option value="VOLVO">VOLVO SELEKT</option>
      </select>
      <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
