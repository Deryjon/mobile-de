<template>
  <div class="">
    <div
      class="basic-add w-[210px] xs:w-full lg:w-[700px] xl:w-[800px] text-[12px] lg:text-[14px] pt-[15px] p-[5px] lg:p-0"
      v-show="basicAdd">
      <div class="md:flex items-center gap-[20px]">
        <input type="file" ref="fileInput" accept="image/*" multiple style="display: none" @change="handleFileChange" />
        <button @click="openFileInput" class="bg-blue-500 p-[10px] rounded-[8px]">
          + Add image
        </button>
        <div class="file-preview flex flex-wrap lg:w-[600px] gap-[10px]">
          <div v-for="(file, index) in previewImages" :key="index" class="file-item relative">
            <div class="w-[190px] h-[200px]">
              <img class="w-full h-full" :src="file.previewUrl" :alt="file.name" />
            </div>
            <button @click="removeFile(index)" class="absolute top-0 right-0 w-[20px]">
              X
            </button>
          </div>
          <span v-if="previewImages.length === 0">No Images</span>
          <button v-if="errorPushPagePriceList" @click="goPriceList"
            class="font-bold text-[18px] bg-red-500 p-[15px] rounded-[10px]">Click for Pay</button>
        </div>
      </div>
      <div class="video-link mt-[30px]">
        <h2 class="text-sm lg:text-[14px]">Link on Video</h2>
        <input type="text"
          class="mark-select bg-[#fff] py-[10px] px-[10px] rounded-[10px] w-full lg:w-[500px] mt-[10px] lg:text-[12px]"
          v-model="linkVideo" />
      </div>
      <div class="flex flex-wrap lg:gap-[20px] mt-[30px]">
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">
              {{ $t("message.selects.mark") }}
            </h2>
            <select
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              v-model="selectedMark" @change="fetchModels()">
              <option value="" selected>Beliebig</option>
              <optgroup>
                <option v-for="make in makes" :key="make" :value="make.car_make_name">
                  {{ make.car_make_name }}
                </option>
                <option value="other">other</option>
              </optgroup>
            </select>
            <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
          </div>
        </div>

        <div class="relative">
          <h2 class="text-sm lg:text-[14px] mt-2">
            {{ $t("message.selects.model") }}
          </h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
            :disabled="isModelSelectDisabled" v-model="selectedModel">
            <option :value="selectedModel" selected>
              {{ selectedModel }}
            </option>
            <option v-for="model in models" :key="model" :value="model.car_model_name" class="">
              {{ model.car_model_name }}
            </option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="mark">
          <div class="relative mt-2">
            <h2 class="text-sm lg:text-[14px]">Variant</h2>
            <input
              class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
              placeholder="e.g. GTI..." v-model="inputVariant" />
          </div>
        </div>
      </div>

      <div class="filter-cars flex flex-wrap gap-[20px] lg:gap-[50px] mt-[40px] lg:mt-[50px]">
        <!-- cabrio -->
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-[30px] lg:h-[40px] w-[230px]">
          <input type="radio" v-model="selectedCar" :class="{
            'bg-transparent': selectedCar !== 'Cabrio / Roadster',
            'bg-orange': selectedCar === 'Cabrio / Roadster',
          }" @click="selectCar('Cabrio / Roadster')" />
          <img src="../../../../assets/icons/cabriolet-icon.svg" alt="" class="w-[90px] pt-[20px]" />
          <span class="text-[12px] lg:text-sm"> Cabrio / Roadster</span>
        </label>
        <!-- estate -->
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-10 w-[230px]">
          <input @click="selectCar('Estate Car')" type="radio" v-model="selectedCar" :class="{
            'bg-transparent': selectedCar !== 'Estate Car',
            'bg-orange': selectedCar === 'Estate Car',
          }" />
          <img src="../../../../assets/icons/estate-car-icon.svg" alt="" class="w-24 pt-[20px]" />
          <span class="text-[12px] lg:text-sm">Estate Car</span>
        </label>

        <!-- saloon -->
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-10 w-[230px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Saloon')" :class="{
            'bg-transparent': selectedCar !== 'Saloon',
            'bg-orange': selectedCar === 'Saloon',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../../assets/icons/saloon-car-icon.svg" alt="" class="w-24 pt-[20px]" />
          <span class="text-[12px] lg:text-sm">Saloon</span>
        </label>
        <!-- small -->
        <label class="custom-checkbox p-[0] flex lg:gap-[10px] items-center h-10 w-[210px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Small Car')" :class="{
            'bg-transparent': selectedCar !== 'Small Car',
            'bg-orange': selectedCar === 'Small Car',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../../assets/icons/small-car-icon.svg" alt="" class="w-[75px] pt-[10px]" />
          <span class="text-[12px] lg:text-sm">Small Car</span>
        </label>
        <!-- sports -->
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-8 w-[280px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Sports Car / Coupe')" :class="{
            'bg-transparent': selectedCar !== 'Sports Car / Coupe',
            'bg-orange': selectedCar === 'Sports Car / Coupe',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../../assets/icons/sports-car-icon.svg" alt="" class="w-24   lg:w-28 pt-[18px]" />
          <span class="text-[12px] lg:text-sm">Sports Car / Coupe</span>
        </label>
        <!-- off-road -->
        <label class="custom-checkbox p-[0] flex gap-4 items-center h-10 w-[230px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('Van / Minibus')" :class="{
            'bg-transparent': selectedCar !== 'Van / Minibus',
            'bg-orange': selectedCar === 'Van / Minibus',
          }" class="form-checkbox h-5 w-5 text-indigo-600" />

          <img src="../../../../assets/icons/car-minibus-icon.svg" alt="" class="w-[70px] pt-[8px]" />
          <span class="text-[12px] lg:text-sm">Van / Minibus</span>
        </label>
        <!-- off-road -->
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-10 w-[350px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('SUV / Off-road Vehicle / Pickup Truck')" :class="{
            'bg-transparent':
              selectedCar !== 'SUV / Off-road Vehicle / Pickup Truck',
            'bg-orange':
              selectedCar === 'SUV / Off-road Vehicle / Pickup Truck',
          }" class="form-checkbox h-7 w-7 text-indigo-600" />

          <img src="../../../../assets/icons/car-suv-icon.svg" alt="" class="w-20 pt-[18px]" />
          <span class="text-[12px] lg:text-sm">SUV / Off-road Vehicle / Pickup Truck</span>
        </label>
        <label class="custom-checkbox p-[0] lg:gap-[10px] flex items-center h-10 w-[350px]">
          <input type="radio" v-model="selectedCar" @click="selectCar('SUV')" :class="{
            'bg-transparent':
              selectedCar !== 'SUV',
            'bg-orange':
              selectedCar === 'SUV',
          }" class="form-checkbox h-7 w-7 text-indigo-600" />


      <svg class="svg-icon" style="width: 70px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M403.929088 608.405504l-127.557632 0 0-12.148736 115.408896 0 0-166.836224c-238.825472 7.913472-313.718784 47.241216-314.454016 47.644672l-5.849088-10.641408c3.084288-1.708032 78.536704-41.795584 326.187008-49.352704l6.264832-0.190464L403.929088 608.405504z"  /><path d="M37.963776 561.330176l-12.148736 0 0-56.184832c0-6.559744 1.898496-11.163648 5.636096-13.703168 2.953216-2.004992 6.381568-2.08896 8.921088-1.482752l299.780096 0 0-57.704448 12.148736 0 0 69.853184-314.05056-0.024576c-0.14336 0.60416-0.284672 1.56672-0.284672 3.06176L37.965824 561.330176z"  /><path d="M986.036224 465.580032l-12.148736 0c0-33.632256-20.191232-125.78816-25.102336-147.712L462.04928 317.868032l-50.36032 84.598784-10.440704-6.21568 53.895168-90.529792 503.332864 0 1.079296 4.7104C960.636928 315.138048 986.036224 426.110976 986.036224 465.580032z"  /><path d="M474.802176 282.94144l460.613632 0 0 12.148736-460.613632 0 0-12.148736Z"  /><path d="M681.82016 429.217792 422.152192 429.217792 422.152192 417.069056 669.671424 417.069056 669.671424 316.84608 681.82016 316.84608Z"  /><path d="M669.671424 438.839296l12.148736 0 0 163.49184-12.148736 0 0-163.49184Z"  /><path d="M422.152192 598.796288l269.289472 0 0 12.148736-269.289472 0 0-12.148736Z"  /><path d="M911.118336 315.328512l12.148736 0 0 135.65952-12.148736 0 0-135.65952Z"  /><path d="M996.155392 404.922368l12.148736 0 0 156.407808-12.148736 0 0-156.407808Z"  /><path d="M986.036224 559.312896 973.887488 559.312896 973.887488 476.803072 705.107968 476.803072 705.107968 464.654336 986.036224 464.654336Z"  /><path d="M644.366336 499.070976 624.625664 499.070976 624.625664 486.92224 632.219648 486.92224 632.219648 480.350208 644.366336 480.350208Z"  /><path d="M705.974272 647.12704l-434.8928 0-16.46592-14.166016 0-16.881664c-44.21632-55.81824-91.717632-57.810944-123.901952-49.53088-34.557952 8.873984-56.19712 30.418944-57.075712 35.934208l0.012288 32.493568L0 634.976256 0 574.23872l53.147648 0 0 12.148736L12.148736 586.387456l0 36.44416L61.50144 622.831616l0-20.50048c0-11.945984 24.02304-33.52576 56.174592-44.548096 31.557632-10.795008 92.78464-18.41152 147.808256 52.471808l1.282048 1.64864 0 15.48288 8.82688 7.591936 423.622656 0c8.398848-13.369344 39.340032-61.333504 57.894912-72.747008l1.232896-0.759808 1.447936-0.118784c0.700416-0.059392 69.50912-5.517312 122.112 0.012288l2.24256 0.237568 1.542144 1.636352c1.304576 1.388544 30.90432 32.956416 43.941888 58.830848l82.225152 0 0-36.44416-59.222016 0 0-12.148736L1024 573.476864l0 60.741632-102.121472 0-1.613824-3.571712c-9.703424-21.520384-35.38944-50.313216-41.914368-57.432064-46.800896-4.651008-105.846784-0.641024-116.04992 0.118784-15.505408 10.84416-44.464128 54.560768-54.54848 70.907904L705.974272 647.12704z"  /><path d="M817.989632 747.290624c-42.565632 0-77.195264-34.629632-77.195264-77.195264 0-42.555392 34.629632-77.185024 77.195264-77.185024 42.555392 0 77.185024 34.629632 77.185024 77.185024C895.174656 712.660992 860.545024 747.290624 817.989632 747.290624zM817.989632 605.059072c-35.862528 0-65.048576 29.171712-65.048576 65.036288s29.184 65.048576 65.048576 65.048576 65.036288-29.184 65.036288-65.048576S853.854208 605.059072 817.989632 605.059072z"  /><path d="M817.989632 704.52224c-18.980864 0-34.428928-15.446016-34.428928-34.428928s15.446016-34.41664 34.428928-34.41664 34.41664 15.433728 34.41664 34.41664S836.972544 704.52224 817.989632 704.52224zM817.989632 647.827456c-12.290048 0-22.280192 9.990144-22.280192 22.267904 0 12.290048 9.988096 22.280192 22.280192 22.280192 12.27776 0 22.267904-9.988096 22.267904-22.280192C840.257536 657.815552 830.26944 647.827456 817.989632 647.827456z"  /><path d="M159.954944 747.290624c-42.565632 0-77.195264-34.629632-77.195264-77.195264 0-42.555392 34.629632-77.185024 77.195264-77.185024s77.195264 34.629632 77.195264 77.185024C237.152256 712.660992 202.522624 747.290624 159.954944 747.290624zM159.954944 605.059072c-35.862528 0-65.048576 29.171712-65.048576 65.036288s29.184 65.048576 65.048576 65.048576 65.048576-29.184 65.048576-65.048576S195.81952 605.059072 159.954944 605.059072z"  /><path d="M159.954944 704.52224c-18.980864 0-34.41664-15.446016-34.41664-34.428928s15.433728-34.41664 34.41664-34.41664 34.41664 15.433728 34.41664 34.41664S178.937856 704.52224 159.954944 704.52224zM159.954944 647.827456c-12.27776 0-22.267904 9.990144-22.267904 22.267904 0 12.290048 9.988096 22.280192 22.267904 22.280192 12.27776 0 22.267904-9.988096 22.267904-22.280192C182.222848 657.815552 172.234752 647.827456 159.954944 647.827456z"  /></svg>

                <span class="text-[12px] lg:text-sm">SUV </span>
        </label>
      </div>
      <div class="flex flex-wrap lg:gap-[30px]">
        <div class="seats dropdown-container mt-[20px]">
          <h2 class="mt-2 text-sm lg:text-[14px]">Number of seats</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="numberSeats" @focus="openSeatsDropdown" @blur="openSeatsDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openSeatsDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="seatsOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <ul>
              <li key="2" @click="selectNumberSeats('2')">2</li>
              <li key="3" @click="selectNumberSeats('3')">3</li>
              <li key="4" @click="selectNumberSeats('4')">4</li>
              <li key="5" @click="selectNumberSeats('5')">5</li>
              <li key="6" @click="selectNumberSeats('6')">6</li>
              <li key="7" @click="selectNumberSeats('7')">7</li>
              <li key="8" @click="selectNumberSeats('8')">8</li>
              <li key="9" @click="selectNumberSeats('9')">9</li>
            </ul>
          </ul>
        </div>
        <div class="seats relative mt-[28px]">
          <h2 class="text-sm lg:text-[14px]">Number of doors</h2>
          <select
            class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            v-model="numDoor">
            <option value="">Any</option>
            <option value="2/3">2/3</option>
            <option value="3/5">3/5</option>
            <option value="6/7">6/7</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
        </div>
        <!-- sliding-door -->
        <div class="seats relative mt-[28px]">
          <h2 class="text-sm lg:text-[14px]">Sliding door</h2>
          <select
            class="mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px] mt-[10px]"
            v-model="slidingDoor">
            <option value="">Any</option>
            <option class="">Left side</option>
            <option class="">Right side</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-[8px] bottom-4"></span>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[14px]">Type and condition</h3>
        <div class="radios-type flex flex-wrap gap-[10px] lg:gap-[50px] mt-[10px] mb-[10px]">
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Any',
              'bg-orange': selectedCondition === 'Any',
            }" class="ml-10px" @click="selectCondition('Any')" />
            <span class="ml-[10px] text-[14px]">Any</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'New',
              'bg-orange': selectedCondition === 'New',
            }" @click="selectCondition('New')" />
            <span class="ml-[10px] text-[14px]">New</span>
          </label>
          <label>
            <input type="radio" v-model="selectedCondition" :class="{
              'bg-transparent': selectedCondition !== 'Used',
              'bg-orange': selectedCondition === 'Used',
            }" @click="selectCondition('Used')" />
            <span class="ml-[10px] text-[14px]">Used</span>
          </label>

        </div>
        <div class="conditions flex flex-wrap gap-x-[0px] lg:gap-x-[140px] mt-[20px] lg:mt-[30px] xl:mt-[20px]">
          <label class=" gap-2 flex items-center h-10 w-[140px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Pre-Registration',
              'bg-orange': selectedType === 'Pre-Registration',
            }" @click="selectType('Pre-Registration')" />

            <span class="text-sm">Pre-Registration</span>
          </label>
          <label class=" gap-2 flex items-center h-10 w-[130px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Employees Car',
              'bg-orange': selectedType === 'Employees Car',
            }" @click="selectType('Employees Car')" />

            <span class="text-sm">Employee's Car</span>
          </label>
          <label class=" gap-2 flex items-center h-10 w-[130px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Classic Vehicle',
              'bg-orange': selectedType === 'Classic Vehicle',
            }" @click="selectType('Classic Vehicle')" />

            <span class="text-sm">Classic Vehicle</span>
          </label>
          <label class=" gap-2 flex items-center h-10 w-[190px] pb-[23px]" :class="{ 'opacity-20': isRadioNewSelected }">
            <input :disabled="isRadioNewSelected" type="radio" v-model="selectedType" :class="{
              'bg-transparent': selectedType !== 'Demonstration Vehicle',
              'bg-orange': selectedType === 'Demonstration Vehicle',
            }" @click="selectType('Demonstration Vehicle')" />

            <span class="text-sm">Demonstration Vehicle</span>
          </label>
        </div>
      </div>
      <div class="lg:mt-[-10px] xl:mt-[30px]">
        <h2 class="mt-2 text-sm lg:text-[14px]">Payment type</h2>
        <div class="Kaufen_div mt-[10px]">
          <button class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab1" :class="{ 'active-Kaufen': activeTab === 'buy' }">
            {{ $t("message.btn.buy") }}
          </button>
          <button class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab2" :class="{ 'active-Kaufen': activeTab === 'sell' }">
            {{ $t("message.btn.sell") }}
          </button>
          <button class="Kaufen p-[8px] text-[14px] w-[150px] lg:w-[150px] bg-[#f1f1f1] text-[#000] rounded-[2px] pointer"
            @click="showTab3" :class="{ 'active-Kaufen': activeTab === 'rent' }">
            {{ $t("message.btn.rent") }}
          </button>
        </div>
      </div>
      <div class="price-tab flex flex-wrap items-center gap-[21px] lg:gap-[30px]">
        <div class="price dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">Price</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="price" @focus="openPriceDropdown" @blur="openPriceDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openPriceDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="priceOpen" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <ul>
              <li data-value="Free" @click="selectNumberPrice('Free')">Free</li>
              <li data-value="500" @click="selectNumberPrice('500')">
                500
              </li>
              <li data-value="750" @click="selectNumberPrice('750')">
                750
              </li>
              <li data-value="1000" @click="selectNumberPrice('1000')">
                1000
              </li>
              <li data-value="1500" @click="selectNumberPrice('1500')">
                1500
              </li>
              <li data-value="1750" @click="selectNumberPrice('1750')">
                1750
              </li>
              <li data-value="2000" @click="selectNumberPrice('2000')">
                2000
              </li>
              <li data-value="2500" @click="selectNumberPrice('2500')">
                2500
              </li>
              <li data-value="3000" @click="selectNumberPrice('3000')">
                3000
              </li>
            </ul>
          </ul>
        </div>
        <div class="years dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">
            {{ $t("message.selects.registration") }}
          </h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="inputValue" @focus="openDropdown" @input="filterOptions" @blur="openDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpen" class="dropdown-options w-[170px] text-[10px] lg:text-[12px]">
            <li key="1920" @click="selectOption('1920')">1920</li>
            <li key="1921" @click="selectOption('1921')">1921</li>
            <li key="1922" @click="selectOption('1922')">1922</li>
            <li key="1923" @click="selectOption('1923')">1923</li>
            <li key="1924" @click="selectOption('1924')">1924</li>
            <li key="1925" @click="selectOption('1925')">1925</li>
            <li key="1926" @click="selectOption('1926')">1926</li>
            <li key="1927" @click="selectOption('1927')">1927</li>
            <li key="1928" @click="selectOption('1928')">1928</li>
            <li key="1929" @click="selectOption('1929')">1929</li>
            <li key="1930" @click="selectOption('1930')">1930</li>
            <li key="1931" @click="selectOption('1931')">1931</li>
            <li key="1932" @click="selectOption('1932')">1932</li>
            <li key="1933" @click="selectOption('1933')">1933</li>
            <li key="1934" @click="selectOption('1934')">1934</li>
            <li key="1935" @click="selectOption('1935')">1935</li>
            <li key="1936" @click="selectOption('1936')">1936</li>
            <li key="1937" @click="selectOption('1937')">1937</li>
            <li key="1938" @click="selectOption('1938')">1938</li>
            <li key="1939" @click="selectOption('1939')">1939</li>
            <li key="1940" @click="selectOption('1940')">1940</li>
            <li key="1941" @click="selectOption('1941')">1941</li>
            <li key="1942" @click="selectOption('1942')">1942</li>
            <li key="1943" @click="selectOption('1943')">1943</li>
            <li key="1944" @click="selectOption('1944')">1944</li>
            <li key="1945" @click="selectOption('1945')">1945</li>
            <li key="1946" @click="selectOption('1946')">1946</li>
            <li key="1947" @click="selectOption('1947')">1947</li>
            <li key="1948" @click="selectOption('1948')">1948</li>
            <li key="1949" @click="selectOption('1949')">1949</li>
            <li key="1950" @click="selectOption('1950')">1950</li>
            <li key="1951" @click="selectOption('1951')">1951</li>
            <li key="1952" @click="selectOption('1952')">1952</li>
            <li key="1953" @click="selectOption('1953')">1953</li>
            <li key="1954" @click="selectOption('1954')">1954</li>
            <li key="1955" @click="selectOption('1955')">1955</li>
            <li key="1956" @click="selectOption('1956')">1956</li>
            <li key="1957" @click="selectOption('1957')">1957</li>
            <li key="1958" @click="selectOption('1958')">1958</li>
            <li key="1959" @click="selectOption('1959')">1959</li>
            <li key="1960" @click="selectOption('1960')">1960</li>
            <li key="1961" @click="selectOption('1961')">1961</li>
            <li key="1962" @click="selectOption('1962')">1962</li>
            <li key="1963" @click="selectOption('1963')">1963</li>
            <li key="1964" @click="selectOption('1964')">1964</li>
            <li key="1965" @click="selectOption('1965')">1965</li>
            <li key="1966" @click="selectOption('1966')">1966</li>
            <li key="1967" @click="selectOption('1967')">1967</li>
            <li key="1968" @click="selectOption('1968')">1968</li>
            <li key="1969" @click="selectOption('1969')">1969</li>
            <li key="1970" @click="selectOption('1970')">1970</li>
            <li key="1971" @click="selectOption('1971')">1971</li>
            <li key="1972" @click="selectOption('1972')">1972</li>
            <li key="1973" @click="selectOption('1973')">1973</li>
            <li key="1974" @click="selectOption('1974')">1974</li>
            <li key="1975" @click="selectOption('1975')">1975</li>
            <li key="1976" @click="selectOption('1976')">1976</li>
            <li key="1977" @click="selectOption('1977')">1977</li>
            <li key="1978" @click="selectOption('1978')">1978</li>
            <li key="1979" @click="selectOption('1979')">1979</li>
            <li key="1980" @click="selectOption('1980')">1980</li>
            <li key="1981" @click="selectOption('1981')">1981</li>
            <li key="1982" @click="selectOption('1982')">1982</li>
            <li key="1983" @click="selectOption('1983')">1983</li>
            <li key="1984" @click="selectOption('1984')">1984</li>
            <li key="1985" @click="selectOption('1985')">1985</li>
            <li key="1986" @click="selectOption('1986')">1986</li>
            <li key="1987" @click="selectOption('1987')">1987</li>
            <li key="1988" @click="selectOption('1988')">1988</li>
            <li key="1989" @click="selectOption('1989')">1989</li>
            <li key="1990" @click="selectOption('1990')">1990</li>
            <li key="1991" @click="selectOption('1991')">1991</li>
            <li key="1992" @click="selectOption('1992')">1992</li>
            <li key="1993" @click="selectOption('1993')">1993</li>
            <li key="1994" @click="selectOption('1994')">1994</li>
            <li key="1995" @click="selectOption('1995')">1995</li>
            <li key="1996" @click="selectOption('1996')">1996</li>
            <li key="1997" @click="selectOption('1997')">1997</li>
            <li key="1998" @click="selectOption('1998')">1998</li>
            <li key="1999" @click="selectOption('1999')">1999</li>
            <li key="2000" @click="selectOption('2000')">2000</li>
            <li key="2001" @click="selectOption('2001')">2001</li>
            <li key="2002" @click="selectOption('2002')">2002</li>
            <li key="2003" @click="selectOption('2003')">2003</li>
            <li key="2004" @click="selectOption('2004')">2004</li>
            <li key="2005" @click="selectOption('2005')">2005</li>
            <li key="2006" @click="selectOption('2006')">2006</li>
            <li key="2007" @click="selectOption('2007')">2007</li>
            <li key="2008" @click="selectOption('2008')">2008</li>
            <li key="2009" @click="selectOption('2009')">2009</li>
            <li key="2010" @click="selectOption('2010')">2010</li>
            <li key="2011" @click="selectOption('2011')">2011</li>
            <li key="2012" @click="selectOption('2012')">2012</li>
            <li key="2013" @click="selectOption('2013')">2013</li>
            <li key="2014" @click="selectOption('2014')">2014</li>
            <li key="2015" @click="selectOption('2015')">2015</li>
            <li key="2016" @click="selectOption('2016')">2016</li>
            <li key="2017" @click="selectOption('2017')">2017</li>
            <li key="2018" @click="selectOption('2018')">2018</li>
            <li key="2019" @click="selectOption('2019')">2019</li>
            <li key="2020" @click="selectOption('2020')">2020</li>
            <li key="2021" @click="selectOption('2021')">2021</li>
            <li key="2022" @click="selectOption('2022')">2022</li>
            <li key="2023" @click="selectOption('2023')">2023</li>
            <li key="2024" @click="selectOption('2024')">2024</li>
            <li key="2025" @click="selectOption('2025')">2025</li>
            <li key="2026" @click="selectOption('2026')">2026</li>
            <li key="2027" @click="selectOption('2027')">2027</li>
            <li key="2028" @click="selectOption('2028')">2028</li>
            <li key="2029" @click="selectOption('2029')">2029</li>
            <li key="2030" @click="selectOption('2030')">2030</li>
            <li key="2031" @click="selectOption('2031')">2031</li>
            <li key="2032" @click="selectOption('2032')">2032</li>
            <li key="2033" @click="selectOption('2033')">2033</li>
            <li key="2034" @click="selectOption('2034')">2034</li>
            <li key="2035" @click="selectOption('2035')">2035</li>
            <li key="2036" @click="selectOption('2036')">2036</li>
            <li key="2037" @click="selectOption('2037')">2037</li>
            <li key="2038" @click="selectOption('2038')">2038</li>
            <li key="2039" @click="selectOption('2039')">2039</li>
            <li key="2040" @click="selectOption('2040')">2040</li>
            <li key="2041" @click="selectOption('2041')">2041</li>
            <li key="2042" @click="selectOption('2042')">2042</li>
            <li key="2043" @click="selectOption('2043')">2043</li>
            <li key="2044" @click="selectOption('2044')">2044</li>
            <li key="2045" @click="selectOption('2045')">2045</li>
          </ul>
        </div>
        <div class="kilometer dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">
            {{ $t("message.selects.kilometr") }}
          </h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="inputKilometer" @focus="openKilmeterDropdown" @input="filterOptions"
              @blur="openKilmeterDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openKilmeterDropdown">
              <span
                class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenKilometer" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li data-key="5000" @click="selectKilometer('5000')">5.000 km</li>
            <li data-key="10000" @click="selectKilometer('10000')">
              10.000 km
            </li>
            <li data-key="20000" @click="selectKilometer('20000')">
              20.000 km
            </li>
            <li data-key="30000" @click="selectKilometer('30000')">
              30.000 km
            </li>
            <li data-key="40000" @click="selectKilometer('40000')">
              40.000 km
            </li>
            <li data-key="50000" @click="selectKilometer('50000')">
              50.000 km
            </li>
            <li data-key="60000" @click="selectKilometer('60000')">
              60.000 km
            </li>
            <li data-key="70000" @click="selectKilometer('70000')">
              70.000 km
            </li>
            <li data-key="80000" @click="selectKilometer('80000')">
              80.000 km
            </li>
            <li data-key="90000" @click="selectKilometer('90000')">
              90.000 km
            </li>
            <li data-key="100000" @click="selectKilometer('100000')">
              100.000 km
            </li>
            <li data-key="125000" @click="selectKilometer('125000')">
              125.000 km
            </li>
            <li data-key="150000" @click="selectKilometer('150000')">
              150.000 km
            </li>
            <li data-key="175000" @click="selectKilometer('175000')">
              175.000 km
            </li>
            <li data-key="200000" @click="selectKilometer('200000')">
              200.000 km
            </li>
          </ul>
        </div>
      </div>
      <div class="valid-until mt-[40px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">HU valid until</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="huValid">
            <option value="new">New</option>
            <option value="60">60</option>
            <option value="48">48</option>
            <option value="46">46</option>
            <option value="24">24</option>
            <option value="18">18</option>
            <option value="12">12</option>
            <option value="9">9</option>
            <option value="6">6</option>
            <option value="3">3</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="pre dropdown-container">
          <h2 class="mt-2 text-sm lg:text-[14px]">
            Previous owners
          </h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="preOwners" @focus="openPreDropdown" @input="filterOptions"
              @blur="openPreDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openPreDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenPre" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li data-key="1" @click="selectPre('1')">1</li>
            <li data-key="2" @click="selectPre('2')">
              2
            </li>
            <li data-key="3" @click="selectPre('3')">
              3
            </li>
            <li data-key="4" @click="selectPre('4')">
             4
            </li>
            <li data-key="5" @click="selectPre('5')">
             5
            </li>
            <li data-key="500060" @click="selectPre('6')">
             6
            </li>
            <li data-key="7" @click="selectPre('7')">
              7
            </li>
            <li data-key="8" @click="selectPre('8')">
              8
            </li>
            <li data-key="9" @click="selectPre('9')">
              9
            </li>
            <li data-key="10" @click="selectPre('10')">
              10  
            </li>
          </ul>
        </div>

      </div>
      <div class="valid-until mt-[20px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2">
          <h2 class="text-sm lg:text-[14px]">Country</h2>
          <select
            class="mark-select mt-[10px] w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="selectedCountry">
            <optgroup>
              <option value="" selected>Any</option>
            </optgroup>
            <optgroup>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="AL">Albania</option>
              <option value="AT">Austria</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="AD">Andorra</option>
              <option value="BR">Brazil</option>
              <option value="BG">Bulgaria</option>
              <option value="CA">Canada</option>
              <option value="HR">Croatia</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="EG">Egypt</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FO">Faroe Islands</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="GR">Greece</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KW">Kuwait</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MK">Macedonia</option>
              <option value="MT">Malta</option>
              <option value="MX">Mexico</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="ME">Montenegro</option>
              <option value="MA">Morocco</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NG">Nigeria</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="SM">San Marino</option>
              <option value="SA">Saudi Arabia</option>
              <option value="RS">Serbia</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="ZA">South Africa</option>
              <option value="KR">South Korea</option>
              <option value="ES">Spain</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="TW">Taiwan</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">USA</option>
            </optgroup>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-2">
          <h2 class="text-sm lg:text-[14px]">City / Post code</h2>
          <input
            class="mark_input mt-[10px] text-[14px] mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] ] lg:text-[12px]"
            type="text" v-model="zipCode" />
        </div>
        <!--  -->
        <div class="radius dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">Radius</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="radius" @focus="openRadiusDropdown" @input="filterOptions"
              @blur="openRadiusDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openRadiusDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenRadius" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li data-key="10" @click="selectRadius('10')">10 km</li>
            <li data-key="20" @click="selectRadius('20')">20 km</li>
            <li data-key="50" @click="selectRadius('50')">50 km</li>
            <li data-key="100" @click="selectRadius('100')">100 km</li>
            <li data-key="200" @click="selectRadius('200')">200 km</li>
            <li data-key="500" @click="selectRadius('500')">500 km</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-[30px] justify-end mt-[20px]">
        <button class="bg-red-500 rounded-[8px] p-[10px]" @click="handleCancelButtonClick">
          Cancel
        </button>
        <button :disabled="isNextButtonDisabled" @click="addAdBasicCars" class="bg-blue-500 rounded-[8px] p-[10px]">
          Next
        </button>
      </div>
    </div>
    <div class="fuel-add" v-show="fuelAdd">
      <div class="mt-[10px]">
        <h3 class="text-[14px] lg:text-[16px]">Fuel Type</h3>
        <div class="filter-cars flex flex-wrap gap-[20px] lg:gap-x-[60px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Diesel',
              'bg-orange': selectedFuel === 'Diesel',
            }" @click="selectFuel('Diesel')" />

            Diesel
          </label>
          <label
            class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (diesel/electric)',
              'bg-orange': selectedFuel === 'Hybrid (diesel/electric)',
            }" @click="selectFuel('Hybrid (diesel/electric)')" />

            Hybrid (diesel/electric)
          </label>
          <label
            class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Natural Gas',
              'bg-orange': selectedFuel === 'Natural Gas',
            }" @click="selectFuel('Natural Gas')" />

            Natural Gas
          </label>
          <label
            class="custom-checkbox flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px] p-0">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Other',
              'bg-orange': selectedFuel === 'Other',
            }" @click="selectFuel('Other')" />

            Other
          </label>
          <label
            class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Petrol',
              'bg-orange': selectedFuel === 'Petrol',
            }" @click="selectFuel('Petrol')" />

            Petrol
          </label>
          <label
            class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[20px] lg:h-[40px] w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Electric',
              'bg-orange': selectedFuel === 'Electric',
            }" @click="selectFuel('Electric')" />

            Electric
          </label>
          <!-- estate -->
          <label class="custom-checkbox p-0 flex gap-[10px] text-[14px] items-center h-[10px] lg:h-10 w-[206px] pb-4 ">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hydrogen',
              'bg-orange': selectedFuel === 'Hydrogen',
            }" @click="selectFuel('Hydrogen')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Hydrogen</span>
          </label>

          <!-- saloon -->
          <label class="custom-checkbox p-0 flex gap-[10px] items-center h-[10px] lg:h-10 w-[200px] pb-4">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Plug-in hybrid',
              'bg-orange': selectedFuel === 'Plug-in hybrid',
            }" @click="selectFuel('Plug-in hybrid')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Plug-in hybrid</span>
          </label>
          <!-- small -->
          <label class="custom-checkbox p-0 flex gap-[10px] items-center h-[10px] lg:h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Hybrid (petrol/electric)',
              'bg-orange': selectedFuel === 'Hybrid (petrol/electric)',
            }" @click="selectFuel('Hybrid (petrol/electric)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Hybrid (petrol/electric)</span>
          </label>
          <!-- sports -->
          <label class="custom-checkbox p-0 flex gap-3 items-center h-[10px] lg:h-10 w-[206px] pb-[20px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'LPG',
              'bg-orange': selectedFuel === 'LPG',
            }" @click="selectFuel('LPG')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">LPG</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 flex gap-[10px] items-center h-[10px] lg:h-10 w-[206px] pb-[23px]">
            <input type="radio" v-model="selectedFuel" :class="{
              'bg-transparent': selectedFuel !== 'Ethanol (FFV, E85, etc.)',
              'bg-orange': selectedFuel === 'Ethanol (FFV, E85, etc.)',
            }" @click="selectFuel('Ethanol (FFV, E85, etc.)')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Ethanol (FFV, E85, etc.)</span>
          </label>
        </div>
      </div>
      <div class="price-tab flex flex-wrap items-center gap-x-[20px] lg:gap-[30px]">
        <div class="power dropdown-container">
          <h2 class="text-sm lg:text-[14px] mt-2">Power</h2>
          <div class="input-container flex relative mt-[10px]">
            <input type="from"
              class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
              placeholder="from" v-model="power" @focus="openPowerDropdown" @input="filterOptions"
              @blur="openPowerDropdown" />

            <div
              class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
              @click="openPowerDropdown">
              <span class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
            </div>
          </div>
          <ul v-if="isOpenPower" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
            <li @click="selectPower('34')" data-key="34">34</li>
            <li @click="selectPower('50')" data-key="50">50</li>
            <li @click="selectPower('60')" data-key="60">60</li>
            <li @click="selectPower('75')" data-key="75">75</li>
            <li @click="selectPower('90')" data-key="90">90</li>
            <li @click="selectPower('101')" data-key="101">101</li>
            <li @click="selectPower('118')" data-key="118">118</li>
            <li @click="selectPower('131')" data-key="131">131</li>
            <li @click="selectPower('150')" data-key="150">150</li>
            <li @click="selectPower('200')" data-key="200">200</li>
            <li @click="selectPower('252')" data-key="252">252</li>
            <li @click="selectPower('303')" data-key="303">303</li>
            <li @click="selectPower('358')" data-key="358">358</li>
            <li @click="selectPower('402')" data-key="402">402</li>
            <li @click="selectPower('454')" data-key="454">454</li>
          </ul>
        </div>
        <div>
          <h2 class="text-sm lg:text-[14px] mt-2">Cubic capacity</h2>
          <div class="cubic dropdown-container">
            <div class="input-container flex relative mt-[10px]">
              <input type="from"
                class="dropdown-input mark_input mark-select w-[200px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[30px] text-[10px] lg:text-[12px]"
                placeholder="from" v-model="cubic" @focus="openCubicDropdown" @input="filterOptions"
                @blur="openCubicDropdown" />

              <div
                class="mark-input2 bg-[#5555] w-[20px] h-[35px] outline-none py-[7px] absolute right-[0px] text-[10px] lg:text-[12px]"
                @click="openCubicDropdown">
                <span
                  class="arrow w-[7px] h-[7px] absolute right-[7px] bottom-[14px] lg:bottom-[15px] xl:bottom-4"></span>
              </div>
            </div>
            <ul v-if="isOpenCubic" class="dropdown-options w-[200px] text-[10px] lg:text-[12px]">
              <li @click="selectCubic('any')" data-key="">Any</li>
              <li @click="selectCubic('1000')" data-key="1000">1,000 cm³</li>
              <li @click="selectCubic('1200')" data-key="1200">1,200 cm³</li>
              <li @click="selectCubic('1400')" data-key="1400">1,400 cm³</li>
              <li @click="selectCubic('1600')" data-key="1600">1,600 cm³</li>
              <li @click="selectCubic('1800')" data-key="1800">1,800 cm³</li>
              <li @click="selectCubic('2000')" data-key="2000">2,000 cm³</li>
              <li @click="selectCubic('2600')" data-key="2600">2,600 cm³</li>
              <li @click="selectCubic('3000')" data-key="3000">3,000 cm³</li>
              <li @click="selectCubic('5000')" data-key="5000">5,000 cm³</li>
              <li @click="selectCubic('7500')" data-key="7500">7,500 cm³</li>
              <li @click="selectCubic('8000')" data-key="8000">8,000 cm³</li>
              <li @click="selectCubic('9000')" data-key="9000">9,000 cm³</li>
            </ul>
          </div>
        </div>
        <label for="condition-any" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedCondition" :class="{
            'bg-transparent': selectedCondition !== 'Hp',
            'bg-orange': selectedCondition === 'Hp',
          }" @click="selectCondition('Hp')" />
          <span class="ml-[10px]">Hp</span>
        </label>
        <label for="condition-any" @click="selectCondition('kW')" class="mt-[30px]">
          <input type="radio" id="condition-any" v-model="selectedCondition" :class="{
            'bg-transparent': selectedCondition !== 'kW',
            'bg-orange': selectedCondition === 'kW',
          }" />
          <span class="ml-[10px]">kW</span>
        </label>
      </div>

      <div class="flex flex-wrap  lg:gap-[100px]">
        <div class="
			">
          <h3 class="mt-[20px] lg:mt-[60px]">Transmission</h3>
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[210px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent':
                selectedTransmision !== 'Automatic transmissio',
              'bg-orange': selectedTransmision === 'Automatic transmissio',
            }" @click="selectTransmision('Automatic transmissio')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Automatic transmission</span>
          </label>
        </div>
        <div class=" lg:mt-[84px]">
          <label class="custom-checkbox flex p-0 gap-[10px] items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Semi-automatic',
              'bg-orange': selectedTransmision === 'Semi-automatic',
            }" @click="selectTransmision('Semi-automatic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Semi-automatic</span>
          </label>
        </div>
        <div class=" lg:mt-[84px]">
          <label class="custom-checkbox flex gap-[10px] p-0 items-center h-10 w-[180px]">
            <input type="radio" v-model="selectedTransmision" :class="{
              'bg-transparent': selectedTransmision !== 'Manual gearbox',
              'bg-orange': selectedTransmision === 'Manual gearbox',
            }" @click="selectTransmision('Manual gearbox')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Manual gearbox </span>
          </label>
        </div>
      </div>
      <div class="valid-until mt-[30px] lg:mt-[30px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[30px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-sm lg:text-[14px]">
            {{ $t("message.filter_page.consumption") }}
          </h2>
          <select
            class="mark-select w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] mt-[10px] lg:text-[12px]"
            v-model="consumptionFuel">
            <option value="any" selected>Any</option>
            <option value="new">New</option>
            <option value="18">18</option>
            <option value="12">12</option>
            <option value="9">9</option>
            <option value="6">6</option>
            <option value="3">3</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-[14px] lg:mt-[30px] lg:w-[200px]">
          <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.sticker") }}</h2>
          <select
            class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="stickerEmission">
            <option value="any" selected>{{ $t("message.filter_page.any") }}</option>
            <option value="1(None)">1(None)</option>
            <option value="2(Red)">2(Red)</option>
            <option value="3(Yellow)">3(Yellow)</option>
            <option value="4(Green)">4(Green)</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <div class="marke_select_div relative mt-[20px] lg:mt-[30px] w-[150px] lg:w-[200px]">
          <h2 class="text-sm lg:text-[14px]">{{ $t("message.filter_page.class") }}</h2>
          <select
            class="mark-select mt-[10px] w-[160px] lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="classEmision">
            <option value="any" selected>{{ $t("message.filter_page.any") }}</option>
            <option value="Euro1">Euro1</option>
            <option value="Euro2">Euro2</option>
            <option value="Euro3">Euro3</option>
            <option value="Euro4">Euro4</option>
            <option value="Euro5">Euro5</option>
            <option value="Euro6">Euro6</option>
            <option value="Euro6с">Euro6с</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 lg:right-5 xl:right-2 bottom-4"></span>
        </div>
        <label class="custom-checkbox flex items-center h-10 w-[145px] mt-[25px]">
          <input type="checkbox" v-model="isCheckedParticulate" @click="toggleShowCheckboxOthers"
            class="form-checkbox h-5 w-5 text-indigo-600" />
          <svg class="icon mt-[10px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
            <!-- Insert your SVG arrow icon here -->
            <path v-if="isCheckedParticulate" fill="#FFFFFF"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>

          <span class="text-sm">Particulate filter </span>
        </label>
      </div>
      <div class="line mt-[50px]"></div>
      <div class="mt-[30px]">
        <h3 class="text-[16px]">Exterior Colour</h3>
        <div class="filter-cars flex flex-wrap gap-[10px] lg:gap-x-[20px] mt-[20px]">
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Beige',
              'bg-orange': selectedExteriorColour === 'Beige',
            }" @click="selectExteriorColour('Beige')" />

            Beige
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Brown',
              'bg-orange': selectedExteriorColour === 'Brown',
            }" @click="selectExteriorColour('Brown')" />

            Brown
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Gold',
              'bg-orange': selectedExteriorColour === 'Gold',
            }" @click="selectExteriorColour('Gold')" />

            Gold
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Green',
              'bg-orange': selectedExteriorColour === 'Green',
            }" @click="selectExteriorColour('Green')" />

            Green
          </label>
          <label
            class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Red',
              'bg-orange': selectedExteriorColour === 'Red',
            }" @click="selectExteriorColour('Red')" />

            Red
          </label>
          <label
            class="custom-checkbox custom-silver flex gap-[10px] text-[14px] items-center h-[40px] w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Silver',
              'bg-orange': selectedExteriorColour === 'Silver',
            }" @click="selectExteriorColour('Silver')" />

            Silver
          </label>
          <label
            class="custom-checkbox custom-white flex gap-4 text-[14px] items-center h-10 w-[80px] lg:w-[100px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'White',
              'bg-orange': selectedExteriorColour === 'White',
            }" @click="selectExteriorColour('White')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">White</span>
          </label>
          <label class="custom-checkbox custom-blue flex gap-4 items-center h-10 w-[120px] pb-4 p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Blue',
              'bg-orange': selectedExteriorColour === 'Blue',
            }" @click="selectExteriorColour('Blue')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Blue</span>
          </label>

          <label class="custom-checkbox custom-yellow flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Yellow',
              'bg-orange': selectedExteriorColour === 'Yellow',
            }" @click="selectExteriorColour('Yellow')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Yellow</span>
          </label>

          <label class="custom-checkbox custom-grey flex gap-3 items-center h-10 w-[80px] lg:w-[100px] pb-[20px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Grey',
              'bg-orange': selectedExteriorColour === 'Grey',
            }" @click="selectExteriorColour('Grey')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Grey</span>
          </label>

          <label class="custom-checkbox custom-orange flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Orange',
              'bg-orange': selectedExteriorColour === 'Orange',
            }" @click="selectExteriorColour('Orange')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Orange</span>
          </label>

          <label class="custom-checkbox custom-black flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Black',
              'bg-orange': selectedExteriorColour === 'Black',
            }" @click="selectExteriorColour('Black')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Black</span>
          </label>

          <label class="custom-checkbox custom-purple flex gap-4 items-center h-10 w-[80px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Purple',
              'bg-orange': selectedExteriorColour === 'Purple',
            }" @click="selectExteriorColour('Purple')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Purple</span>
          </label>

          <label
            class="custom-checkbox custom-metallic flex gap-4 items-center h-10 w-[100px] lg:w-[100px] pb-[23px] p-0">
            <input type="radio" v-model="selectedExteriorColour" :class="{
              'bg-transparent': selectedExteriorColour !== 'Metallic',
              'bg-orange': selectedExteriorColour === 'Metallic',
            }" @click="selectExteriorColour('Metallic')" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Metallic</span>
          </label>
        </div>
      </div>
      <div class="condition mt-[20px] text-[14px]">
        <h3>Trailer coupling</h3>
        <div class="radios-type flex flex-wrap gap-[10px] lg:gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Fix',
              'bg-orange': selectedTrailer === 'Fix',
            }" @click="selectTrailer('Fix')" />
            <span class="ml-[10px]">Fix, detachable or swiveling</span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Detachable',
              'bg-orange': selectedTrailer === 'Detachable',
            }" @click="selectTrailer('Detachable')" />
            <span class="ml-[10px]">Detachable or swiveling </span>
          </label>
          <label>
            <input type="radio" id="condition-any" v-model="selectedTrailer" :class="{
              'bg-transparent': selectedTrailer !== 'Swiveling',
              'bg-orange': selectedTrailer === 'Swiveling',
            }" @click="selectTrailer('Swiveling')" />
            <span class="ml-[10px]">Swiveling</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <h3>Parking sensors</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label class="custom-checkbox custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Rear')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Rear',
              'bg-orange': selectedParking === 'Rear',
            }" />

            Rear
          </label>
          <label class="custom-checkbox custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Front')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Front',
              'bg-orange': selectedParking === 'Front',
            }" />

            Front
          </label>
          <label class="custom-checkbox custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Camera')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Camera',
              'bg-orange': selectedParking === 'Camera',
            }" />

            Camera
          </label>
          <label class="custom-checkbox custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('360° camera')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== '360° camera',
              'bg-orange': selectedParking === '360° camera',
            }" />

            360° camera
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px] p-0">
            <input @click="selectParking('Self-steering systems')" type="radio" v-model="selectedParking" :class="{
              'bg-transparent': selectedParking !== 'Self-steering systems',
              'bg-orange': selectedParking === 'Self-steering systems',
            }" />

            Self-steering systems
          </label>
        </div>
      </div>
      <div class="condition text-[14px]">
        <h3>Cruise control</h3>
        <div class="radios-type flex flex-wrap gap-[10px] lg:gap-[30px] mt-[10px]">
          <label>
            <input type="radio" id="condition-any" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Cruise',
              'bg-orange': selectedCruise === 'Cruise',
            }" @click="selectCruise('Cruise')" />
            <span class="ml-[10px]">Cruise control </span>
          </label>
          <label>
            <input type="radio" id="condition-adap" v-model="selectedCruise" :class="{
              'bg-transparent': selectedCruise !== 'Adaptive',
              'bg-orange': selectedCruise === 'Adaptive',
            }" @click="selectCruise('Adaptive')" />
            <span class="ml-[10px]">Adaptive Cruise Control</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px] ">
        <h3>{{ $t("message.filter_page.features.others") }}</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedABS" @click="toggleShowCheckboxOthers(0, 'ABS')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedABS" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.abs") }}
          </label>
          <label
            class="custom-checkbox custom-brown flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergency"
              @click="toggleShowCheckboxOthers(1, 'Emergency brake assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergency" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.brake") }} </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCentral"
              @click="toggleShowCheckboxOthers(2, 'Keyless central locking')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCentral" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Keyless central locking
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSpeed"
              @click="toggleShowCheckboxOthers(3, 'Speed limit control system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSpeed" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.speed") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAdaptive"
              @click="toggleShowCheckboxOthers(4, 'Adaptive cornering lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAdaptive" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.adaptivecor") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTyre" @click="toggleShowCheckboxOthers(5, 'Emergency tyre')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTyre" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.emergy") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLastChanges"
              @click="toggleShowCheckboxOthers(6, 'Lane change assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLastChanges" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.lanechange") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportsPackage"
              @click="toggleShowCheckboxOthers(7, 'Sports package')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportsPackage" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sportpackage") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAdaptiveLighting"
              @click="toggleShowCheckboxOthers(8, 'Adaptive lighting')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAdaptiveLighting" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.adaplight") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergencyKit"
              @click="toggleShowCheckboxOthers(9, 'Emergency tyre repair kit')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergencyKit" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.emergykit") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLaserHeadlights"
              @click="toggleShowCheckboxOthers(10, 'Laser headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLaserHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.laser") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportsSuspension"
              @click="toggleShowCheckboxOthers(11, 'Sports suspension')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportsSuspension" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sport") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAirSuspension"
              @click="toggleShowCheckboxOthers(12, 'Air suspension')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAirSuspension" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.air") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedESP" @click="toggleShowCheckboxOthers(13, 'ESP')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedESP" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.esp") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLEDHeadlights"
              @click="toggleShowCheckboxOthers(14, 'LED headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLEDHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.ledhead") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedStartStopSystem"
              @click="toggleShowCheckboxOthers(15, 'Start-stop system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedStartStopSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.start") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAlloyWheels" @click="toggleShowCheckboxOthers(16, 'Alloy wheels')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAlloyWheels" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.alloy") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFogLamp" @click="toggleShowCheckboxOthers(17, 'Fog lamp')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFogLamp" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fog") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLEDRunningLights"
              @click="toggleShowCheckboxOthers(18, 'LED running lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLEDRunningLights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.led") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSteelWheels" @click="toggleShowCheckboxOthers(19, 'Steel wheels')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSteelWheels" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.steel") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAllTyres"
              @click="toggleShowCheckboxOthers(20, 'All season tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAllTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.season") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFourWheelDrive"
              @click="toggleShowCheckboxOthers(21, 'Four wheel drive')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFourWheelDrive" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fourwheel") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLightSensor" @click="toggleShowCheckboxOthers(22, 'Light sensor')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLightSensor" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.light") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSummerTyres" @click="toggleShowCheckboxOthers(23, 'Summer tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSummerTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.summer") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedBixenonHeadlights"
              @click="toggleShowCheckboxOthers(24, 'Bi-xenon headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedBixenonHeadlights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.bixenon") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedGlarefreeHigh"
              @click="toggleShowCheckboxOthers(25, 'Glare-free high beam headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedGlarefreeHigh" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.glare") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedNightVisionAssist"
              @click="toggleShowCheckboxOthers(26, 'Night vision assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedNightVisionAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.night") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSunroof" @click="toggleShowCheckboxOthers(27, 'Sunroof')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSunroof" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sunroof") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedBlindSpotAssist"
              @click="toggleShowCheckboxOthers(28, 'Blind spot assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedBlindSpotAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.blind") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeadlightWasherSystem"
              @click="toggleShowCheckboxOthers(29, 'Headlight washer system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeadlightWasherSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.headlight") }} </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPanoramicRoof"
              @click="toggleShowCheckboxOthers(30, 'Panoramic roof')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPanoramicRoof" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.panoramic") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTractionСontrol"
              @click="toggleShowCheckboxOthers(31, 'Traction control')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTractionСontrol" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.traction") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCentralLocking"
              @click="toggleShowCheckboxOthers(32, 'Central locking')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCentralLocking" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.centralocking") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeatedWindshield"
              @click="toggleShowCheckboxOthers(33, 'Heated windshield')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeatedWindshield" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.heatwind") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPowerAssistedSteering"
              @click="toggleShowCheckboxOthers(34, 'Power Assisted Steering')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPowerAssistedSteering" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.powerassistedsteering") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTrafficSign"
              @click="toggleShowCheckboxOthers(35, 'Traffic sign recognition')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTrafficSign" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.trafficsign") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDayTimeRunning"
              @click="toggleShowCheckboxOthers(36, 'Daytime running lights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDayTimeRunning" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.daytimerunning") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHighBeamAssist"
              @click="toggleShowCheckboxOthers(37, 'High beam assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHighBeamAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.highbeamassist") }}
          </label>

          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedRainSensor" @click="toggleShowCheckboxOthers(38, 'Rain sensor')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedRainSensor" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.rainsensor") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTyrePressure"
              @click="toggleShowCheckboxOthers(39, 'Tyre pressure monitoring')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTyrePressure" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.tyrepressure") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDistanceWarning"
              @click="toggleShowCheckboxOthers(39, 'Distance warning system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDistanceWarning" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.distancewarning") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHillStartAssist"
              @click="toggleShowCheckboxOthers(40, 'Hill-start assist')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHillStartAssist" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.hillstart") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedRoofRack" @click="toggleShowCheckboxOthers(41, 'Roof rack')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedRoofRack" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.roofrack") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWinterTyres" @click="toggleShowCheckboxOthers(42, 'Winter tyres')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWinterTyres" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.wintertyres") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectricTailgate"
              @click="toggleShowCheckboxOthers(43, 'Electric tailgate')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectricTailgate" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.electrictailgate") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedImmobilizer" @click="toggleShowCheckboxOthers(44, 'Immobilizer')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedImmobilizer" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.immobilizer") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSpareTyre" @click="toggleShowCheckboxOthers(45, 'Spare tyre')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSpareTyre" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sparetyre") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedXenonHeadLights"
              @click="toggleShowCheckboxOthers(46, 'Xenon headlights')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedXenonHeadLights" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.xenonheadlights") }}
          </label>

        </div>
      </div>
      <div class="flex gap-[30px] justify-end mt-[20px]">
        <button class="bg-red-500 rounded-[8px] p-[10px]" @click="cancelAdCar">
          Cancel
        </button>
        <button @click="thenPowerAdd" class="bg-blue-500 rounded-[8px] p-[10px]">
          Next
        </button>
      </div>
    </div>
    <div class="interior" v-show="interiorAdd">
      <div class="mt-[30px]">
        <h3>Interior Colour</h3>
        <div class="filter-cars flex flex-wrap gap-x-[20px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox p-0 custom-beige flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Beige')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Beige',
              'bg-orange': selectedInteriorColour === 'Beige',
            }" />

            Beige
          </label>
          <label
            class="custom-checkbox p-0 custom-brown flex gap-[10px] text-[14px] items-center h-[40px] w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Brown')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Brown',
              'bg-orange': selectedInteriorColour === 'Brown',
            }" />

            Brown
          </label>
          <label class="custom-checkbox p-0 custom-grey flex gap-3 items-center h-10 w-[100px] pb-[20px]">
            <input type="radio" @click="selectInteriorColour('Grey')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Grey',
              'bg-orange': selectedInteriorColour === 'Grey',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-[14px]">Grey</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 custom-black flex gap-4 items-center h-10 w-[100px] pb-[23px]">
            <input type="radio" @click="selectInteriorColour('Black')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Black',
              'bg-orange': selectedInteriorColour === 'Black',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Black</span>
          </label>
          <!-- off-road -->
          <label class="custom-checkbox p-0 custom-purple flex gap-4 items-center h-10 w-[100px] pb-[23px]">
            <input type="radio" @click="selectInteriorColour('Other')" v-model="selectedInteriorColour" :class="{
              'bg-transparent': selectedInteriorColour !== 'Other',
              'bg-orange': selectedInteriorColour === 'Other',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            <span class="text-sm">Other</span>
          </label>
        </div>
      </div>
      <div class="mt-[20px]">
        <h3>Interior material</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[20px]">
          <!-- cabrio -->
          <label class="custom-checkbox p-0 custom-beige flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Alcantra')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Alcantra',
              'bg-orange': selectedMaterial === 'Alcantra',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />
            Alcantra
          </label>
          <label class="custom-checkbox p-0 custom-brown flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Cloth')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Cloth',
              'bg-orange': selectedMaterial === 'Cloth',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            Cloth
          </label>
          <label class="custom-checkbox p-0 custom-gold flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Part leather')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Part leather',
              'bg-orange': selectedMaterial === 'Part leather',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            Part leather
          </label>
          <label class="custom-checkbox p-0 custom-green flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Velour')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Velour',
              'bg-orange': selectedMaterial === 'Velour',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />
            Velour
          </label>
          <label class="custom-checkbox p-0 custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Full leather')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Full leather',
              'bg-orange': selectedMaterial === 'Full leather',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />

            Full Leather
          </label>
          <label class="custom-checkbox p-0 custom-red flex gap-[10px] text-[14px] items-center h-[40px] pb-[20px]">
            <input type="radio" @click="selectMaterial('Other')" v-model="selectedMaterial" :class="{
              'bg-transparent': selectedMaterial !== 'Other',
              'bg-orange': selectedMaterial === 'Other',
            }" class="form-checkbox h-5 w-5 text-indigo-600" />
            Other
          </label>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3>Airbags</h3>
        <div class="radios-type flex flex-wrap gap-[30px] mt-[10px] xl:mt-[20px]">
          <label for="driver-airbag">
            <input type="radio" id="driver-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Driver',
              'bg-orange': selectedAirbag === 'Driver',
            }" @click="selectAirbag('Driver')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Driver Airbag </span>
          </label>
          <label for="front-airbag">
            <input type="radio" id="front-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'Front',
              'bg-orange': selectedAirbag === 'Front',
            }" @click="selectAirbag('Front')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front Airbags</span>
          </label>

          <label for="side-airbag">
            <input type="radio" id="side-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'FrontAndSide',
              'bg-orange': selectedAirbag === 'FrontAndSide',
            }" @click="selectAirbag('FrontAndSide')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front and Side Airbags
            </span>

          </label>
          <label for="more-airbag">
            <input type="radio" id="more-airbag" v-model="selectedAirbag" :class="{
              'bg-transparent': selectedAirbag !== 'FrontAndSideMore',
              'bg-orange': selectedAirbag === 'FrontAndSideMore',
            }" @click="selectAirbag('FrontAndSideMore')" />
            <span class="ml-[2px] xl:ml-[10px] text-[14px]">Front and Side and More Airbags
            </span>
          </label>
        </div>
      </div>
      <div class="condition mt-[40px]">
        <h3 class="text-[14px] lg:text-[16px]">Air conditioning</h3>
        <div class="radios-type flex flex-wrap gap-x-[20px] gap-y-[30px] mt-[20px]">
          <label class="w-[250px]" for="manual">
            <input type="radio" id="manual" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Manual',
              'bg-orange': selectedConditioning === 'Manual',
            }" @click="selectAirConditioning('Manual')" />
            <span class="ml-[10px] text-[14px]">Manual or automatic climatisation
            </span>
          </label>
          <label class="w-[250px]" for="auto-climat">
            <input type="radio" id="auto-climat" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Auto-Climat',
              'bg-orange': selectedConditioning === 'Auto-Climat',
            }" @click="selectAirConditioning('Auto-Climat')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 2 zones
            </span>
          </label>

          <label class="w-[250px]" for="auto2">
            <input type="radio" id="auto2" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Auto-Climat2',
              'bg-orange': selectedConditioning === 'Auto-Climat2',
            }" @click="selectAirConditioning('Auto-Climat2')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 4 zones</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'NoClimat',
              'bg-orange': selectedConditioning === 'NoClimat',
            }" @click="selectAirConditioning('NoClimat')" />
            <span class="ml-[10px] text-[14px]">No climatisation</span>
          </label>
          <label class="w-[200px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'AutoClimat',
              'bg-orange': selectedConditioning === 'AutoClimat',
            }" @click="selectAirConditioning('AutoClimat')" />
            <span class="ml-[10px] text-[14px]">Automatic air conditioning </span>
          </label>
          <label class="w-[250px]">
            <input type="radio" v-model="selectedConditioning" :class="{
              'bg-transparent': selectedConditioning !== 'Auto-Climat3',
              'bg-orange': selectedConditioning === 'Auto-Climat3',
            }" @click="selectAirConditioning('Auto-Climat3')" />
            <span class="ml-[10px] text-[14px]">Automatic climatisation, 3 zones
            </span>
          </label>
        </div>
      </div>
      <div class="mt-[40px]">
        <h3 class="text-[16px]">{{ $t("message.filter_page.features.extras") }}</h3>
        <div class="filter-cars flex flex-wrap gap-x-[30px] gap-y-[8px] mt-[20px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-beige flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAlarmSystem" @click="toggleShowCheckboxExtras(0, 'Alarm System')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAlarmSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.alarm") }}
          </label>
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeated"
              @click="toggleShowCheckboxExtras(1, 'Heated steering wheel')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeated" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.heat") }}
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSeat" @click="toggleShowCheckboxExtras(2, 'Seat ventilation')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSeat" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.seat") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAmbient" @click="toggleShowCheckboxExtras(4, 'Ambient lighting')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAmbient" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.abm") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectric"
              @click="toggleShowCheckboxExtras(5, 'Electric backseat adjustment')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectric" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.electric") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedInduction" @click="
              toggleShowCheckboxExtras(6, 'Induction charging for smartphones')
              " />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedInduction" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.smart") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSki" @click="toggleShowCheckboxExtras(7, 'Ski bag')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSki" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.ski") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAndroidAuto" @click="toggleShowCheckboxExtras(7, 'Android Auto')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAndroidAuto" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.android") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectricSeat"
              @click="toggleShowCheckboxExtras(7, 'Electric seat adjustment')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectricSeat" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.electseat") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedIntegratedMusicStreaming"
              @click="toggleShowCheckboxExtras(7, 'Integrated music streaming')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedIntegratedMusicStreaming" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.integrated") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSmokersPackage"
              @click="toggleShowCheckboxExtras(7, 'Smokers package')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSmokersPackage" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.smoker") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAppleCarPlay"
              @click="toggleShowCheckboxExtras(7, 'Apple CarPlay')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAppleCarPlay" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.apple") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectricSideMirror"
              @click="toggleShowCheckboxExtras(7, 'Electric side mirror')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectricSideMirror" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sidemir") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedIsofix" @click="toggleShowCheckboxExtras(7, 'Isofix')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedIsofix" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.isofix") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSoundSystem" @click="toggleShowCheckboxExtras(7, 'Sound system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSoundSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sound") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedArmRest" @click="toggleShowCheckboxExtras(7, 'Arm rest')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedArmRest" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.armset") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedElectricWindows"
              @click="toggleShowCheckboxExtras(7, 'Electric windows')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedElectricWindows" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.window") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLeatherSteeringWheel"
              @click="toggleShowCheckboxExtras(7, 'Leather steering wheel')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLeatherSteeringWheel" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.leather") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedSportSeats" @click="toggleShowCheckboxExtras(7, 'Sport seats')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedSportSeats" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.sport") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAutomInteriorMirror"
              @click="toggleShowCheckboxExtras(7, 'Autom. dimming interior mirror')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAutomInteriorMirror" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.autom") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEmergencyCallSystem"
              @click="toggleShowCheckboxExtras(7, 'Emergency call system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEmergencyCallSystem" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.call") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedLumbarSupport"
              @click="toggleShowCheckboxExtras(7, 'Lumbar support')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedLumbarSupport" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.lumbar") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTouchscreen" @click="toggleShowCheckboxExtras(7, 'Touchscreen')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTouchscreen" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.touch") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedAuxiliaryHeating"
              @click="toggleShowCheckboxExtras(7, 'Auxiliary heating')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedAuxiliaryHeating" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.axu") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFatigueWarning"
              @click="toggleShowCheckboxExtras(7, 'Fatigue warning system')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFatigueWarning" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fatigue") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedMassageSeats"
              @click="toggleShowCheckboxExtras(7, 'Massage seats')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedMassageSeats" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.massage") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTunerRadio" @click="toggleShowCheckboxExtras(7, 'Tuner/radio')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTunerRadio" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.tuner") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedBluetooth" @click="toggleShowCheckboxExtras(7, 'Bluetooth')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedBluetooth" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.blu") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedFoldFlatPassenger"
              @click="toggleShowCheckboxExtras(7, 'Fold flat passenger seat')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedFoldFlatPassenger" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.fold") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedMultifunctionWheel"
              @click="toggleShowCheckboxExtras(7, 'Multifunction steering wheel')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedMultifunctionWheel" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.multi") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTV" @click="toggleShowCheckboxExtras(7, 'TV')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTV" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.tv") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCargoBarrier"
              @click="toggleShowCheckboxExtras(7, 'Cargo barrier')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCargoBarrier" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.cargobarrier") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHandsFree" @click="toggleShowCheckboxExtras(7, 'Hands-free kit')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHandsFree" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.handsfree") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedUSBport" @click="toggleShowCheckboxExtras(7, 'USB port')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedUSBport" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.usbport") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedCdPlayer" @click="toggleShowCheckboxExtras(7, 'CD player')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedCdPlayer" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.cdplayer") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeadupDisplay"
              @click="toggleShowCheckboxExtras(7, 'Head-up display')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeadupDisplay" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.headupdisplay") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedOnBoardComputer"
              @click="toggleShowCheckboxExtras(7, 'On-board computer')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedOnBoardComputer" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.onboardcomputer") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedVoiceControl"
              @click="toggleShowCheckboxExtras(7, 'On-board computer')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedVoiceControl" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.voicecontrol") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDABradio" @click="toggleShowCheckboxExtras(7, 'DAB radio')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDABradio" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.dabradio") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedHeatedRear"
              @click="toggleShowCheckboxExtras(7, 'Heated rear seats')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedHeatedRear" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.heatedrearseats") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPaddleShifters"
              @click="toggleShowCheckboxExtras(7, 'Paddle shifters')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPaddleShifters" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.paddleshifters") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWinterPackage"
              @click="toggleShowCheckboxExtras(7, 'Winter package')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWinterPackage" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.winterpackage") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDigitalCockpit"
              @click="toggleShowCheckboxExtras(7, 'Digital cockpit')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDigitalCockpit" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.digitalcockpit") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedPassengerSeat"
              @click="toggleShowCheckboxExtras(7, 'Passenger seat Isofix point')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedPassengerSeat" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.passengerseat") }}
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[210px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWlan" @click="toggleShowCheckboxExtras(7, 'WLAN / WiFi hotspot')" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWlan" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            {{ $t("message.filter_page.features.wlan") }}
          </label>
        </div>
      </div>
      <div class="condition mt-[30px]">
        <h3 class="text-[14px] lg:text-[16px]">Vendor</h3>
        <div class="radios-type flex flex-wrap gap-x-[10px] lg:gap-[40px] mt-[20px]">
          <label>
            <input type="radio" id="vendor-private" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Private',
              'bg-orange': selectedVendor === 'Private',
            }" @click="selectVendor('Private')" />
            <span class="ml-[10px] text-[14px]">Private seller</span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Dealer',
              'bg-orange': selectedVendor === 'Dealer',
            }" @click="selectVendor('Dealer')" />
            <span class="ml-[10px] text-[14px]">Dealer </span>
          </label>
          <label>
            <input type="radio" id="vendor-dealer" v-model="selectedVendor" :class="{
              'bg-transparent': selectedVendor !== 'Company',
              'bg-orange': selectedVendor === 'Company',
            }" @click="selectVendor('Company')" />
            <span class="ml-[10px] text-[14px]">Company vehicles</span>
          </label>
        </div>
      </div>
      <div class="mt-[30px]">
        <div class="filter-cars flex flex-wrap gap-x-[30px] mt-[10px]">
          <!-- cabrio -->
          <label
            class="custom-checkbox custom-gold flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedDiscount" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedDiscount" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Discount offers
          </label>
          <label
            class="custom-checkbox custom-green flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedNon" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedNon" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Non-smoker vehicle
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedTaxi" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedTaxi" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Taxi
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedVAT" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedVAT" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            VAT reclaimable
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedWarranty" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedWarranty" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            Warranty
          </label>
          <label class="custom-checkbox custom-red flex gap-[10px] text-[14px] w-[206px] items-center h-[40px] pb-[20px]">
            <input type="checkbox" v-model="isCheckedEnvironmental" @click="toggleShowCheckboxAds(0)" />
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" width="1em">
              <!-- Insert your SVG arrow icon here -->
              <path v-if="isCheckedEnvironmental" fill="#ffffff"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            With environmental bonus
          </label>
        </div>
      </div>
      <div class="flex flex-wrap items-center lg:gap-[50px]">
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Damaged Vehicles</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="damageVehicle">
            <option value="any" selected>Any</option>
            <option value="not">Do not show</option>
            <option value="only">Only show</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Commercial, Export/Import</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="exportCommercial">
            <option value="any" selected>Any</option>
            <option value="not">Do not show</option>
            <option value="only">Only show</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
        <div class="relative mt-2 w-[200px]">
          <h2 class="text-[10px] lg:text-[14px]">Approved Used Programme</h2>
          <select
            class="mark-select mt-[10px] w-full lg:w-[150px] xl:w-[200px] h-[35px] outline-none bg-white rounded-[10px] py-[6px] px-[10px] font-normal pr-[20px] text-[10px] lg:text-[12px]"
            v-model="approveUsed">
            <option value="">Please select</option>
            <option value="Any">Any approved label</option>
            <option value="ASTON_MARTIN">Aston Martin Timeless</option>
            <option value="BMW">BMW Premium Selection</option>
            <option value="BENTLEY">Certified by Bentley</option>
            <option value="DS_CERTIFIED">DS Certified</option>
            <option value="FERRARI">Ferrari Approved</option>
            <option value="HYUNDAI_PROMISE">Hyundai Promise</option>
            <option value="JAGUAR">Jaguar APPROVED</option>
            <option value="KIA_ZERTIFIZIERTE_GEBRAUCHTWAGEN">
              Kia Zertifizierte Gebrauchtwagen
            </option>
            <option value="LANDROVER">Land Rover APPROVED</option>
            <option value="MASERATI">Maserati Approved</option>
            <option value="MERCEDES_TRANSPORTER">
              Mercedes-Benz Junge Sterne Transporter
            </option>
            <option value="MINI">MINI Gebrauchtwagen Next</option>
            <option value="NISSAN">Nissan Intelligent Choice</option>
            <option value="PORSCHE">Porsche Approved</option>
            <option value="SEAT">SEAT "Das Weltauto"</option>
            <option value="LAMBORGHINI">
              Selezione Lamborghini Certified Pre-Owned
            </option>
            <option value="SKODA">ŠKODA Plus</option>
            <option value="SPOTICAR">SPOTICAR</option>
            <option value="VW_TRADEPORT">Volkswagen TradePort</option>
            <option value="VOLVO">VOLVO SELEKT</option>
          </select>
          <span class="arrow w-[7px] h-[7px] absolute right-2 bottom-4"></span>
        </div>
      </div>
      <div class="">
        <h2 class="mt-[30px] text-[14px] lg:text-[16px]">Description</h2>
        <textarea class="bg-[#ccc] mt-[10px] p-[20px] w-full" name="" id="" cols="40" rows="5" placeholder="Description "
          v-model="descriptionText"></textarea>
      </div>
      <div>
        <div class="flex gap-[30px] justify-end">
          <button class="bg-red-500 rounded-[8px] p-[10px]" @click="cancelAdCar">Cancel</button>
          <button @click="thenAddsInterior" class="bg-blue-500 rounded-[8px] p-[10px]">
            Create Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import http from "@/axios.config";
import { useTabsStore } from '@/store/storeAd';
import { useToast } from "vue-toastification";


export default {
  setup() {
    const isCheckedAdsImg = ref(false);
    const isCheckedVideo = ref(false);
    const isCheckedDiscount = ref(false);
    const isCheckedNon = ref(false);
    const isCheckedTaxi = ref(false);
    const isCheckedVAT = ref(false);
    const isCheckedWarranty = ref(false);
    const isCheckedEnvironmental = ref(false);
    const toggleShowCheckboxAds = (index) => {
      for (let i = 0; i < isCheckedAdsImg.length; i++) {
        if (i !== index) {
          isCheckedAdsImg[i] = false;
        }
      }
      isCheckedAdsImg[index] = true;
    };

    return {
      isCheckedAdsImg,
      isCheckedVideo,
      isCheckedDiscount,
      isCheckedNon,
      isCheckedTaxi,
      isCheckedVAT,
      isCheckedWarranty,
      isCheckedEnvironmental,
      toggleShowCheckboxAds,
    };
  },
  data() {
    return {
      toast: useToast(),

      interiorAdd: false,
      fuelAdd: false,
      basicAdd: true,
      errorPushPagePriceList: false,
      makes: [],
      models: [],
      selectedMark: "",
      selectedCar: "",
      selectedCondition: "Any",
      selectedConditioning: "",
      selectedInteriorColour: "",
      selectedCruise: "Any",
      descriptionText: "",
      seatsOpen: false,
      isNewSelected: false,
      isCheckedSUV: false,
      damageVehicle: "",
      exportCommercial: "",
      approveUsed: "",
      isUsedSelected: false,
      selectedVendor: "Any",
      isRadioNewSelected: false,
      isCheckedAny: true,
      isCheckedFromThree: false,
      isCheckedfromFour: false,
      isCheckedFive: false,
      rating: [],
      previewImages: [],
      numDoor: "",
      slidingDoor: "",
      isOpenKilometer: "",
      inputKilometer: "",
      radius: "",
      isOpenCubic: false,
      isOpenPower: false,
      isCheckedRegister: false,
      isCheckedEmploy: false,
      isCheckedClassic: false,
      isCheckedDemon: false,
      isRadioNewSelected: false,
      selectedExteriorColour: "",
      selectedTrailer: "",
      selectedParking: "",
      selectedModel: "",
      price: "",
      selectedYear: "",
      selectedFuel: "",
      years: "",
      killometres: "",
      inputValue: "",
      isOpen: false,
      selectedPrice: "",
      huValid: "",
      preOwners: null,
      priceOpen: false,
      isCheckedHistory: false,
      isCheckedRoad: false,
      isOpenRadius: false,
      isCheckedABS: false,
      isCheckedEmergency: false,
      isCheckedCentral: false,
      isCheckedSpeed: false,
      isCheckedAdaptive: false,
      isCheckedTyre: false,
      isCheckedLastChanges: false,
      isCheckedSportsPackage: false,
      selectedOthers: [],
      isCheckedBeige: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedElectric: false,
      isCheckedSki: false,
      isCheckedAndroidAuto: false,
      isCheckedElectricSeat: false,
      isCheckedIntegratedMusicStreaming: false,
      isCheckedSmokersPackage: false,
      isCheckedAppleCarPlay: false,
      isCheckedElectricSideMirror: false,
      isCheckedIsofix: false,
      isCheckedSoundSystem: false,
      isCheckedArmRest: false,
      isCheckedElectricWindows: false,
      isCheckedLeatherSteeringWheel: false,
      isCheckedSportSeats: false,
      isCheckedAutomInteriorMirror: false,
      isCheckedEmergencyCallSystem: false,
      isCheckedLumbarSupport: false,
      isCheckedTouchscreen: false,
      isCheckedAuxiliaryHeating: false,
      isCheckedFatigueWarning: false,
      isCheckedMassageSeats: false,
      isCheckedTunerRadio: false,
      isCheckedBluetooth: false,
      isCheckedFoldFlatPassenger: false,
      isCheckedMultifunctionWheel: false,
      isCheckedTV: false,
      isCheckedBrown: false,
      isCheckedGrey: false,
      isCheckedBlack: false,
      isCheckedOther: false,
      selectedColor: [],
      isCheckedAlcantra: false,
      isCheckedCloth: false,
      isCheckedPartLeather: false,
      isCheckedVelour: false,
      isCheckedFullLeather: false,
      isCheckedOther: false,
      selectedMaterial: [],
      selectedAirbag: "AnyExterior",
      isCheckedAlarmSystem: false,
      isCheckedDisable: false,
      isCheckedHeated: false,
      isCheckedSeat: false,
      isCheckedAmbient: false,
      isCheckedTyre: false,
      isCheckedInduction: false,
      isCheckedSki: false,
      isCheckedParticulate: false,
      extras: [],
      others: [],
      power: [],
      selectedType: "",
      selectedFiles: [],
      userI: "",
      inputVariant: "",
      activeTab: "buy",
      linkVideo: "",
      userPhone: "",
      userCodeNumber: "",
      combinedNumber: "",
      selectedTransmision: "",
      selectedMaterial: "",
      options: [],
      isCheckedAdaptiveLighting: false,
      isCheckedEmergencyKit: false,
      isCheckedLaserHeadlights: false,
      isCheckedSportsSuspension: false,
      isCheckedESP: false,
      isCheckedAirSuspension: false,
      isCheckedLEDHeadlights: false,
      isCheckedStartStopSystem: false,
      isCheckedAlloyWheels: false,
      isCheckedFogLamp: false,
      isCheckedLEDRunningLights: false,
      isCheckedSteelWheels: false,
      isCheckedAllTyres: false,
      isCheckedFourWheelDrive: false,
      isCheckedLightSensor: false,
      isCheckedSummerTyres: false,
      isCheckedBixenonHeadlights: false,
      isCheckedGlarefreeHigh: false,
      isCheckedNightVisionAssist: false,
      isCheckedSunroof: false,
      isCheckedBlindSpotAssist: false,
      isCheckedHeadlightWasherSystem: false,
      isCheckedPanoramicRoof: false,
      isCheckedTractionСontrol: false,
      isCheckedCentralLocking: false,
      isCheckedHeatedWindshield: false,
      isCheckedPowerAssistedSteering: false,
      isCheckedTrafficSign: false,
      isCheckedDayTimeRunning: false,
      isCheckedHighBeamAssist: false,
      isCheckedRainSensor: false,
      isCheckedTyrePressure: false,
      isCheckedDistanceWarning: false,
      isCheckedHillStartAssist: false,
      isCheckedRoofRack: false,
      isCheckedWinterTyres: false,
      isCheckedImmobilizer: false,
      isCheckedElectricTailgate: false,
      isCheckedSpareTyre: false,
      isCheckedXenonHeadLights: false,
      isCheckedCargoBarrier: false,
      isCheckedHandsFree: false,
      isCheckedUSBport: false,
      isCheckedCdPlayer: false,
      isCheckedHeadupDisplay: false,
      isCheckedOnBoardComputer: false,
      isCheckedVoiceControl: false,
      isCheckedDABradio: false,
      isCheckedHeatedRear: false,
      isCheckedPaddleShifters: false,
      isCheckedWinterPackage: false,
      isCheckedDigitalCockpit: false,
      isCheckedPassengerSeat: false,
      isCheckedWlan: false,
    };
  },
  props: {
    createAdd: Boolean,
  },
  methods: {
    closeDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    showTab1() {
      this.activeTab = "buy";
    },
    async showTab2() {
      this.activeTab = "sell";
    },
    async showTab3() {
      this.activeTab = "rent";
    },
    // addAdBasicCars() {
    //   if (!this.selectedMark || !this.selectedModel || !this.selectedCar || !this.numberSeats || !this.numDoor || !this.slidingDoor || !this.selectedCondition || !this.selectedType || !this.activeTab || !this.price || !this.inputValue || !this.inputKilometer || !this.huValid || !this.preOwners || !this.selectedCountry || !this.zipCode || !this.radius) {

    //     this.toast.error("Please fill in all required fields");
    //     return;
    //   }

    //   const formData = new FormData();

    //   for (let i = 0; i < this.selectedFiles.length; i++) {
    //     formData.append("photos", this.selectedFiles[i]); // Используйте 'photos[]' для отправки массива файлов
    //   }
    //   formData.append("user_id", this.userI);
    //   formData.append("car_make", this.selectedMark);
    //   formData.append("car_model", this.selectedModel);
    //   formData.append("car_variant", this.inputVariant);
    //   formData.append("car_body", this.selectedCar);
    //   formData.append("car_number_seats", this.numberSeats);
    //   formData.append("car_number_door", parseInt(this.numDoor));
    //   formData.append("car_silding_door", this.slidingDoor);
    //   formData.append("car_condition", this.selectedType);
    //   formData.append("car_type", this.selectedCondition);
    //   formData.append("car_payment_type", this.activeTab);
    //   formData.append("car_price", parseInt(this.price));
    //   formData.append("car_firt_date", parseInt(this.inputValue));
    //   formData.append("car_firt_date_year", parseInt(this.inputValue));
    //   formData.append("car_mileage", parseInt(this.inputKilometer));
    //   formData.append("car_hu_valid_until", this.huValid);
    //   formData.append("car_previous_owners", parseInt(this.preOwners));
    //   formData.append("car_full_service_history", this.isCheckedHistory);
    //   formData.append("car_roadworthy", this.isCheckedRoad);
    //   formData.append("car_country", this.selectedCountry);
    //   formData.append("car_city_zipcode", this.zipCode);
    //   formData.append("car_radius", parseInt(this.radius));
    //   formData.append("user_phone", `${this.userCodeNumber}${this.userPre}${this.userPhone}`);
    //   formData.append("user_email", this.uEmail);
    //   formData.append("car_vide_link", this.linkVideo);

    //   http
    //     .post("/car/add", formData)
    //     .then((response) => {
    //       const responseData = response.data.data;
    //       localStorage.setItem('car_id', responseData.car_id);
    //       this.basicAdd = !this.basicAdd;
    //       this.fuelAdd = !this.fuelAdd;
    //     })
    // }
    addAdBasicCars() {
      if (!this.selectedMark || !this.selectedModel || !this.selectedCar || !this.numberSeats || !this.numDoor || !this.slidingDoor || !this.selectedCondition || !this.activeTab || !this.price || !this.inputValue || !this.inputKilometer || !this.huValid || !this.preOwners || !this.selectedCountry || !this.zipCode || !this.radius) {
        this.toast.error("Please fill in all required fields! Click button and go price list!");

        const countValue = localStorage.getItem('count');
        const maxPhotos = countValue ? parseInt(countValue) + 6 : 6;

        if (this.previewImages.length > maxPhotos) {
          this.toast.error("Maximum number of photos exceeded! ");
          this.errorPushPagePriceList = !this.errorPushPagePriceList
        }
        return;
      }


      const formData = new FormData();

      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("photos", this.selectedFiles[i]);
      }
      formData.append("user_id", this.userI);
      formData.append("car_make", this.selectedMark);
      formData.append("car_model", this.selectedModel);
      formData.append("car_variant", this.inputVariant);
      formData.append("car_body", this.selectedCar);
      formData.append("car_number_seats", this.numberSeats);
      formData.append("car_number_door", parseInt(this.numDoor));
      formData.append("car_silding_door", this.slidingDoor);
      formData.append("car_condition", this.selectedType);
      formData.append("car_type", this.selectedCondition);
      formData.append("car_payment_type", this.activeTab);
      formData.append("car_price", parseInt(this.price));
      formData.append("car_firt_date", parseInt(this.inputValue));
      formData.append("car_firt_date_year", parseInt(this.inputValue));
      formData.append("car_mileage", parseInt(this.inputKilometer));
      formData.append("car_hu_valid_until", this.huValid);
      formData.append("car_previous_owners", parseInt(this.preOwners));
      formData.append("car_full_service_history", this.isCheckedHistory);
      formData.append("car_roadworthy", this.isCheckedRoad);
      formData.append("car_country", this.selectedCountry);
      formData.append("car_city_zipcode", this.zipCode);
      formData.append("car_radius", parseInt(this.radius));
      formData.append("user_phone", `${this.userCodeNumber}${this.userPhone}`);
      formData.append("user_email", this.uEmail);
      formData.append("car_vide_link", this.linkVideo);

      http
        .post("/car/add", formData)
        .then((response) => {
          const responseData = response.data.data;
          localStorage.setItem('car_id', responseData.car_id);
          this.basicAdd = !this.basicAdd;
          this.fuelAdd = !this.fuelAdd;
        })
    }
    ,
    goPriceList() {
      this.$router.push({ name: "price-list" })

    },

    thenPowerAdd() {
      if (!this.selectedFuel || !this.power || !this.cubic || !this.selectedTransmision || !this.consumptionFuel || !this.stickerEmission || !this.classEmision || !this.selectedExteriorColour || !this.selectedTrailer || !this.selectedParking || !this.selectedCruise || !this.selectedOthers) {
        this.toast.error("Please fill in all required fields");

        return;
      }
      http.put("/car/add/engine", {
        car_id: localStorage.getItem('car_id'),
        car_fuel_type: this.selectedFuel,
        car_power: parseInt(this.power),
        car_cubic_capacity: parseInt(this.cubic),
        car_transmission: this.selectedTransmision,
        car_fuel_consumption: parseInt(this.consumptionFuel),
        car_emissions_sticker: this.stickerEmission,
        car_emission_class: this.classEmision,
        car_exterior_colour: this.selectedExteriorColour,
        car_trailer_coupling: this.selectedTrailer,
        car_parking_sensors: this.selectedParking,
        car_cruise_control: this.selectedCruise,
        others: this.selectedOthers,
      })
        .then((res) => {
          console.log(res.data);
          this.fuelAdd = !this.fuelAdd;
          this.interiorAdd = !this.interiorAdd
        })
    },
    thenAddsInterior() {
      http.put("/car/add/interior", {
        car_id: localStorage.getItem('car_id'),
        car_interior_colour: this.selectedInteriorColour,
        car_interior_material: this.selectedMaterial,
        car_airbags: this.selectedAirbag,
        car_air_conditioning: this.selectedAirConditioning,
        extras: this.extras,
        car_vendor: this.selectedVendor,
        car_discount_offers: this.isCheckedDiscount,
        car_non_smoker: this.isCheckedNon,
        car_taxi: this.isCheckedTaxi,
        car_vat: this.isCheckedVAT,
        car_warranty: this.isCheckedWarranty,
        car_environmental_bonus: this.isCheckedEnvironmental,
        car_damaged: this.damageVehicle,
        car_commercial: this.exportCommercial,
        car_programme: this.approveUsed,
        car_description: this.descriptionText
      })
        .then((res) => {
          this.interiorAdd = !this.interiorAdd
          const responseData = response.data.data;
        if(response.data.status === 200){

          this.handleCancelButtonClick()
          localStorage.setItem('count', 0);
          this.toast.success("Your ad has been created!");
          this.$router.push({ name: "price-list" })
        } else{
          this.toast.error("Your ad has not been created!, please try again");

        }

        })
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const files = [...event.target.files]; // Преобразуем объект files в массив

      // Сохраняем все выбранные файлы, включая предыдущие
      this.selectedFiles = [...this.selectedFiles, ...files];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          const previewUrl = e.target.result;
          this.previewImages.push({
            name: file.name,
            previewUrl: previewUrl,
            file: file,
          });
        };

        reader.readAsDataURL(file);
      }
    },



    removeFile(index) {
      this.previewImages.splice(index, 1);
    },
    toggleShowCheckboxRating(index, ratingName) {
      const isChecked = !this.rating.includes(ratingName);
      if (isChecked) {
        this.rating.push(ratingName);
      } else {
        const carIndex = this.rating.indexOf(ratingName);
        if (carIndex !== -1) {
          this.rating.splice(carIndex, 1);
        }
      }
    },
    selectVendor(condition) {
      this.selectedVendor = condition;
      if (condition === "Private" || condition === "Company") {
        this.isRadioNewSelected = true;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      } else {
        this.isRadioNewSelected = false;
        this.isCheckedAny = false;
        this.isCheckedFromThree = false;
        this.isCheckedDemon = false;
        this.isCheckedfromFour = false;
      }
    },
    toggleShowCheckboxExtras(index, extrasName) {
      const isChecked = !this.extras.includes(extrasName);
      if (isChecked) {
        this.extras.push(extrasName); 
      } else {
        const carIndex = this.extras.indexOf(extrasName);
        if (carIndex !== -1) {
          this.extras.splice(carIndex, 1); 
        }
      }
      console.log(this.extras);
    },
    selectAirConditioning(condition) {
      this.selectedConditioning = condition;
    },
    selectMaterial(condition) {
      this.selectedMaterial = condition;
    },
    selectType(condition) {
      this.selectedType = condition;
    },
    selectTransmision(condition) {
      this.selectedTransmision = condition;
    },
    selectAirbag(condition) {
      this.selectedAirbag = condition;
    },
    openRadiusDropdown() {
      this.isOpenRadius = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeRadiusDropdownOnClickOutside
      );
    },
    selectRadius(option) {
      this.radius = option;
      this.isOpenRadius = false;
    },
    selectTrailer(option) {
      this.selectedTrailer = option;
    },
    selectInteriorColour(option) {
      this.selectedInteriorColour = option;
    },
    selectParking(option) {
      this.selectedParking = option;
    },
    selectCruise(option) {
      this.selectedCruise = option;
    },
    selectExteriorColour(option) {
      this.selectedExteriorColour = option;
    },
    closeRadiusDropdown() {
      this.isOpenRadius = false;
    },
    closeRadiusDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".radius");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenRadius = false;
        document.removeEventListener(
          "click",
          this.closeRadiusDropdownOnClickOutside
        );
      }
    },
    openPriceDropdown() {
      this.priceOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePriceDropdownOnClickOutside);
    },
    closePriceDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".price");
      if (!dropdownElement.contains(event.target)) {
        this.priceOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },
    selectNumberPrice(option) {
      this.price = option;
      this.priceOpen = false;
    },
    openDropdown() {
      this.isOpen = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeYearsDropdownOnClickOutside);
    },
    selectOption(option) {
      this.inputValue = option;
      this.isOpen = false;
    },
    closeYearsDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".years");
      if (!dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeYearsDropdownOnClickOutside
        );
      }
    },
    openPreDropdown() {
      this.isOpenKilometer = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closeKilometerDropdownOnClickOutside
      );
    },
    openPreDropdown() {
      this.isOpenPre = true;
      this.filteredOptions = this.options;
      document.addEventListener(
        "click",
        this.closePreDropdownOnClickOutside
      );
    },
    selectKilometer(option) {
      this.inputKilometer = option;
      this.isOpenKilometer = false;
    },
    selectPre(option) {
      this.preOwners = option;
      this.isOpenPre = false;
    },
    closePreDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".pre");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPre = false;
        document.removeEventListener(
          "click",
          this.closeKilometerDropdownOnClickOutside
        );
      }
    },
    selectFuel(option) {
      this.selectedFuel = option;
    },
    closeKilometerDropdown() {
      this.isOpenKilometer = false;
    },
    closeKilometerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".kilometer");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenKilometer = false;
        document.removeEventListener(
          "click",
          this.closeKilometerDropdownOnClickOutside
        );
      }
    },
    toggleShowCheckboxMaterial(index, colorName) {
      const isChecked = !this.selectedColor.includes(colorName);
      if (isChecked) {
        this.selectedColor.push(colorName);
      } else {
        const carIndex = this.selectedColor.indexOf(colorName);
        if (carIndex !== -1) {
          this.selectedColor.splice(carIndex, 1);
        }
      }
    },
    toggleShowCheckboxOthers(index, otherName) {
      const isChecked = !this.selectedOthers.includes(otherName);
      if (isChecked) {
        this.selectedOthers.push(otherName);
      } else {
        const carIndex = this.selectedOthers.indexOf(otherName);
        if (carIndex !== -1) {
          this.selectedOthers.splice(carIndex, 1);
        }
      }
    },
    openSeatsDropdown() {
      this.seatsOpen = true;
      document.addEventListener("click", this.closeSeatsDropdownOnClickOutside);
    },
    selectNumberSeats(option) {
      this.numberSeats = option;
      this.seatsOpen = false;
    },
    closeSeatsDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".seats");
      if (!dropdownElement.contains(event.target)) {
        this.seatsOpen = false;
        document.removeEventListener(
          "click",
          this.closeSeatsDropdownOnClickOutside
        );
      }
    },

    fetchModels() {
      if (!this.selectedMark) {
        this.isModelSelectDisabled = true; // Disable the model select
        return;
      }

      // URL API для запроса моделей с указанием выбранной марки
      const apiUrl = `/car/model?mark_id=${this.selectedMark}`;

      // Выполняем GET-запрос к API с помощью Axios
      http
        .get(apiUrl)
        .then((response) => {
          // Получаем данные из ответа
          const data = response.data.data;
          if (data) {
            this.models = data;
            console.log(this.models);
            this.isModelSelectDisabled = false;
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
    selectCar(condition) {
      this.selectedCar = condition;
    },
    selectCondition(condition) {
      this.selectedCondition = condition;
      if (condition === "New") {
        this.isRadioNewSelected = true;
        this.selectedType = "";
      } else {
        this.isRadioNewSelected = false;
      }
    },
    fetchModelYears() {
      const apiUrl = "https://api.nhtsa.gov/SafetyRatings";
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          this.options = data.Results.map((result) => result.ModelYear);
        })
        .catch((error) => {
          console.error("Error fetching model years:", error);
        });
    },
    openCubicDropdown() {
      this.isOpenCubic = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closeCubicDropdownOnClickOutside);
    },
    selectCubic(option) {
      this.cubic = option;
      this.isOpenCubic = false;
    },
    closeCubicDropdown() {
      this.isOpenCubic = false;
    },
    closeCubicDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".cubic");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenCubic = false;
        document.removeEventListener(
          "click",
          this.closeCubicDropdownOnClickOutside
        );
      }
    },
    //
    openPowerDropdown() {
      this.isOpenPower = true;
      this.filteredOptions = this.options;
      document.addEventListener("click", this.closePowerDropdownOnClickOutside);
    },
    selectPower(option) {
      this.power = option;
      this.isOpenPower = false;
    },
    closePowerDropdown() {
      this.isOpenPower = false;
    },
    closePowerDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".power");
      if (!dropdownElement.contains(event.target)) {
        this.isOpenPower = false;
        document.removeEventListener(
          "click",
          this.closePowerDropdownOnClickOutside
        );
      }
    },
    handleCancelButtonClick() {
      // Создаем событие и отправляем его вверх по иерархии
      this.$emit('cancel-create-add');
    },
  },
  mounted() {
    this.selectedMark = localStorage.getItem("mark");
    this.userI = localStorage.getItem("u-i");
    this.uEmail = localStorage.getItem("u-e");

    this.userPhone = localStorage.getItem("com-number");
    this.userCodeNumber = localStorage.getItem("com-numcode");

    http
      .get("/car/marks")
      .then((response) => {
        const data = response.data.data;
        if (data) {
          this.makes = data;
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

.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}

.dropdown-options {
  position: absolute;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-options li {
  padding: 0.5em;
  cursor: pointer;
}

.dropdown-options li:hover {
  background-color: #f0f0f0;
}

.file-preview {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.file-preview span {
  margin-right: 10px;
}

.file-preview button {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.Kaufen:hover {
  box-shadow: 0 0 2px 1px #eaccb4;
}

.active-Kaufen {
  background-color: #fffaf6;
  border: 1px solid #eaccb4;
  color: #000;
}
</style>
