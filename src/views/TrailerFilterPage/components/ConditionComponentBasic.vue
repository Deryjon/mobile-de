<template>
  <div class="condition mt-[10px] lg:p-[20px]">
    <h3 class="text-[14px]">{{ $t("message.filter_page.condition") }}</h3>
    <div
      class="radios-type flex flex-wrap gap-x-[100px] lg:gap-x-[50px] mt-[10px] "
    >
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Any',
            'bg-orange': selectedCondition === 'Any',
          }"
          class="ml-10px"
          @click="selectCondition('Any')"
        />
        <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.any") }}</span>
      </label>
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'New',
            'bg-orange': selectedCondition === 'New',
          }"
          @click="selectCondition('New')"
        />
        <span class="ml-[10px] text-[14px]">{{ $t("message.filter.new") }}</span>
      </label>
      <label>
        <input
          type="radio"
          v-model="selectedCondition"
          :class="{
            'bg-transparent': selectedCondition !== 'Used',
            'bg-orange': selectedCondition === 'Used',
          }"
          @click="selectCondition('Used')"
        />
        <span class="ml-[10px] text-[14px]">{{ $t("message.filter.used") }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import { useTrailerStore } from "@/store/trailerDataStore";
export default {
  data() {
    return {
      isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedCondition: "Any",
      isRadioNewSelected: false,
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      type: [],
    };
  },
  watch: {
    selectedCondition(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateTrailerData();
      }
    },
  },
  methods: {
    updateTrailerData() {
      const trailerStore = useTrailerStore();
      (trailerStore.trailerData.trailer_condition =
        this.selectedCondition),
        trailerStore.updateTrailerData();
    },
    toggleShowCheckbox(index, typeName) {
      const isChecked = !this.type.includes(typeName);
      if (isChecked) {
        this.type.push(typeName);
      } else {
        const typeIndex = this.type.indexOf(typeName);
        if (typeIndex !== -1) {
          this.type.splice(typeIndex, 1);
        }
      }

      this.updateTrailerData();
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        1;
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
