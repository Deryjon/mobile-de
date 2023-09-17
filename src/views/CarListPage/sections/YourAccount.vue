<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <div class="tabs w-[200px] h-[680px] bg-[#0000001f] p-[20px]">
    </div>
    <section
      class="tabs-content settings relative w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[870px] bg-[#0000001f] flex">


    <div class="car-list">
      <div class="car-element-list">
        <div class="product">

        <img src="https://img.classistatic.de/api/v1/mo-prod/images/15/15211295-0c43-40f8-bfe2-1643a9949c57?rule=mo-160.jpg" class="product-image">

        <div class="product-info">

        <div class="sponsored">СПОНСИРОВАНО</div>

        <div class="product-title">Название товара</div>

        <div class="product-date">abobaobaboa</div>

        <div class="product-benefits">
          <svg class="checksvg" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.879l-5-5L1.879 13 9 20.121 23.121 6 21 3.879l-12 12z" fill="currentColor"></path></svg>
        Преимущество 1
        </div>

        <div class="product-benefits">
          <svg class="checksvg" width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.879l-5-5L1.879 13 9 20.121 23.121 6 21 3.879l-12 12z" fill="currentColor"></path></svg>
        Преимущество 2
        </div>

        </div>

        </div>


        <div class="author-ii"> 

          <div class="author-info">

          <img src="https://images-ext-1.discordapp.net/external/XS-xx0gu5EkbyuLnrcUFRML-A-Iqagtzwwx9Ei38btQ/%3Fsize%3D512/https/cdn.discordapp.com/avatars/857551966166581288/a_52344222f92b823ac3c0de30376958af.gif" class="author-logo">

          <div class="author-name">Имя автора</div>

          <div class="author-rating">★★★★☆</div>

          </div>

          <div class="price-info">

          <div class="price">1000 ₽</div>

          <div class="vat">НДС не облагается</div>

          </div>

          <div class="contact">
            <button> 
              <span> Контакты </span>
            </button>
            <button> 
              <span> Информация </span>
            </button>
          </div>
        </div>



    </div>
    </div>












    </section>
  </v-container>
</template>
<script>
import SettingsTab from "../components/SettingsComponentTab.vue";
import OverviewTab from "../components/OverviewComponentTab.vue";
import MyAdCarsTab from "../components/MyAdCarsTab.vue"
export default {
  data() {
    return {
      userEmail: "",
      activeTab: "tab-2",
      isOpen: false,
    };
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      return this.activeTab === tab;
    },

    logOut() {
      localStorage.removeItem("r-tok");
      localStorage.removeItem("hasReloaded");
      localStorage.removeItem("logged-in");
      localStorage.setItem("logged-in", "false");
      this.$router.push({ name: "home" });
      window.location.reload();
    },
    openCountryDropdown() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
      document.addEventListener(  
        "click",
        this.closeCountryDropdownOnClickOutside
      );
    },
    closeCountryDropdownOnClickOutside(event) {
      const dropdownElement = this.$el.querySelector(".adds");
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener(
          "click",
          this.closeCountryDropdownOnClickOutside
        );
      }
    },
  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
  components: {
    SettingsTab,
    OverviewTab,
		MyAdCarsTab
  },
};
</script>
<style scoped>
.line {
  border: 0.5px solid rgb(190, 190, 190);
}
.dropdown-container {
  position: relative;
  display: inline-block;
}

.input-container {
  position: relative;
}
.dropdown-options {
  position: relative;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  background-color: transparent;
  max-height: 380px;
  overflow-y: auto;
}

.dropdown-options li {
  padding: 0.5em;
  cursor: pointer;
}
.active{
	background: #fff;
	padding: 5px 8px;
}



/* CAR -- LIST  */


.car-list {
  display: flex;
  flex-wrap: wrap
}

.car-element-list {
  border: 1px solid #757575;
  border-radius: 8px;
  width: 550px;
  height: 350px;
}
.product {
  display: flex;
  max-width: 33.33%;
  align-items: center;
}

.product-image {
  width: 200px;
  height: auto; 
}

.product-info {
  margin-left: 20px;
}

.sponsored {
  border: 2px dashed #ccc;
  padding: 5px;
}

.product-title {
  font-weight: bold;
  font-size: 1.2em;
}

.product-date {
  color: #666;
  font-size: 0.9em;  
}

.product-benefits {
  display: flex;  
  align-items: center;
}

.product-benefits img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-logo {
  border-radius: 4px;
  width: 40px;
  height: 40px;
}

.author-name {
  margin-left: 10px;
  font-size: 0.9em;
}

.author-rating {
  margin-left: auto;
  color: #f5c518;
}

.price-info {
  text-align: right;
}

.author-ii {
  padding-right: 12px;
  margin-bottom: 4px;
}
.price {
  font-weight: bold;
  font-size: 1.3em; 
}

.vat {
  font-size: 0.9em;
  color: #666;
}

.contact {
  padding-top: 4px;
  text-align: right;
  font-size: 0.8em;
  padding-left: 8px;
}

.contact button {
  padding: 4px;
  border: 1px solid #757575;
  border-radius: 6px;
}

.checksvg {
  margin-right: 4px;
}

</style>
