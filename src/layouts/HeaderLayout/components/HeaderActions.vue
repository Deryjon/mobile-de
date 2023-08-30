<template>
  <div class="actions gap-[10px] items-center mt-[20px]">
    <div class="language dropdown-container mt-[15px]">
      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[135px] h-[35px] outline-none bg-white rounded-[10px] py-[8px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
        v-if="isOpenLanguage"
        class="dropdown-options w-[135px] text-[10px] lg:text-[12px]"
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
    <div class="country dropdown-container mt-[15px]">

      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[135px] h-[35px] outline-none bg-white rounded-[10px] py-[8px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
        class="dropdown-options text-[10px] lg:text-[12px] w-[135px]"
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
    <div class="cities dropdown-container mt-[15px]" >
      <div class="input-container flex relative mt-[5px]">
        <div
          class="dropdown-input mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:max-w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[8px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[11px]"
          @focus="openCitiesDropdown"
          @click="openCitiesDropdown"
        >
          <p>
            {{
                 
              selectedCities.length > 2
                ? selectedCities.slice(1, 3).join(",") + "..."
                : selectedCities.join(", ")
            
            }}
          </p>
        </div>

        <span
          class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
        ></span>
      </div>
      <ul
        v-if="isCities"
        class="dropdown-options text-[10px] lg:text-[12px] w-[150px]"
      >
        <li
          v-for="city in citiesData[inputCountry]"
          :key="city"
          @click="selectCity(city)"
        >
          <input type="checkbox" v-model="selectedCities" :value="city" />
          {{ city }}
        </li>
      </ul>
      <!-- <ul
        v-if="isCities"
        class="dropdown-options text-[10px] lg:text-[12px] w-[150px]"
      >
			<li v-for="city in citiesData[inputCountry]" :key="city" @click="selectCity(city)">
          {{ city }}
        </li>
      </ul> -->

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
    </div>
    <button
      class="dropdown-input mt-[22px] mark_input bg-transparent mark-select w-[200px] lg:w-[150px] xl:w-[165px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[11px]"
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
      language: "Language",
      isOpen: false,
      isCities: false,
      isOpenKilometer: false,
      isOpenLanguage: false,
      inputValue: "Language",
      inputCountry: "Country",
      selectedCity: "",
      inputKilometer: "",
      options: [],
      filteredOptions: [],
      showCities: false,
      selectedCities: ["City's"],
      citiesData: {
        Belgium: [
          "Brussels",
          "Antwerp",
          "Ghent",
          "Bruges",
          "Liege",
          "Namur",
          "Leuven",
          "Mechelen",
          "Charleroi",
          "Hasselt",
        ],
        Canda: [
          "Toronto",
          "Vancouver",
          "Montreal",
          "Calgary",
          "Edmonton",
          "Ottawa",
          "Quebec City",
          "Winnipeg",
          "Halifax",
          "Victoria",
        ],
        Danmark: [
          "Copenhagen",
          "Aarhus",
          "Odense",
          "Aalborg",
          "Esbjerg",
          "Randers",
          "Kolding",
          "Horsens",
          "Vejle",
          "Roskilde",
        ],
        England: [
          "London",
          "Manchester",
          "Birmingham",
          "Liverpool",
          "Leeds",
          "Newcastle",
          "Bristol",
          "Sheffield",
          "Edinburgh",
          "Glasgow",
        ],
        France: [
          "Paris",
          "Marseille",
          "Lyon",
          "Toulouse",
          "Nice",
          "Nantes",
          "Strasbourg",
          "Montpellier",
          "Bordeaux",
          "Lille",
        ],
        Germany: [
          "Berlin",
          "Munich",
          "Hamburg",
          "Frankfurt",
          "Cologne",
          "Stuttgart",
          "Dusseldorf",
          "Dortmund",
          "Essen",
          "Leipzig",
        ],
        Italy: [
          "Rome",
          "Milan",
          "Venice",
          "Florence",
          "Naples",
          "Turin",
          "Bologna",
          "Genoa",
          "Palermo",
          "Verona",
        ],
        Morocco: [
          "Casablanca",
          "Marrakech",
          "Fez",
          "Rabat",
          "Tangier",
          "Agadir",
          "Meknes",
          "Oujda",
          "Kenitra",
          "Fes",
        ],
        Netherlands: [
          "Amsterdam",
          "Rotterdam",
          "Utrecht",
          "The Hague",
          "Eindhoven",
          "Tilburg",
          "Groningen",
          "Almere",
          "Breda",
          "Nijmegen",
        ],
        Russa: [
          "Moscow",
          "Saint Petersburg",
          "Novosibirsk",
          "Yekaterinburg",
          "Kazan",
          "Nizhny Novgorod",
          "Chelyabinsk",
          "Samara",
          "Omsk",
          "Rostov-on-Don",
        ],
        Poland: [
          "Warsaw",
          "Krakow",
          "Wroclaw",
          "Poznan",
          "Gdansk",
          "Szczecin",
          "Bydgoszcz",
          "Lodz",
          "Katowice",
          "Lublin",
        ],
        Spanien: [
          "Madrid",
          "Barcelona",
          "Seville",
          "Valencia",
          "Bilbao",
          "Malaga",
          "Zaragoza",
          "Murcia",
          "Palma de Mallorca",
          "Alicante",
        ],
        Sweden: [
          "Stockholm",
          "Gothenburg",
          "Malmo",
          "Uppsala",
          "Vasteras",
          "Orebro",
          "Linkoping",
          "Helsingborg",
          "Jonkoping",
          "Norrkoping",
        ],
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
      if (this.selectedCities.includes(city)) {
        const index = this.selectedCities.indexOf(city);
        if (index > -1) {
          this.selectedCities.splice(index, 1);
        }
      } else {
        this.selectedCities.push(city);
      }
      console.log("Selected cities:", this.selectedCities);
    },
    // selectCity(city) {
    //   this.selectedCity  = city;
    // 	this.isCities = false;

    // },
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
      this.selectedCities = [""];
    },
    //
    changeLanguage() {
      localStorage.setItem("lang", this.language);
      localStorage.setItem("name", this.inputValue);
      window.location.reload();
    },
    openPriceDropdown() {
      if (this.isOpenLanguage) {
        this.isOpenLanguage = false; // Close the other dropdown
      } else {
        this.isOpenLanguage = true;
      }
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdownOnClickOutside);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".language");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenLanguage = false;
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
  mounted() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "en");
    } else if (localStorage.getItem("name") == null) {
      localStorage.setItem("name", "Language");
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
