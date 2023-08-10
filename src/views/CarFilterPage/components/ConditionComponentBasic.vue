<template>
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
            <label for="condition-any" >
              <input
                type="radio"
                id="condition-any"
                v-model="selectedCondition"
								
                :class="{
                  'bg-transparent': selectedCondition !== 'New',
                  'bg-orange': selectedCondition === 'New',
                }"
								@click="selectCondition('New')"
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
</template>
<script>
import {ref} from "vue"
export default{
	data(){
return{
	isAnySelected: false,
      isNewSelected: false,
      isUsedSelected: false,
      selectedCondition: "Any",
			isRadioNewSelected: false,
}
	},
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
	methods:{
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
	}
}
</script>
<style>
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