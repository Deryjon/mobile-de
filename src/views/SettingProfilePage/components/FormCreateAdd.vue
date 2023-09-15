<template>
  <div class="">
    <div class="flex gap-[20px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">
            {{ $t("message.selects.mark") }}
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedMark"
            @change="fetchModels()"
          >
            <option value="14600" selected>Beliebig</option>
            <optgroup>
              <option
                v-for="make in makes"
                :key="make"
                :value="make.car_make_name"
              >
                {{ make.car_make_name }}
              </option>
              <option value="other">other</option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>

      <div class="relative">
        <h2 class="text-sm lg:text-[14px] mt-2">
          {{ $t("message.selects.model") }}
        </h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          :disabled="isModelSelectDisabled"
          v-model="selectedModel"
        >
          <option :value="selectedModel" selected>
            {{ selectedModel }}
          </option>
          <option
            v-for="model in models"
            :key="model"
            :value="model.car_model_name"
            class=""
          >
            {{ model.car_model_name }}
          </option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
    </div>
    <div class="filter-cars flex flex-wrap gap-[15px] mt-[0px] lg:mt-[50px]">
      <!-- cabrio -->
      <label
        class="custom-checkbox p-[0] gap-[10px] flex items-center h-[40px] w-[250px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          :class="{
            'bg-transparent': selectedCar !== 'Cabrio / Roadster',
            'bg-orange': selectedCar === 'Cabrio / Roadster',
          }"
          @click="selectCar('Cabrio / Roadster')"
        />
        <img
          src="../../../assets/icons/cabriolet-icon.svg"
          alt=""
          class="w-[90px] pt-[20px]"
        />
        <span class="text-sm"> Cabrio / Roadster</span>
      </label>
      <!-- estate -->
      <label
        class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[230px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          :class="{
            'bg-transparent': selectedCar !== 'Estate Car',
            'bg-orange': selectedCar === 'Estate Car',
          }"
          @click="selectCar('Estate Car')"
          class="form-checkbox h-7 w-7 text-indigo-600"
        />
        <img
          src="../../../assets/icons/estate-car-icon.svg"
          alt=""
          class="w-24 pt-[20px]"
        />
        <span class="text-sm">Estate Car</span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[230px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          @click="selectCar('Saloon')"
          :class="{
            'bg-transparent': selectedCar !== 'Saloon',
            'bg-orange': selectedCar === 'Saloon',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/saloon-car-icon.svg"
          alt=""
          class="w-24 pt-[20px]"
        />
        <span class="text-sm">Saloon</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox p-[0]  flex gap-[10px] items-center h-10 w-[210px]20px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          @click="selectCar('Small Car')"
          :class="{
            'bg-transparent': selectedCar !== 'Small Car',
            'bg-orange': selectedCar === 'Small Car',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/small-car-icon.svg"
          alt=""
          class="w-[75px] pt-[10px]"
        />
        <span class="text-sm">Small Car</span>
      </label>
      <!-- sports -->
      <label
        class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[280px]20px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          @click="selectCar(' Sports Car / Coupe')"
          :class="{
            'bg-transparent': selectedCar !== ' Sports Car / Coupe',
            'bg-orange': selectedCar === ' Sports Car / Coupe',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/sports-car-icon.svg"
          alt=""
          class="w-28 pt-[18px]"
        />
        <span class="text-sm"> Sports Car / Coupe</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox p-[0]  flex gap-4 items-center h-10 w-[230px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          @click="selectCar('Van / Minibus')"
          :class="{
            'bg-transparent': selectedCar !== 'Van / Minibus',
            'bg-orange': selectedCar === 'Van / Minibus',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/car-minibus-icon.svg"
          alt=""
          class="w-[70px] pt-[8px]"
        />
        <span class="text-sm">Van / Minibus</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[350px]"
      >
        <input
          type="radio"
          v-model="selectedCar"
          @click="selectCar('SUV / Off-road Vehicle / Pickup Truck')"
          :class="{
            'bg-transparent':
              selectedCar !== 'SUV / Off-road Vehicle / Pickup Truck',
            'bg-orange':
              selectedCar === 'SUV / Off-road Vehicle / Pickup Truck',
          }"
          class="form-checkbox h-7 w-7 text-indigo-600"
        />

        <img
          src="../../../assets/icons/car-suv-icon.svg"
          alt=""
          class="w-20 pt-[18px]"
        />
        <span class="text-sm">SUV / Off-road Vehicle / Pickup Truck</span>
      </label>
    </div>
    <div class="flex gap-[30px]">
      <div class="seats dropdown-container mt-[20px]">
        <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="numberSeats"
            @focus="openSeatsDropdown"
            @blur="closeSeatsDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openSeatsDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="seatsOpen"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <ul>
            <li key="2" @click="selectNumberSeats('2')">2</li>
            <li key="3" @click="selectNumberSeats('3')">3</li>
            <li key="4" @click="selectNumberSeats('4')">4</li>
            <li key="5" @click="selectNumberSeats('5')">5</li>
            <li key="6" @click="selectNumberSeats('6')">6</li>
            <li key="7" @click="selectNumberSeats('7')">7</li>
            <li key="8" @click="selectNumberSeats('8')">8</li>
            <li key="9" @click="selectNumberSeats('9')">9</li>
          </ul>
        </ul>
      </div>
      <div class="seats relative mt-[28px]">
        <h2 class="text-sm lg:text-[14px]">Number of doors</h2>
        <select
          class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
          v-model="numDoor"
        >
          <option value="">Any</option>
          <option value="2/3">2/3</option>
          <option value="3/5">3/5</option>
          <option value="6/7">6/7</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"
        ></span>
      </div>
      <!-- sliding-door -->
      <div class="seats relative mt-[28px]">
        <h2 class="text-sm lg:text-[14px]">Sliding door</h2>
        <select
          class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
          v-model="slidingDoor"
        >
          <option value="any">Any</option>
          <option value="Sliding door right">Sliding door right</option>
          <option value="Sliding door left">Sliding door left</option>
          <option value="Sliding door both-sided">
            Sliding door both-sided
          </option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"
        ></span>
      </div>
    </div>
    <div class="condition mt-[30px]">
      <h3 class="text-[14px]">Type and condition</h3>
      <div
        class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[244px] mt-[10px] mb-[10px]"
      >
        <label>
          <input
            type="radio"
            v-model="selectedCondition"
            :class="{
              'bg-transparent': selectedCondition !== 'Any',
              'bg-orange': selectedCondition === 'Any',
            }"
            class="ml-10px"
            @click="selectCondition('Any')"
          />
          <span class="ml-[10px] text-[14px]">Any</span>
        </label>
        <label>
          <input
            type="radio"
            v-model="selectedCondition"
            :class="{
              'bg-transparent': selectedCondition !== 'New',
              'bg-orange': selectedCondition === 'New',
            }"
            @click="selectCondition('New')"
          />
          <span class="ml-[10px] text-[14px]">New</span>
        </label>
        <label>
          <input
            type="radio"
            v-model="selectedCondition"
            :class="{
              'bg-transparent': selectedCondition !== 'Used',
              'bg-orange': selectedCondition === 'Used',
            }"
            @click="selectCondition('Used')"
          />
          <span class="ml-[10px] text-[14px]">Used</span>
        </label>
      </div>
      <div
        class="conditions flex flex-wrap gap-x-[0px] lg:gap-x-[140px] mt-[20px] lg:mt-[30px] xl:mt-[20px]"
      >
        <label
          class="custom-checkbox flex items-center h-10 w-[140px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
            :class="{ 'bg-[#ccc] cursor-help': isRadioNewSelected }"
            v-model="isCheckedRegister"
            @click="toggleShowCheckbox(0, 'Pre-Registration')"
          />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedRegister"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Pre-Registration</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[130px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedEmploy"
            @click="toggleShowCheckbox(1, 'Employees Car')"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedEmploy"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Employee's Car</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[130px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedClassic"
            @click="toggleShowCheckbox(2, 'Classic Vehicle')"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedClassic"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Classic Vehicle</span>
        </label>
        <label
          class="custom-checkbox flex items-center h-10 w-[190px] pb-[23px]"
          :class="{ 'opacity-20': isRadioNewSelected }"
        >
          <input
            type="checkbox"
            v-model="isCheckedDemon"
            @click="toggleShowCheckbox(3, 'Demonstration Vehicle')"
            :disabled="isRadioNewSelected"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            width="1em"
          >
            <!-- Insert your SVG arrow icon here -->
            <path
              v-if="isCheckedDemon"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Demonstration Vehicle</span>
        </label>
      </div>
    </div>
    <div class="price-tab flex items-center gap-[21px] lg:gap-[30px]">
      <div class="price dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="price"
            @focus="openPriceDropdown"
            @blur="closePriceDropdown"
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
      <div class="years dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.registration") }}
        </h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="inputValue"
            @focus="openDropdown"
            @input="filterOptions"
            @blur="closeDropdown"
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
      <div class="kilometer dropdown-container">
        <h2 class="mt-2 text-sm lg:text-[14px]">
          {{ $t("message.selects.kilometr") }}
        </h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="inputKilometer"
            @focus="openKilmeterDropdown"
            @input="filterOptions"
            @blur="closeKilometerDropdown"
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
    </div>
    <div
      class="valid-until mt-[40px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]"
    >
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[14px]">HU valid until</h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="huValid"
        >
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
        <h2 class="text-sm lg:text-[14px]">Previous owners</h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="preOwners"
        >
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
      <label class="custom-checkbox flex items-center h-10 w-[160px] mt-[25px]">
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

        <span class="text-sm p]b-[20px">Full Service History</span>
      </label>
      <label class="custom-checkbox flex items-center h-10 w-[130px] mt-[25px]">
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

        <span class="text-sm">Roadworthy</span>
      </label>
    </div>
    <div
      class="valid-until mt-[20px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]"
    >
      <div class="relative mt-2">
        <h2 class="text-sm lg:text-[14px]">Country</h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="selectedCountry"
        >
          <optgroup>
            <option value="14600" selected>Any</option>
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
        <h2 class="text-sm lg:text-[14px]">City / zip code</h2>
        <input
          class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
          type="number"
          pattern="\d*"
          v-model="zipCode"
        />
      </div>
      <!--  -->
      <div class="radius dropdown-container">
        <h2 class="text-sm lg:text-[14px] mt-2">Radius</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="radius"
            @focus="openRadiusDropdown"
            @input="filterOptions"
            @blur="closeRadiusDropdown"
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
    </div>
    <div class="line mt-[50px]"></div>
    <div class="mt-[10px]">
      <h3 class="text-[16px]">Fuel Type</h3>
      <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
        <!-- cabrio -->
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Diesel',
              'bg-orange': selectedFuel === 'Diesel',
            }"
            @click="selectFuel('Diesel')"
          />

          Diesel
        </label>
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (diesel/electric)',
              'bg-orange': selectedFuel === 'Hybrid (diesel/electric)',
            }"
            @click="selectFuel('Hybrid (diesel/electric)')"
          />

          Hybrid (diesel/electric)
        </label>
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Natural Gas',
              'bg-orange': selectedFuel === 'Natural Gas',
            }"
            @click="selectFuel('Natural Gas')"
          />

          Natural Gas
        </label>
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Other',
              'bg-orange': selectedFuel === 'Other',
            }"
            @click="selectFuel('Other')"
          />

          Other
        </label>
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Petrol',
              'bg-orange': selectedFuel === 'Petrol',
            }"
            @click="selectFuel('Petrol')"
          />

          Petrol
        </label>
        <label
          class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Electric',
              'bg-orange': selectedFuel === 'Electric',
            }"
            @click="selectFuel('Electric')"
          />

          Electric
        </label>
        <!-- estate -->
        <label
          class="custom-checkbox p-0 flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Hydrogen',
              'bg-orange': selectedFuel === 'Hydrogen',
            }"
            @click="selectFuel('Hydrogen')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />

          <span class="text-[14px]">Hydrogen</span>
        </label>

        <!-- saloon -->
        <label
          class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[200px] pb-4"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Plug-in hybrid',
              'bg-orange': selectedFuel === 'Plug-in hybrid',
            }"
            @click="selectFuel('Plug-in hybrid')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />

          <span class="text-[14px]">Plug-in hybrid</span>
        </label>
        <!-- small -->
        <label
          class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (petrol/electric)',
              'bg-orange': selectedFuel === 'Hybrid (petrol/electric)',
            }"
            @click="selectFuel('Hybrid (petrol/electric)')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />

          <span class="text-[14px]">Hybrid (petrol/electric)</span>
        </label>
        <!-- sports -->
        <label
          class="custom-checkbox p-0 flex gap-3 items-center h-10 w-[206px] pb-[20px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'LPG',
              'bg-orange': selectedFuel === 'LPG',
            }"
            @click="selectFuel('LPG')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />

          <span class="text-[14px]">LPG</span>
        </label>
        <!-- off-road -->
        <label
          class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[23px]"
        >
          <input
            type="radio"
            v-model="selectedFuel"
            :class="{
              'bg-transparent': selectedFuel !== 'Ethanol (FFV, E85, etc.)',
              'bg-orange': selectedFuel === 'Ethanol (FFV, E85, etc.)',
            }"
            @click="selectFuel('Ethanol (FFV, E85, etc.)')"
            class="form-checkbox h-5 w-5 text-indigo-600"
          />

          <span class="text-sm">Ethanol (FFV, E85, etc.)</span>
        </label>
      </div>
    </div>
		<div
      class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[30px]"
    >
      <div class="power dropdown-container">
        <h2 class="text-sm lg:text-[14px] mt-2">Power</h2>
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="power"
            @focus="openPowerDropdown"
            @input="filterOptions"
            @blur="closePowerDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPowerDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenPower"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectPower('34')" data-key="34">34</li>
          <li @click="selectPower('50')" data-key="50">50</li>
          <li @click="selectPower('60')" data-key="60">60</li>
          <li @click="selectPower('75')" data-key="75">75</li>
          <li @click="selectPower('90')" data-key="90">90</li>
          <li @click="selectPower('101')" data-key="101">101</li>
          <li @click="selectPower('118')" data-key="118">118</li>
          <li @click="selectPower('131')" data-key="131">131</li>
          <li @click="selectPower('150')" data-key="150">150</li>
          <li @click="selectPower('200')" data-key="200">200</li>
          <li @click="selectPower('252')" data-key="252">252</li>
          <li @click="selectPower('303')" data-key="303">303</li>
          <li @click="selectPower('358')" data-key="358">358</li>
          <li @click="selectPower('402')" data-key="402">402</li>
          <li @click="selectPower('454')" data-key="454">454</li>
        </ul>
      </div>
      <!-- <div class="price">
        <h2 class="mt-2 text-sm lg:text-[14px]">Power</h2>
        <div class="marke_select_div relative mt-[10px]">
          <input
            placeholder="from"
            class="mark_input text-[12px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
            type="number"
            pattern="\d*"
            v-model="price"
          />
          <select
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            v-model="selectedPrice"
            @change="updateSelectPrice"
          >
            <option value="34">34</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="75">75</option>
            <option value="90">90</option>
            <option value="101">101</option>
            <option value="118">118</option>
            <option value="131">131</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="252">252</option>
            <option value="303">303</option>
            <option value="358">358</option>
            <option value="402">402</option>
            <option value="454">454</option>
          </select>
          <span
            class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
          ></span>
        </div>
      </div> -->
      <div class="power-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="powerTo"
            @focus="openPowerToDropdown"
            @input="filterOptions"
            @blur="closePowerToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openPowerToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenPowerTo"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectPowerTo('34')" data-key="34">34</li>
          <li @click="selectPowerTo('50')" data-key="50">50</li>
          <li @click="selectPowerTo('60')" data-key="60">60</li>
          <li @click="selectPowerTo('75')" data-key="75">75</li>
          <li @click="selectPowerTo('90')" data-key="90">90</li>
          <li @click="selectPowerTo('101')" data-key="101">101</li>
          <li @click="selectPowerTo('118')" data-key="118">118</li>
          <li @click="selectPowerTo('131')" data-key="131">131</li>
          <li @click="selectPowerTo('150')" data-key="150">150</li>
          <li @click="selectPowerTo('200')" data-key="200">200</li>
          <li @click="selectPowerTo('252')" data-key="252">252</li>
          <li @click="selectPowerTo('303')" data-key="303">303</li>
          <li @click="selectPowerTo('358')" data-key="358">358</li>
          <li @click="selectPowerTo('402')" data-key="402">402</li>
          <li @click="selectPowerTo('454')" data-key="454">454</li>
        </ul>
      </div>
      <!-- <div class="marke_select_div relative mt-[36px]">
        <input
          placeholder="up to"
          class="mark_input text-[12px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
          type="number"
          pattern="\d*"
          v-model="price"
        />
        <select
          class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
          v-model="selectedPrice"
          @change="updateSelectPrice"
        >
          <option value="34">34</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="75">75</option>
          <option value="90">90</option>
          <option value="101">101</option>
          <option value="118">118</option>
          <option value="131">131</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="252">252</option>
          <option value="303">303</option>
          <option value="358">358</option>
          <option value="402">402</option>
          <option value="454">454</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div> -->
      <label for="condition-any" class="mt-[30px]">
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Hp',
            'bg-orange': selectedCondition === 'Hp',
          }"
          @click="selectCondition('Hp')"
        />
        <span class="ml-[10px]">Hp</span>
      </label>
      <label
        for="condition-any"
        @click="selectCondition('kW')"
        class="mt-[30px]"
      >
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'kW',
            'bg-orange': selectedCondition === 'kW',
          }"
        />
        <span class="ml-[10px]">kW</span>
      </label>
    </div>
		<div
      class="duration flex items-center gap-x-[20px] lg:gap-[30px] mt-[20px] lg:mt-[40px]"
    >
      <div>
        <h2 class="text-sm lg:text-[14px] mt-2">Cubic capacity</h2>
        <div class="cubic dropdown-container">
          <div class="input-container flex relative mt-[10px]">
            <input
              type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from"
              v-model="cubic"
              @focus="openCubicDropdown"
              @input="filterOptions"
              @blur="closeCubicDropdown"
            />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openCubicDropdown"
            >
              <span
                class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
              ></span>
            </div>
          </div>
          <ul
            v-if="isOpenCubic"
            class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
          >
            <li @click="selectCubic('any')" data-key="">Any</li>
            <li @click="selectCubic('1000')" data-key="1000">1,000 cm³</li>
            <li @click="selectCubic('1200')" data-key="1200">1,200 cm³</li>
            <li @click="selectCubic('1400')" data-key="1400">1,400 cm³</li>
            <li @click="selectCubic('1600')" data-key="1600">1,600 cm³</li>
            <li @click="selectCubic('1800')" data-key="1800">1,800 cm³</li>
            <li @click="selectCubic('2000')" data-key="2000">2,000 cm³</li>
            <li @click="selectCubic('2600')" data-key="2600">2,600 cm³</li>
            <li @click="selectCubic('3000')" data-key="3000">3,000 cm³</li>
            <li @click="selectCubic('5000')" data-key="5000">5,000 cm³</li>
            <li @click="selectCubic('7500')" data-key="7500">7,500 cm³</li>
            <li @click="selectCubic('8000')" data-key="8000">8,000 cm³</li>
            <li @click="selectCubic('9000')" data-key="9000">9,000 cm³</li>
          </ul>
        </div>
      </div>
      <div class="cubic-to dropdown-container mt-[27px]">
        <div class="input-container flex relative mt-[10px]">
          <input
            type="from"
            class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            placeholder="from"
            v-model="cubicTo"
            @focus="openCubicToDropdown"
            @input="filterOptions"
            @blur="closeCubicToDropdown"
          />

          <div
            class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
            @click="openCubicToDropdown"
          >
            <span
              class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
            ></span>
          </div>
        </div>
        <ul
          v-if="isOpenCubicTo"
          class="dropdown-options w-[200px] text-[10px] lg:text-[12px]"
        >
          <li @click="selectCubicTo('any')" data-key="">Any</li>
          <li @click="selectCubicTo('1000')" data-key="1000">1,000 cm³</li>
          <li @click="selectCubicTo('1200')" data-key="1200">1,200 cm³</li>
          <li @click="selectCubicTo('1400')" data-key="1400">1,400 cm³</li>
          <li @click="selectCubicTo('1600')" data-key="1600">1,600 cm³</li>
          <li @click="selectCubicTo('1800')" data-key="1800">1,800 cm³</li>
          <li @click="selectCubicTo('2000')" data-key="2000">2,000 cm³</li>
          <li @click="selectCubicTo('2600')" data-key="2600">2,600 cm³</li>
          <li @click="selectCubicTo('3000')" data-key="3000">3,000 cm³</li>
          <li @click="selectCubicTo('5000')" data-key="5000">5,000 cm³</li>
          <li @click="selectCubicTo('7500')" data-key="7500">7,500 cm³</li>
          <li @click="selectCubicTo('8000')" data-key="8000">8,000 cm³</li>
          <li @click="selectCubicTo('9000')" data-key="9000">9,000 cm³</li>
        </ul>
      </div>
    </div>
		<div class="flex gap-[40px] lg:gap-[100px]">
      <div
        class="
			"
      >
        <h3 class="mt-[20px] lg:mt-[60px]">Transmission</h3>
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedAutomatic"
            @click="toggleShowCheckbox(0, 'Automatic transmission')"
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
              v-if="isCheckedAutomatic"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Automatic transmission</span>
        </label>
      </div>
      <div class="mt-[43px] lg:mt-[84px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedSemi"
            @click="toggleShowCheckbox(1, 'Semi-automatic')"
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
              v-if="isCheckedSemi"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Semi-automatic</span>
        </label>
      </div>
      <div class="mt-[43px] lg:mt-[84px]">
        <label class="custom-checkbox flex items-center h-10 w-[180px]">
          <input
            type="checkbox"
            v-model="isCheckedManual"
            @click="toggleShowCheckbox(2, 'Manual gearbox')"
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
              v-if="isCheckedManual"
              fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>

          <span class="text-sm">Manual gearbox </span>
        </label>
      </div>
    </div>
		<div
      class="valid-until mt-[30px] lg:mt-[30px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]"
    >
      <div class="relative mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">
          Fuel consumption (combined) up to
        </h2>
        <select
          class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] mt-[10px] lg:text-[12px]"
          v-model="consumptionFuel"
        >
          <option value="any" selected>Any</option>
          <option value="new">New</option>
          <option value="18">18</option>
          <option value="12">12</option>
          <option value="9">9</option>
          <option value="6">6</option>
          <option value="3">3</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <div class="marke_select_div relative mt-[14px] lg:mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emissions Sticker</h2>
        <select
          class="mark-select mt-[20px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="stickerEmission"
        >
          <option value="any" selected>Any</option>
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <div class="marke_select_div relative mt-[20px] lg:mt-2 w-[200px]">
        <h2 class="text-sm lg:text-[14px]">Emission Class</h2>
        <select
          class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
          v-model="classEmision"
        >
          <option value="any" selected>Any</option>
          <option value="1">Up to 1</option>
          <option value="2">Up to 2</option>
          <option value="3">Up to 3</option>
          <option value="4">Up to 4</option>
        </select>
        <span
          class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"
        ></span>
      </div>
      <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
        <input
          type="checkbox"
          v-model="isCheckedParticulate"
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
            v-if="isCheckedParticulate"
            fill="#FFFFFF"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>

        <span class="text-sm">Particulate filter </span>
      </label>
    </div>
		<div class="line mt-[30px]"></div>
  </div>
</template>
<script>
import http from "../../../axios.config";
export default {
  data() {
    return {
      makes: [],
      models: [],
      selectedMark: "14600",
      selectedCar: "",
      selectedCondition: "Any",
      seatsOpen: false,
      numDoor: "",
      slidingDoor: "",
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      isRadioNewSelected: false,
      price: "",
      selectedYear: "",
      selectedFuel: "",
      years: "",
      killometres: "",
      inputValue: "",
      isOpen: false,
      selectedPrice: "",
      huValid: "14600",
      preOwners: "any",
      priceOpen: false,
      isCheckedHistory: false,
      isCheckedRoad: false,
      isOpenRadius: false,
      type: [],
    };
  },
  methods: {
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
    selectFuel(option) {
      this.selectedFuel = option;
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
    toggleShowCheckbox(index, typeName) {
      const isChecked = !this.type.includes(typeName);
      if (isChecked) {
        this.type.push(typeName);
      } else {
        const typeIndex = this.type.indexOf(typeName);
        if (typeIndex !== -1) {
          this.type.splice(typeIndex, 1);
        }
      }
    },
    openSeatsDropdown() {
      this.seatsOpen = true;
      document.addEventListener("click", this.closeSeatsDropdownOnClickOutside);
    },
    selectNumberSeats(option) {
      this.numberSeats = option;
      this.seatsOpen = false;
    },
    closeSeatsDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".seats");
      if (!dropdownElement.contains(event.target)) {
        this.seatsOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },

    fetchModels() {
      if (!this.selectedMark) {
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `/car/model?mark_id=${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      http
        .get(apiUrl)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data.data;
          if (data) {
            this.models = data;
            console.log(this.models);
            this.isModelSelectDisabled = false;
          } else {
            console.error("Некорректный формат ответа API.");
            this.isModelSelectDisabled = true; // Disable the model select on error
          }
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error.message);
          this.isModelSelectDisabled = true; // Disable the model select on error
        });
    },
    selectCar(condition) {
      this.selectedCar = condition;
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        1;
        this.isRadioNewSelected = true;
        this.isCheckedRegister = false;
        this.isCheckedEmploy = false;
        this.isCheckedDemon = false;
        this.isCheckedClassic = false;
      } else {
        this.isRadioNewSelected = false;
      }
    },
  },
  mounted() {
    this.selectedMark = localStorage.getItem("mark");

    http
      .get("/car/marks")
      .then((response) => {
        const data = response.data.data;
        if (data) {
          this.makes = data;
        } else {
          console.error("Некорректный формат ответа API.");
        }
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error.message);
      });
  },
};
</script>
<style scoped>
input[type="radio"] {
  /* Убираем стандартные стили радиокнопок */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Задаем размер радиокнопки */
  width: 20px;
  height: 20px;
  /* Создаем круглую форму */
  border-radius: 50%;
  border: 1px solid gray;
  /* Позиционируем радиокнопку относительно базовой линии текста */
  vertical-align: middle;
}

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
