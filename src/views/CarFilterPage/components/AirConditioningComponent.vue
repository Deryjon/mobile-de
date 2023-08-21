<template>
  <div class="condition p-[20px]">
    <h3>Air conditioning</h3>
    <div class="radios-type flex flex-wrap gap-x-[60px] mt-[10px]">
      <label class="w-[180px]" for="air-any" @click="selectAirbag('AnyAir')">
        <input
          id="air-any"
          type="radio"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'AnyAir',
            'bg-orange': selectedAirbag === 'AnyAir',
          }"
          class="ml-10px"
        />
        <span class="ml-[10px]">Any</span>
      </label>
      <label class="w-[180px]" for="manual">
        <input
          type="radio"
          id="manual"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Manual',
            'bg-orange': selectedAirbag === 'Manual',
          }"
          @click="selectAirbag('Manual')"
        />
        <span class="ml-[10px]">Manual or automatic climatisation </span>
      </label>
      <label class="w-[180px]" for="auto-climat" @click="selectAirbag('Auto-Climat')">
        <input
          type="radio"
          id="auto-climat"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Auto-Climat',
            'bg-orange': selectedAirbag === 'Auto-Climat',
          }"
        />
        <span class="ml-[10px]">Automatic climatisation, 2 zones </span>
      </label>

      <label class="w-[180px]" for="auto2" @click="selectAirbag('Auto-Climat2')">
        <input
          type="radio"
          id="auto2"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Auto-Climat2',
            'bg-orange': selectedAirbag === 'Auto-Climat2',
          }"
        />
        <span class="ml-[10px]">Automatic climatisation, 4 zones</span>
      </label>
      <label class="w-[180px]" for="more-airbag" @click="selectAirbag('NoClimat')">
        <input
          type="radio"
          id="more-airbag"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'NoClimat',
            'bg-orange': selectedAirbag === 'NoClimat',
          }"
        />
        <span class="ml-[10px]">No climatisation</span>
      </label>
      <label class="w-[180px]" for="more-airbag" @click="selectAirbag('AutoClimat')">
        <input
          type="radio"
          id="more-airbag"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'AutoClimat',
            'bg-orange': selectedAirbag === 'AutoClimat',
          }"
        />
        <span class="ml-[10px]">Automatic air conditioning
</span>
      </label>
      <label class="w-[180px]" for="more-airbag" @click="selectAirbag('Auto-Climat3')">
        <input
          type="radio"
          id="more-airbag"
          v-model="selectedAirbag"
          :class="{
            'bg-transparent': selectedAirbag !== 'Auto-Climat3',
            'bg-orange': selectedAirbag === 'Auto-Climat3',
          }"
        />
        <span class="ml-[10px]">Automatic climatisation, 3 zones

</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedAirbag: "AnyExterior",
    };
  },
  methods: {
    selectAirbag(condition) {
      this.selectedAirbag = condition;
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
