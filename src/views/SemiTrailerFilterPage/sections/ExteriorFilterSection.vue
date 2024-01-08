<template>
  <section class="basic-filter">
    <v-container class="max-w-[1140px]">
      <div
        class="relative filter md:w-[700px] lg:w-[870px] xl:w-[1110px] bg-[#f5f5f5] mx-auto mt-[5px] rounded p-[10px] lg:p-[27px]"
      >
        <h3 class="basic-title text-[25px] font-semibold">{{ $t("message.filter_page.titles.features") }}</h3>
        <div class="line h-[1px] border mt-[10px]"></div>	
        <CarFilterComponentExteriror />       
      </div>
    </v-container>
  </section>
</template>

<script>
import PathLink from "../../../ui/PathLink.vue";
import FilterTitle from "../../../ui/FilterTitle.vue";
import FilterBtn from "../../../components/FilterBtn.vue";
import PowerComponent from "../components/PowerComponentTechnic.vue";
import axios from 'axios';
import CarFilterComponentBasic from "../components/CarFilterComponentBasic.vue";
import ConditionComponent from "../components/ConditionComponentBasic.vue";
import PaymentTab1Component from "../components/PaymentTab1Component.vue";
import CarFilterComponentExteriror from "../components/CarFilterComponentExteriror.vue";
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
    PowerComponent,
    CarFilterComponentBasic,
    ConditionComponent,
    PaymentTab1Component,
    CarFilterComponentExteriror	
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
  },
};
</script>

<style scoped>
.arrow {
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
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
