import { defineStore } from 'pinia';

export const useTabsStore = defineStore('tabsStore', {
  state: () => ({
    activeTab: 'tab-2', // Инициализируйте переменную значением по умолчанию
    carData: [], // Ваши данные о машине
    filter: {
      car_make: '',
      car_model: '',
      car_condition: '',
      car_firt_date_year_from: '',
      car_mileage_from: '',
      car_payment_type: '',
      car_price_from: '',
      car_city_zipcode: '',
      car_silding_door: '',
    },
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
      console.log(tab);
    },
    updateCarData(data) {
      this.carData = data;
    },
    updateFilter(newFilter) {
      this.filter = { ...this.filter, ...newFilter };
    },
  },

  getters: {
    totalAds() {
      return this.carData.count;
    },
  },
});
