<template>
  <div class="condition p-[20px]">
    <h3>Cruise control
</h3>
    <div class="radios-type flex gap-[30px] mt-[10px]">
      <label for="condition-ext" @click="selectCondition('AnyExterior')">
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'AnyExterior',
            'bg-orange': selectedCondition === 'AnyExterior',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px]">Any</span>
      </label>
      <label >
        <input
          type="radio"
          id="condition-any"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Cruise',
            'bg-orange': selectedCondition === 'Cruise',
          }"
          @click="selectCondition('Cruise')"
        />
        <span class="ml-[10px]">Cruise control
</span>
      </label>
      <label  >
        <input
          type="radio"
					id="condition-adap"
				
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Adaptive',
            'bg-orange': selectedCondition === 'Adaptive',
          }"
					@click="selectCondition('Adaptive')"
        />
        <span class="ml-[10px]">Adaptive Cruise Control</span>
      </label>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config"
export default {
  data() {
    return {
      selectedCondition: "AnyExterior",
    };	
  },
	watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
  },
  methods: {
		fetchData() {
      http
        .get("/cars/count", {
          car_city_zipcode: this.selectedCities,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        });
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
    },
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
