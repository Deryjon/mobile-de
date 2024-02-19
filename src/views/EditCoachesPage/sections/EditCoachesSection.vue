<template>
  <TheLoader v-if="isLoading" />
  <div class="text-[12px] lg-text-[14px]" v-else>
    <div class="basic-add">
      <div class="flex items-center gap-[20px]">
        <input type="file" ref="fileInput" accept="image/*" multiple style="display: none" @change="handleFileChange" />
        <button @click="openFileInput" class="bg-blue-500 p-[10px] rounded-[8px]">
          + {{ $t("message.edit_page.add_image") }}
        </button>
        <div class="file-preview flex flex-wrap lg:w-[600px] gap-[2px] lg:gap-[10px]">
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
        <h2 class="text-sm lg:text-[14px]"> {{ $t("message.edit_page.link") }} </h2>
        <input type="text"
          class="mark-select bg-[#fff] py-[10px] px-[10px] rounded-[10px] w-full lg:w-[500px] mt-[10px] lg:text-[12px]"
          v-model="linkVideo" />
      </div>
      <div class="flex flex-wrap gap-[20px] mt-[30px]">
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">
              {{ $t("message.selects.mark") }}
            </h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedMark" @change="fetchModels()">
              <option value="" selected> {{ $t("message.filter_page.any") }} </option>
              <optgroup>
                <option v-for="make in makes" :key="make" :value="make.van_make_name">
                  {{ make.van_make_name }}
                </option>
                <option value="other">{{ $t("message.filter_page.other") }}</option>
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
            {{ $t("message.filter_page.category") }}
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            v-model="selectedCategory" type="text">
            <option value="" data-track-as="any">{{ $t("message.filter_page.any") }}</option>
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
        <h3 class="text-[14px]">{{ $t("message.filter_page.condition") }}</h3>
        <div class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[244px] mt-[10px] mb-[10px]">
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Any',
              'bg-orange': selectedCondition === 'Any',
            }" class="ml-10px" @click="selectCondition('Any')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.any") }}</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'New',
              'bg-orange': selectedCondition === 'New',
            }" @click="selectCondition('New')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.new") }}</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Used',
              'bg-orange': selectedCondition === 'Used',
            }" @click="selectCondition('Used')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.used") }}</span>
          </label>
        </div>
      </div>

      <div class="price-tab flex items-center gap-[21px] lg:gap-[30px]">
        <div class="price dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">{{ $t("message.filter_page.price") }}</h2>
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
            <li data-value="Free" @click="selectNumberPrice('Free')">{{ $t("message.filter_page.free") }}</li>
            <li data-value="500" @click="selectNumberPrice('500')">
              500
            </li>
            <li data-value="750" @click="selectNumberPrice('750')">
              750
            </li>
            <li data-value="1000" @click="selectNumberPrice('1000')">
              1000
            </li>
            <li data-value="1500" @click="selectNumberPrice('1500')">
              1500
            </li>
            <li data-value="1750" @click="selectNumberPrice('1750')">
              1750
            </li>
            <li data-value="2000" @click="selectNumberPrice('2000')">
              2000
            </li>
            <li data-value="2500" @click="selectNumberPrice('2500')">
              2500
            </li>
            <li data-value="3000" @click="selectNumberPrice('3000')">
              3000
            </li>
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
          <h2 class="text-sm lg:text-[14px]"> {{ $t("message.filter_page.country") }}</h2>
          <select
            class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
          <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.postcode") }}</h2>
          <input
            class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
            type="text" pattern="\d*" v-model="zipCode" />
        </div>
        <!--  -->
        <div class="radius dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">{{ $t("message.filter_page.radius") }}</h2>
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
        <h3 class="text-[16px]">{{ $t("message.filter_page.fuel_type.title") }}</h3>
        <div class="filter-cars flex flex-wrap gap-x-[60px] mt-[20px]">
          <!-- cabrio -->
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Diesel',
              'bg-orange': selectedFuel === 'Diesel',
            }" @click="selectFuel('Diesel')" />

            {{ $t("message.filter_page.fuel_type.diesel") }} </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (diesel/electric)',
              'bg-orange': selectedFuel === 'Hybrid (diesel/electric)',
            }" @click="selectFuel('Hybrid (diesel/electric)')" />

            {{ $t("message.filter_page.fuel_type.hybdis") }} </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Natural Gas',
              'bg-orange': selectedFuel === 'Natural Gas',
            }" @click="selectFuel('Natural Gas')" />

            {{ $t("message.filter_page.fuel_type.natgas") }} </label>
          <label class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px] p-0">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Other',
              'bg-orange': selectedFuel === 'Other',
            }" @click="selectFuel('Other')" />

            {{ $t("message.filter_page.fuel_type.other") }}
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Petrol',
              'bg-orange': selectedFuel === 'Petrol',
            }" @click="selectFuel('Petrol')" />

            {{ $t("message.filter_page.fuel_type.petrol") }}
          </label>
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Electric',
              'bg-orange': selectedFuel === 'Electric',
            }" @click="selectFuel('Electric')" />

            {{ $t("message.filter_page.fuel_type.electric") }}
          </label>
          <!-- estate -->
          <label class="custom-checkbox p-0 flex gap-4 text-[14px] items-center h-10 w-[206px] pb-4">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hydrogen',
              'bg-orange': selectedFuel === 'Hydrogen',
            }" @click="selectFuel('Hydrogen')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.fuel_type.hydrogen") }}</span>
          </label>

          <!-- saloon -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[200px] pb-4">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Plug-in hybrid',
              'bg-orange': selectedFuel === 'Plug-in hybrid',
            }" @click="selectFuel('Plug-in hybrid')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.fuel_type.hybrid") }}</span>
          </label>
          <!-- small -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (petrol/electric)',
              'bg-orange': selectedFuel === 'Hybrid (petrol/electric)',
            }" @click="selectFuel('Hybrid (petrol/electric)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.fuel_type.pethybrid") }}</span>
          </label>
          <!-- sports -->
          <label class="custom-checkbox p-0 flex gap-3 items-center h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'LPG',
              'bg-orange': selectedFuel === 'LPG',
            }" @click="selectFuel('LPG')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.fuel_type.lpg") }}</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 flex gap-4 items-center h-10 w-[206px] pb-[23px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Ethanol (FFV, E85, etc.)',
              'bg-orange': selectedFuel === 'Ethanol (FFV, E85, etc.)',
            }" @click="selectFuel('Ethanol (FFV, E85, etc.)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.fuel_type.ethanol") }}</span>
          </label>
        </div>
      </div>
      <div class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[30px]">
        <div class="power dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">{{ $t("message.filter_page.power") }}</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="power" @focus="openPowerDropdown" @input="filterOptions"
              @blur="openPowerDropdown" />

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
        <label for="condition-any" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedConditioning" :class="{
            'bg-transparent': selectedConditioning !== 'Hp',
            'bg-orange': selectedConditioning === 'Hp',
          }" @click="selectAirConditioning('Hp')" />
          <span class="ml-[10px]">Hp</span>
        </label>
        <label for="condition-any" @click="selectAirConditioning('kW')" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedConditioning" :class="{
            'bg-transparent': selectedConditioning !== 'kW',
            'bg-orange': selectedConditioning === 'kW',
          }" />
          <span class="ml-[10px]">kW</span>
        </label>
      </div>

      <div class="flex gap-[40px] lg:gap-[100px]">
        <div class="
			">
          <h3 class="mt-[20px] lg:mt-[60px]">{{ $t("message.filter_page.transmission.title") }}</h3>
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[210px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent':
                selectedTransmision !== 'Automatic transmissio',
              'bg-orange': selectedTransmision === 'Automatic transmissio',
            }" @click="selectTransmision('Automatic transmissio')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.transmission.auto") }}</span>
          </label>
        </div>
        <div class="mt-[43px] lg:mt-[84px]">
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Semi-automatic',
              'bg-orange': selectedTransmision === 'Semi-automatic',
            }" @click="selectTransmision('Semi-automatic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.transmission.semi") }}</span>
          </label>
        </div>
        <div class="mt-[43px] lg:mt-[84px]">
          <label class="custom-checkbox flex gap-[10px] p-0 items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Manual gearbox',
              'bg-orange': selectedTransmision === 'Manual gearbox',
            }" @click="selectTransmision('Manual gearbox')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.transmission.manual") }}</span>
          </label>
        </div>
      </div>
      <div class="flex gap-[30px]">
        <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
          <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.sticker") }}</h2>
          <select
            class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="stickerEmission">
            <option value="any" selected>{{ $t("message.filter_page.any") }}</option>
            <option value="1(None)">1(None)</option>
            <option value="2(Red)">2(Red)</option>
            <option value="3(Yellow)">3(Yellow)</option>
            <option value="4(Green)">4(Green)</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
          <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.class") }}</h2>
          <select
            class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="classEmision">
            <option value="any" selected>{{ $t("message.filter_page.any") }}</option>
            <option value="Euro1">Euro1</option>
            <option value="Euro2">Euro2</option>
            <option value="Euro3">Euro3</option>
            <option value="Euro4">Euro4</option>
            <option value="Euro5">Euro5</option>
            <option value="Euro6">Euro6</option>
            <option value="Euro6с">Euro6с</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
      </div>
      <div class="mt-[10px]">
        <h3 class="text-[16px]">{{ $t("message.filter_page.exterior_color.title") }}</h3>
        <div class="filter-cars flex flex-wrap gap-x-[20px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Beige',
              'bg-orange': selectedExteriorColour === 'Beige',
            }" @click="selectExteriorColour('Beige')" />

            {{ $t("message.filter_page.exterior_color.beige") }} </label>
          <label
            class="custom-checkbox custom-brown flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Brown',
              'bg-orange': selectedExteriorColour === 'Brown',
            }" @click="selectExteriorColour('Brown')" />

            {{ $t("message.filter_page.exterior_color.brown") }} </label>
          <label
            class="custom-checkbox custom-gold flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Gold',
              'bg-orange': selectedExteriorColour === 'Gold',
            }" @click="selectExteriorColour('Gold')" />

            {{ $t("message.filter_page.exterior_color.gold") }} </label>
          <label
            class="custom-checkbox custom-green flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Green',
              'bg-orange': selectedExteriorColour === 'Green',
            }" @click="selectExteriorColour('Green')" />

            {{ $t("message.filter_page.exterior_color.green") }} </label>
          <label
            class="custom-checkbox custom-red flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Red',
              'bg-orange': selectedExteriorColour === 'Red',
            }" @click="selectExteriorColour('Red')" />

            {{ $t("message.filter_page.exterior_color.red") }} </label>
          <label
            class="custom-checkbox custom-silver flex gap-[2px] lg:gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Silver',
              'bg-orange': selectedExteriorColour === 'Silver',
            }" @click="selectExteriorColour('Silver')" />

            {{ $t("message.filter_page.exterior_color.silver") }} </label>
          <!-- estate -->
          <label class="custom-checkbox custom-white flex gap-4 text-[14px] items-center h-10 w-[100px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'White',
              'bg-orange': selectedExteriorColour === 'White',
            }" @click="selectExteriorColour('White')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.exterior_color.white") }}</span>
          </label>

          <!-- saloon -->
          <label class="custom-checkbox custom-blue flex gap-4 items-center h-10 w-[120px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Blue',
              'bg-orange': selectedExteriorColour === 'Blue',
            }" @click="selectExteriorColour('Blue')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.exterior_color.blue") }}</span>
          </label>
          <!-- small -->
          <label class="custom-checkbox custom-yellow flex gap-4 items-center h-10 w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Yellow',
              'bg-orange': selectedExteriorColour === 'Yellow',
            }" @click="selectExteriorColour('Yellow')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.exterior_color.yellow") }}</span>
          </label>
          <!-- sports -->
          <label class="custom-checkbox custom-grey flex gap-3 items-center h-10 w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Grey',
              'bg-orange': selectedExteriorColour === 'Grey',
            }" @click="selectExteriorColour('Grey')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">{{ $t("message.filter_page.exterior_color.grey") }}</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-orange flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Orange',
              'bg-orange': selectedExteriorColour === 'Orange',
            }" @click="selectExteriorColour('Orange')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.exterior_color.orange") }}</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-black flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Black',
              'bg-orange': selectedExteriorColour === 'Black',
            }" @click="selectExteriorColour('Black')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.exterior_color.black") }}</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-purple flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Purple',
              'bg-orange': selectedExteriorColour === 'Purple',
            }" @click="selectExteriorColour('Purple')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.exterior_color.purple") }}</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox custom-metallic flex gap-4 items-center h-10 w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Metallic',
              'bg-orange': selectedExteriorColour === 'Metallic',
            }" @click="selectExteriorColour('Metallic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">{{ $t("message.filter_page.exterior_color.metallic") }}</span>
          </label>
        </div>
      </div>


      <div class="mt-[30px]">
        <h3>{{ $t("message.filter_page.features.others") }}</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedABS" @click="toggleShowCheckbox(0, 'ABS')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedABS" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.abs") }}
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergency"
              @click="toggleShowCheckbox(1, 'Emergency brake assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergency" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.brake") }} </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCentral" @click="toggleShowCheckbox(2, 'Keyless central locking')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCentral" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.central") }} </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSpeed"
              @click="toggleShowCheckbox(3, '	Speed limit control system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSpeed" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.speed") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAdaptive"
              @click="toggleShowCheckbox(4, 'Adaptive cornering lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAdaptive" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.adaptivecor") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTyre" @click="toggleShowCheckbox(5, 'Emergency tyre')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTyre" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.emergy") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLastChanges" @click="toggleShowCheckbox(6, 'Lane change assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLastChanges" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.lanechange") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportsPackage" @click="toggleShowCheckbox(7, 'Sports package')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportsPackage" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sportpackage") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAdaptiveLighting"
              @click="toggleShowCheckbox(8, 'Adaptive lighting')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAdaptiveLighting" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.adaplight") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergencyKit"
              @click="toggleShowCheckbox(9, 'Emergency tyre repair kit')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergencyKit" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.emergykit") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLaserHeadlights"
              @click="toggleShowCheckbox(10, 'Laser headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLaserHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.laser") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportsSuspension" @click="toggleShowCheckbox(11, 'Sports seats')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportsSuspension" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sport") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAirSuspension" @click="toggleShowCheckbox(11, 'Air suspension')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAirSuspension" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.air") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedESP" @click="toggleShowCheckbox(11, 'ESP')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedESP" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.esp") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLEDHeadlights" @click="toggleShowCheckbox(11, 'LED headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLEDHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.ledhead") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedStartStopSystem"
              @click="toggleShowCheckbox(11, 'Start-stop system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedStartStopSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.start") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAlloyWheels" @click="toggleShowCheckbox(11, 'Alloy wheels')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAlloyWheels" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.alloy") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFogLamp" @click="toggleShowCheckbox(11, 'Fog lamp')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFogLamp" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fog") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLEDRunningLights"
              @click="toggleShowCheckbox(11, 'LED running lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLEDRunningLights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.led") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSteelWheels" @click="toggleShowCheckbox(11, 'Steel wheels')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSteelWheels" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.steel") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAllTyres" @click="toggleShowCheckbox(11, 'All season tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAllTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.season") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFourWheelDrive"
              @click="toggleShowCheckbox(11, 'Four wheel drive')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFourWheelDrive" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fourwheel") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLightSensor" @click="toggleShowCheckbox(11, 'Light sensor')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLightSensor" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.light") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSummerTyres" @click="toggleShowCheckbox(11, 'Summer tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSummerTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.summer") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedBixenonHeadlights"
              @click="toggleShowCheckbox(11, 'Bi-xenon headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedBixenonHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.bixenon") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedGlarefreeHigh"
              @click="toggleShowCheckbox(11, 'Glare-free high beam headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedGlarefreeHigh" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.glare") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedNightVisionAssist"
              @click="toggleShowCheckbox(11, 'Night vision assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedNightVisionAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.night") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSunroof" @click="toggleShowCheckbox(11, 'Sunroof')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSunroof" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sunroof") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedBlindSpotAssist"
              @click="toggleShowCheckbox(11, 'Blind spot assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedBlindSpotAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.blind") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeadlightWasherSystem"
              @click="toggleShowCheckbox(11, 'Headlight washer system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeadlightWasherSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.headlight") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPanoramicRoof" @click="toggleShowCheckbox(11, 'Panoramic roof')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPanoramicRoof" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.panoramic") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTractionСontrol"
              @click="toggleShowCheckbox(11, 'Traction control')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTractionСontrol" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.traction") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCentralLocking" @click="toggleShowCheckbox(11, 'Central locking')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCentralLocking" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.centralocking") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeatedWindshield"
              @click="toggleShowCheckbox(11, 'Heated windshield')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeatedWindshield" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.heatwind") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPowerAssistedSteering"
              @click="toggleShowCheckbox(11, 'Power Assisted Steering')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPowerAssistedSteering" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.powerassistedsteering") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTrafficSign"
              @click="toggleShowCheckbox(11, 'Traffic sign recognition')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTrafficSign" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.trafficsign") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDayTimeRunning"
              @click="toggleShowCheckbox(11, 'Daytime running lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDayTimeRunning" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.daytimerunning") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHighBeamAssist"
              @click="toggleShowCheckbox(11, 'High beam assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHighBeamAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.highbeamassist") }}
          </label>

          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedRainSensor" @click="toggleShowCheckbox(11, 'Rain sensor')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedRainSensor" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.rainsensor") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTyrePressure"
              @click="toggleShowCheckbox(11, 'Tyre pressure monitoring')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTyrePressure" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.tyrepressure") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDistanceWarning"
              @click="toggleShowCheckbox(11, 'Distance warning system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDistanceWarning" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.distancewarning") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHillStartAssist"
              @click="toggleShowCheckbox(11, 'Hill-start assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHillStartAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.hillstart") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedRoofRack" @click="toggleShowCheckbox(11, 'Roof rack')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedRoofRack" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.roofrack") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWinterTyres" @click="toggleShowCheckbox(11, 'Winter tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWinterTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.wintertyres") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWinterTyres" @click="toggleShowCheckbox(11, 'Electric tailgate')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWinterTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.electrictailgate") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedImmobilizer" @click="toggleShowCheckbox(11, 'Immobilizer')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedImmobilizer" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.immobilizer") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSpareTyre" @click="toggleShowCheckbox(11, 'Spare tyre')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSpareTyre" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sparetyre") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedXenonHeadLights"
              @click="toggleShowCheckbox(11, 'Xenon headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedXenonHeadLights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.xenonheadlights") }}
          </label>

        </div>
      </div>
      <div class="condition mt-[40px]">
        <h3 class="text-[16px]">Air conditioning</h3>
        <div class="condition mt-[40px]">
        <h3 class="text-[16px]">{{ $t("message.filter_page.conditioning.title") }}</h3>
        <div class="radios-type flex flex-wrap gap-x-[20px] gap-y-[30px] mt-[20px]">
          <label class="w-[250px]" for="manual">
            <input type="radio" id="manual" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Manual or automatic climatisation',
              'bg-orange': selectedConditioning === 'Manual or automatic climatisation',
            }" @click="selectAirConditioning('Manual or automatic climatisation')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.manual") }}
            </span>
          </label>
          <label class="w-[250px]" for="auto-climat">
            <input type="radio" id="auto-climat" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 2 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 2 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 2 zones')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.zone2") }}
            </span>
          </label>

          <label class="w-[250px]" for="auto2">
            <input type="radio" id="auto2" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 4 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 4 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 4 zones')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.zone4") }}</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'No climatisation',
              'bg-orange': selectedConditioning === 'No climatisation',
            }" @click="selectAirConditioning('No climatisation')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.no") }}</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic air conditioning',
              'bg-orange': selectedConditioning === 'Automatic air conditioning',
            }" @click="selectAirConditioning('Automatic air conditioning')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.auto") }}
            </span>
          </label>
          <label class="w-[250px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Automatic climatisation, 3 zones',
              'bg-orange': selectedConditioning === 'Automatic climatisation, 3 zones',
            }" @click="selectAirConditioning('Automatic climatisation, 3 zones')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.conditioning.zone3") }}
            </span>
          </label>
        </div>
      </div>
      <div class="condition mt-[20px]">
        <h3>{{ $t("message.filter_page.trailer.title") }}</h3>
        <div class="radios-type flex gap-x-[10px] lg:gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Fix, detachable or swiveling',
              'bg-orange': selectedTrailer === 'Fix, detachable or swiveling',
            }" @click="selectTrailer('Fix, detachable or swiveling')" />
            <span class="ml-[10px]">{{ $t("message.filter_page.trailer.fix") }}</span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Detachable or swiveling',
              'bg-orange': selectedTrailer === 'Detachable or swiveling',
            }" @click="selectTrailer('Detachable or swiveling')" />
            <span class="ml-[10px]">{{ $t("message.filter_page.trailer.det") }}</span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Swiveling',
              'bg-orange': selectedTrailer === 'Swiveling',
            }" @click="selectTrailer('Swiveling')" />
            <span class="ml-[10px]">{{ $t("message.filter_page.trailer.swi") }}</span>
          </label>
        </div>
      </div>
      <div class="condition">
        <h3>{{ $t("message.filter_page.cruise.cruise") }}
        </h3>
        <div class="radios-type flex gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Cruise control',
              'bg-orange': selectedCruise === 'Cruise control',
            }" @click="selectCruise('Cruise control')" />
            <span class="ml-[10px]">{{ $t("message.filter_page.cruise.cruise") }}</span>
          </label>
          <label>
            <input type="radio" id="condition-adap" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Adaptive Cruise Control',
              'bg-orange': selectedCruise === 'Adaptive Cruise Control',
            }" @click="selectCruise('Adaptive Cruise Control')" />
            <span class="ml-[10px]">{{ $t("message.filter_page.cruise.adaptive") }}</span>
          </label>
        </div>
      </div>
        <div class="flex flex-wrap gap-x-[20px] lg:gap-x-[40px]">
          <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
            <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.axles") }}</h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedAxles">
              <option value="any" selected>Any</option>
              <option value="1">Up to 1</option>
              <option value="2">Up to 2</option>
              <option value="3">Up to 3</option>
              <option value="4">Up to 4</option>
            </select>
            <spanw class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></spanw>
          </div>
          <div class="relative mt-[8px]  lg:mt-[10px] ">
            <h2 class="text-xs lg:text-[14px] w-[160px]">
              {{ $t("message.filter_page.cruise.perm") }}            </h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedGvw">
              <option value="any" selected>Any</option>
              <option value="1">Up to 1</option>
              <option value="2">Up to 2</option>
              <option value="3">Up to 3</option>
              <option value="4">Up to 4</option>
            </select>
            <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
          </div>
          <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
            <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.wheelformula") }}</h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedWheelFormula">
              <option value="any" selected>Any</option>
              <option value="1">Up to 1</option>
              <option value="2">Up to 2</option>
              <option value="3">Up to 3</option>
              <option value="4">Up to 4</option>
            </select>
            <span class="arrow w-[7px] h-[7px] absolute right-3 lg:right-5 xl:right-2 bottom-4"></span>
          </div>
          <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
            <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.hydraulic") }}</h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedHydraulic">
              <option value="any" selected>Any</option>
              <option value="1">Up to 1</option>
              <option value="2">Up to 2</option>
              <option value="3">Up to 3</option>
              <option value="4">Up to 4</option>
            </select>
            <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
          </div>
          <div class="marke_select_div relative mt-[20px] lg:mt-[30px] ">
            <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.drivecab") }}</h2>
            <select
              class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
      </div>
    </div>
    <div class="interior">
      <div class="condition mt-[30px]">
        <h3 class="text-[16px]">{{ $t("message.filter_page.vendor") }}</h3>
        <div class="radios-type flex gap-[40px] mt-[20px]">
          <label>
            <input type="radio" id="vendor-private" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Private seller',
              'bg-orange': selectedVendor === 'Private seller',
            }" @click="selectVendor('Private seller')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.private") }}</span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Dealer',
              'bg-orange': selectedVendor === 'Dealer',
            }" @click="selectVendor('Dealer')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.dealer") }}</span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Company vehicles',
              'bg-orange': selectedVendor === 'Company vehicles',
            }" @click="selectVendor('Company vehicles')" />
            <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.company") }}</span>
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
            {{ $t("message.filter_page.discount") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTaxi" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTrailerCoupling" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.trailer") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedVAT" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedVAT" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.vat") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWarranty" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWarranty" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.warranty") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEnvironmental" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEnvironmental" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.hu_valid") }}
          </label>
        </div>
      </div>
      <div class="">
        <h2 class="mt-[30px] text-[16px]">{{ $t("message.filter_page.description") }}</h2>
        <textarea class="bg-[#ccc] mt-[10px] p-[20px]" name="" id="" cols="40" rows="5" placeholder="Description "
          v-model="descriptionText"></textarea>
      </div>
      <div>
        <div class="flex gap-[30px] justify-end">
          <button class="bg-red-500 rounded-[8px] p-[10px]" @click="handleCancelButtonClick">
            {{ $t("message.filter_page.cancel") }}
          </button>
          <button @click="editAddTrucks" class="bg-blue-500 rounded-[8px] p-[10px]">
            {{ $t("message.filter_page.edit") }}
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
import TheLoader from "../../../components/TheLoader.vue";
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
  components: {
    TheLoader
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
      isLoading: true,
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
      isCheckedTrailerCoupling: false,
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
      isCheckedDiscount: false,
      isCheckedFullLeather: false,
      isCheckedOther: false,
      isCheckedVAT: false,
      selectedMaterial: [],
      selectedAirbag: "AnyExterior",
      selectedAxles: "",
      selectedWheelFormula: "",
      isCheckedAlarmSystem: false,
      isCheckedDisable: false,
      isCheckedHeated: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedMunicipal: false,
      isCheckedRenting: false,
      isCheckedDamaged: false,
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
      selectedMunicipal: false,
      selectedMaterial: "",
      selectedMotorbike: "",
      selectedGvw: "",
      vanId: "",
      options: [],

    };
  },
  props: {
    createAdd: Boolean, // Определите тип данных в соответствии с вашими требованиями
  },
  methods: {
    async fetchAdCar() {
      await http.get(`/coaches/${this.vanId}`).then((res) => {
        this.dataAd = res.data.data
        this.linkVideo = this.dataAd.coache_video_link
        this.selectedMark = this.dataAd.coache_make
        this.selectedModel = this.dataAd.coache_model
        this.selectedCategory = this.dataAd.coache_category
        this.selectedMotorbike = this.dataAd.coache_type
        this.selectedCondition = this.dataAd.coache_condition
        this.price = this.dataAd.coache_price
        this.inputValue = this.dataAd.coache_firt_date_year
        this.inputKilometer = this.dataAd.coache_kilometre
        this.preOwners = this.dataAd.coache_number_owners
        this.selectedCountry = this.dataAd.coache_country
        this.zipCode = this.dataAd.coache_city_zipcode
        this.radius = this.dataAd.coache_radius
        this.selectedFuel = this.dataAd.coache_fuel_type
        this.power = this.dataAd.coache_power
        this.cubic = this.dataAd.coache_cubic_capacity
        this.selectedConditioning = this.dataAd.coache_air_conditioning
        this.selectedTransmision = this.dataAd.coache_transmission
        this.selectedExteriorColour = this.dataAd.coache_exterior_colour
        this.selectedCruise = this.dataAd.coache_cruise_control
        this.selectedTrailer = this.dataAd.coache_trailer_coupling
        // this.selectedOthers = this.dataAd.coache_interior_features
        this.stickerEmission = this.dataAd.coache_emissions_sticker
        this.classEmision = this.dataAd.coache_emission_class
        this.selectedGvw = this.dataAd.coache_gvw
        this.selectedLength = this.dataAd.coache_length
        this.selectedWheelFormula = this.dataAd.coache_wheel_formula
        this.selectedHydraulic = this.dataAd.coache_hydraulic_installation
        this.selectedAxles = this.dataAd.coache_axles
        this.selectedDriving = this.dataAd.coache_radio
        this.selectedParking = this.dataAd.coache_parking_sensors
        this.selectedInteriorColour = this.dataAd.coache_interior_colour
        this.selectedVendor = this.dataAd.coache_vendor
        this.isCheckedDiscount = this.dataAd.coache_discount_offers
        this.isCheckedNon = this.dataAd.coache_non_smoker
        this.isCheckedTaxi = this.dataAd.coache_taxi
        this.isCheckedVAT = this.dataAd.coache_vat
        this.isCheckedWarranty = this.dataAd.coache_warranty
        this.approveUsed = this.dataAd.coache_programme
        this.descriptionText = this.dataAd.coache_describtion
        this.isLoading = false
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
    showTab2() {
      this.activeTab = "sell";
    },
    async editAddTrucks() {
      const formData = new FormData();

      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("photos", this.selectedFiles[i]);
      }

      formData.append("id", this.vanId);
      formData.append("coache_make", this.selectedMark);
      formData.append("coache_model", this.selectedModel);
      formData.append("coache_condition", this.selectedCondition);
      formData.append("coache_category", this.selectedCategory);
      formData.append("coache_video_link", this.linkVideo);
      formData.append("coache_price", parseInt(this.price));
      formData.append("coache_price_type", this.activeTab);
      formData.append("coache_firt_date", this.inputValue);
      formData.append("coache_firt_date_year", parseInt(this.inputValue));
      formData.append("coache_kilometre", parseInt(this.inputKilometer));
      formData.append("coache_power", parseInt(this.power));
      formData.append("coache_country", this.selectedCountry);
      formData.append("coache_city_zipcode", this.zipCode);
      formData.append("coache_radius", parseInt(this.radius));
      formData.append("coache_fuel_type", this.selectedFuel);
      formData.append("coache_transmission", this.selectedTransmision);
      formData.append("coache_emission_class", this.classEmision);
      formData.append("coache_emissions_sticker", this.stickerEmission);
      formData.append(
        "coache_features",
        this.selectedOthers
      );
      formData.append("coache_air_conditioning", this.selectedConditioning);
      formData.append("coache_axles", parseInt(this.selectedAxles));
      formData.append("coache_wheel_formula", this.selectedWheelFormula);
      formData.append("coache_gvw", parseInt(this.selectedGvw));
      formData.append("coache_hydraulic_installation", this.selectedHydraulic);
      formData.append("coache_trailer_coupling_fix", this.isCheckedTrailerCoupling);
      formData.append("coache_cruise_control", this.selectedCruise);
      formData.append("coache_driving_cab", this.classEmision);
      formData.append("coache_vat", this.isCheckedVAT);
      formData.append("coache_discount_offers", this.isCheckedDiscount);
      formData.append("coache_interior_features", this.selectedOthers);
      formData.append("coache_exterior_colour", this.selectedExteriorColour);
      formData.append("coache_vendor", this.selectedVendor);
      formData.append("coache_full_service_history", this.isCheckedHistory);
      formData.append("coache_damaged", this.isCheckedDamaged);
      formData.append("coache_municipal", this.isCheckedMunicipal);
      formData.append("coache_new_hu", this.isCheckedEnvironmental);
      formData.append("coache_renting_possible", this.isCheckedRenting);
      formData.append("coache_dealer_rating", 4);
      formData.append("coache_describtion", this.descriptionText);
      formData.append("user_id", this.userI);
      formData.append(
        "user_phone",
        `${this.userCodeNumber}${this.userPre}${this.userPhone}`
      );
      formData.append("user_email", this.uEmail);
      await http.put("/coaches/update", formData).then((response) => {
        console.log(response);
        const responseData = response.data.data;
        const store = useTabsStore();
        store.setActiveTab("tab-11");
        this.$router.push({ name: "profile-settings" })
      });
    },
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
      console.log(this.selectedOthers);
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

    async fetchModels() {
      if (!this.selectedMark) {
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `/car/model?mark_id=${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      await http
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
    async fetchMarks() {
      await http
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
    },
    handleCancelButtonClick() {
      const store = useTabsStore();
      store.setActiveTab("tab-11");
      this.$router.push({ name: "profile-settings" })
    },
  },
  mounted() {
    this.selectedMark = localStorage.getItem("mark");
    this.userI = localStorage.getItem("u-i");
    this.uEmail = localStorage.getItem("u-e");

    this.userPhone = localStorage.getItem("u-phone");
    this.userCodeNumber = localStorage.getItem("u-code");
    this.userPre = localStorage.getItem("u-pre");
    this.vanId = this.$route.params.id;
    this.fetchMarks()
    this.fetchModelYears();
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
