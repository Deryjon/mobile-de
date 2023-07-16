<template>
  <div class="actions flex gap-[10px] items-center mt-[25px]">
    <div class="language relative inline-block">
      <select
        name=""
        class="outline-none rounded-[10px] py-[6px] px-[10px] text-lg font-normal pr-[30px]"
        :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
        v-model="selectedLanguage"
        @change="changeLanguage"
      >
        <option v-for="lang in supportedLanguages" :value="lang" :key="lang">
          {{ lang }}
        </option>
        <!-- <option value="en">English</option>
        <option value="fr">France</option>
        <option value="gr">Germany</option>
        <option value="sp">Spanish</option>
        <option value="sw">Swedish</option>
        <option value="ru">Russa</option>
        <option value="pl">Polish</option> -->
      </select>
      <span class="arrow w-[7px] h-[7px]"></span>
    </div>
    <!--  -->
    <div class="web-side relative inline-block">
      <select
        name=""
        class="outline-none rounded-[10px] py-[6px] px-[10px] text-lg font-normal pr-[30px]"
        :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
      >
        <option value="bel">Belgium</option>
        <option value="can">Canda</option>
        <option value="dan">Danmark</option>
        <option value="eng">England</option>
        <option value="fra">France</option>
        <option value="gr">Germany</option>
        <option value="it">Italy</option>
        <option value="neth">Netherland</option>
        <option value="mor">Morocco</option>
        <option value="pol">Poland</option>
        <option value="ru">Russa</option>
        <option value="sp">Spanien</option>
        <option value="ru">Sweden</option>
      </select>
      <span class="arrow w-[7px] h-[7px]"></span>
    </div>
    <!--  -->
    <div class="write-pads relative inline-block">
      <select
        name=""
        class="outline-none rounded-[10px] py-[6px] px-[10px] text-lg font-normal pr-[30px]"
        :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
      >
        <option value="ar">Arabic</option>
        <option value="bel">Belgium</option>
        <option value="dan">Danish</option>
        <option value="fri">Frinch</option>
        <option value="gr">Germany</option>
        <option value="it">Italy</option>
        <option value="neth">Netherland</option>
        <option value="ru">Russa</option>
        <option value="pol">Polish</option>
        <option value="sp">Spanish</option>
        <option value="ru">Swedish</option>
        <option value="en">English</option>
      </select>
      <span class="arrow w-[7px] h-[7px]"></span>
    </div>
    <button
      class="btn outline-none rounded-[10px] py-[6px] px-[5px] text-lg font-normal"
      :class="{ 'bg-white': isDarkMode, 'bg-gray-800': isDarkMode }"
    >
      {{ $t("sell") }}
    </button>
  </div>
</template>
<script>
import { useDarkModeStore } from "@/store/index.js";
import { defineComponent, computed } from "vue";
import i18n from "../../../libs/i18n";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = computed(() => darkModeStore.isDarkMode);
    const toggleDarkMode = () => darkModeStore.toggleDarkMode();

    const { locale, t } = useI18n();

    const supportedLanguages = [
      "English",
      "France",
      "Germany",
      "Spanish",
      "Swedish",
      "Russia",
      "Polish",
    ];

    let selectedLanguage = locale.value;

		if(locale.value = "fr"){
			console.log(123);
		}

    const changeLanguage = () => {
      locale.value = selectedLanguage;
    };

    return {
      isDarkMode,
      toggleDarkMode,
      selectedLanguage,
      supportedLanguages,
      changeLanguage,
      $t: t,
    };
  },
});
</script>
<style scoped>
select {
  border: 1px solid #7b7c80;
}

select:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

select:focus {
  outline: none;
  box-shadow: 0 0 2px 1px #6a6acc;
}

.bg-white {
  background-color: #fff;
}

.bg-gray-800 {
  background-color: #526d82;
}

.btn {
  border: 1px solid #7b7c80;
}

.btn:hover {
  box-shadow: 0 0 2px 1px #6a6acc;
}

.arrow {
  position: absolute;
  top: 38%;
  right: 10px;
  transform: translateY(-50%);
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  pointer-events: none;
}
</style>
