<template>
   <div class="condition lg:p-[20px]">
    <h3>{{ $t("message.filter_page.online") }}</h3>
    <div class="radios-type flex flex-wrap gap-[30px] mt-[10px]">
      <label for="offer-ad" @click="selectOnlineSince('AnyOffer')">
        <input
          type="radio"
          v-model="selectedAdOnline"
          :class="{
            'bg-transparent': selectedAdOnline !== 'AnyOffer',
            'bg-orange': selectedAdOnline === 'AnyOffer',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px] text-[14px]">{{ $t("message.filter_page.any") }}</span>
      </label>
      <label for="driver-airbag">
        <input
          type="radio"
          
          v-model="selectedAdOnline"
          :class="{
            'bg-transparent': selectedAdOnline !== 'OneDay',
            'bg-orange': selectedAdOnline === 'OneDay',
          }"
          @click="selectOnlineSince('OneDay')"
        />
        <span class="ml-[10px] text-[14px]">1 {{ $t("message.filter_page.day") }}</span>
      </label>
      <label for="front-airbag" @click="selectOnlineSince('ThreeDay')">
        <input
          type="radio"
         
          v-model="selectedAdOnline"
          :class="{
            'bg-transparent': selectedAdOnline !== 'ThreeDay',
            'bg-orange': selectedAdOnline === 'ThreeDay',
          }"
        />
        <span class="ml-[10px] text-[14px]">3 {{ $t("message.filter_page.days") }} </span>
      </label>

      <label for="side-airbag" @click="selectOnlineSince('SevenDay')">
        <input
          type="radio"
          
          v-model="selectedAdOnline"
          :class="{
            'bg-transparent': selectedAdOnline !== 'SevenDay',
            'bg-orange': selectedAdOnline === 'SevenDay',
          }"
        />
        <span class="ml-[10px] text-[14px]">7 {{ $t("message.filter_page.days") }}</span>
      </label>
      <label  @click="selectOnlineSince('FourteenDay')">
        <input
          type="radio"
          
          v-model="selectedAdOnline"
          :class="{
            'bg-transparent': selectedAdOnline !== 'FourteenDay',
            'bg-orange': selectedAdOnline === 'FourteenDay',
          }"
        />
        <span class="ml-[10px] text-[14px]">14 {{ $t("message.filter_page.days") }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import http from '../../../axios.config';
export default {
  data() {
    return {
      selectedAdOnline: "AnyOffer",
    };
  },
	watch: {
    selectedAdOnline(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchData();
      }
    },
  },
  methods: {
		fetchData() {
      http
        .get("/cars/count", {
          days: this.selectedAdOnline,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        });
    },
    selectOnlineSince(condition) {
      this.selectedAdOnline = condition;
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
