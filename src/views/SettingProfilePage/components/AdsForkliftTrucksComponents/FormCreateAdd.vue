<template>
  <div class="">
    <div class="basic-add w-[210px] xs:w-full lg:w-[700px] xl:w-[850px] text-[12px] lg:text-[14px] pt-[15px] p-[5px] lg:p-0">
      <div class="md:flex items-center gap-[20px]">
        <input type="file" ref="fileInput" accept="image/*" multiple style="display: none" @change="handleFileChange" />
        <button @click="openFileInput" class="bg-blue-500 p-[10px] rounded-[8px]">
          + Add image
        </button>
        <div class="file-preview flex flex-wrap lg:w-[600px] gap-[10px]">
          <div v-for="(file, index) in previewImages" :key="index" class="file-item relative">
            <div class="w-[190px] h-[200px]">
              <img class="w-full h-full" :src="file.previewUrl" :alt="file.name" />
            </div>
            <button @click="removeFile(index)" class="absolute top-0 right-0 w-[20px]">
              X
            </button>
          </div>
          <span v-if="previewImages.length === 0">No Images</span>
        </div>
      </div>
      <div class="video-link mt-[30px]">
        <h2 class="text-sm lg:text-[14px]">Link on Video</h2>
        <input type="text"
          class="mark-select bg-[#fff] py-[10px] px-[10px] rounded-[10px] w-full lg:w-[500px] mt-[10px] lg:text-[12px]"
          v-model="linkVideo" />
      </div>
      <div class="flex flex-wrap lg:gap-[20px] mt-[30px]">
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
                <option v-for="make in makes" :key="make" :value="make.van_make_name">
                  {{ make.van_make_name }}
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
          <input
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            :disabled="isModelSelectDisabled" v-model="selectedModel" type="text" />



        </div>
        <div class="relative">
          <h2 class="text-sm lg:text-[14px] mt-2">
            Category
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            v-model="selectedCategory" type="text">
            <option value="" data-track-as="any">Any</option>
            <option value="BeveragesTruck">Beverage</option>
            <option value="BoxTruck">Box</option>
            <option value="BreakdownTruck">Breakdown truck</option>
            <option value="CarCarrierTruck">Car carrier</option>
            <option value="CementMixerTruck">Cement mixer</option>
            <option value="ChassisTruck">Chassis</option>
            <option value="ConcretePump">Concrete Pump</option>
            <option value="DumperTruck">Dumper truck</option>
            <option value="MilkTankTruck">Food Carrier</option>
            <option value="GrainTruck">Grain Truck</option>
            <option value="HorsesTruck">Horses</option>
            <option value="HydraulicWorkPlatformTruck">Hydraulic work platform</option>
            <option value="JumboTruck">Jumbo Truck</option>
            <option value="SkipLorryTruck">Mining truck</option>
            <option value="RefrigeratorBodyTruck">Refrigerator body</option>
            <option value="RefuseTruck">Refuse truck</option>
            <option value="RollOffTipperTruck">Roll-off tipper</option>
            <option value="StakeBodyTruck">Stake body</option>
            <option value="StakeBodyAndTarpaulinTruck">Stake body and tarpaulin</option>
            <option value="SwapChassisTruck">Swap chassis</option>
            <option value="SweepingMachineTruck">Sweeping machine</option>
            <option value="TankBodiesTruck">Tank truck</option>
            <option value="Over7500_ThreeSidedTipper">Three-sided Tipper</option>
            <option value="TimberCarrierTruck">Timber carrier</option>
            <option value="TipperTruck">Tipper</option>
            <option value="TrafficConstructionTruck">Traffic construction</option>
            <option value="TruckMountedCraneTruck">Truck-mounted crane</option>
            <option value="VacuumAndPressureVehicleTruck">Vacuum and pressure vehicle</option>
            <option value="OtherTruckOver7500">Other trucks over 7.5 t</option>
          </select>

          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>

        </div>
      </div>

      <div class="tab-content">
        <div class="tab-1"></div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[14px]">Type and condition</h3>
        <div class="radios-type flex flex-wrap gap-[20px] lg:gap-x-[244px] mt-[10px] mb-[10px]">
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
      </div>

      <div class="price-tab flex flex-wrap items-center gap-[21px] lg:gap-[30px]">
        <div class="price dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="price" @focus="openPriceDropdown" @blur="openPriceDropdown" />

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
              placeholder="from" v-model="inputValue" @focus="openDropdown" @input="filterOptions" @blur="openDropdown" />

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
              @blur="openKilmeterDropdown" />

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
      <div class="valid-until mt-[10px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">

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
              @blur="openRadiusDropdown" />

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
      <div class="flex flex-wrap gap-[20px] lg:gap-[100px]">
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
        <div class=" lg:mt-[84px]">
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Semi-automatic',
              'bg-orange': selectedTransmision === 'Semi-automatic',
            }" @click="selectTransmision('Semi-automatic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Semi-automatic</span>
          </label>
        </div>
        <div class=" lg:mt-[84px]">
          <label class="custom-checkbox flex gap-[10px] p-0 items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Manual gearbox',
              'bg-orange': selectedTransmision === 'Manual gearbox',
            }" @click="selectTransmision('Manual gearbox')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Manual gearbox </span>
          </label>
        </div>
      </div>
      <div class="flex flex-wrap lg:gap-[30px]">
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
      </div>
      <div class="mt-[30px]">
        <h3 class="text-[16px]">Exterior Colour</h3>
        <div class="filter-cars flex flex-wrap gap-[10px] lg:gap-x-[20px] mt-[20px]">
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Beige',
              'bg-orange': selectedExteriorColour === 'Beige',
            }" @click="selectExteriorColour('Beige')" />

            Beige
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Brown',
              'bg-orange': selectedExteriorColour === 'Brown',
            }" @click="selectExteriorColour('Brown')" />

            Brown
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Gold',
              'bg-orange': selectedExteriorColour === 'Gold',
            }" @click="selectExteriorColour('Gold')" />

            Gold
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Green',
              'bg-orange': selectedExteriorColour === 'Green',
            }" @click="selectExteriorColour('Green')" />

            Green
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Red',
              'bg-orange': selectedExteriorColour === 'Red',
            }" @click="selectExteriorColour('Red')" />

            Red
          </label>
          <label
            class="custom-checkbox custom-silver flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Silver',
              'bg-orange': selectedExteriorColour === 'Silver',
            }" @click="selectExteriorColour('Silver')" />

            Silver
          </label>
          <label
            class="custom-checkbox custom-white flex gap-4 text-[14px] items-center h-10 w-[80px] lg:w-[100px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'White',
              'bg-orange': selectedExteriorColour === 'White',
            }" @click="selectExteriorColour('White')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">White</span>
          </label>
          <label class="custom-checkbox custom-blue flex gap-4 items-center h-10 w-[120px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Blue',
              'bg-orange': selectedExteriorColour === 'Blue',
            }" @click="selectExteriorColour('Blue')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Blue</span>
          </label>

          <label class="custom-checkbox custom-yellow flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Yellow',
              'bg-orange': selectedExteriorColour === 'Yellow',
            }" @click="selectExteriorColour('Yellow')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Yellow</span>
          </label>

          <label class="custom-checkbox custom-grey flex gap-3 items-center h-10 w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Grey',
              'bg-orange': selectedExteriorColour === 'Grey',
            }" @click="selectExteriorColour('Grey')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Grey</span>
          </label>

          <label class="custom-checkbox custom-orange flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Orange',
              'bg-orange': selectedExteriorColour === 'Orange',
            }" @click="selectExteriorColour('Orange')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Orange</span>
          </label>

          <label class="custom-checkbox custom-black flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Black',
              'bg-orange': selectedExteriorColour === 'Black',
            }" @click="selectExteriorColour('Black')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Black</span>
          </label>

          <label class="custom-checkbox custom-purple flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Purple',
              'bg-orange': selectedExteriorColour === 'Purple',
            }" @click="selectExteriorColour('Purple')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Purple</span>
          </label>

          <label
            class="custom-checkbox custom-metallic flex gap-4 items-center h-10 w-[100px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Metallic',
              'bg-orange': selectedExteriorColour === 'Metallic',
            }" @click="selectExteriorColour('Metallic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Metallic</span>
          </label>
        </div>
      </div>


      <div class="mt-[30px]">
        <h3>Security</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedABS"
              @click="toggleShowCheckboxOthers(0, 'Power Assisted Steering')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedABS" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Power Assisted Steering
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergency" @click="toggleShowCheckboxOthers(1, 'Protection roof')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergency" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Protection roof
          </label>
        </div>
      </div>
    </div>
    <div class="interior">
      <div class="condition mt-[30px]">
        <h3 class="text-[16px]">Vendor</h3>
        <div class="radios-type flex flex-wrap gap-[10px] lg:gap-[40px] mt-[20px]">
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
            HU valid
          </label>
        </div>
      </div>
      <div class="md:flex items-center gap-[50px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Damaged Vehicles</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="damageVehicle">
            <option value="any" selected>Any</option>
            <option value="not">Do not show</option>
            <option value="only">Only show</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
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
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>
      <div class="">
        <h2 class="mt-[30px] text-[16px]">Description</h2>
        <textarea class="bg-[#ccc] mt-[10px] p-[20px] w-full" name="" id="" cols="40" rows="5" placeholder="Description "
          v-model="descriptionText"></textarea>
      </div>
      <div>
        <div class="flex gap-[30px] justify-end">
          <button class="bg-red-500 rounded-[8px] p-[10px]" @click="handleCancelButtonClick">
            Cancel
          </button>
          <button @click="addAdVans" class="bg-blue-500 rounded-[8px] p-[10px]">
            Create Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import http from "@/axios.config";
import { useTabsStore } from "@/store/storeAd";

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
      makes: [],
      models: [],
      selectedMark: "",
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
      selectedDriving: "",
      selectedParking: "",
      selectedModel: "",
      selectedCategory: "",
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
      selectedAxles: "",
      numberSeats: "",
      selectedWheelFormula: "",
      selectedMunicipal: false,
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
      previewImages: [],
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
      selectedMaterial: "",
      selectedMotorbike: "",
      selectedGvw: "",
      selectedHydraulic: "",
      options: [],
    };
  },
  props: {
    createAdd: Boolean, // Определите тип данных в соответствии с вашими требованиями
  },
  methods: {
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
    showTab2() {
      this.activeTab = "sell";
    },
    addAdVans() {
      const formData = new FormData();

      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("photos", this.selectedFiles[i]);
      }

      formData.append("forklift_make", this.selectedMark);
      formData.append("forklift_model", this.selectedModel);
      formData.append("forklift_condition", this.selectedCondition);
      formData.append("forklift_category", this.selectedCategory);
      formData.append("forklift_video_link", this.linkVideo);
      formData.append("forklift_price", parseInt(this.price));
      formData.append("forklift_price_type", this.activeTab);
      formData.append("forklift_construction_year", this.inputValue);
      formData.append("forklift_operating_hours", parseInt(this.inputKilometer));
      formData.append("forklift_country", this.selectedCountry);
      formData.append("forklift_city_zipcode", this.zipCode);
      formData.append("forklift_radius", parseInt(this.radius));
      formData.append("forklift_fuel_type", this.selectedFuel);
      formData.append("forklift_transmission", this.selectedTransmision);
      formData.append("forklift_lifting_capacity", parseInt(this.power));
      formData.append("forklift_lifting_height", this.stickerEmission);
      formData.append("forklift_height", this.stickerEmission);
      formData.append(
        "features",
        this.selectedOthers
      );
      formData.append(
        "security",
        this.selectedOthers
      );
      formData.append("forklift_vat", this.isCheckedVAT);
      formData.append("forklift_discount_offers", this.isCheckedDiscount);
      formData.append("forklift_vendor", this.selectedVendor);
      formData.append("forklift_renting_possible", false);
      formData.append("forklift_dealer_rating", 4);
      formData.append("user_id", this.userI);
      formData.append(
        "user_phone",
        `${this.userCodeNumber}${this.userPre}${this.userPhone}`
      );
      formData.append("user_email", this.uEmail);
      http.post("/forklifts/add", formData).then((response) => {
        const responseData = response.data.data;
        this.handleCancelButtonClick();
        this.router({ name: "price-list" })
      });
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const files = event.target.files;
      this.selectedFiles = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          const previewUrl = e.target.result;
          this.previewImages.push({
            name: file.name,
            previewUrl: previewUrl,
            file: file, // You can also store the actual File object if needed
          });

          // Добавьте здесь код для отправки файла на бэкенд, если требуется
        };

        reader.readAsDataURL(file);
      }
    },

    removeFile(index) {
      this.previewImages.splice(index, 1);
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
      console.log(this.extras);
    },
    selectAirConditioning(condition) {
      this.selectedConditioning = condition;
    },
    selectMaterial(condition) {
      this.selectedMaterial = condition;
    },
    selectType(condition) {
      this.selectedType = condition;
    },
    selectMotorbike(condition) {
      this.selectedMotorbike = condition;
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
        this.selectedOthers.push(otherName); // Добавляем otherName как отдельную строку
      } else {
        const carIndex = this.selectedOthers.indexOf(otherName);
        if (carIndex !== -1) {
          this.selectedOthers.splice(carIndex, 1); // Удаляем otherName из массива
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
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        this.isRadioNewSelected = true;
        this.selectedType = "";
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
    handleCancelButtonClick() {
      // Создаем событие и отправляем его вверх по иерархии
      this.$emit("cancel-create-add");
    },
  },
  mounted() {
    this.selectedMark = localStorage.getItem("mark");
    this.userI = localStorage.getItem("u-i");
    this.uEmail = localStorage.getItem("u-e");

    this.userPhone = localStorage.getItem("u-phone");
    this.userCodeNumber = localStorage.getItem("u-code");
    this.userPre = localStorage.getItem("u-pre");

    http
      .get("/van/marks")
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
