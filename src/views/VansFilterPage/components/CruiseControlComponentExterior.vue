<template>
 <div class="condition lg:p-[20px]">
    <h3>{{ $t("message.filter_page.cruise.cruise") }}
    </h3>
    <div class="radios-type flex flex-wrap gap-[10px] lg:gap-[30px] mt-[10px] text-[14px]">
      <label for="condition-ext" @click="selectCondition('AnyExterior')">
        <input type="radio" v-model="selectedCruiseControl" :class="{
          'bg-transparent': selectedCruiseControl !== 'AnyExterior',
          'bg-orange': selectedCruiseControl === 'AnyExterior',
        }" class="ml-10px" />
        <span class="ml-[10px]">{{ $t("message.filter_page.cruise.any") }}</span>
      </label>
      <label>
        <input type="radio" id="condition-any" v-model="selectedCruiseControl" :class="{
          'bg-transparent': selectedCruiseControl !== 'Cruise',
          'bg-orange': selectedCruiseControl === 'Cruise',
        }" @click="selectCondition('Cruise')" />
        <span class="ml-[10px]">{{ $t("message.filter_page.cruise.cruise") }}
        </span>
      </label>
      <label>
        <input type="radio" id="condition-adap" v-model="selectedCruiseControl" :class="{
          'bg-transparent': selectedCruiseControl !== 'Adaptive',
          'bg-orange': selectedCruiseControl === 'Adaptive',
        }" @click="selectCondition('Adaptive')" />
        <span class="ml-[10px]">{{ $t("message.filter_page.cruise.adaptive") }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import http from "../../../axios.config"
import { useVanStore } from "../../../store/vanDataStore";

export default {
  data() {
    return {
      selectedCondition: "AnyExterior",
    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateVanData();
      }
    },
  },
  methods: {
    updateVanData() {
      const vanStore = useVanStore();
      (vanStore.vanData.van_cruise_control =
        this.selectedCondition),
        vanStore.updateVanData();
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

.custom-checkbox input[type="checkbox"]:checked+.icon {
  fill: #ffffff;
  background: #e04b00;
}

.custom-checkbox input[type="checkbox"] {
  display: none;
}
</style>
