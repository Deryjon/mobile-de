<template>
  <div class="flex items-center">
    <label for="toggle" class="flex items-center cursor-pointer">
      <div class="svg relative flex items-center gap-[20px]">
        <input type="checkbox" id="toggle" class="sr-only" :checked="isDarkMode" @change="toggleDarkMode" />
        <svg class="cursor-pointer moon block" :class="{ 'dark': isDarkMode }" width="50px" height="50px" viewBox="-2.16 -2.16 28.32 28.32" fill="none" :stroke="svgStrokeColor" :fill="svgFillColor"><path d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z" :fill="svgFillColor" :stroke="svgStrokeColor"></path></svg>
      <p class="lg:hidden"
			:class="{ 'text-white' : isDarkMode, 'text-black' : !isDarkMode }"
			> {{ isDarkMode ? 'Light' : 'Dark' }}</p>
			</div>
    </label>
  </div>
</template>

<script>
import { useDarkModeStore } from '@/store/dark-mode.js';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
  computed: {
    svgStrokeColor() {
      return this.isDarkMode ? '#FFD700' : '#555F8DFF';
    },
    svgFillColor() {
      return this.isDarkMode ? '#FFD700' : '#555F8DFF';
    },
  },
});
</script>

<style scoped>
:root {
  --primary-color: #555F8DFF;
  --secondary-color: #FFD700;
}

.dark {
  --primary-color: #d1d5db;
  --secondary-color: #FFD700;
}

/* Dark mode styles */
.dark .bg-gray-600 {
  background-color: #4a5568;
}

.dark .text-gray-700 {
  color: var(--primary-color);
}

/* Light mode styles */
.light .bg-gray-400 {
  background-color: #edf2f7;
}

.light .text-gray-700 {
  color: var(--primary-color);
}

svg{
	transform: rotate(275deg);
}
.dot {
  background-color: var(--secondary-color);
}

.font-medium {
  font-weight: 500;
}
</style>
