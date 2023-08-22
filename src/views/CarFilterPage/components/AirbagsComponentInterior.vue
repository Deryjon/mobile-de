	<template>
		<div class="condition p-[20px]">
			<h3>Airbags</h3>
			<div class="radios-type flex gap-[30px] mt-[20px]">
				<label for="condition-ext" @click="selectAirbag('AnyExterior')">
					<input
						type="radio"
						v-model="selectedAirbag"
						:class="{
							'bg-transparent': selectedAirbag !== 'AnyExterior',
							'bg-orange': selectedAirbag === 'AnyExterior',
						}"
						class="ml-10px"
					/>
					<span class="ml-[10px] text-[14px]">Any</span>
				</label>
				<label for="driver-airbag">
					<input
						type="radio"
						id="driver-airbag"
						v-model="selectedAirbag"
						:class="{
							'bg-transparent': selectedAirbag !== 'Driver',
							'bg-orange': selectedAirbag === 'Driver',
						}"
						@click="selectAirbag('Driver')"
					/>
					<span class="ml-[10px] text-[14px]">Driver Airbag </span>
				</label>
				<label for="front-airbag" @click="selectAirbag('Front')">
					<input
						type="radio"
						id="front-airbag"
						v-model="selectedAirbag"
						:class="{
							'bg-transparent': selectedAirbag !== 'Front',
							'bg-orange': selectedAirbag === 'Front',
						}"
					/>
					<span class="ml-[10px] text-[14px]">Front Airbags</span>
				</label>

				<label for="side-airbag" @click="selectAirbag('FrontAndSide')">
					<input
						type="radio"
						id="side-airbag"
						v-model="selectedAirbag"
						:class="{
							'bg-transparent': selectedAirbag !== 'FrontAndSide',
							'bg-orange': selectedAirbag === 'FrontAndSide',
						}"
					/>
					<span class="ml-[10px] text-[14px]">Front and Side Airbags </span>
				</label>
				<label for="more-airbag" @click="selectAirbag('FrontAndSideMore')">
					<input
						type="radio"
						id="more-airbag"
						v-model="selectedAirbag"
						:class="{
							'bg-transparent': selectedAirbag !== 'FrontAndSideMore',
							'bg-orange': selectedAirbag === 'FrontAndSideMore',
						}"
					/>
					<span class="ml-[10px] text-[14px]">Front and Side and More Airbags </span>
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
	<style scoped	>
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
