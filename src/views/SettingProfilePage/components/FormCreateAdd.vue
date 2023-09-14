<template>
  <div class="">
    <p>form add car</p>
    <div class="flex gap-[20px]">
      <div class="mark">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">
            {{ $t("message.selects.mark") }}
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedMark"
            @change="fetchModels()"
          >
            <option value="14600" selected>Beliebig</option>
            <optgroup>
              <option
                v-for="make in makes"
                :key="make"
                :value="make.car_make_name"
              >
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
          :disabled="isModelSelectDisabled"
          v-model="selectedModel"
        >
          <option :value="selectedModel" selected>
            {{ selectedModel }}
          </option>
          <option
            v-for="model in models"
            :key="model"
            :value="model.car_model_name"
            class=""
          >
            {{ model.car_model_name }}
          </option>
        </select>
        <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
      </div>
    </div>
    <div
      class="filter-cars flex flex-wrap gap-[15px] mt-[0px] lg:mt-[50px]"
    >
      <!-- cabrio -->
      <label
        class="custom-checkbox flex items-center h-[40px] w-[250px]20px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Cabrio / Roadster',
            'bg-orange': selectedCondition === 'Cabrio / Roadster',
          }"
          @click="selectCondition('Cabrio / Roadster')"
        />
        <img
          src="../../../assets/icons/cabriolet-icon.svg"
          alt=""
          class="w-[90px] pt-[20px]"
        />
        <span class="text-sm"> Cabrio / Roadster</span>
      </label>
      <!-- estate -->
      <label
        class="custom-checkbox flex  items-center h-10 w-[230px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
						'bg-transparent': selectedCondition !== 'Estate Car',
            'bg-orange': selectedCondition === 'Estate Car',
          }"
					@click="selectCondition('Estate Car')"
          class="form-checkbox h-7 w-7 text-indigo-600"
        />
        <img
          src="../../../assets/icons/estate-car-icon.svg"
          alt=""
          class="w-24 pt-[20px]"
        />
        <span class="text-sm">Estate Car</span>
      </label>

      <!-- saloon -->
      <label
        class="custom-checkbox flex items-center h-10 w-[230px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          @click="selectCondition('Saloon')"
          :class="{
            'bg-transparent': selectedCondition !== 'Saloon',
            'bg-orange': selectedCondition === 'Saloon',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/saloon-car-icon.svg"
          alt=""
          class="w-24 pt-[20px]"
        />
        <span class="text-sm">Saloon</span>
      </label>
      <!-- small -->
      <label
        class="custom-checkbox flex gap-[10px] items-center h-10 w-[210px]20px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          @click="selectCondition('Small Car')"
          :class="{
            'bg-transparent': selectedCondition !== 'Small Car',
            'bg-orange': selectedCondition === 'Small Car',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/small-car-icon.svg"
          alt=""
          class="w-[75px] pt-[10px]"
        />
        <span class="text-sm">Small Car</span>
      </label>
      <!-- sports -->
      <label class="custom-checkbox flex items-center h-10 w-[280px]20px]">
        <input
          type="radio"
          v-model="selectedCondition"
          @click="selectCondition(' Sports Car / Coupe')"
          :class="{
            'bg-transparent': selectedCondition !== ' Sports Car / Coupe',
            'bg-orange': selectedCondition === ' Sports Car / Coupe',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/sports-car-icon.svg"
          alt=""
          class="w-28 pt-[18px]"
        />
        <span class="text-sm"> Sports Car / Coupe</span>
      </label>
			 <!-- off-road -->
			 <label
        class="custom-checkbox flex gap-4 items-center h-10 w-[230px]23px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          @click="selectCondition('Van / Minibus')"
          :class="{
            'bg-transparent': selectedCondition !== 'Van / Minibus',
            'bg-orange': selectedCondition === 'Van / Minibus',
          }"
          class="form-checkbox h-5 w-5 text-indigo-600"
        />

        <img
          src="../../../assets/icons/car-minibus-icon.svg"
          alt=""
          class="w-[70px] pt-[8px]"
        />
        <span class="text-sm">Van / Minibus</span>
      </label>
      <!-- off-road -->
      <label
        class="custom-checkbox flex  items-center h-10 w-[270px]23px]"
      >
        <input
          type="radio"
          v-model="selectedCondition"
          @click="selectCondition('SUV / Off-road Vehicle / Pickup Truck')"
          :class="{
            'bg-transparent':
              selectedCondition !== 'SUV / Off-road Vehicle / Pickup Truck',
            'bg-orange':
              selectedCondition === 'SUV / Off-road Vehicle / Pickup Truck',
          }"
          class="form-checkbox h-7 w-7 text-indigo-600"
        />

        <img
          src="../../../assets/icons/car-suv-icon.svg"
          alt=""
          class="w-20 pt-[18px]"
        />
        <span class="text-sm">SUV / Off-road Vehicle / Pickup Truck</span>
      </label>
     
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config";
export default {
  data() {
    return {
      makes: [],
      models: [],
      selectedMark: "14600",
      selectedCondition: "",
    };
  },
  methods: {
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
    },
  },
  mounted() {
    this.selectedMark = localStorage.getItem("mark");

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
  /* Убираем внутренние отступы, чтобы радиокнопка была ближе к тексту */
  margin: 0;
  padding: 0;
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
</style>
