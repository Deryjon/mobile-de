<template>
  <div class="">
    <div class="basic-add" v-if="basicAdd">
      <div class="flex items-center gap-[20px]">
        <input type="file" ref="fileInput" accept="image/*" multiple style="display: none" @change="handleFileChange" />
        <button @click="openFileInput" class="bg-blue-500 p-[10px] rounded-[8px]">
          + Add image
        </button>
        <div class="file-preview flex flex-wrap w-[600px] gap-[10px]">
          <div v-for="(file, index) in selectedFiles" :key="index" class="file-item relative">
            <div class="w-[190px] h-[200px]">
              <img class="w-full h-full" :src="file.url" :alt="file.name" />
            </div>
            <button @click="removeFile(index)" class="absolute top-0 right-0 w-[20px]">
              X
            </button>
          </div>
          <span v-if="selectedFiles.length === 0">No Images</span>
        </div>
      </div>
      <div class="video-link mt-[30px]">
        <h2 class="text-sm lg:text-[14px]">Link on Video</h2>
        <input type="text"
          class="mark-select bg-[#fff] py-[10px] px-[10px] rounded-[10px] w-[500px] mt-[10px] lg:text-[12px]"
          v-model="linkVideo" />
      </div>
      <div class="flex gap-[20px] mt-[30px]">
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">
              {{ $t("message.selects.mark") }}
            </h2>
            <select
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedMark" @change="fetchModels()">
              <option value="" selected>Beliebig</option>
              <optgroup>
                <option v-for="make in makes" :key="make" :value="make.car_make_name">
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
            :disabled="isModelSelectDisabled" v-model="selectedModel">
            <option :value="selectedModel" selected>
              {{ selectedModel }}
            </option>
            <option v-for="model in models" :key="model" :value="model.car_model_name" class="">
              {{ model.car_model_name }}
            </option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">Variant</h2>
            <input
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              placeholder="e.g. GTI..." v-model="inputVariant" />
          </div>
        </div>
      </div>

      <div class="filter-cars flex flex-wrap gap-[50px] mt-[0px] lg:mt-[50px]">
        <!-- cabrio -->
        <label class="custom-checkbox p-[0] gap-[10px] flex items-center h-[40px] w-[230px]">
          <input type="radio" v-model="selectedCar" :class="{
            'bg-transparent': selectedCar !== 'Cabrio / Roadster',
            'bg-orange': selectedCar === 'Cabrio / Roadster',
          }" @click="selectCar('Cabrio / Roadster')" />
          <img src="../../../assets/icons/cabriolet-icon.svg" alt="" class="w-[90px] pt-[20px]" />
          <span class="text-sm"> Cabrio / Roadster</span>
        </label>
        <!-- estate -->
        <label class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[230px]">
          <input @click="selectCar('Estate Car')" type="radio" v-model="selectedCar" :class="{
            'bg-transparent': selectedCar !== 'Estate Car',
            'bg-orange': selectedCar === 'Estate Car',
          }" />
          <img src="../../../assets/icons/estate-car-icon.svg" alt="" class="w-24 pt-[20px]" />
          <span class="text-sm">Estate Car</span>
        </label>

        <!-- saloon -->
        <label class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[230px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Saloon')" :class="{
            'bg-transparent': selectedCar !== 'Saloon',
            'bg-orange': selectedCar === 'Saloon',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../assets/icons/saloon-car-icon.svg" alt="" class="w-24 pt-[20px]" />
          <span class="text-sm">Saloon</span>
        </label>
        <!-- small -->
        <label class="custom-checkbox p-[0] flex gap-[10px] items-center h-10 w-[210px]20px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Small Car')" :class="{
            'bg-transparent': selectedCar !== 'Small Car',
            'bg-orange': selectedCar === 'Small Car',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../assets/icons/small-car-icon.svg" alt="" class="w-[75px] pt-[10px]" />
          <span class="text-sm">Small Car</span>
        </label>
        <!-- sports -->
        <label class="custom-checkbox p-[0] gap-[10px] flex items-center h-8 w-[280px]20px]">
          <input type="radio" v-model="selectedCar" @click="selectCar(' Sports Car / Coupe')" :class="{
            'bg-transparent': selectedCar !== ' Sports Car / Coupe',
            'bg-orange': selectedCar === ' Sports Car / Coupe',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../assets/icons/sports-car-icon.svg" alt="" class="w-28 pt-[18px]" />
          <span class="text-sm"> Sports Car / Coupe</span>
        </label>
        <!-- off-road -->
        <label class="custom-checkbox p-[0] flex gap-4 items-center h-10 w-[230px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Van / Minibus')" :class="{
            'bg-transparent': selectedCar !== 'Van / Minibus',
            'bg-orange': selectedCar === 'Van / Minibus',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../assets/icons/car-minibus-icon.svg" alt="" class="w-[70px] pt-[8px]" />
          <span class="text-sm">Van / Minibus</span>
        </label>
        <!-- off-road -->
        <label class="custom-checkbox p-[0] gap-[10px] flex items-center h-10 w-[350px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('SUV / Off-road Vehicle / Pickup Truck')" :class="{
            'bg-transparent':
              selectedCar !== 'SUV / Off-road Vehicle / Pickup Truck',
            'bg-orange':
              selectedCar === 'SUV / Off-road Vehicle / Pickup Truck',
          }" class="form-checkbox h-7 w-7 text-indigo-600" />

          <img src="../../../assets/icons/car-suv-icon.svg" alt="" class="w-20 pt-[18px]" />
          <span class="text-sm">SUV / Off-road Vehicle / Pickup Truck</span>
        </label>
      </div>
      <div class="flex gap-[30px]">
        <div class="seats dropdown-container mt-[20px]">
          <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="numberSeats" @focus="openSeatsDropdown" @blur="closeSeatsDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openSeatsDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="seatsOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
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
            v-model="numDoor">
            <option value="">Any</option>
            <option value="2/3">2/3</option>
            <option value="3/5">3/5</option>
            <option value="6/7">6/7</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
        </div>
        <!-- sliding-door -->
        <div class="seats relative mt-[28px]">
          <h2 class="text-sm lg:text-[14px]">Sliding door</h2>
          <select
            class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            v-model="slidingDoor">
            <option value="any">Any</option>
            <option value="Sliding door right">Sliding door right</option>
            <option value="Sliding door left">Sliding door left</option>
            <option value="Sliding door both-sided">
              Sliding door both-sided
            </option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[14px]">Type and condition</h3>
        <div class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[244px] mt-[10px] mb-[10px]">
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Any',
              'bg-orange': selectedCondition === 'Any',
            }" class="ml-10px" @click="selectCondition('Any')" />
            <span class="ml-[10px] text-[14px]">Any</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'New',
              'bg-orange': selectedCondition === 'New',
            }" @click="selectCondition('New')" />
            <span class="ml-[10px] text-[14px]">New</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Used',
              'bg-orange': selectedCondition === 'Used',
            }" @click="selectCondition('Used')" />
            <span class="ml-[10px] text-[14px]">Used</span>
          </label>
        </div>
        <div class="conditions flex flex-wrap gap-x-[0px] lg:gap-x-[140px] mt-[20px] lg:mt-[30px] xl:mt-[20px]">
          <label class="gap-2 flex items-center h-10 w-[140px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Pre-Registration',
              'bg-orange': selectedType === 'Pre-Registration',
            }" @click="selectType('Pre-Registration')" />

            <span class="text-sm">Pre-Registration</span>
          </label>
          <label class="gap-2 flex items-center h-10 w-[130px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Employees Car',
              'bg-orange': selectedType === 'Employees Car',
            }" @click="selectType('Employees Car')" />

            <span class="text-sm">Employee's Car</span>
          </label>
          <label class="gap-2 flex items-center h-10 w-[130px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Classic Vehicle',
              'bg-orange': selectedType === 'Classic Vehicle',
            }" @click="selectType('Classic Vehicle')" />

            <span class="text-sm">Classic Vehicle</span>
          </label>
          <label class="gap-2 flex items-center h-10 w-[190px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Demonstration Vehicle',
              'bg-orange': selectedType === 'Demonstration Vehicle',
            }" @click="selectType('Demonstration Vehicle')" />

            <span class="text-sm">Demonstration Vehicle</span>
          </label>
        </div>
      </div>
      <div class="lg:mt-[-10px] xl:mt-[30px]">
        <h2 class="mt-2 text-sm lg:text-[14px]">Payment type</h2>
        <div class="Kaufen_div mt-[10px]">
          <button class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1" :class="{ 'active-Kaufen': activeTab === 'buy' }">
            {{ $t("message.btn.buy") }}
          </button>
          <button class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2" :class="{ 'active-Kaufen': activeTab === 'sell' }">
            {{ $t("message.btn.sell") }}
          </button>
        </div>
      </div>
      <div class="price-tab flex items-center gap-[21px] lg:gap-[30px]">
        <div class="price dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="price" @focus="openPriceDropdown" @blur="closePriceDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openPriceDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="priceOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
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
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="inputValue" @focus="openDropdown" @input="filterOptions"
              @blur="closeDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)" class="">
              {{ option }}
            </li>
            <li @click="selectOption('1989')">1989</li>
            <li @click="selectOption('1988')">1988</li>
            <li @click="selectOption('1987')">1987</li>
            <li @click="selectOption('1986')">1986</li>
            <li @click="selectOption('1985')">1985</li>
            <li @click="selectOption('1984')">1984</li>
            <li @click="selectOption('1983')">1983</li>
            <li @click="selectOption('1982')">1982</li>
            <li @click="selectOption('1981')">1981</li>
            <li @click="selectOption('1980')">1980</li>
            <li @click="selectOption('1979')">1979</li>
            <li @click="selectOption('1978')">1978</li>
            <li @click="selectOption('1977')">1977</li>
            <li @click="selectOption('1976')">1976</li>
            <li @click="selectOption('1975')">1975</li>
            <li @click="selectOption('1974')">1974</li>
            <li @click="selectOption('1973')">1973</li>
            <li @click="selectOption('1972')">1972</li>
            <li @click="selectOption('1971')">1971</li>
            <li @click="selectOption('1970')">1970</li>
            <li @click="selectOption('1969')">1969</li>
            <li @click="selectOption('1968')">1968</li>
            <li @click="selectOption('1967')">1967</li>
            <li @click="selectOption('1966')">1966</li>
            <li @click="selectOption('1965')">1965</li>
            <li @click="selectOption('1964')">1964</li>
            <li @click="selectOption('1963')">1963</li>
            <li @click="selectOption('1962')">1962</li>
            <li @click="selectOption('1961')">1961</li>
            <li @click="selectOption('1960')">1960</li>
            <li @click="selectOption('1959')">1959</li>
            <li @click="selectOption('1958')">1958</li>
            <li @click="selectOption('1957')">1957</li>
            <li @click="selectOption('1956')">1956</li>
            <li @click="selectOption('1955')">1955</li>
            <li @click="selectOption('1954')">1954</li>
            <li @click="selectOption('1953')">1953</li>
            <li @click="selectOption('1952')">1952</li>
            <li @click="selectOption('1951')">1951</li>
            <li @click="selectOption('1950')">1950</li>
            <li @click="selectOption('1949')">1949</li>
            <li @click="selectOption('1948')">1948</li>
            <li @click="selectOption('1947')">1947</li>
            <li @click="selectOption('1946')">1946</li>
            <li @click="selectOption('1945')">1945</li>
            <li @click="selectOption('1944')">1944</li>
            <li @click="selectOption('1943')">1943</li>
            <li @click="selectOption('1942')">1942</li>
            <li @click="selectOption('1941')">1941</li>
            <li @click="selectOption('1939')">1939</li>
            <li @click="selectOption('1938')">1938</li>
            <li @click="selectOption('1937')">1937</li>
            <li @click="selectOption('1936')">1936</li>
            <li @click="selectOption('1935')">1935</li>
            <li @click="selectOption('1934')">1934</li>
            <li @click="selectOption('1933')">1933</li>
            <li @click="selectOption('1932')">1932</li>
            <li @click="selectOption('1931')">1931</li>
            <li @click="selectOption('1930')">1930</li>
            <li @click="selectOption('1929')">1929</li>
            <li @click="selectOption('1928')">1928</li>
            <li @click="selectOption('1927')">1927</li>
            <li @click="selectOption('1926')">1926</li>
            <li @click="selectOption('1925')">1925</li>
            <li @click="selectOption('1924')">1924</li>
            <li @click="selectOption('1923')">1923</li>
            <li @click="selectOption('1922')">1922</li>
            <li @click="selectOption('1921')">1921</li>
            <li @click="selectOption('1920')">1920</li>
            <li @click="selectOption('1919')">1919</li>
            <li @click="selectOption('1918')">1918</li>
            <li @click="selectOption('1917')">1917</li>
            <li @click="selectOption('1916')">1916</li>
            <li @click="selectOption('1915')">1915</li>
            <li @click="selectOption('1914')">1914</li>
            <li @click="selectOption('1913')">1913</li>
            <li @click="selectOption('1912')">1912</li>
            <li @click="selectOption('1911')">1911</li>
            <li @click="selectOption('1910')">1910</li>
            <li @click="selectOption('1909')">1909</li>
            <li @click="selectOption('1908')">1908</li>
            <li @click="selectOption('1907')">1907</li>
            <li @click="selectOption('1906')">1906</li>
            <li @click="selectOption('1905')">1905</li>
            <li @click="selectOption('1904')">1904</li>
            <li @click="selectOption('1903')">1903</li>
            <li @click="selectOption('1902')">1902</li>
            <li @click="selectOption('1901')">1901</li>
          </ul>
        </div>
        <div class="kilometer dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">
            {{ $t("message.selects.kilometr") }}
          </h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="inputKilometer" @focus="openKilmeterDropdown" @input="filterOptions"
              @blur="closeKilometerDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openKilmeterDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenKilometer" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li data-key="5000" @click="selectKilometer('5000')">5.000 km</li>
            <li data-key="10000" @click="selectKilometer('10000')">
              10.000 km
            </li>
            <li data-key="20000" @click="selectKilometer('20000')">
              20.000 km
            </li>
            <li data-key="30000" @click="selectKilometer('30000')">
              30.000 km
            </li>
            <li data-key="40000" @click="selectKilometer('40000')">
              40.000 km
            </li>
            <li data-key="50000" @click="selectKilometer('50000')">
              50.000 km
            </li>
            <li data-key="60000" @click="selectKilometer('60000')">
              60.000 km
            </li>
            <li data-key="70000" @click="selectKilometer('70000')">
              70.000 km
            </li>
            <li data-key="80000" @click="selectKilometer('80000')">
              80.000 km
            </li>
            <li data-key="90000" @click="selectKilometer('90000')">
              90.000 km
            </li>
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
      <div class="valid-until mt-[40px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">HU valid until</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="huValid">
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
            v-model="preOwners">
            <option value="1">Up to 1</option>
            <option value="2">Up to 2</option>
            <option value="3">Up to 3</option>
            <option value="4">Up to 4</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <label class="custom-checkbox flex items-center h-10 w-[160px] mt-[25px]">
          <input type="checkbox" v-model="isCheckedHistory" @click="toggleShowCheckbox"
            class="form-checkbox h-5 w-5 text-indigo-600" />
          <svg class="icon mt-[10px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
            <!-- Insert your SVG arrow icon here -->
            <path v-if="isCheckedHistory" fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>

          <span class="text-sm p]b-[20px">Full Service History</span>
        </label>
        <label class="custom-checkbox flex items-center h-10 w-[130px] mt-[25px]">
          <input type="checkbox" v-model="isCheckedRoad" @click="toggleShowCheckbox"
            class="form-checkbox h-5 w-5 text-indigo-600" />
          <svg class="icon mt-[10px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
            <!-- Insert your SVG arrow icon here -->
            <path v-if="isCheckedRoad" fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>

          <span class="text-sm">Roadworthy</span>
        </label>
      </div>
      <div class="valid-until mt-[20px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">Country</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedCountry">
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
        </div>
        <div class="marke_select_div relative mt-2">
          <h2 class="text-sm lg:text-[14px]">City / Post code</h2>
          <input
            class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
            type="text" pattern="\d*" v-model="zipCode" />
        </div>
        <!--  -->
        <div class="radius dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">Radius</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="radius" @focus="openRadiusDropdown" @input="filterOptions"
              @blur="closeRadiusDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openRadiusDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenRadius" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li data-key="10" @click="selectRadius('10')">10 km</li>
            <li data-key="20" @click="selectRadius('20')">20 km</li>
            <li data-key="50" @click="selectRadius('50')">50 km</li>
            <li data-key="100" @click="selectRadius('100')">100 km</li>
            <li data-key="200" @click="selectRadius('200')">200 km</li>
            <li data-key="500" @click="selectRadius('500')">500 km</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fuel-add">
      <div class="mt-[10px]">
        <h3 class="text-[16px]">Fuel Type</h3>
        <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
          <!-- cabrio -->
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Diesel',
              'bg-orange': selectedFuel === 'Diesel',
            }" @click="selectFuel('Diesel')" />

            Diesel
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (diesel/electric)',
              'bg-orange': selectedFuel === 'Hybrid (diesel/electric)',
            }" @click="selectFuel('Hybrid (diesel/electric)')" />

            Hybrid (diesel/electric)
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Natural Gas',
              'bg-orange': selectedFuel === 'Natural Gas',
            }" @click="selectFuel('Natural Gas')" />

            Natural Gas
          </label>
          <label class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px] p-0">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Other',
              'bg-orange': selectedFuel === 'Other',
            }" @click="selectFuel('Other')" />

            Other
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Petrol',
              'bg-orange': selectedFuel === 'Petrol',
            }" @click="selectFuel('Petrol')" />

            Petrol
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Electric',
              'bg-orange': selectedFuel === 'Electric',
            }" @click="selectFuel('Electric')" />

            Electric
          </label>
          <!-- estate -->
          <label class="custom-checkbox p-0 flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hydrogen',
              'bg-orange': selectedFuel === 'Hydrogen',
            }" @click="selectFuel('Hydrogen')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Hydrogen</span>
          </label>

          <!-- saloon -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[200px] pb-4">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Plug-in hybrid',
              'bg-orange': selectedFuel === 'Plug-in hybrid',
            }" @click="selectFuel('Plug-in hybrid')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Plug-in hybrid</span>
          </label>
          <!-- small -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (petrol/electric)',
              'bg-orange': selectedFuel === 'Hybrid (petrol/electric)',
            }" @click="selectFuel('Hybrid (petrol/electric)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Hybrid (petrol/electric)</span>
          </label>
          <!-- sports -->
          <label class="custom-checkbox p-0 flex gap-3 items-center h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'LPG',
              'bg-orange': selectedFuel === 'LPG',
            }" @click="selectFuel('LPG')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">LPG</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[23px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Ethanol (FFV, E85, etc.)',
              'bg-orange': selectedFuel === 'Ethanol (FFV, E85, etc.)',
            }" @click="selectFuel('Ethanol (FFV, E85, etc.)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Ethanol (FFV, E85, etc.)</span>
          </label>
        </div>
      </div>
      <div class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[30px]">
        <div class="power dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">Power</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="power" @focus="openPowerDropdown" @input="filterOptions"
              @blur="closePowerDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openPowerDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenPower" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
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
        <div>
          <h2 class="text-sm lg:text-[14px] mt-2">Cubic capacity</h2>
          <div class="cubic dropdown-container">
            <div class="input-container flex relative mt-[10px]">
              <input type="from"
                class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
                placeholder="from" v-model="cubic" @focus="openCubicDropdown" @input="filterOptions"
                @blur="closeCubicDropdown" />

              <div
                class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                @click="openCubicDropdown">
                <span
                  class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
              </div>
            </div>
            <ul v-if="isOpenCubic" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
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
        <label for="condition-any" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedPower" :class="{
            'bg-transparent': selectedPower !== 'Hp',
            'bg-orange': selectedPower === 'Hp',
          }" @click="selectPower('Hp')" />
          <span class="ml-[10px]">Hp</span>
        </label>
        <label for="condition-any" @click="selectPower('kW')" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedPower" :class="{
            'bg-transparent': selectedPower !== 'kW',
            'bg-orange': selectedPower === 'kW',
          }" />
          <span class="ml-[10px]">kW</span>
        </label>
      </div>

      <div class="flex gap-[40px] lg:gap-[100px]">
        <div class="
			">
          <h3 class="mt-[20px] lg:mt-[60px]">Transmission</h3>
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[210px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent':
                selectedTransmision !== 'Automatic transmissio',
              'bg-orange': selectedTransmision === 'Automatic transmissio',
            }" @click="selectTransmision('Automatic transmissio')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Automatic transmission</span>
          </label>
        </div>
        <div class="mt-[43px] lg:mt-[84px]">
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Semi-automatic',
              'bg-orange': selectedTransmision === 'Semi-automatic',
            }" @click="selectTransmision('Semi-automatic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Semi-automatic</span>
          </label>
        </div>
        <div class="mt-[43px] lg:mt-[84px]">
          <label class="custom-checkbox flex gap-[10px] p-0 items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Manual gearbox',
              'bg-orange': selectedTransmision === 'Manual gearbox',
            }" @click="selectTransmision('Manual gearbox')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Manual gearbox </span>
          </label>
        </div>
      </div>
      <div class="valid-until mt-[30px] lg:mt-[30px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-sm lg:text-[14px]">
            Fuel consumption (combined) up to
          </h2>
          <select
            class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] mt-[10px] lg:text-[12px]"
            v-model="consumptionFuel">
            <option value="any" selected>Any</option>
            <option value="new">New</option>
            <option value="18">18</option>
            <option value="12">12</option>
            <option value="9">9</option>
            <option value="6">6</option>
            <option value="3">3</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-[14px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Emissions Sticker</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="stickerEmission">
            <option value="any" selected>Any</option>
            <option value="1">Up to 1</option>
            <option value="2">Up to 2</option>
            <option value="3">Up to 3</option>
            <option value="4">Up to 4</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-[20px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Emission Class</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="classEmision">
            <option value="any" selected>Any</option>
            <option value="1">Up to 1</option>
            <option value="2">Up to 2</option>
            <option value="3">Up to 3</option>
            <option value="4">Up to 4</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
          <input type="checkbox" v-model="isCheckedParticulate" @click="toggleShowCheckbox"
            class="form-checkbox h-5 w-5 text-indigo-600" />
          <svg class="icon mt-[10px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
            <!-- Insert your SVG arrow icon here -->
            <path v-if="isCheckedParticulate" fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>

          <span class="text-sm">Particulate filter </span>
        </label>
      </div>
      <div class="line mt-[50px]"></div>
      <div class="mt-[10px]">
        <h3 class="text-[16px]">Exterior Colour</h3>
        <div class="filter-cars flex flex-wrap gap-x-[20px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Beige',
              'bg-orange': selectedExteriorColour === 'Beige',
            }" @click="selectExteriorColour('Beige')" />

            Beige
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Brown',
              'bg-orange': selectedExteriorColour === 'Brown',
            }" @click="selectExteriorColour('Brown')" />

            Brown
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Gold',
              'bg-orange': selectedExteriorColour === 'Gold',
            }" @click="selectExteriorColour('Gold')" />

            Gold
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Green',
              'bg-orange': selectedExteriorColour === 'Green',
            }" @click="selectExteriorColour('Green')" />

            Green
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Red',
              'bg-orange': selectedExteriorColour === 'Red',
            }" @click="selectExteriorColour('Red')" />

            Red
          </label>
          <label
            class="custom-checkbox custom-silver flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Silver',
              'bg-orange': selectedExteriorColour === 'Silver',
            }" @click="selectExteriorColour('Silver')" />

            Silver
          </label>
          <!-- estate -->
          <label class="custom-checkbox custom-white flex gap-4 text-[14px] items-center h-10 w-[100px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'White',
              'bg-orange': selectedExteriorColour === 'White',
            }" @click="selectExteriorColour('White')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">White</span>
          </label>

          <!-- saloon -->
          <label class="custom-checkbox custom-blue flex gap-4 items-center h-10 w-[120px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Blue',
              'bg-orange': selectedExteriorColour === 'Blue',
            }" @click="selectExteriorColour('Blue')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Blue</span>
          </label>
          <!-- small -->
          <label class="custom-checkbox custom-yellow flex gap-4 items-center h-10 w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Yellow',
              'bg-orange': selectedExteriorColour === 'Yellow',
            }" @click="selectExteriorColour('Yellow')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Yellow</span>
          </label>
          <!-- sports -->
          <label class="custom-checkbox custom-grey flex gap-3 items-center h-10 w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Grey',
              'bg-orange': selectedExteriorColour === 'Grey',
            }" @click="selectExteriorColour('Grey')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Grey</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-orange flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Orange',
              'bg-orange': selectedExteriorColour === 'Orange',
            }" @click="selectExteriorColour('Orange')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Orange</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-black flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Black',
              'bg-orange': selectedExteriorColour === 'Black',
            }" @click="selectExteriorColour('Black')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Black</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-purple flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Purple',
              'bg-orange': selectedExteriorColour === 'Purple',
            }" @click="selectExteriorColour('Purple')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Purple</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-metallic flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Metallic',
              'bg-orange': selectedExteriorColour === 'Metallic',
            }" @click="selectExteriorColour('Metallic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Metallic</span>
          </label>
        </div>
      </div>
      <div class="condition mt-[20px]">
        <h3>Trailer coupling</h3>
        <div class="radios-type flex gap-x-[10px] lg:gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Fix, detachable or swiveling',
              'bg-orange': selectedTrailer === 'Fix, detachable or swiveling',
            }" @click="selectTrailer('Fix, detachable or swiveling')" />
            <span class="ml-[10px]">Fix, detachable or swiveling</span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Detachable or swiveling',
              'bg-orange': selectedTrailer === 'Detachable or swiveling',
            }" @click="selectTrailer('Detachable or swiveling')" />
            <span class="ml-[10px]">Detachable or swiveling</span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Swiveling',
              'bg-orange': selectedTrailer === 'Swiveling',
            }" @click="selectTrailer('Swiveling')" />
            <span class="ml-[10px]">Swiveling</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <h3>Parking sensors</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Rear')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Rear',
              'bg-orange': selectedParking === 'Rear',
            }" />
            Rear
          </label>
          <label class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Front')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Front',
              'bg-orange': selectedParking === 'Front',
            }" />

            Front
          </label>
          <label class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Camera')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Camera',
              'bg-orange': selectedParking === 'Camera',
            }" />

            Camera
          </label>
          <label class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('360° camera')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== '360° camera',
              'bg-orange': selectedParking === '360° camera',
            }" />

            360° camera
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Self-steering systems')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Self-steering systems',
              'bg-orange': selectedParking === 'Self-steering systems',
            }" />

            Self-steering systems
          </label>
        </div>
      </div>
      <div class="condition">
        <h3>Cruise control</h3>
        <div class="radios-type flex gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Cruise control',
              'bg-orange': selectedCruise === 'Cruise control',
            }" @click="selectCruise('Cruise control')" />
            <span class="ml-[10px]">Cruise control</span>
          </label>
          <label>
            <input type="radio" id="condition-adap" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Adaptive Cruise Control',
              'bg-orange': selectedCruise === 'Adaptive Cruise Control',
            }" @click="selectCruise('Adaptive Cruise Control')" />
            <span class="ml-[10px]">Adaptive Cruise Control</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <h3>Others</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedABS" @click="toggleShowCheckboxOthers(0, 'ABS')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedABS" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            ABS
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergency"
              @click="toggleShowCheckboxOthers(1, 'Emergency brake assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergency" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Emergency brake assist
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCentral"
              @click="toggleShowCheckboxOthers(2, 'Keyless central locking')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCentral" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Keyless central locking
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSpeed"
              @click="toggleShowCheckboxOthers(3, '	Speed limit control system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSpeed" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Speed limit control system
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAdaptive"
              @click="toggleShowCheckboxOthers(4, 'Adaptive cornering lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAdaptive" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Adaptive cornering lights
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTyre" @click="toggleShowCheckboxOthers(5, 'Emergency tyre')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTyre" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Emergency tyre
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLastChanges"
              @click="toggleShowCheckboxOthers(6, 'Lane change assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLastChanges" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Lane change assist
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportsPackage"
              @click="toggleShowCheckboxOthers(7, 'Sports package')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportsPackage" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Sports package
          </label>
        </div>
      </div>
    </div>
    <div class="interior">
      <div class="mt-[30px]">
        <h3>Interior Colour</h3>
        <div class="filter-cars flex flex-wrap gap-x-[20px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox p-0 custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Beige')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Beige',
              'bg-orange': selectedInteriorColour === 'Beige',
            }" />

            Beige
          </label>
          <label
            class="custom-checkbox p-0 custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Brown')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Brown',
              'bg-orange': selectedInteriorColour === 'Brown',
            }" />

            Brown
          </label>
          <label class="custom-checkbox p-0 custom-grey flex gap-3 items-center h-10 w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Grey')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Grey',
              'bg-orange': selectedInteriorColour === 'Grey',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Grey</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 custom-black flex gap-4 items-center h-10 w-[100px] pb-[23px]">
            <input type="radio" @click="selectInteriorColour('Black')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Black',
              'bg-orange': selectedInteriorColour === 'Black',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Black</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 custom-purple flex gap-4 items-center h-10 w-[100px] pb-[23px]">
            <input type="radio" @click="selectInteriorColour('Other')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Other',
              'bg-orange': selectedInteriorColour === 'Other',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Other</span>
          </label>
        </div>
      </div>
      <div class="mt-[20px]">
        <h3>Interior material</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[20px]">
          <!-- cabrio -->
          <label class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAlcantra" @click="toggleShowCheckboxMaterial(0, 'Alcantra')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAlcantra" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Alcantra
          </label>
          <label class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCloth" @click="toggleShowCheckboxMaterial(1, 'Cloth')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCloth" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Cloth
          </label>
          <label class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPartLeather"
              @click="toggleShowCheckboxMaterial(2, 'Part leather')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPartLeather" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Part leather
          </label>
          <label class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedVelour" @click="toggleShowCheckboxMaterial(3, 'Velour')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedVelour" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Velour
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFullLeather"
              @click="toggleShowCheckboxMaterial(4, 'Full Leather')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFullLeather" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Full Leather
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedOther" @click="toggleShowCheckboxMaterial(5, 'Other')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedOther" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Other
          </label>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3>Airbags</h3>
        <div class="radios-type flex flex-wrap gap-[30px] mt-[10px] xl:mt-[20px]">
          <label for="driver-airbag">
            <input type="radio" id="driver-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Driver Airbag',
              'bg-orange': selectedAirbag === 'Driver Airbag',
            }" @click="selectAirbag('Driver Airbag')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Driver Airbag
            </span>
          </label>
          <label for="front-airbag">
            <input type="radio" id="front-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Front Airbags',
              'bg-orange': selectedAirbag === 'Front Airbags',
            }" @click="selectAirbag('Front Airbags')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front Airbags</span>
          </label>

          <label for="side-airbag">
            <input type="radio" id="side-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Front and Side Airbags',
              'bg-orange': selectedAirbag === 'Front and Side Airbags',
            }" @click="selectAirbag('Front and Side Airbags')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front and Side Airbags
            </span>
          </label>
          <label for="more-airbag">
            <input type="radio" id="more-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Front and Side and More Airbags',
              'bg-orange': selectedAirbag === 'Front and Side and More Airbags',
            }" @click="selectAirbag('Front and Side and More Airbags')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front and Side and More Airbags
            </span>
          </label>
        </div>
      </div>
      <div class="condition mt-[40px]">
        <h3 class="text-[16px]">Air conditioning</h3>
        <div class="radios-type flex flex-wrap gap-x-[20px] gap-y-[30px] mt-[20px]">
          <label class="w-[250px]" for="manual">
            <input type="radio" id="manual" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Manual or automatic climatisation',
              'bg-orange': selectedConditioning === 'Manual or automatic climatisation',
            }" @click="selectAirConditioning('Manual or automatic climatisation')" />
            <span class="ml-[10px] text-[14px]">Manual or automatic climatisation
            </span>
          </label>
          <label class="w-[250px]" for="auto-climat">
            <input type="radio" id="auto-climat" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 2 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 2 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 2 zones')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 2 zones
            </span>
          </label>

          <label class="w-[250px]" for="auto2">
            <input type="radio" id="auto2" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 4 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 4 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 4 zones')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 4 zones</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'No climatisation',
              'bg-orange': selectedConditioning === 'No climatisation',
            }" @click="selectAirConditioning('No climatisation')" />
            <span class="ml-[10px] text-[14px]">No climatisation</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic air conditioning',
              'bg-orange': selectedConditioning === 'Automatic air conditioning',
            }" @click="selectAirConditioning('Automatic air conditioning')" />
            <span class="ml-[10px] text-[14px]">Automatic air conditioning
            </span>
          </label>
          <label class="w-[250px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 3 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 3 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 3 zones')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 3 zones
            </span>
          </label>
        </div>
      </div>
      <div class="mt-[40px]">
        <h3 class="text-[16px]">Extras</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] gap-y-[8px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAlarmSystem" @click="toggleShowCheckboxExtras(0, 'Alarm System')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAlarmSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Alarm System
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDisable"
              @click="toggleShowCheckboxExtras(1, 'Disabled accessible')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDisable" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Disabled accessible
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeated"
              @click="toggleShowCheckboxExtras(2, 'Heated steering whee')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeated" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Heated steering whee
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSeat" @click="toggleShowCheckboxExtras(3, 'Seat ventilation')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSeat" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Seat ventilation
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAmbient" @click="toggleShowCheckboxExtras(4, 'Ambient lighting')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAmbient" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Ambient lighting
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectric" @click="
              toggleShowCheckboxExtras(5, 'Electric backseat adjustment')
              " />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectric" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Electric backseat adjustment
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedInduction" @click="
              toggleShowCheckboxExtras(
                6,
                'Induction charging for smartphones'
              )
              " />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedInduction" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Induction charging for smartphones
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSki" @click="toggleShowCheckboxExtras(7, 'Ski bag')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSki" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Ski bag
          </label>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[16px]">Vendor</h3>
        <div class="radios-type flex gap-[40px] mt-[20px]">
          <label>
            <input type="radio" id="vendor-private" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Private',
              'bg-orange': selectedVendor === 'Private',
            }" @click="selectVendor('Private')" />
            <span class="ml-[10px] text-[14px]">Private seller</span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Dealer',
              'bg-orange': selectedVendor === 'Dealer',
            }" @click="selectVendor('Dealer')" />
            <span class="ml-[10px] text-[14px]">Dealer </span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Company',
              'bg-orange': selectedVendor === 'Company',
            }" @click="selectVendor('Company')" />
            <span class="ml-[10px] text-[14px]">Company vehicles</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDiscount" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDiscount" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Discount offers
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedNon" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedNon" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Non-smoker vehicle
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTaxi" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTaxi" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Taxi
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedVAT" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedVAT" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            VAT reclaimable
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWarranty" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWarranty" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Warranty
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEnvironmental" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEnvironmental" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            With environmental bonus
          </label>
        </div>
      </div>
      <div class="flex items-center gap-[50px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Damaged Vehicles</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="damageVehicle">
            <option value="any" selected>Any</option>
            <option value="not">Do not show</option>
            <option value="only">Only show</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute lg:left-[180px] xl:right-2 bottom-4"></span>
        </div>
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Commercial, Export/Import</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="exportCommercial">
            <option value="any" selected>Any</option>
            <option value="not">Do not show</option>
            <option value="only">Only show</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute lg:left-[180px] xl:right-2 bottom-4"></span>
        </div>
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Approved Used Programme</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="approveUsed">
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
          <span class="arrow w-[7px] h-[7px] absolute lg:left-[180px] xl:right-2 bottom-4"></span>
        </div>
      </div>
      <div class="">
        <h2 class="mt-[30px] text-[16px]">Description</h2>
        <textarea class="bg-[#ccc] mt-[10px] p-[20px]" name="" id="" cols="40" rows="5" placeholder="Description "
          v-model="descriptionText">{{ dataAd.car_description }}</textarea>
      </div>
      <div>
        <div class="flex gap-[30px] justify-end">
          <button class="bg-red-500 rounded-[8px] p-[10px]" @click="cancelAdCar">
            Cancel
          </button>
          <button @click="editAddCars" class="bg-blue-500 rounded-[8px] p-[10px]">
            Edit Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import http from "../../../axios.config";
import { useTabsStore } from '../../../store/storeAd';

export default {
  setup() {
    const isCheckedAdsImg = ref(false);
    const isCheckedVideo = ref(false);
    const isCheckedDiscount = ref(false);
    const isCheckedNon = ref(false);
    const isCheckedTaxi = ref(false);
    const isCheckedVAT = ref(false);
    const isCheckedWarranty = ref(false);
    const isCheckedEnvironmental = ref(false);
    const toggleShowCheckboxAds = (index) => {
      for (let i = 0; i < isCheckedAdsImg.length; i++) {
        if (i !== index) {
          isCheckedAdsImg[i] = false;
        }
      }
      isCheckedAdsImg[index] = true;
    };

    return {
      isCheckedAdsImg,
      isCheckedVideo,
      isCheckedDiscount,
      isCheckedNon,
      isCheckedTaxi,
      isCheckedVAT,
      isCheckedWarranty,
      isCheckedEnvironmental,
      toggleShowCheckboxAds,
    };
  },
  data() {
    return {
      basicAdd: true,
      makes: [],
      models: [],
      selectedMark: "",
      selectedCar: "",
      selectedCondition: "Any",
      selectedConditioning: "",
      selectedInteriorColour: "",
      selectedCruise: "Any",
      descriptionText: "",
      seatsOpen: false,
      isNewSelected: false,
      damageVehicle: "",
      exportCommercial: "",
      approveUsed: "",
      isUsedSelected: false,
      selectedVendor: "Any",
      isRadioNewSelected: false,
      isCheckedAny: true,
      isCheckedFromThree: false,
      isCheckedfromFour: false,
      isCheckedFive: false,
      rating: [],
      numDoor: "",
      slidingDoor: "",
      isOpenKilometer: "",
      inputKilometer: "",
      radius: "",
      isOpenCubic: false,
      isOpenPower: false,
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      isRadioNewSelected: false,
      selectedExteriorColour: "",
      selectedTrailer: "",
      selectedParking: "",
      selectedModel: "",
      price: "",
      selectedYear: "",
      selectedFuel: "",
      years: "",
      killometres: "",
      inputValue: "",
      isOpen: false,
      selectedPrice: "",
      huValid: "",
      preOwners: null,
      priceOpen: false,
      isCheckedHistory: false,
      isCheckedRoad: false,
      isOpenRadius: false,
      isCheckedABS: false,
      isCheckedEmergency: false,
      isCheckedCentral: false,
      isCheckedSpeed: false,
      isCheckedAdaptive: false,
      isCheckedTyre: false,
      isCheckedLastChanges: false,
      isCheckedSportsPackage: false,
      isCheckedElectric: false,
      selectedOthers: [],
      isCheckedBeige: false,
      isCheckedBrown: false,
      isCheckedGrey: false,
      isCheckedBlack: false,
      isCheckedOther: false,
      selectedColor: [],
      isCheckedAlcantra: false,
      isCheckedCloth: false,
      isCheckedPartLeather: false,
      isCheckedVelour: false,
      isCheckedFullLeather: false,
      isCheckedOther: false,
      selectedMaterial: [],
      selectedAirbag: "AnyExterior",
      isCheckedAlarmSystem: false,
      isCheckedDisable: false,
      isCheckedHeated: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedSki: false,
      extras: [],
      others: [],
      power: [],
      selectedType: "",
      selectedFiles: [],
      userI: "",
      inputVariant: "",
      activeTab: "buy",
      linkVideo: "",
      userPhone: "",
      userCodeNumber: "",
      userPre: "",
      combinedNumber: "",
      selectedTransmision: "",
      options: [],
      dataAd: [],
      selectedPower: ""
    };
  },
  methods: {
    fetchAdCar() {
      http.get(`/car/${this.carId}`).then((res) => {
        this.dataAd = res.data.data
        this.linkVideo = this.dataAd.car_description
        this.selectedMark = this.dataAd.car_make
        this.selectedMark = this.dataAd.car_make
        this.selectedModel = this.dataAd.car_model
        this.inputVariant = this.dataAd.car_variant
        this.selectedCar = this.dataAd.car_body
        this.numberSeats = this.dataAd.car_number_seats
        this.numDoor = this.dataAd.car_number_door
        this.slidingDoor = this.dataAd.car_silding_door
        this.selectedCondition = this.dataAd.car_condition
        this.selectedType = this.dataAd.car_type
        this.activeTab = this.dataAd.car_payment_type
        this.price = this.dataAd.car_price
        this.inputValue = this.dataAd.car_firt_date_year
        this.inputKilometer = this.dataAd.car_mileage
        this.huValid = this.dataAd.car_hu_valid_until
        this.preOwners = this.dataAd.car_previous_owners
        this.isCheckedHistory = this.dataAd.car_full_service_history
        this.isCheckedRoad = this.dataAd.car_roadworthy
        this.selectedCountry = this.dataAd.car_country
        this.zipCode = this.dataAd.car_city_zipcode
        this.radius = this.dataAd.car_radius
        this.selectedFuel = this.dataAd.car_fuel_type
        this.power = this.dataAd.car_power
        this.cubic = this.dataAd.car_cubic_capacity
        this.selectedTransmision = this.dataAd.car_transmission
        this.consumptionFuel = this.dataAd.car_fuel_consumption
        this.stickerEmission = this.dataAd.car_emissions_sticker
        this.classEmision = this.dataAd.car_emission_class
        this.selectedExteriorColour = this.dataAd.car_exterior_colour
        this.selectedTrailer = this.dataAd.car_trailer_coupling
        this.selectedParking = this.dataAd.car_parking_sensors
        this.selectedCruise = this.dataAd.car_cruise_control
        this.selectedOthers = this.dataAd.others
        this.selectedInteriorColour = this.dataAd.car_interior_colour
        this.selectedMaterial = this.dataAd.car_interior_material
        this.selectedAirbag = this.dataAd.car_airbags
        this.selectedConditioning = this.dataAd.car_air_conditioning
        this.extras = this.dataAd.extras
        this.selectedVendor = this.dataAd.car_vendor
        this.isCheckedDiscount = this.dataAd.car_discount_offers
        this.isCheckedNon = this.dataAd.car_non_smoker
        this.isCheckedTaxi = this.dataAd.car_taxi
        this.isCheckedVAT = this.dataAd.car_vat
        this.isCheckedWarranty = this.dataAd.car_warranty
        this.damageVehicle = this.dataAd.car_damaged
        this.exportCommercial = this.dataAd.car_commercial
        this.approveUsed = this.dataAd.car_programme
        this.descriptionText = this.dataAd.car_description
      })
    },
    closeDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    showTab1() {
      this.activeTab = "buy";
    },
    async showTab2() {
      this.activeTab = "sell";
    },
    editAddCars() {
      // Create a new FormData object
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {

        formData.append("photos", this.selectedFiles[i]); 
      }
      formData.append('car_id', this.carId);
      formData.append('user_id', this.userI);
      formData.append('car_make', this.selectedMark);
      formData.append('car_model', this.selectedModel);
      formData.append('car_variant', this.inputVariant);
      formData.append('car_body', this.selectedCar);
      formData.append('car_number_seats', this.numberSeats);
      formData.append('car_number_door', parseInt(this.numDoor));
      formData.append('car_silding_door', this.slidingDoor);
      formData.append('car_condition', this.selectedCondition);
      formData.append('car_type', this.selectedType);
      formData.append('car_payment_type', this.activeTab);
      formData.append('car_price', parseInt(this.price));
      formData.append('car_firt_date', parseInt(this.inputValue));
      formData.append('car_firt_date_year', parseInt(this.inputValue));
      formData.append('car_mileage', parseInt(this.inputKilometer));
      formData.append('car_hu_valid_until', this.huValid);
      formData.append('car_previous_owners', parseInt(this.preOwners));
      formData.append('car_full_service_history', this.isCheckedHistory);
      formData.append('car_roadworthy', this.isCheckedRoad);
      formData.append('car_country', this.selectedCountry);
      formData.append('car_city_zipcode', this.zipCode);
      formData.append('car_radius', parseInt(this.radius));
      formData.append('car_description', this.descriptionText);
      formData.append('user_phone', `${this.userCodeNumber}${this.userPre}${this.userPhone}`);
      formData.append('user_email', this.uEmail);
      formData.append('car_vide_link', this.linkVideo);
      formData.append('car_fuel_type', this.selectedFuel);
      formData.append('car_power', parseInt(this.power));
      formData.append('car_cubic_capacity', parseInt(this.cubic));
      formData.append('car_transmission', this.selectedTransmision);
      formData.append('car_fuel_consumption', parseInt(this.consumptionFuel));
      formData.append('car_emissions_sticker', this.stickerEmission);
      formData.append('car_emission_class', this.classEmision);
      formData.append('car_exterior_colour', this.selectedExteriorColour);
      formData.append('car_trailer_coupling', this.selectedTrailer);
      formData.append('car_parking_sensors', this.selectedParking);
      formData.append('car_cruise_control', this.selectedCruise);
      formData.append('others', this.selectedOthers);
      formData.append('car_interior_colour', this.selectedInteriorColour);
      formData.append('car_interior_material', this.selectedInteriorColour);
      formData.append('car_airbags', this.selectedAirbag);
      formData.append('car_air_conditioning', this.selectedConditioning);
      formData.append('extras', this.extras);
      formData.append('car_vendor', this.selectedVendor);
      formData.append('car_discount_offers', this.isCheckedDiscount); // You have two lines for this, remove one as needed
      formData.append('car_non_smoker', this.isCheckedNon);
      formData.append('car_taxi', this.isCheckedTaxi);
      formData.append('car_vat', this.isCheckedVAT);
      formData.append('car_warranty', this.isCheckedWarranty);
      formData.append('car_environmental_bonus', this.isCheckedEnvironmental);
      formData.append('car_damaged', this.damageVehicle);
      formData.append('car_commercial', this.exportCommercial);
      formData.append('car_programme', this.approveUsed);
      formData.append('car_description', this.descriptionText);

      http
        .put("/car/update", formData)
        .then((response) => {
          const store = useTabsStore();
          store.setActiveTab("tab-3")
          const responseData = response;
          console.log(responseData);
        });
    },
    cancelAdCar() {
      const store = useTabsStore();
      store.setActiveTab("tab-3");
      this.$router.push({ name: "profile-settings" })
    },

    // thenPowerAdd() {
    //   http.put("/car/add/engine", {
    // 		car_id: localStorage.getItem('car_id'),
    //     car_fuel_type: this.selectedFuel,
    //     car_power: parseInt(this.power),
    //     car_cubic_capacity: parseInt(this.cubic),
    //     car_transmission: this.selectedTransmision,
    //     car_fuel_consumption: parseInt(this.consumptionFuel),
    //     car_emissions_sticker: this.stickerEmission,
    //     car_emission_class: this.classEmision,
    //     car_exterior_colour: this.selectedExteriorColour,
    //     car_trailer_coupling: this.selectedTrailer,
    //     car_parking_sensors: this.selectedParking,
    //     car_cruise_control: this.selectedCruise,
    //     others: this.selectedOthers,
    //   })
    // 	.then((res) => {
    // 		console.log(res.data);
    // 	})
    // },
    // thenAddsInterior() {
    //   http.put("/car/add/interior",{
    // 		car_id: localStorage.getItem('car_id'),
    //     car_interior_colour: this.selectedInteriorColour,
    //     car_interior_material: this.selectedInteriorColour,
    //     car_airbags: this.selectedAirbag,
    //     car_air_conditioning: this.selectAirConditioning,
    //     extras: this.extras,
    //     car_vendor: this.selectedVendor,
    // 		car_discount_offers: 3,
    //     car_discount_offers: this.isCheckedDiscount,
    //     car_non_smoker: this.isCheckedNon,
    //     car_taxi: this.isCheckedTaxi,
    //     car_vat: this.isCheckedVAT,
    //     car_warranty: this.isCheckedWarranty,
    //     car_environmental_bonus: this.isCheckedEnvironmental,
    //     car_damaged: this.damageVehicle,
    //     car_commercial: this.exportCommercial,
    //     car_programme: this.approveUsed,
    // 		car_description: this.descriptionText
    //   })
    // 	.then((res) =>  {
    // 		console.log(res.data)


    // 	})
    // },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedFiles = event.target.files;

    },
    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },
    toggleShowCheckboxRating(index, ratingName) {
      const isChecked = !this.rating.includes(ratingName);
      if (isChecked) {
        this.rating.push(ratingName);
      } else {
        const carIndex = this.rating.indexOf(ratingName);
        if (carIndex !== -1) {
          this.rating.splice(carIndex, 1);
        }
      }
    },
    selectVendor(condition) {
      this.selectedVendor = condition;
      if (condition === "Private" || condition === "Company") {
        this.isRadioNewSelected = true;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      } else {
        this.isRadioNewSelected = false;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      }
    },
    toggleShowCheckboxExtras(index, extrasName) {
      const isChecked = !this.extras.includes(extrasName);
      if (isChecked) {
        this.extras.push(extrasName); // Добавляем extrasName как отдельную строку
        console.log(this.extras);
      } else {
        const carIndex = this.extras.indexOf(extrasName);
        if (carIndex !== -1) {
          this.extras.splice(carIndex, 1); // Удаляем extrasName из массива
        }
      }
    },
    selectAirConditioning(condition) {
      this.selectedConditioning = condition;
    },
    selectType(condition) {
      this.selectedType = condition;
    },
    selectTransmision(condition) {
      this.selectedTransmision = condition;
    },
    selectAirbag(condition) {
      this.selectedAirbag = condition;
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
    selectTrailer(option) {
      this.selectedTrailer = option;
    },
    selectInteriorColour(option) {
      this.selectedInteriorColour = option;
    },
    selectParking(option) {
      this.selectedParking = option;
    },
    selectCruise(option) {
      this.selectedCruise = option;
    },
    selectExteriorColour(option) {
      this.selectedExteriorColour = option;
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
    toggleShowCheckboxMaterial(index, colorName) {
      const isChecked = !this.selectedColor.includes(colorName);
      if (isChecked) {
        this.selectedColor.push(colorName);
      } else {
        const carIndex = this.selectedColor.indexOf(colorName);
        if (carIndex !== -1) {
          this.selectedColor.splice(carIndex, 1);
        }
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
    toggleShowCheckboxOthers(index, otherName) {
      const isChecked = !this.selectedOthers.includes(otherName);
      if (isChecked) {
        this.selectedOthers.push(otherName);
      } else {
        const carIndex = this.selectedOthers.indexOf(otherName);
        if (carIndex !== -1) {
          this.selectedOthers.splice(carIndex, 1);
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
    selectPower(condition) {
      this.selectedPower = condition;
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
    openCubicDropdown() {
      this.isOpenCubic = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeCubicDropdownOnClickOutside);
    },
    selectCubic(option) {
      this.cubic = option;
      this.isOpenCubic = false;
    },
    closeCubicDropdown() {
      this.isOpenCubic = false;
    },
    closeCubicDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".cubic");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenCubic = false;
        document.removeEventListener(
          "click",
          this.closeCubicDropdownOnClickOutside
        );
      }
    },
    //
    openPowerDropdown() {
      this.isOpenPower = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePowerDropdownOnClickOutside);
    },
    selectPower(option) {
      this.power = option;
      this.isOpenPower = false;
    },
    closePowerDropdown() {
      this.isOpenPower = false;
    },
    closePowerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".power");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPower = false;
        document.removeEventListener(
          "click",
          this.closePowerDropdownOnClickOutside
        );
      }
    },
  },
  created() {
    this.selectedMark = localStorage.getItem("mark");
    this.userI = localStorage.getItem("u-i");
    this.uEmail = localStorage.getItem("u-e");

    this.userPhone = localStorage.getItem("u-phone");
    this.userCodeNumber = localStorage.getItem("u-code");
    this.userPre = localStorage.getItem("u-pre");

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
    this.fetchModelYears();
    this.carId = this.$route.params.id;
    // Теперь у вас есть ID в переменной carId
    console.log('ID из URL:', this.carId);
    this.fetchAdCar()
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

.custom-checkbox input[type="checkbox"]:checked+.icon {
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

.file-preview {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.file-preview span {
  margin-right: 10px;
}

.file-preview button {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.Kaufen:hover {
  box-shadow: 0 0 2px 1px #eaccb4;
}

.active-Kaufen {
  background-color: #fffaf6;
  border: 1px solid #eaccb4;
  color: #000;
}
</style>
