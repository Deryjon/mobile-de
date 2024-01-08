<template>
  <div class="lg:pl-[20px]">
    <div class="price-tab flex items-center gap-[20px] lg:gap-[80px]">
      <div class="price dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">{{ $t("message.filter_page.price") }}</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="price"
            @focus="openPriceDropdown"
            @blur="openPriceDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPriceDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="priceOpen"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <ul>
            <li data-value="50" @click="selectNumberPrice('50')">50 € mtl</li>
            <li data-value="100" @click="selectNumberPrice('100')">
              100 € mtl
            </li>
            <li data-value="150" @click="selectNumberPrice('150')">
              150 € mtl
            </li>
            <li data-value="200" @click="selectNumberPrice('200')">
              200 € mtl
            </li>
            <li data-value="250" @click="selectNumberPrice('250')">
              250 € mtl
            </li>
            <li data-value="300" @click="selectNumberPrice('300')">
              300 € mtl
            </li>
          </ul>
        </ul>
      </div>
      <!-- <div class="price">
        <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
        <div class="marke_select_div relative mt-[10px]">
          <input
            placeholder="from"
            class="mark_input text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number" 
            pattern="\d*"
            v-model="price"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            v-model="selectedPrice"
            @change="updateSelectPrice"
          >
            <option value="50">50 € mtl</option>
            <option value="100">100 € mtl</option>
            <option value="150">150 € mtl</option>
            <option value="200">200 € mtl</option>
            <option value="250">250 € mtl</option>
            <option value="300">300 € mtl</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div> -->
      <div class="price-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="priceTo"
            @focus="openPriceToDropdown"
            @blur="openPriceToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPriceToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="priceToOpen"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <ul>
            <li data-value="50" @click="selectNumberPriceTo('50')">50 € mtl</li>
            <li data-value="100" @click="selectNumberPriceTo('100')">
              100 € mtl
            </li>
            <li data-value="150" @click="selectNumberPriceTo('150')">
              150 € mtl
            </li>
            <li data-value="200" @click="selectNumberPriceTo('200')">
              200 € mtl
            </li>
            <li data-value="250" @click="selectNumberPriceTo('250')">
              250 € mtl
            </li>
            <li data-value="300" @click="selectNumberPriceTo('300')">
              300 € mtl
            </li>
          </ul>
        </ul>
      </div>
      <!-- <div class="marke_select_div relative mt-[36px]">
        <input
          placeholder="up to"
          class="mark_input text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
          type="number"
          pattern="\d*"
          v-model="priceTo"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedPriceTo"
          @change="updateSelectPriceTo"
        >
          <option value="50">50 € mtl</option>
          <option value="100">100 € mtl</option>
          <option value="150">150 € mtl</option>
          <option value="200">200 € mtl</option>
          <option value="250">250 € mtl</option>
          <option value="300">300 € mtl</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div> -->
    </div>
    <div class="line mt-[30px]"></div>
    <div
      class="registration flex items-center gap-[20px] lg:gap-[80px] mt-[10px] xl:mt-[50px]"
    >
      <div class="years dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="inputValue"
            @focus="openDropdown"
            @input="filterOptions"
            @blur="openDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpen"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li
            v-for="option in filteredOptions"
            :key="option"
            @click="selectOption(option)"
            class=""
          >
            {{ option }}
          </li>
          <li key="1985" @click="selectOption('1985')">1985</li>
          <li key="1980" @click="selectOption('1980')">1980</li>
          <li key="1975" @click="selectOption('1975')">1975</li>
          <li key="1970" @click="selectOption('1970')">1970</li>
          <li key="1965" @click="selectOption('1965')">1965</li>
          <li key="1960" @click="selectOption('1960')">1960</li>
          <li key="1900" @click="selectOption('1900')">1900</li>
        </ul>
      </div>
      <!-- <div>
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="relative mt-[10px]">
          <input
            placeholder="from"
            class="no-spinner mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="years"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            v-model="selectedYear"
            @change="updateSelectYear"
          >
            <option v-for="year in modelYears" :key="year" :value="year">
              {{ year }}
            </option>
            <option value="1985">1985</option>
            <option value="1980">1980</option>
            <option value="1975">1975</option>
            <option value="1970">1970</option>
            <option value="1965">1965</option>
            <option value="1960">1960</option>
            <option value="1900">1900</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[6px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div> -->
      <div class="years-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="yearsTo"
            @focus="openYearsToDropdown"
            @input="filterOptions"
            @blur="openYearsToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openYearsToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenYearsTo"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li
            v-for="option in filteredOptions"
            :key="option"
            @click="selectYearsToOption(option)"
            class=""
          >
            {{ option }}
          </li>
          <li key="1985" @click="selectYearsToOption('1985')">1985</li>
          <li key="1980" @click="selectYearsToOption('1980')">1980</li>
          <li key="1975" @click="selectYearsToOption('1975')">1975</li>
          <li key="1970" @click="selectYearsToOption('1970')">1970</li>
          <li key="1965" @click="selectYearsToOption('1965')">1965</li>
          <li key="1960" @click="selectYearsToOption('1960')">1960</li>
          <li key="1900" @click="selectYearsToOption('1900')">1900</li>
        </ul>
      </div>

      <!-- <div class="relative mt-[35px]">
        <input
          placeholder="to"
          class="no-spinner mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
          type="number"
          pattern="\d*"
          v-model="yearsTo"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedtoYear"
          @change="updateSelectYearTo"
        >
          <option v-for="year in modelYears" :key="year" :value="year">
            {{ year }}
          </option>
          <option value="1985">1985</option>
          <option value="1980">1980</option>
          <option value="1975">1975</option>
          <option value="1970">1970</option>
          <option value="1965">1965</option>
          <option value="1960">1960</option>
          <option value="1900">1900</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div> -->
    </div>
    <div
      class="kilometres mt-[20px] flex items-center gap-[20px] lg:gap-[80px]"
    >
      <div class="kilometer dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.kilometr") }}
        </h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="inputKilometer"
            @focus="openKilmeterDropdown"
            @input="filterOptions"
            @blur="openKilmeterDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openKilmeterDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenKilometer"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li data-key="5000" @click="selectKilometer('5000')">5.000 km</li>
          <li data-key="10000" @click="selectKilometer('10000')">10.000 km</li>
          <li data-key="20000" @click="selectKilometer('20000')">20.000 km</li>
          <li data-key="30000" @click="selectKilometer('30000')">30.000 km</li>
          <li data-key="40000" @click="selectKilometer('40000')">40.000 km</li>
          <li data-key="50000" @click="selectKilometer('50000')">50.000 km</li>
          <li data-key="60000" @click="selectKilometer('60000')">60.000 km</li>
          <li data-key="70000" @click="selectKilometer('70000')">70.000 km</li>
          <li data-key="80000" @click="selectKilometer('80000')">80.000 km</li>
          <li data-key="90000" @click="selectKilometer('90000')">90.000 km</li>
          <li data-key="100000" @click="selectKilometer('100000')">
            100.000 km
          </li>
          <li data-key="125000" @click="selectKilometer('125000')">
            125.000 km
          </li>
          <li data-key="150000" @click="selectKilometer('150000')">
            150.000 km
          </li>
          <li data-key="175000" @click="selectKilometer('175000')">
            175.000 km
          </li>
          <li data-key="200000" @click="selectKilometer('200000')">
            200.000 km
          </li>
        </ul>
      </div>
      <!-- <div class="">
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.kilometr") }}
        </h2>
     
        <div class="marke_select_div flex relative mt-[10px]">
          <input
            placeholder="from"
            id="inputYear"
            class="mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="killometres"
            readonly
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:left-[180px] text-[10px] lg:text-[12px]"
            v-model="selectedMake"
            @change="updateSelect"
          >
            <option value="5000">5.000 km</option>
            <option value="10000">10.000 km</option>
            <option value="20000">20.000 km</option>
            <option value="30000">30.000 km</option>
            <option value="40000">40.000 km</option>
            <option value="50000">50.000 km</option>
            <option value="60000">60.000 km</option>
            <option value="70000">70.000 km</option>
            <option value="80000">80.000 km</option>
            <option value="90000">90.000 km</option>
            <option value="100000">100.000 km</option>
            <option value="125000">125.000 km</option>
            <option value="150000">150.000 km</option>
            <option value="175000">175.000 km</option>
            <option value="200000">200.000 km</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:left-[185px] lg:top-[13px]"
          ></span>
        </div>
      </div>  -->
      <div class="kilometer-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="killometresTo"
            @focus="openKilometerToDropdown"
            @input="filterOptions"
            @blur="openKilometerToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openKilometerToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenKilometerTo"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li data-key="5000" @click="selectKilometerTo('5000')">5.000 km</li>
          <li data-key="10000" @click="selectKilometerTo('10000')">
            10.000 km
          </li>
          <li data-key="20000" @click="selectKilometerTo('20000')">
            20.000 km
          </li>
          <li data-key="30000" @click="selectKilometerTo('30000')">
            30.000 km
          </li>
          <li data-key="40000" @click="selectKilometerTo('40000')">
            40.000 km
          </li>
          <li data-key="50000" @click="selectKilometerTo('50000')">
            50.000 km
          </li>
          <li data-key="60000" @click="selectKilometerTo('60000')">
            60.000 km
          </li>
          <li data-key="70000" @click="selectKilometerTo('70000')">
            70.000 km
          </li>
          <li data-key="80000" @click="selectKilometerTo('80000')">
            80.000 km
          </li>
          <li data-key="90000" @click="selectKilometerTo('90000')">
            90.000 km
          </li>
          <li data-key="100000" @click="selectKilometerTo('100000')">
            100.000 km
          </li>
          <li data-key="125000" @click="selectKilometerTo('125000')">
            125.000 km
          </li>
          <li data-key="150000" @click="selectKilometerTo('150000')">
            150.000 km
          </li>
          <li data-key="175000" @click="selectKilometerTo('175000')">
            175.000 km
          </li>
          <li data-key="200000" @click="selectKilometerTo('200000')">
            200.000 km
          </li>
        </ul>
      </div>
      <!-- <div class="marke_select_div flex relative mt-[30px]">
        <input
          placeholder="to"
          id="inputYear"
          class="mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          type="number"
          pattern="\d*"
          v-model="killometresTo"
          readonly
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:left-[180px] text-[10px] lg:text-[12px]"
          v-model="selectedMakeTo"
          @change="updateSelectTo"
        >
          <option value="5000">5.000 km</option>
          <option value="10000">10.000 km</option>
          <option value="20000">20.000 km</option>
          <option value="30000">30.000 km</option>
          <option value="40000">40.000 km</option>
          <option value="50000">50.000 km</option>
          <option value="60000">60.000 km</option>
          <option value="70000">70.000 km</option>
          <option value="80000">80.000 km</option>
          <option value="90000">90.000 km</option>
          <option value="100000">100.000 km</option>
          <option value="125000">125.000 km</option>
          <option value="150000">150.000 km</option>
          <option value="175000">175.000 km</option>
          <option value="200000">200.000 km</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:left-[185px] lg:top-[13px]"
        ></span>
      </div> -->
    </div>
    <!-- valid -->
    <div
      class="valid-until mt-[40px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[80px]"
    >
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.hu_valid") }}</h2>
        <select
          class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="huValid"
        >
          <option value="" selected>{{ $t("message.filter_page.any") }}</option>
          <option value="new">New</option>
          <option value="18">18</option>
          <option value="12">12</option>
          <option value="9">9</option>
          <option value="6">6</option>
          <option value="3">3</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div class="marke_select_div relative mt-2">
        <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.previous") }}</h2>
        <select
          class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="preOwners"
        >
          <option value="any" selected>Any</option>
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <label
        class="custom-checkbox flex items-center h-10 w-[170px] mt-[25px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          v-model="isCheckedHistory"
          @click="toggleShowCheckbox"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />
        <svg
          class="icon mt-[10px]"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedHistory"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm p]b-[20px">{{ $t("message.filter_page.history") }}</span>
      </label>
      <label
        class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]"
        :class="{ 'opacity-20': isRadioNewSelected }"
      >
        <input
          type="checkbox"
          v-model="isCheckedRoad"
          @click="toggleShowCheckbox"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />
        <svg
          class="icon mt-[10px]"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width="1em"
        >
          <!-- Insert your SVG arrow icon here -->
          <path
            v-if="isCheckedRoad"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">{{ $t("message.filter_page.road") }}</span>
      </label>
    </div>
    <!-- country -->
    <div
      class="valid-until mt-[20px] flex flex-wrap items-center gap-[0px] lg:gap-x-[80px]"
    >
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.country") }}</h2>
        <select
          class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="selectedCountry"
        >
          <optgroup>
            <option value="" selected>{{ $t("message.filter_page.any") }}</option>
          </optgroup>
          <optgroup>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="AL">Albania</option>
            <option value="AT">Austria</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="AD">Andorra</option>
            <option value="BR">Brazil</option>
            <option value="BG">Bulgaria</option>
            <option value="CA">Canada</option>
            <option value="HR">Croatia</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="EG">Egypt</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FO">Faroe Islands</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KW">Kuwait</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MK">Macedonia</option>
            <option value="MT">Malta</option>
            <option value="MX">Mexico</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="ME">Montenegro</option>
            <option value="MA">Morocco</option>
            <option value="NL">Netherlands</option>
            <option value="NZ">New Zealand</option>
            <option value="NG">Nigeria</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="SM">San Marino</option>
            <option value="SA">Saudi Arabia</option>
            <option value="RS">Serbia</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="ZA">South Africa</option>
            <option value="KR">South Korea</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="TW">Taiwan</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">USA</option>
          </optgroup>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <div class="marke_select_div relative mt-2">
        <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.postcode") }}</h2>
        <input
          class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
          type="text"
          pattern="\d*"
          v-model="zipCode"
        />
      </div>
      <!-- <div class="relative mt-2">
        <h2 class="text-sm lg:text-[14px]">Country</h2>
        <select
          class="mark-select mt-[10px] w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="selectedCountry"
        >
          <optgroup>
            <option value="" selected>Any</option>
          </optgroup>
          <optgroup>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="AL">Albania</option>
            <option value="AT">Austria</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="AD">Andorra</option>
            <option value="BR">Brazil</option>
            <option value="BG">Bulgaria</option>
            <option value="CA">Canada</option>
            <option value="HR">Croatia</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="EG">Egypt</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FO">Faroe Islands</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KW">Kuwait</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MK">Macedonia</option>
            <option value="MT">Malta</option>
            <option value="MX">Mexico</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="ME">Montenegro</option>
            <option value="MA">Morocco</option>
            <option value="NL">Netherlands</option>
            <option value="NZ">New Zealand</option>
            <option value="NG">Nigeria</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="SM">San Marino</option>
            <option value="SA">Saudi Arabia</option>
            <option value="RS">Serbia</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="ZA">South Africa</option>
            <option value="KR">South Korea</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="TW">Taiwan</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">USA</option>
          </optgroup>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div> -->
      <!-- <div class="marke_select_div relative mt-2">
        <h2 class="text-sm lg:text-[14px]">City / zip code</h2>
        <input
          class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
          type="number"
          pattern="\d*"
					v-model="zipCode"
        />
      </div> -->
      <!--  -->
      <div class="radius dropdown-container">
        <h2 class="text-sm lg:text-[14px] mt-2">{{ $t("message.filter_page.radius") }}</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[150px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="radius"
            @focus="openRadiusDropdown"
            @input="filterOptions"
            @blur="openRadiusDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openRadiusDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenRadius"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li data-key="10" @click="selectRadius('10')">10 km</li>
          <li data-key="20" @click="selectRadius('20')">20 km</li>
          <li data-key="50" @click="selectRadius('50')">50 km</li>
          <li data-key="100" @click="selectRadius('100')">100 km</li>
          <li data-key="200" @click="selectRadius('200')">200 km</li>
          <li data-key="500" @click="selectRadius('500')">500 km</li>
        </ul>
      </div>
      <!-- <div class="">
        <h2 class="text-sm lg:text-[14px] mt-2">Radius</h2>
        <div class="marke_select_div flex relative mt-[10px]">
          <input
            placeholder="from"
            id="inputYear"
            class="mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            type="number"
            pattern="\d*"
            v-model="radius"
            readonly
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] lg:right-[0px] xl:left-[180px] text-[10px] lg:text-[12px]"
            v-model="selectedRadius"
            @change="updateRadius"
          >
            <option value="10">10 km</option>
            <option value="20">20 km</option>
            <option value="50">50 km</option>
            <option value="100">100 km</option>
            <option value="200">200 km</option>
            <option value="500">500 km</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute top-[14px] right-[7px] lg:right-[6px] xl:left-[185px] lg:top-[13px]"
          ></span>
        </div>
      </div> -->
    </div>
  </div> 
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import http from "../../../axios.config";
import { useSemiTruckStore } from "../../../store/semitruckDataStore";
export default {
  setup() {
    const isCheckedHistory = ref(false);
    const isCheckedRoad = ref(false);

    const toggleShowCheckbox = (index) => {
      isCheckedRoad[index] = !isCheckedRoad[index];
    };

    return {
      isCheckedRoad,
      isCheckedHistory,
      toggleShowCheckbox,
    };
  },
  data() {
    return {
      price: "",
      radius: "",
      priceTo: "",
      selectedYear: "",
      selectedRadius: "",
      selectedtoYear: "",
      years: "",
      yearsTo: "",
      modelYears: [],
      filteredOptions: [],
      killometres: "",
      inputKilometer: "",
      killometresTo: "",
      isOpenKilometer: false,
      isOpenKilometerTo: false,
      selectedMake: "",
      selectedMakeTo: "",
      selectedPrice: "",
      selectedPriceTo: "",
      inputValue: "",
      huValid: "",
      preOwners: "",
      selectedCountry: "",
			zipCode: "",
      priceOpen: false,
      isOpenYearsTo: false,
      priceToOpen: false,
      isOpenRadius: false,
      isOpen: false,
    };
  },
  watch: {
    price(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    priceTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    inputValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    yearsTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    inputKilometer(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    killometresTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    huValid(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    preOwners(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    isCheckedHistory(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    isCheckedRoad(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    selectedCountry(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    zipCode(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
    radius(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateSemiTruckData();
      }
    },
  },
  methods: {
    updateSemiTruckData() {
      const semitruckStore = useSemiTruckStore();
      (semitruckStore.semitruckData.truck_price_from =
        parseInt(this.price)),
      (semitruckStore.semitruckData.truck_price_to =
        parseInt(this.priceTo)),
      (semitruckStore.semitruckData.truck_firt_date_year_from =
        parseInt(this.inputValue)),
      (semitruckStore.semitruckData.truck_firt_date_year_to =
        parseInt(this.yearsTo)),
      (semitruckStore.semitruckData.truck_kilometre_from =
        parseInt(this.inputKilometer)),
      (semitruckStore.semitruckData.truck_kilometre_to =
        parseInt(this.killometresTo)),
      (semitruckStore.semitruckData.truck_country =
        this.selectedCountry),
      (semitruckStore.semitruckData.zipcode =
        this.zipCode),
      (semitruckStore.semitruckData.radius =
        this.radius),
        semitruckStore.updateSemiTruckData();
    },
    openRadiusDropdown() {
      this.isOpenRadius = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeRadiusDropdownOnClickOutside
      );
    },
    selectRadius(option) {
      this.radius = option;
      this.isOpenRadius = false;
    },
    closeRadiusDropdown() {
      this.isOpenRadius = false;
    },
    closeRadiusDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".radius");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenRadius = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    //
    openKilometerToDropdown() {
      this.isOpenKilometerTo = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeKilometerToDropdownOnClickOutside
      );
    },
    selectKilometerTo(option) {
      this.killometresTo = option;
      this.isOpenKilometerTo = false;
    },
    closeKilometerToDropdown() {
      this.isOpenKilometerTo = false;
    },
    closeKilometerToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".kilometer-to");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenKilometerTo = false;
        document.removeEventListener(
          "click",
          this.closeKilometerToDropdownOnClickOutside
        );
      }
    },
    //
    openKilmeterDropdown() {
      this.isOpenKilometer = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeKilometerDropdownOnClickOutside
      );
    },
    selectKilometer(option) {
      this.inputKilometer = option;
      this.isOpenKilometer = false;
    },
    closeKilometerDropdown() {
      this.isOpenKilometer = false;
    },
    closeKilometerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".kilometer");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenKilometer = false;
        document.removeEventListener(
          "click",
          this.closeKilometerDropdownOnClickOutside
        );
      }
    },
    //
    openDropdown() {
      this.isOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeYearsDropdownOnClickOutside);
    },
    filterOptions() {
      this.filteredOptions = this.ModelYears.filter((option) =>
        option.toLowerCase().includes(this.inputValue.toLowerCase())
      );
      this.isOpen = true;
    },
    selectOption(option) {
      this.inputValue = option;
      this.isOpen = false;
    },
    closeYearsDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeYearsDropdownOnClickOutside
        );
      }
    },
    //
    openYearsToDropdown() {
      this.isOpenYearsTo = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeYearsToDropdownOnClickOutside
      );
    },
    filterToOptions() {
      this.filteredOptions = this.ModelYears.filter((option) =>
        option.toLowerCase().includes(this.yearsTo.toLowerCase())
      );
      this.isOpenYearsTo = true;
    },
    selectYearsToOption(option) {
      this.yearsTo = option;
      this.isOpenYearsTo = false;
    },
    closeYearsToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years-to");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenYearsTo = false;
        document.removeEventListener(
          "click",
          this.closeYearsToDropdownOnClickOutside
        );
      }
    },
    //
    openPriceToDropdown() {
      this.priceToOpen = true;
      document.addEventListener(
        "click",
        this.closePriceToDropdownOnClickOutside
      );
    },
    closePriceToDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price-to");
      if (!dropdownElement.contains(event.target)) {
        this.priceToOpen = false;
        document.removeEventListener(
          "click",
          this.closePriceToDropdownOnClickOutside
        );
      }
    },
    selectNumberPriceTo(option) {
      this.priceTo = option;
      this.priceToOpen = false;
    },
    closePriceToDropdown() {
      this.priceOpenTo = false;
    },
    // price
    openPriceDropdown() {
      this.priceOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdownOnClickOutside);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price");
      if (!dropdownElement.contains(event.target)) {
        this.priceOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },
    selectNumberPrice(option) {
      this.price = option;
      this.priceOpen = false;
    },
    closePriceDropdown() {
      this.priceOpen = false;
    },
    // year
    updateSelectYear() {
      this.years = this.selectedYear;
      this.selectedYear = this.selectedMake;
    },
    updateSelectYearTo() {
      this.yearsTo = this.selectedtoYear;
      this.selectedtoYear = this.selectedMake;
    },
    updateSelect() {
      this.killometres = this.selectedMake;
      this.selectedMake = this.selectedYear;
    },
    updateRadius() {
      this.radius = this.selectedRadius;
      this.selectedRadius = this.selectedYear;
    },

    fetchModelYears() {
      const apiUrl = "https://api.nhtsa.gov/SafetyRatings";
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          this.options = data.Results.map((result) => result.ModelYear);
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },
  },
  mounted() {
    this.price = localStorage.getItem("price");
    this.inputValue = localStorage.getItem("reg-year");
    this.inputKilometer = localStorage.getItem("kilometer");
    this.fetchModelYears();
  },
};
</script>
<style>
input[type="checkbox"]:disabled {
  opacity: 0.5;
  border: #ccc;
  /* Убираем возможность кликать на отключенный чекбокс */
  pointer-events: none;
  /* Убираем указатель курсора */
  cursor: none;
}
.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #ffffff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #ffffff;
  background: #e04b00;
}
.custom-checkbox input[type="checkbox"] {
  display: none;
}
.mark-select {
  border: 1px solid #111;
}
.mark-input2 {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
select::-webkit-scrollbar {
  width: 0;
}

/*Убрать полосу прокрутки для всей страницы*/
::-webkit-scrollbar {
  width: 0;
}
.line {
  border: 1px solid grey;
  height: 1px;
}
.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}

.dropdown-options {
  position: absolute;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-options li {
  padding: 0.5em;
  cursor: pointer;
}

.dropdown-options li:hover {
  background-color: #f0f0f0;
}
</style>
