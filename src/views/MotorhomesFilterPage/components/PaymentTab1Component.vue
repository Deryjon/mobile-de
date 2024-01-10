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
            placeholder="to"
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
            placeholder="to"
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
        <li key="1920" @click="selectYearsToOption('1920')">1920</li>
  <li key="1921" @click="selectYearsToOption('1921')">1921</li>
  <li key="1922" @click="selectYearsToOption('1922')">1922</li>
  <li key="1923" @click="selectYearsToOption('1923')">1923</li>
  <li key="1924" @click="selectYearsToOption('1924')">1924</li>
  <li key="1925" @click="selectYearsToOption('1925')">1925</li>
  <li key="1926" @click="selectYearsToOption('1926')">1926</li>
  <li key="1927" @click="selectYearsToOption('1927')">1927</li>
  <li key="1928" @click="selectYearsToOption('1928')">1928</li>
  <li key="1929" @click="selectYearsToOption('1929')">1929</li>
  <li key="1930" @click="selectYearsToOption('1930')">1930</li>
  <li key="1931" @click="selectYearsToOption('1931')">1931</li>
  <li key="1932" @click="selectYearsToOption('1932')">1932</li>
  <li key="1933" @click="selectYearsToOption('1933')">1933</li>
  <li key="1934" @click="selectYearsToOption('1934')">1934</li>
  <li key="1935" @click="selectYearsToOption('1935')">1935</li>
  <li key="1936" @click="selectYearsToOption('1936')">1936</li>
  <li key="1937" @click="selectYearsToOption('1937')">1937</li>
  <li key="1938" @click="selectYearsToOption('1938')">1938</li>
  <li key="1939" @click="selectYearsToOption('1939')">1939</li>
  <li key="1940" @click="selectYearsToOption('1940')">1940</li>
  <li key="1941" @click="selectYearsToOption('1941')">1941</li>
  <li key="1942" @click="selectYearsToOption('1942')">1942</li>
  <li key="1943" @click="selectYearsToOption('1943')">1943</li>
  <li key="1944" @click="selectYearsToOption('1944')">1944</li>
  <li key="1945" @click="selectYearsToOption('1945')">1945</li>
  <li key="1946" @click="selectYearsToOption('1946')">1946</li>
  <li key="1947" @click="selectYearsToOption('1947')">1947</li>
  <li key="1948" @click="selectYearsToOption('1948')">1948</li>
  <li key="1949" @click="selectYearsToOption('1949')">1949</li>
  <li key="1950" @click="selectYearsToOption('1950')">1950</li>
  <li key="1951" @click="selectYearsToOption('1951')">1951</li>
  <li key="1952" @click="selectYearsToOption('1952')">1952</li>
  <li key="1953" @click="selectYearsToOption('1953')">1953</li>
  <li key="1954" @click="selectYearsToOption('1954')">1954</li>
  <li key="1955" @click="selectYearsToOption('1955')">1955</li>
  <li key="1956" @click="selectYearsToOption('1956')">1956</li>
  <li key="1957" @click="selectYearsToOption('1957')">1957</li>
  <li key="1958" @click="selectYearsToOption('1958')">1958</li>
  <li key="1959" @click="selectYearsToOption('1959')">1959</li>
  <li key="1960" @click="selectYearsToOption('1960')">1960</li>
  <li key="1961" @click="selectYearsToOption('1961')">1961</li>
  <li key="1962" @click="selectYearsToOption('1962')">1962</li>
  <li key="1963" @click="selectYearsToOption('1963')">1963</li>
  <li key="1964" @click="selectYearsToOption('1964')">1964</li>
  <li key="1965" @click="selectYearsToOption('1965')">1965</li>
  <li key="1966" @click="selectYearsToOption('1966')">1966</li>
  <li key="1967" @click="selectYearsToOption('1967')">1967</li>
  <li key="1968" @click="selectYearsToOption('1968')">1968</li>
  <li key="1969" @click="selectYearsToOption('1969')">1969</li>
  <li key="1970" @click="selectYearsToOption('1970')">1970</li>
  <li key="1971" @click="selectYearsToOption('1971')">1971</li>
  <li key="1972" @click="selectYearsToOption('1972')">1972</li>
  <li key="1973" @click="selectYearsToOption('1973')">1973</li>
  <li key="1974" @click="selectYearsToOption('1974')">1974</li>
  <li key="1975" @click="selectYearsToOption('1975')">1975</li>
  <li key="1976" @click="selectYearsToOption('1976')">1976</li>
  <li key="1977" @click="selectYearsToOption('1977')">1977</li>
  <li key="1978" @click="selectYearsToOption('1978')">1978</li>
  <li key="1979" @click="selectYearsToOption('1979')">1979</li>
  <li key="1980" @click="selectYearsToOption('1980')">1980</li>
  <li key="1981" @click="selectYearsToOption('1981')">1981</li>
  <li key="1982" @click="selectYearsToOption('1982')">1982</li>
  <li key="1983" @click="selectYearsToOption('1983')">1983</li>
  <li key="1984" @click="selectYearsToOption('1984')">1984</li>
  <li key="1985" @click="selectYearsToOption('1985')">1985</li>
  <li key="1986" @click="selectYearsToOption('1986')">1986</li>
  <li key="1987" @click="selectYearsToOption('1987')">1987</li>
  <li key="1988" @click="selectYearsToOption('1988')">1988</li>
  <li key="1989" @click="selectYearsToOption('1989')">1989</li>
  <li key="1990" @click="selectYearsToOption('1990')">1990</li>
  <li key="1991" @click="selectYearsToOption('1991')">1991</li>
  <li key="1992" @click="selectYearsToOption('1992')">1992</li>
  <li key="1993" @click="selectYearsToOption('1993')">1993</li>
  <li key="1994" @click="selectYearsToOption('1994')">1994</li>
  <li key="1995" @click="selectYearsToOption('1995')">1995</li>
  <li key="1996" @click="selectYearsToOption('1996')">1996</li>
  <li key="1997" @click="selectYearsToOption('1997')">1997</li>
  <li key="1998" @click="selectYearsToOption('1998')">1998</li>
  <li key="1999" @click="selectYearsToOption('1999')">1999</li>
  <li key="2000" @click="selectYearsToOption('2000')">2000</li>
  <li key="2001" @click="selectYearsToOption('2001')">2001</li>
  <li key="2002" @click="selectYearsToOption('2002')">2002</li>
  <li key="2003" @click="selectYearsToOption('2003')">2003</li>
  <li key="2004" @click="selectYearsToOption('2004')">2004</li>
  <li key="2005" @click="selectYearsToOption('2005')">2005</li>
  <li key="2006" @click="selectYearsToOption('2006')">2006</li>
  <li key="2007" @click="selectYearsToOption('2007')">2007</li>
  <li key="2008" @click="selectYearsToOption('2008')">2008</li>
  <li key="2009" @click="selectYearsToOption('2009')">2009</li>
  <li key="2010" @click="selectYearsToOption('2010')">2010</li>
  <li key="2011" @click="selectYearsToOption('2011')">2011</li>
  <li key="2012" @click="selectYearsToOption('2012')">2012</li>
  <li key="2013" @click="selectYearsToOption('2013')">2013</li>
  <li key="2014" @click="selectYearsToOption('2014')">2014</li>
  <li key="2015" @click="selectYearsToOption('2015')">2015</li>
  <li key="2016" @click="selectYearsToOption('2016')">2016</li>
  <li key="2017" @click="selectYearsToOption('2017')">2017</li>
  <li key="2018" @click="selectYearsToOption('2018')">2018</li>
  <li key="2019" @click="selectYearsToOption('2019')">2019</li>
  <li key="2020" @click="selectYearsToOption('2020')">2020</li>
  <li key="2021" @click="selectYearsToOption('2021')">2021</li>
  <li key="2022" @click="selectYearsToOption('2022')">2022</li>
  <li key="2023" @click="selectYearsToOption('2023')">2023</li>
  <li key="2024" @click="selectYearsToOption('2024')">2024</li>
  <li key="2025" @click="selectYearsToOption('2025')">2025</li>
  <li key="2026" @click="selectYearsToOption('2026')">2026</li>
  <li key="2027" @click="selectYearsToOption('2027')">2027</li>
  <li key="2028" @click="selectYearsToOption('2028')">2028</li>
  <li key="2029" @click="selectYearsToOption('2029')">2029</li>
  <li key="2030" @click="selectYearsToOption('2030')">2030</li>
  <li key="2031" @click="selectYearsToOption('2031')">2031</li>
  <li key="2032" @click="selectYearsToOption('2032')">2032</li>
  <li key="2033" @click="selectYearsToOption('2033')">2033</li>
  <li key="2034" @click="selectYearsToOption('2034')">2034</li>
  <li key="2035" @click="selectYearsToOption('2035')">2035</li>
  <li key="2036" @click="selectYearsToOption('2036')">2036</li>
  <li key="2037" @click="selectYearsToOption('2037')">2037</li>
  <li key="2038" @click="selectYearsToOption('2038')">2038</li>
  <li key="2039" @click="selectYearsToOption('2039')">2039</li>
  <li key="2040" @click="selectYearsToOption('2040')">2040</li>
  <li key="2041" @click="selectYearsToOption('2041')">2041</li>
  <li key="2042" @click="selectYearsToOption('2042')">2042</li>
  <li key="2043" @click="selectYearsToOption('2043')">2043</li>
  <li key="2044" @click="selectYearsToOption('2044')">2044</li>
  <li key="2045" @click="selectYearsToOption('2045')">2045</li>
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
            placeholder="to"
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
import { useMotorhomeStore } from "@/store/motorhomeDataStore";
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
      priceTo: null,
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
        this.updateMotorhomeData();
      }
    },
    priceTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    inputValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    yearsTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    inputKilometer(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    killometresTo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    huValid(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    preOwners(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    isCheckedHistory(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    isCheckedRoad(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    selectedCountry(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    zipCode(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
    radius(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateMotorhomeData();
      }
    },
  },
  methods: {
    updateMotorhomeData() {
      const motorhomeStore = useMotorhomeStore();
      const motorhomeData = motorhomeStore.motorhomeData;
      motorhomeData.motor_home_price_from = parseInt(this.price);
      motorhomeData.motor_home_price_up_to = parseInt(this.priceTo);
      motorhomeData.motor_home_firt_date_year_from = this.inputValue;
      motorhomeData.motor_home_firt_date_year_up_to = this.yearsTo;
      motorhomeData.motor_home_mileage_from = parseInt(this.inputKilometer);
      motorhomeData.motor_home_mileage_up_to = parseInt(this.killometresTo);
      motorhomeData.motor_home_hu_valid_until = this.huValid;
      motorhomeData.motor_home_previous_owners = this.preOwners;
      motorhomeData.motor_home_full_service_history = this.isCheckedHistory;
      motorhomeData.motor_home_roadworthy = this.isCheckedRoad;
      motorhomeData.motor_home_country = this.selectedCountry;
      motorhomeData.motor_home_city_zipcode = this.zipCode;
      motorhomeData.motor_home_radius = parseInt(this.radius);

      motorhomeStore.updateMotorhomeData();
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
