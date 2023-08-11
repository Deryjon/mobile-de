<template>
  <section class="basic-filter mt-[200px]">
    <v-container class="w-[1110px]">
      <PathLink>My New Car</PathLink>
      <FilterTitle>Detailsuche: Pkw - neu oder gebraucht</FilterTitle>
      <FilterBtn class="ml-auto" />
      <div
        class="relative filter lg:h-[1500px] w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] h-[650px] mx-auto mt-[50px] rounded lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <div
          class="top lg:flex w-[250px] sm:w-[350px] items-center gap-[80px] mt-[10px] p-[20px]"
        >
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[16px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                v-model="selectedMark"
                @change="fetchModels"
              >
                <option value="14600" selected>Beliebig</option>
                <optgroup>
                  <option v-for="make in makes" :key="make" :value="make">
                    {{ make }}
                  </option>
                </optgroup>
              </select>
              <span
                class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
              ></span>
            </div>
          </div>

          <div class="relative">
            <h2 class="text-sm lg:text-[16px] mt-2">
              {{ $t("message.selects.model") }}
            </h2>
            <select
              class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="Beliebig"
              :disabled="isModelSelectDisabled"
            >
              <option value="14600">Beliebig</option>
              <option
                v-for="model in models"
                :key="model"
                :value="model"
                class=""
              >
                {{ model }}
              </option>
            </select>
            <span
              class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
            ></span>
          </div>
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[16px]">Variant</h2>
              <input
                class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                placeholder="e.g. GTI..."
              />
            </div>
          </div>
        </div>
        <CarFilterComponentBasic />
        <SeatsComponent />
        <ConditionComponent />
        <div class="line h-[1px] border mt-[50px]"></div>
        <div class="mt-[30px] p-[20px]">
          <h2 class="mt-2 text-sm lg:text-[16px]">Payment type</h2>
          <div class="Kaufen_div mt-[5px]">
            <button
              class="Kaufen p-[8px] w-[150px] lg:w-[218px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
              @click="showTab1"
              :class="{ 'active-Kaufen': activeTab === 'tab-1' }"
            >
              {{ $t("message.btn.buy") }}
            </button>
            <button
              class="Kaufen p-[8px] w-[150px] lg:w-[218px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
              @click="showTab2"
              :class="{ 'active-Kaufen': activeTab === 'tab-2' }"
            >
              Leasing
            </button>
          </div>
        </div>
        <div class="tab-content mt-[30px]">
          <div class="pl-[20px]" v-show="activeTab === 'tab-1'">
            <div class="price-tab flex items-center gap-[80px]">
              <div class="price">
                <h2 class="mt-2 text-sm lg:text-[16px]">Price</h2>
                <div class="marke_select_div relative mt-[10px]">
                  <input
                    placeholder="from"
                    class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
              </div>
              <div class="marke_select_div relative mt-[36px]">
                <input
                  placeholder="up to"
                  class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
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
            </div>
            <div class="line mt-[30px]"></div>
            <div class="registration flex items-center gap-[80px] mt-[50px]">
              <div>
                <h2 class="text-sm lg:text-[16px] mt-2">
                  {{ $t("message.selects.registration") }}
                </h2>
                <div class="relative mt-[10px]">
                  <input
                    placeholder="from"
                    class="no-spinner mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
                    type="number"
                    pattern="\d*"
                    v-model="years"
                  />
                  <select
                    class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                    v-model="selectedYear"
                    @change="updateSelectYear"
                  >
                    <option
                      v-for="year in modelYears"
                      :key="year"
                      :value="year"
                    >
                      {{ year }}
                    </option>
                  </select>
                  <span
                    class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[6px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
                  ></span>
                </div>
              </div>
              <div class="relative mt-[35px]">
                <input
                  placeholder="to"
                  class="no-spinner mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal text-[10px] lg:text-[12px]"
                  type="number"
                  pattern="\d*"
                  v-model="years"
                />
                <select
                  class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                  v-model="selectedtoYear"
                  @change="updateSelectYear"
                >
                  <option
                    v-for="year in modeltoYears"
                    :key="year"
                    :value="year"
                  >
                    {{ year }}
                  </option>
                </select>
                <span
                  class="arrow w-[7px] h-[7px] absolute right-[7px] lg:right-[7px] xl:right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
                ></span>
              </div>
            </div>
            <div class="kilometres mt-[20px] flex items-center gap-[80px]">
              <div class="">
                <h2 class="text-sm lg:text-[16px] mt-2">
                  {{ $t("message.selects.kilometr") }}
                </h2>
                <!-- KIllometer bis -->
                <div class="marke_select_div flex relative">
                  <input
                    placeholder="Beliebig"
                    id="inputYear"
                    class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
              </div>
              <div class="marke_select_div flex relative mt-[30px]">
                <input
                  placeholder="Beliebig"
                  id="inputYear"
                  class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
            </div>
            <!-- valid -->
            <div class="valid-until mt-[40px] flex items-center gap-[80px]">
              <div class="relative mt-2">
                <h2 class="text-sm lg:text-[16px]">HU valid until</h2>
                <select
                  class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                >
                  <option value="14600" selected>Any</option>
                  <option value="">New</option>
                  <option value="">18</option>
                  <option value="">12</option>
                  <option value="">9</option>
                  <option value="">6</option>
                  <option value="">3</option>
                </select>
                <span
                  class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
                ></span>
              </div>
              <div class="marke_select_div relative mt-2">
                <h2 class="text-sm lg:text-[16px]">Previous owners</h2>
                <select
                  class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
                >
                  <option value="14600" selected>Any</option>
                  <option value="">Up to 1</option>
                  <option value="">Up to 2</option>
                  <option value="">Up to 3</option>
                  <option value="">Up to 4</option>
                </select>
                <span
                  class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
                ></span>
              </div>
            </div>
            <!-- country -->
            <div class="valid-until mt-[20px] flex items-center gap-[80px]">
              <div class="relative mt-2">
                <h2 class="text-sm lg:text-[16px]">Country</h2>
                <select
                  class="mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
                <span
                  class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"
                ></span>
              </div>
              <div class="marke_select_div relative mt-2">
                <h2 class="text-sm lg:text-[16px]">City / zip code</h2>
                <input
                  id="inputYear"
                  class="mark_input mark-select w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
                  type="number"
                  pattern="\d*"
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="" v-show="activeTab === 'tab-2'">wdqdwq</div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import SeatsComponent from "../components/SeatsComponentBasicSection.vue";
import axios from "axios";
import { ref } from "vue";
import CarFilterComponentBasic from "../components/CarFilterComponentBasic.vue";
import ConditionComponent from "../components/ConditionComponentBasic.vue";
export default {
  data() {
    return {
      makes: [],
      models: [],
      selectedMark: "14600",
      selectedMake: "",
      selectedPrice: "",
      isModelSelectDisabled: false,
      activeTab: "tab-1",
      price: "",
      selectedYear: "",
      selectedtoYear: "",
      years: "",
      modelYears: [],
      modeltoYears: [],
      killometres: "",
      selectedMake: "",
    };
  },
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    SeatsComponent,
    CarFilterComponentBasic,
    ConditionComponent,
  },
  methods: {
    updateSelect() {
      this.killometres = this.selectedMake;
      this.selectedMake = this.selectedYear;
    },
    fetchModels() {
      if (!this.selectedMark) {
        this.models = [];
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `https://api.nhtsa.gov/SafetyRatings/modelyear/2023/make/${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      axios
        .get(apiUrl)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data;

          // Проверяем, что ответ содержит поле "Results" с массивом объектов
          if (data && data.Results && Array.isArray(data.Results)) {
            // Извлекаем поле "Model" из каждого объекта и сохраняем в массив "models"
            this.models = data.Results.map((item) => item.Model);
            console.log(this.models);
            this.isModelSelectDisabled = false; // Enable the model select
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
    updateSelectYear() {
      this.years = this.selectedYear;
      this.selectedYear = this.selectedMake;
    },
    fetchModelYears() {
      const apiUrl = "https://api.nhtsa.gov/SafetyRatings";
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          this.modelYears = data.Results.map((result) => result.ModelYear);
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },
    showTab1() {
      this.activeTab = "tab-1";
    },
    async showTab2() {
      this.activeTab = "tab-2";
    },
    toggleAnySelection() {
      // Обработчик клика на "Any"
      if (this.isAnySelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isAnySelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isAnySelected = true;
      }
    },
    toggleNewSelection() {
      // Обработчик клика на "Any"
      if (this.isNewSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isNewSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isNewSelected = true;
      }
    },
    toggleUsedSelection() {
      // Обработчик клика на "Any"
      if (this.isUsedSelected) {
        // Если уже выбрано, меняем обратно на не выбрано
        this.isUsedSelected = false;
      } else {
        // Если не выбрано, делаем выбранным
        this.isUsedSelected = true;
      }
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        this.isRadioNewSelected = true;
        this.isCheckedRegister = false;
        this.isCheckedEmploy = false;
        this.isCheckedDemon = false;
        this.isCheckedClassic = false;
      } else {
        this.isRadioNewSelected = false;
      }
    },
    updateSelectPrice() {
      this.price = this.selectedPrice;
      this.selectedPrice = this.selectedMake;
    },
  },
  mounted() {
    const apiUrl = "https://api.nhtsa.gov/SafetyRatings/modelyear/2023";

    // Выполняем GET-запрос к API с помощью Axios для получения марок
    axios
      .get(apiUrl)
      .then((response) => {
        // Получаем данные из ответа
        const data = response.data;

        // Проверяем, что ответ содержит поле "Results" с массивом объектов
        if (data && data.Results && Array.isArray(data.Results)) {
          // Извлекаем поле "Make" из каждого объекта и сохраняем в массив "makes"
          this.makes = data.Results.map((item) => item.Make);
          console.log(this.makes);
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
.mark-input2 {
  max-height: 35px; /* Измените значение по вашему усмотрению */
  overflow-y: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Добавьте прокрутку при необходимости */
.mark-input2::-webkit-scrollbar {
  width: 3px; /* Ширина полосы прокрутки */
}

.mark-input2::-webkit-scrollbar-thumb {
  background-color: #888; /* Цвет полосы прокрутки */
  border-radius: 2.5px; /* Закругление полосы прокрутки */
}
select:-webkit-scrollbar {
  /*For WebKit Browsers*/
  width: 0;
  height: 0;
}
.line {
  border: 1px solid grey;
  height: 1px;
}
.Kaufen:hover {
  box-shadow: 0 0 2px 1px #eaccb4;
}
.active-Kaufen {
  background-color: #fffaf6;
  border: 1px solid #eaccb4;
  color: #000;
}
.mark-select {
  border: 1px solid #111;
}
</style>
``
