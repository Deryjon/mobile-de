<template>
  <section class="basic-filter mt-[200px]">
    <v-container>
      <PathLink>My New Car</PathLink>
      <FilterTitle>Detailsuche: Pkw - neu oder gebraucht</FilterTitle>
      <FilterBtn class="ml-auto" />
      <div
        class="relative filter lg:h-[1300px] w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[1170px] bg-[#f5f5f5] h-[650px] mx-auto mt-[50px] rounded lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">Basic Data</h3>
        <div class="line h-[1px] border mt-[10px]"></div>
        <div
          class="top lg:flex w-[250px] sm:w-[350px] items-center gap-[130px] mt-[10px] p-[20px]"
        >
          <div class="mark">
            <div class="relative mt-2">
              <h2 class="text-sm lg:text-[16px]">
                {{ $t("message.selects.mark") }}
              </h2>
              <select
                class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
              class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
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
                class="mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
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
				<div class="mt-[30px] p-[20px] flex items-center gap-[50px]">
					<div class="price">

						<h2 class="mt-2 text-sm lg:text-[16px]">Price</h2>
						<div class="marke_select_div relative mt-[10px]">
								<input
									placeholder="from"
									class="mark_input mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
									type="number"
									pattern="\d*"
									v-model="price"
								/>
								<select
									class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute left-[150px] text-[10px] lg:text-[12px]"
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
									class="arrow w-[7px] h-[7px] absolute left-[157px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
								></span>
							</div>
					</div>
						<div class="marke_select_div relative mt-[36px]">
              <input
                placeholder="up to"
                class="mark_input mark-select w-full lg:w-[150px] xl:w-[170px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px]"
                type="number"
                pattern="\d*"
                v-model="price"
              />
              <select
                class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute left-[150px] text-[10px] lg:text-[12px]"
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
                class="arrow w-[7px] h-[7px] absolute left-[157px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"
              ></span>
            </div>
						
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
  },
};
</script>

<style scoped>
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
</style>
``
