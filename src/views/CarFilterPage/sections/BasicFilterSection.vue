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
        <div class="condition p-[20px]">
          <h3>Type and condition</h3>
          <div class="radios-type flex gap-[244px] mt-[10px]">
            <label for="condition-any" @click="selectCondition('Any')">
              <input
                type="radio"
                v-model="selectedCondition"
                :class="{
                  'bg-transparent': selectedCondition !== 'Any',
                  'bg-orange': selectedCondition === 'Any',
                }"
                class="ml-10px"
              />
              <span class="ml-[10px]">Any</span>
            </label>
            <label for="condition-any" @click="selectCondition('New')">
              <input
                type="radio"
                id="condition-any"
                v-model="selectedCondition"
                :class="{
                  'bg-transparent': selectedCondition !== 'New',
                  'bg-orange': selectedCondition === 'New',
                }"
              />
              <span class="ml-[10px]">New</span>
            </label>
            <label for="condition-any" @click="selectCondition('Used')">
              <input
                type="radio"
                id="condition-any"
                v-model="selectedCondition"
                :class="{
                  'bg-transparent': selectedCondition !== 'Used',
                  'bg-orange': selectedCondition === 'Used',
                }"
              />
              <span class="ml-[10px]">Used</span>
            </label>
          </div>
					<div class="conditions flex gap-[140px] mt-[20px]">

						<label
							class="custom-checkbox flex gap-4 items-center h-10 w-[170px] pb-[23px]" :class="{ 'text-[#ccc] ': isRadioNewSelected }"
						>
							<input
								type="checkbox"
								:disabled="isRadioNewSelected"
									       

									class="form-checkbox h-5 w-5 text-indigo-600"
									:class="{ 'bg-[#ccc] cursor-help': isRadioNewSelected }"
								v-model="isCheckedRegister"
								@click="toggleShowCheckbox(5)"
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
							class="custom-checkbox flex gap-4 items-center h-10 w-[170px] pb-[23px]" :class="{ 'text-[#ccc] ': isRadioNewSelected }"
						>
							<input
								type="checkbox"
								v-model="isCheckedEmploy"
								@click="toggleShowCheckbox(0)"
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
							class="custom-checkbox flex gap-4 items-center h-10 w-[170px] pb-[23px]" 	:class="{ 'text-[#ccc] ': isRadioNewSelected }"
						>
							<input
								type="checkbox"
								v-model="isCheckedClassic"
								@click="toggleShowCheckbox(1)"
								:disabled="isRadioNewSelected"
									       

									class="form-checkbox h-5 w-5 text-indigo-600"
									:class="{ 'disabled-checkbox': isRadioNewSelected }"
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
								class="custom-checkbox flex gap-4 items-center h-10 w-[170px] pb-[23px]"	:class="{ 'text-[#ccc] ': isRadioNewSelected }"
							>
								<input
									type="checkbox"
									v-model="isCheckedDemon"
									@click="toggleShowCheckbox(2)"
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
import {ref} from "vue";
import CarFilterComponentBasic from "../components/CarFilterComponentBasic.vue";
export default {
  setup() {
		const isCheckedRegister = ref(false);
    const isCheckedEmploy = ref(false);
    const isCheckedClassic = ref(false);
    const isCheckedDemon = ref(false);
    

    const toggleShowCheckbox = (index) => {
      isCheckedRegister[index] = !isCheckedRegister[index];
    };

    return {
      isCheckedRegister,
      isCheckedEmploy,
      isCheckedDemon,
      isCheckedClassic,
      toggleShowCheckbox,
    };
	},
  data() {
    return {
      makes: [],
      models: [],
      selectedMark: "14600",
      selectedMake: "",
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedCondition: "Any",
			isRadioNewSelected: false,
			isModelSelectDisabled: false,
    };
  },
  components: {
    PathLink,
    FilterTitle,
    FilterBtn,
    SeatsComponent,
    CarFilterComponentBasic,
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
    if (condition === 'New') {
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
  /* Убираем внутренние отступы, чтобы радиокнопка была ближе к тексту */
  margin: 0;
  padding: 0;
}

/* Стиль радиокнопок в состоянии "выбрано" (checked) */
input[type="radio"]:checked {
  /* Меняем цвет рамки и фона на оранжевый, когда радиокнопка выбрана */
  border-color: orange;
  background: orange;
  /* Можно добавить другие стили, чтобы сделать выбранную радиокнопку более заметной */
}
 input[type="checkbox"]:disabled {
  /* Меняем цвет рамки и фона на серый, чтобы показать, что чекбокс отключен */
  border: #ccc;
  background: #ccc;
  /* Убираем возможность кликать на отключенный чекбокс */
  pointer-events: none;
	cursor: none;
}
</style>
  ``