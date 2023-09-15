<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <div class="tabs w-[200px] h-[680px] bg-[#0000001f] p-[20px]">
    </div>
    <section
      class="tabs-content settings relative w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[870px] bg-[#0000001f] flex"
    >

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
</style>
