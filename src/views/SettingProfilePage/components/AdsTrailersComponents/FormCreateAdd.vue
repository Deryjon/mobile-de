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
        <input
          type="text"
          class="mark-select bg-[#fff] py-[10px] px-[10px] rounded-[10px] w-full lg:w-[500px] mt-[10px] lg:text-[12px]"
          v-model="linkVideo"
        />
      </div>
      <div class="mark w-[200px]">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">Category</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedCategory"
            @change="fetchModels()"
          >
            <option value="" selected>Beliebig</option>
            <optgroup>
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
              <option value="HydraulicWorkPlatformTruck">
                Hydraulic work platform
              </option>
              <option value="JumboTruck">Jumbo Truck</option>
              <option value="SkipLorryTruck">Mining truck</option>
              <option value="RefrigeratorBodyTruck">Refrigerator body</option>
              <option value="RefuseTruck">Refuse truck</option>
              <option value="RollOffTipperTruck">Roll-off tipper</option>
              <option value="StakeBodyTruck">Stake body</option>
              <option value="StakeBodyAndTarpaulinTruck">
                Stake body and tarpaulin
              </option>
              <option value="SwapChassisTruck">Swap chassis</option>
              <option value="SweepingMachineTruck">Sweeping machine</option>
              <option value="TankBodiesTruck">Tank truck</option>
              <option value="Over7500_ThreeSidedTipper">
                Three-sided Tipper
              </option>
              <option value="TimberCarrierTruck">Timber carrier</option>
              <option value="TipperTruck">Tipper</option>
              <option value="TrafficConstructionTruck">
                Traffic construction
              </option>
              <option value="TruckMountedCraneTruck">
                Truck-mounted crane
              </option>
              <option value="VacuumAndPressureVehicleTruck">
                Vacuum and pressure vehicle
              </option>
              <option value="OtherTruckOver7500">
                Other trucks over 7.5 t
              </option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>
      <div class="flex flex-wrap lg:gap-[20px] mt-[30px]">
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">
              {{ $t("message.selects.mark") }}
            </h2>
            <select
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedMark"            >
              <option value="" selected>Beliebig</option>
              <optgroup>
                <option
                  v-for="make in makes"
                  :key="make"
                  :value="make.trailer_make_name"
                >
                  {{ make.trailer_make_name }}
                </option>
                <option value="other">other</option>
              </optgroup>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
        </div>

        <div class="relative">
          <h2 class="text-sm lg:text-[14px] mt-2">
            {{ $t("message.selects.model") }}
          </h2>
          <input
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            :disabled="isModelSelectDisabled"
            v-model="selectedModel"
            type="text"
          />
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[14px]">Type and condition</h3>
        <div
          class="radios-type flex flex-wrap gap-[10px] lg:gap-x-[244px] mt-[10px] mb-[10px]"
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
      </div>

      <div class="price-tab flex flex-wrap items-center gap-[21px] lg:gap-[30px]">
        <div class="price dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
          <div class="input-container flex relative mt-[10px]">
            <input
              type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
          <ul v-if="isOpen" class="dropdown-options w-[170px] text-[10px] lg:text-[12px]">
          <li key="1920" @click="selectOption('1920')">1920</li>
          <li key="1921" @click="selectOption('1921')">1921</li>
          <li key="1922" @click="selectOption('1922')">1922</li>
          <li key="1923" @click="selectOption('1923')">1923</li>
          <li key="1924" @click="selectOption('1924')">1924</li>
          <li key="1925" @click="selectOption('1925')">1925</li>
          <li key="1926" @click="selectOption('1926')">1926</li>
          <li key="1927" @click="selectOption('1927')">1927</li>
          <li key="1928" @click="selectOption('1928')">1928</li>
          <li key="1929" @click="selectOption('1929')">1929</li>
          <li key="1930" @click="selectOption('1930')">1930</li>
          <li key="1931" @click="selectOption('1931')">1931</li>
          <li key="1932" @click="selectOption('1932')">1932</li>
          <li key="1933" @click="selectOption('1933')">1933</li>
          <li key="1934" @click="selectOption('1934')">1934</li>
          <li key="1935" @click="selectOption('1935')">1935</li>
          <li key="1936" @click="selectOption('1936')">1936</li>
          <li key="1937" @click="selectOption('1937')">1937</li>
          <li key="1938" @click="selectOption('1938')">1938</li>
          <li key="1939" @click="selectOption('1939')">1939</li>
          <li key="1940" @click="selectOption('1940')">1940</li>
          <li key="1941" @click="selectOption('1941')">1941</li>
          <li key="1942" @click="selectOption('1942')">1942</li>
          <li key="1943" @click="selectOption('1943')">1943</li>
          <li key="1944" @click="selectOption('1944')">1944</li>
          <li key="1945" @click="selectOption('1945')">1945</li>
          <li key="1946" @click="selectOption('1946')">1946</li>
          <li key="1947" @click="selectOption('1947')">1947</li>
          <li key="1948" @click="selectOption('1948')">1948</li>
          <li key="1949" @click="selectOption('1949')">1949</li>
          <li key="1950" @click="selectOption('1950')">1950</li>
          <li key="1951" @click="selectOption('1951')">1951</li>
          <li key="1952" @click="selectOption('1952')">1952</li>
          <li key="1953" @click="selectOption('1953')">1953</li>
          <li key="1954" @click="selectOption('1954')">1954</li>
          <li key="1955" @click="selectOption('1955')">1955</li>
          <li key="1956" @click="selectOption('1956')">1956</li>
          <li key="1957" @click="selectOption('1957')">1957</li>
          <li key="1958" @click="selectOption('1958')">1958</li>
          <li key="1959" @click="selectOption('1959')">1959</li>
          <li key="1960" @click="selectOption('1960')">1960</li>
          <li key="1961" @click="selectOption('1961')">1961</li>
          <li key="1962" @click="selectOption('1962')">1962</li>
          <li key="1963" @click="selectOption('1963')">1963</li>
          <li key="1964" @click="selectOption('1964')">1964</li>
          <li key="1965" @click="selectOption('1965')">1965</li>
          <li key="1966" @click="selectOption('1966')">1966</li>
          <li key="1967" @click="selectOption('1967')">1967</li>
          <li key="1968" @click="selectOption('1968')">1968</li>
          <li key="1969" @click="selectOption('1969')">1969</li>
          <li key="1970" @click="selectOption('1970')">1970</li>
          <li key="1971" @click="selectOption('1971')">1971</li>
          <li key="1972" @click="selectOption('1972')">1972</li>
          <li key="1973" @click="selectOption('1973')">1973</li>
          <li key="1974" @click="selectOption('1974')">1974</li>
          <li key="1975" @click="selectOption('1975')">1975</li>
          <li key="1976" @click="selectOption('1976')">1976</li>
          <li key="1977" @click="selectOption('1977')">1977</li>
          <li key="1978" @click="selectOption('1978')">1978</li>
          <li key="1979" @click="selectOption('1979')">1979</li>
          <li key="1980" @click="selectOption('1980')">1980</li>
          <li key="1981" @click="selectOption('1981')">1981</li>
          <li key="1982" @click="selectOption('1982')">1982</li>
          <li key="1983" @click="selectOption('1983')">1983</li>
          <li key="1984" @click="selectOption('1984')">1984</li>
          <li key="1985" @click="selectOption('1985')">1985</li>
          <li key="1986" @click="selectOption('1986')">1986</li>
          <li key="1987" @click="selectOption('1987')">1987</li>
          <li key="1988" @click="selectOption('1988')">1988</li>
          <li key="1989" @click="selectOption('1989')">1989</li>
          <li key="1990" @click="selectOption('1990')">1990</li>
          <li key="1991" @click="selectOption('1991')">1991</li>
          <li key="1992" @click="selectOption('1992')">1992</li>
          <li key="1993" @click="selectOption('1993')">1993</li>
          <li key="1994" @click="selectOption('1994')">1994</li>
          <li key="1995" @click="selectOption('1995')">1995</li>
          <li key="1996" @click="selectOption('1996')">1996</li>
          <li key="1997" @click="selectOption('1997')">1997</li>
          <li key="1998" @click="selectOption('1998')">1998</li>
          <li key="1999" @click="selectOption('1999')">1999</li>
          <li key="2000" @click="selectOption('2000')">2000</li>
          <li key="2001" @click="selectOption('2001')">2001</li>
          <li key="2002" @click="selectOption('2002')">2002</li>
          <li key="2003" @click="selectOption('2003')">2003</li>
          <li key="2004" @click="selectOption('2004')">2004</li>
          <li key="2005" @click="selectOption('2005')">2005</li>
          <li key="2006" @click="selectOption('2006')">2006</li>
          <li key="2007" @click="selectOption('2007')">2007</li>
          <li key="2008" @click="selectOption('2008')">2008</li>
          <li key="2009" @click="selectOption('2009')">2009</li>
          <li key="2010" @click="selectOption('2010')">2010</li>
          <li key="2011" @click="selectOption('2011')">2011</li>
          <li key="2012" @click="selectOption('2012')">2012</li>
          <li key="2013" @click="selectOption('2013')">2013</li>
          <li key="2014" @click="selectOption('2014')">2014</li>
          <li key="2015" @click="selectOption('2015')">2015</li>
          <li key="2016" @click="selectOption('2016')">2016</li>
          <li key="2017" @click="selectOption('2017')">2017</li>
          <li key="2018" @click="selectOption('2018')">2018</li>
          <li key="2019" @click="selectOption('2019')">2019</li>
          <li key="2020" @click="selectOption('2020')">2020</li>
          <li key="2021" @click="selectOption('2021')">2021</li>
          <li key="2022" @click="selectOption('2022')">2022</li>
          <li key="2023" @click="selectOption('2023')">2023</li>
          <li key="2024" @click="selectOption('2024')">2024</li>
          <li key="2025" @click="selectOption('2025')">2025</li>
          <li key="2026" @click="selectOption('2026')">2026</li>
          <li key="2027" @click="selectOption('2027')">2027</li>
          <li key="2028" @click="selectOption('2028')">2028</li>
          <li key="2029" @click="selectOption('2029')">2029</li>
          <li key="2030" @click="selectOption('2030')">2030</li>
          <li key="2031" @click="selectOption('2031')">2031</li>
          <li key="2032" @click="selectOption('2032')">2032</li>
          <li key="2033" @click="selectOption('2033')">2033</li>
          <li key="2034" @click="selectOption('2034')">2034</li>
          <li key="2035" @click="selectOption('2035')">2035</li>
          <li key="2036" @click="selectOption('2036')">2036</li>
          <li key="2037" @click="selectOption('2037')">2037</li>
          <li key="2038" @click="selectOption('2038')">2038</li>
          <li key="2039" @click="selectOption('2039')">2039</li>
          <li key="2040" @click="selectOption('2040')">2040</li>
          <li key="2041" @click="selectOption('2041')">2041</li>
          <li key="2042" @click="selectOption('2042')">2042</li>
          <li key="2043" @click="selectOption('2043')">2043</li>
          <li key="2044" @click="selectOption('2044')">2044</li>
          <li key="2045" @click="selectOption('2045')">2045</li>
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
            type="text"
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
      </div>
    </div>
    <div class="lg:mt-[-10px] xl:mt-[30px]">
      <h2 class="mt-2 text-sm lg:text-[14px]">Payment type</h2>
      <div class="Kaufen_div mt-[10px]">
        <button
          class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
          @click="showTab1"
          :class="{ 'active-Kaufen': activeTab === 'buy' }"
        >
          {{ $t("message.btn.buy") }}
        </button>
        <button
          class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
          @click="showTab2"
          :class="{ 'active-Kaufen': activeTab === 'sell' }"
        >
          {{ $t("message.btn.sell") }}
        </button>
      </div>
    </div>
    <div class="fuel-add">
      <div
        class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[30px]"
      >
        <div class="">
          <h2 class="text-sm lg:text-[14px] mt-2">Load capacity</h2>
          <div class="cubic dropdown-container ">
            <div class="input-container flex relative mt-[10px]">
              <input
                type="from"
                class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
                placeholder="from"
                v-model="cubic"
                @focus="openCubicDropdown"
                @input="filterOptions"
                @blur="openCubicDropdown"
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
      </div>
      <div class="mt-[30px]">
        <h3>Features</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedABS"
              @click="toggleShowCheckboxOthers(0, 'ABS')"
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
                v-if="isCheckedABS"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            ABS
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedEmergency"
              @click="toggleShowCheckboxOthers(1, 'Emergency brake assist')"
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
                v-if="isCheckedEmergency"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Emergency brake assist
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedCentral"
              @click="toggleShowCheckboxOthers(2, 'Keyless central locking')"
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
                v-if="isCheckedCentral"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Keyless central locking
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedSpeed"
              @click="toggleShowCheckboxOthers(3, '	Speed limit control system')"
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
                v-if="isCheckedSpeed"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Speed limit control system
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedAdaptive"
              @click="toggleShowCheckboxOthers(4, 'Adaptive cornering lights')"
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
                v-if="isCheckedAdaptive"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Adaptive cornering lights
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedTyre"
              @click="toggleShowCheckboxOthers(5, 'Emergency tyre')"
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
                v-if="isCheckedTyre"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Emergency tyre
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedLastChanges"
              @click="toggleShowCheckboxOthers(6, 'Lane change assist')"
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
                v-if="isCheckedLastChanges"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Lane change assist
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedSportsPackage"
              @click="toggleShowCheckboxOthers(7, 'Sports package')"
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
                v-if="isCheckedSportsPackage"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Sports package
          </label>
        </div>
      </div>
			<div class="mt-[10px]">
      <h3 class="text-[16px]">Extras</h3>
      <div
        class="filter-cars flex flex-wrap gap-x-[30px] gap-y-[8px] mt-[20px]"
      >
        <!-- cabrio -->
        <label
          class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedAlarmSystem"
            @click="toggleShowCheckboxExtras(0, 'Alarm System')"
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
              v-if="isCheckedAlarmSystem"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Alarm System
        </label>
        <label
          class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedDisable"
            @click="toggleShowCheckboxExtras(1, 'Disabled accessible')"
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
              v-if="isCheckedDisable"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Disabled accessible
        </label>
        <label
          class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedHeated"
            @click="toggleShowCheckboxExtras(2, 'Heated steering whee')"
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
              v-if="isCheckedHeated"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Heated steering whee
        </label>
        <label
          class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedSeat"
            @click="toggleShowCheckboxExtras(3, 'Seat ventilation')"
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
              v-if="isCheckedSeat"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Seat ventilation
        </label>
        <label
          class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedAmbient"
            @click="toggleShowCheckboxExtras(4, 'Ambient lighting')"
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
              v-if="isCheckedAmbient"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Ambient lighting
        </label>
        <label
          class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedElectric"
            @click="toggleShowCheckboxExtras(5, 'Electric backseat adjustment')"
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
              v-if="isCheckedElectric"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Electric backseat adjustment
        </label>
        <label
          class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedInduction"
            @click="
              toggleShowCheckboxExtras(6, 'Induction charging for smartphones')
            "
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
              v-if="isCheckedInduction"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Induction charging for smartphones
        </label>
        <label
          class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]"
        >
          <input
            type="checkbox"
            v-model="isCheckedSki"
            @click="toggleShowCheckboxExtras(7, 'Ski bag')"
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
              v-if="isCheckedSki"
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          Ski bag
        </label>
      </div>
      </div>
      <div class="flex flex-wrap lg:gap-[40px]">
        <div class="marke_select_div relative mt-[14px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">New HU valid</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
        <div class="marke_select_div relative mt-[10px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Renting Possible</h2>
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
      </div>
      <div class="mt-[30px]">
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
          >
            <input
              @click="selectFeat('Awning')"
              type="radio"
              v-model="selectedFeat"
              :class="{
                'bg-transparent': selectedFeat !== 'Awning',
                'bg-orange': selectedFeat === 'Awning',
              }"
            />

            Awning
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
          >
            <input
              @click="selectFeat('Disabled accesible')"
              type="radio"
              v-model="selectedFeat"
              :class="{
                'bg-transparent': selectedFeat !== 'Disabled accesible',
                'bg-orange': selectedFeat === 'Disabled accesible',
              }"
            />

            Disabled accesible
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
          >
            <input
              @click="selectFeat('Rear Garage')"
              type="radio"
              v-model="selectedFeat"
              :class="{
                'bg-transparent': selectedFeat !== 'Rear Garage',
                'bg-orange': selectedFeat === 'Rear Garage',
              }"
            />

            Rear Garage
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
          >
            <input
              @click="selectFeat('Solar Energy System')"
              type="radio"
              v-model="selectedFeat"
              :class="{
                'bg-transparent': selectedFeat !== 'Solar Energy System',
                'bg-orange': selectedFeat === 'Solar Energy System',
              }"
            />

            Solar Energy System
          </label>
        </div>
      </div>
      <div class="flex flex-wrap gap-x-[40px]">
        <div class="marke_select_div relative mt-[14px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Vehicle Length</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedLength"
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
        <div class="marke_select_div relative mt-[20px] lg:mt-[10px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">
            Permissible Gross Vehicle Weight (GVW)
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedGvw"
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
        <div class="marke_select_div relative mt-[20px] lg:mt-[30px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Number of Bunks</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedNumberBunks"
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
        <div class="marke_select_div relative mt-[20px] lg:mt-[10px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Axles</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedAxles"
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
        <div class="marke_select_div relative mt-[20px] lg:mt-[10px] w-[200px]">
          <h2 class="text-sm lg:text-[14px]">Radio</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedRadio"
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
      </div>
    </div>
    <div class="mt-[30px]">
      <h3>Parking sensors</h3>
      <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
        <!-- cabrio -->
        <label
          class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
        >
          <input
            @click="selectParking('Rear')"
            type="radio"
            v-model="selectedParking"
            :class="{
              'bg-transparent': selectedParking !== 'Rear',
              'bg-orange': selectedParking === 'Rear',
            }"
          />

          Rear
        </label>
        <label
          class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
        >
          <input
            @click="selectParking('Front')"
            type="radio"
            v-model="selectedParking"
            :class="{
              'bg-transparent': selectedParking !== 'Front',
              'bg-orange': selectedParking === 'Front',
            }"
          />

          Front
        </label>
        <label
          class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
        >
          <input
            @click="selectParking('Camera')"
            type="radio"
            v-model="selectedParking"
            :class="{
              'bg-transparent': selectedParking !== 'Camera',
              'bg-orange': selectedParking === 'Camera',
            }"
          />

          Camera
        </label>
        <label
          class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
        >
          <input
            @click="selectParking('360° camera')"
            type="radio"
            v-model="selectedParking"
            :class="{
              'bg-transparent': selectedParking !== '360° camera',
              'bg-orange': selectedParking === '360° camera',
            }"
          />

          360° camera
        </label>
        <label
          class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0"
        >
          <input
            @click="selectParking('Self-steering systems')"
            type="radio"
            v-model="selectedParking"
            :class="{
              'bg-transparent': selectedParking !== 'Self-steering systems',
              'bg-orange': selectedParking === 'Self-steering systems',
            }"
          />

          Self-steering systems
        </label>
      </div>
    </div>
    <div class="interior">
      <div class="condition mt-[30px]">
        <h3 class="text-[16px]">Vendor</h3>
        <div class="radios-type flex flex-wrap gap-[20px] lg:gap-[40px] mt-[20px]">
          <label>
            <input
              type="radio"
              id="vendor-private"
              v-model="selectedVendor"
              :class="{
                'bg-transparent': selectedVendor !== 'Private',
                'bg-orange': selectedVendor === 'Private',
              }"
              @click="selectVendor('Private')"
            />
            <span class="ml-[10px] text-[14px]">Private seller</span>
          </label>
          <label>
            <input
              type="radio"
              id="vendor-dealer"
              v-model="selectedVendor"
              :class="{
                'bg-transparent': selectedVendor !== 'Dealer',
                'bg-orange': selectedVendor === 'Dealer',
              }"
              @click="selectVendor('Dealer')"
            />
            <span class="ml-[10px] text-[14px]">Dealer </span>
          </label>
          <label>
            <input
              type="radio"
              id="vendor-dealer"
              v-model="selectedVendor"
              :class="{
                'bg-transparent': selectedVendor !== 'Company',
                'bg-orange': selectedVendor === 'Company',
              }"
              @click="selectVendor('Company')"
            />
            <span class="ml-[10px] text-[14px]">Company vehicles</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedDiscount"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedDiscount"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Discount offers
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedNon"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedNon"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Non-smoker vehicle
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedTaxi"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedTaxi"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Taxi
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedVAT"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedVAT"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            VAT reclaimable
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedWarranty"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedWarranty"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Warranty
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedEnvironmental"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedEnvironmental"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            With environmental bonus
          </label>
        </div>
      </div>
      <div class="flex items-center gap-[50px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]"></h2>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]"
          >
            <input
              type="checkbox"
              v-model="isCheckedDamaged"
              @click="toggleShowCheckboxAds(0)"
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
                v-if="isCheckedDamaged"
                fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            Damaged Vehicles
          </label>
        </div>
      </div>
      <div class="pr-[5px]">
        <h2 class="mt-[30px] text-[16px]">Description</h2>
        <textarea
          class="bg-[#ccc] mt-[10px] p-[20px] w-full"
          name=""
          id=""
          cols="40"
          rows="5"
          placeholder="Description "
          v-model="descriptionText"
        ></textarea>
      </div>
      <div>
        <div class="flex gap-[30px] justify-end">
          <button
            class="bg-red-500 rounded-[8px] p-[10px]"
            @click="handleCancelButtonClick"
          >
            Cancel
          </button>
          <button
            @click="addAdTrucks
			"
            class="bg-blue-500 rounded-[8px] p-[10px]"
          >
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
      rentingPossible: true,
      rating: [],
      numDoor: "",
      slidingDoor: "",
      isOpenKilometer: "",
      selectedGvw: "",
      selectedNumberBunks: "",
      selectedAxles: "",
      selectedRadio: "",
      inputKilometer: "",
      radius: "",
      isOpenCubic: false,
      isOpenSecurity: false,
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      isRadioNewSelected: false,
      selectedExteriorColour: "",
      selectedTrailer: "",
      selectedParking: "",
      selectedModel: "",
      selectedFeat: "",
      selectedLength: "",
      price: "",
      selectedYear: "",
      selectedFuel: "",
      years: "",
      killometres: "",
      inputValue: "",
      isOpen: false,
      selectedPrice: "",
      huValid: false,
      preOwners: null,
      priceOpen: false,
      isCheckedHistory: false,
      isCheckedRoad: false,
      isOpenRadius: false,
      isCheckedABS: false,
      isCheckedEmergency: false,
      isCheckedCentral: false,
      isCheckedDamaged: false,
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
      selectedCategory: "",
      isCheckedAlarmSystem: false,
      isCheckedDisable: false,
      isCheckedHeated: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedSki: false,
      extras: [],
      previewImages: [],
      others: [],
      security: [],
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
    async showTab2() {
      this.activeTab = "sell";
    },
    addAdTrucks() {
      const formData = new FormData();

      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("photos", this.selectedFiles[i]);
      }

      formData.append("trailer_make,", this.selectedMark);
      formData.append("trailer_model", this.selectedModel);
      formData.append("trailer_condition", this.selectedCondition);
      formData.append("trailer_category", this.selectedCategory);
      formData.append("trailer_video_link", this.linkVideo);
      formData.append("trailer_firt_date", this.inputValue);
      formData.append("trailer_firt_date_year", parseInt(this.inputValue));
      formData.append("trailer_price", parseInt(this.price));
      formData.append("trailer_price_type", "sell");
      formData.append("trailer_kilometre", parseInt(this.inputKilometer));
      formData.append("trailer_security", this.extras);
      formData.append("trailer_country", this.selectedCountry);
      formData.append("trailer_city_zipcode", this.zipCode);
      formData.append("trailer_radius", parseInt(this.radius));
      formData.append("trailer_load_capacity", parseInt(this.cubic));
      formData.append("features", this.selectedOthers);
      formData.append("trailer_vat", this.isCheckedVAT);
      formData.append("trailer_gvw", parseInt(this.selectedGvw));
      formData.append("trailer_axles", parseInt(this.selectedAxles));
      formData.append("trailer_discount_offers", this.isCheckedDiscount);
      formData.append("trailer_vendor", this.selectedVendor);
      formData.append("trailer_new_hu", this.isCheckedWarranty);
      formData.append("trailer_renting_possible", this.isCheckedWarranty);
      formData.append("trailer_dealer_rating", 4);
      formData.append("user_id", this.userI);
      formData.append(
        "user_phone",
        `${this.userCodeNumber}${this.userPre}${this.userPhone}`
      );
      formData.append("user_email", this.uEmail);
      http.post("/trailers/add", formData).then((response) => {
             const responseData = response.data.data;
        this.handleCancelButtonClick();
        this.$router.push({name: "price-list"})
        
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
        this.isModelSelectDisabled = true; // Dis able the model select
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
    selectFeat(option) {
      this.selectedFeat = option;
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
    openSecurityDropdown() {
      this.isOpenSecurity = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePowerDropdownOnClickOutside);
    },
    selectSecurity(option) {
      this.security = option;
      this.isOpenSecurity = false;
    },
    closePowerDropdown() {
      this.isOpenSecurity = false;
    },
    closePowerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".security");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenSecurity = false;
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
      .get("/trailer/marks")
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
