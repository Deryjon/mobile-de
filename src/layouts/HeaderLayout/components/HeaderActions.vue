<template>
  <div class="actions gap-[10px] items-center">
    <div class="language dropdown-container">
      <h2 class="text-[14px]">Language</h2>
      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[150px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          @focus="openPriceDropdown"
          @click="openPriceDropdown"
        >
          <p>{{ inputValue }}</p>
        </div>

        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
      <ul
        v-if="isOpenPrice"
        class="dropdown-options w-[150px] text-[10px] lg:text-[12px]"
      >
        <div class="flex items-center">
          <img
            src="../../../assets/icons/gb.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key @click="selectLanguage('en', 'English')">English</li>
        </div>
        <div class="flex items-center">
          <img
            src="../../../assets/icons/de.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="gr" @click="selectLanguage('gr', 'Germany')">
            Germany
          </li>
        </div>
        <div class="flex items-center">
          <img
            src="../../../assets/icons/fr.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="fr" @click="selectLanguage('fr', 'French')">French</li>
        </div>

        <div class="flex items-center">
          <img
            src="../../../assets/icons/ru.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="ru" @click="selectLanguage('ru', 'Russia')">Russia</li>
        </div>

        <div class="flex items-center">
          <img
            src="../../../assets/icons/pl.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="pol" @click="selectLanguage('pol', 'Polish')">
            Polish
          </li>
        </div>
        <div class="flex items-center">
          <img
            src="../../../assets/icons/es.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="sp" @click="selectLanguage('sp', 'Spanish')">
            Spanish
          </li>
        </div>

        <div class="flex items-center">
          <img
            src="../../../assets/icons/se.svg"
            class="w-[50px] h-[20px]"
            alt=""
          />
          <li data-key="sw" @click="selectLanguage('sw', 'Swedish')">
            Swedish
          </li>
        </div>
      </ul>
    </div>
    <!--	 <div class="language relative inline-block">

				<select
					name=""
					class="outline-none rounded-[10px] w-[130px] lg:w-[90px] xl:w-[120px] px-[10px] py-[6px] lg:py-[6px] lg:px-[10px] text-base lg:text-[14px] font-normal pr-[30px]"
					:class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
					v-model="language"
					@change="changeLanguage"
				>
					<optgroup label="Language">
						<option class="pl-[30px]" value="en" data-country-code="usa">
							English</option>
						<option value="fr" data-country-code="france">France</option>
						<option value="gr" data-country-code="france">Germany</option>
						<option value="sp">Spanish</option>
						<option value="sw">Swedish</option>
						<option value="ru">Russa</option>
						<option value="pol">Polish</option>
					</optgroup>
				</select>
				<span class="arrow w-[7px] h-[7px]"></span>
			</div> -->

    <!--  -->
    <div class="country dropdown-container">
      <h2 class="text-[14px]">Country</h2>
      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[150px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          @focus="openCountryDropdown"
          @blur="closeCountryDropdown"
          @click="openCountryDropdown"
        >
          <p>{{ inputCountry }}</p>
        </div>

        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
      <ul
        v-if="isOpen"
        class="dropdown-options text-[10px] lg:text-[12px] w-[150px]"
      >
        <div class="countries">
          <div class="flex items-center">
            <img
              src="../../../assets/icons/be.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="be" @click="selectCountry('Belgium')">Belgium</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/ca.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="can" @click="selectCountry('Canda')">Canda</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/dk.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="dk" @click="selectCountry('Danmark')">Danmark</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/gb.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="us" @click="selectCountry('England')">England</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/fr.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="fr" @click="selectCountry('France')">France</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/de.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="gr" @click="selectCountry('Germany')">Germany</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/it.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="ita" @click="selectCountry('Italy')">Italy</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/ma.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCountry('Morocco')">Morocco</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/nl.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="nt" @click="selectCountry('Netherland')">
              Netherland
            </li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/ru.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCountry('Russa')">Russa</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/pl.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCountry('Poland')">Poland</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/es.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="sp" @click="selectCountry('Spanien')">Spanien</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/se.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="sp" @click="selectCountry('Sweden')">Sweden</li>
          </div>
        </div>
      </ul>
    </div>
    <div class="cities dropdown-container" v-show="showCities">
      <h2 class="text-[14px]">Cities</h2>
      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[150px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
          @focus="openCitiesDropdown"
          @click="openCitiesDropdown"
        >
          <p>{{ selectedCity  }}</p>
        </div>

        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
      <ul
        v-if="isCities"
        class="dropdown-options text-[10px] lg:text-[12px] w-[150px]"
      >
			<li v-for="city in citiesData[inputCountry]" :key="city" @click="selectCity(city)">
          {{ city }}
        </li>
        <!-- <div class="countries">
          <div class="flex items-center">
            <img
              src="../../../assets/icons/be.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="be" @click="selectCity('Belgium')">Belgium</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/ca.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="can" @click="select('Canda')">Canda</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/dk.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="dk" @click="selectCity('Danmark')">Danmark</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/gb.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="us" @click="selectCity('England')">England</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/fr.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="fr" @click="selectCity('France')">France</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/de.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="gr" @click="selectCity('Germany')">Germany</li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/it.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="ita" @click="selectCity('Italy')">Italy</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/ma.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCity('Morocco')">Morocco</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/nl.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="nt" @click="selectCity('Netherland')">
              Netherland
            </li>
          </div>

          <div class="flex items-center">
            <img
              src="../../../assets/icons/ru.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCity('Russa')">Russa</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/pl.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="mor" @click="selectCity('Poland')">Poland</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/es.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="sp" @click="selectCity('Spanien')">Spanien</li>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/se.svg"
              class="w-[50px] h-[20px]"
              alt=""
            />
            <li data-key="sp" @click="selectCity('Sweden')">Sweden</li>
          </div>
        </div> -->
      </ul>
    </div>
    <button
      class="btn outline-none mt-[20px] rounded-[10px] w-[130px] lg:w-[120px] px-[2px] py-[6px] lg:py-[10px] lg:px-[5px] text-xs font-normal"
      :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
    >
      {{ $t("message.header.sell") }}
    </button>
  </div>
</template>
<script>
import { useDarkModeStore } from "@/store/dark-mode.js";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
  data() {
    return {
      language: null,
      isOpen: false,
      isCities: false,
      isOpenKilometer: false,
      isOpenPrice: false,
      inputValue: "",
      inputCountry: "Sweden",
      selectedCity : "",
      inputKilometer: "",
      inputPrice: "English",
      options: [],
      filteredOptions: [],
      showCities: false,
			citiesData: {
				Belgium: ["Brussels", "Antwerp", "Ghent"],
      Canda: ["Toronto", "Vancouver", "Montreal"],
      Danmark: ["Copenhagen", "Aarhus", "Odense"],
      England: ["London", "Manchester", "Birmingham"],
      France: ["Paris", "Marseille", "Lyon"],
      Germany: ["Berlin", "Munich", "Hamburg"],
      Italy: ["Rome", "Milan", "Venice"],
      Morocco: ["Casablanca", "Marrakech", "Fez"],
      Netherland: ["Amsterdam", "Rotterdam", "Utrecht"],
      Russa: ["Moscow", "Saint Petersburg", "Novosibirsk"],
      Poland: ["Warsaw", "Krakow", "Wroclaw"],
      Spanien: ["Madrid", "Barcelona", "Seville"],
      Sweden: ["Stockholm", "Gothenburg", "Malmo"],
      
    },
    };
  },
  methods: {
		openCitiesDropdown() {
      if (this.isCities) {
        this.isCities = false;
      } else {
        this.isCities = true;
      }
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeCitiesDropdownOnClickOutside
      );
    },
		closeCitiesDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".cities");
      if (!dropdownElement.contains(event.target)) {
        this.isCities = false;
        document.removeEventListener(
          "click",
          this.closeCitiesDropdownOnClickOutside
        );
      }
    },
		selectCity(city) {
      this.selectedCity  = city;

    },
    openCountryDropdown() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeCountryDropdownOnClickOutside
      );
    },
    closeCountryDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".country");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeCountryDropdownOnClickOutside
        );
      }
    },
    closeCountryDropdown() {
      this.isOpen = false;
    },
    selectCountry(option) {
      this.inputCountry = option;
			this.showCities = true;
			this.isOpen = false;
this.selectedCity = ""; 
    },
    //
    changeLanguage() {
      localStorage.setItem("lang", this.language);
      localStorage.setItem("name", this.inputValue);
      window.location.reload();
    },
    openPriceDropdown() {
      if (this.isOpenPrice) {
        this.isOpenPrice = false; // Close the other dropdown
      } else {
        this.isOpenPrice = true;
      }
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdownOnClickOutside);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".language");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPrice = false;
        document.removeEventListener(
          "click",
          this.closePriceDropdownOnClickOutside
        );
      }
    },
    selectLanguage(key, lang) {
      this.inputValue = lang;
      this.language = key;
      this.isOpenLanguage = false;
      this.changeLanguage(); // Вызываем функцию смены языка при выборе
    },
    closeDropdown() {
      this.isOpen = false;
    },
  },
  created() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "sw");
    } else if (localStorage.getItem("name") == null) {
      localStorage.setItem("name", "Swedish");
    }
    this.language = localStorage.getItem("lang");
    this.inputValue = localStorage.getItem("name");
  },
});
</script>

<style scoped>
select {
  border: 1px solid #7b7c80;
}

select:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

select:focus {
  outline: none;
  box-shadow: 0 0 2px 1px #6a6acc;
}

.bg-white {
  background-color: #fff;
}

.bg-gray-800 {
  background-color: #526d82;
}

.btn {
  border: 1px solid #7b7c80;
}

.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

.arrow {
  position: absolute;
  top: 38%;
  right: 10px;
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}

.language [data-country-code="usa"] {
  background-image: url("../../../assets/icons/ua.svg");
}
.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}

.dropdown-input {
  border: 1px solid #444444;
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
</style>
