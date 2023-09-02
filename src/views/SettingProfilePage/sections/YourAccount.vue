<template>
  <v-container class="w-[1120px] flex justify-between pl-0 ml-[4px]">
    <div class="tabs w-[200px] h-[680px] bg-[#0000001f] p-[20px]">
      <div class="top flex items-center mt-[10px]">
        <div class="icon w-[35px] h-[35px] mx-[15px]">
          <svg
            data-v-53d99ea3=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="profile"
          >
            <g data-v-53d99ea3="" data-name="Layer 2">
              <circle data-v-53d99ea3="" cx="16" cy="6.96" r="6"></circle>
              <path
                data-v-53d99ea3=""
                d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="changes">
          <p class="email text-[14px]">{{ userEmail.slice(0, 10) + "..." }}</p>
          <p class="email text-[14px] underline cursor-pointer">Edit</p>
        </div>
      </div>
      <div class="line mt-[20px]"></div>
      <div class="tabs-btn">
        <button
          class="flex gap-[8px] items-center mt-[20px] w-[160px]"
          @click="setActive('tab-1')"
          :class="{ active: isActive('tab-1') }"
        >
          <svg
            class="SvgIcon___NxY1e"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g fill="currentColor">
              <path
                d="M4 3C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4Z"
              ></path>
              <path
                d="M14 11C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14Z"
              ></path>
              <path
                d="M3 16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V16Z"
              ></path>
              <path
                d="M14 3C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H14Z"
              ></path>
            </g>
          </svg>
          Overview
        </button>
        <div class="adds">
          <button
            class="flex gap-[8px] items-center mt-[20px] w-[160px]"
            @click="openCountryDropdown"
            :class="{ active: isActive('tab-2') }"
          >
            <svg
              class="sdOa3"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.501 14h-8.5l-4 4v-4L2.5 14a1.5 1.5 0 01-1.5-1.5V3.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5zm3-8h2a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-1.5v4l-4-4h-5.5a1.5 1.5 0 01-1.5-1.5v-1h7.5a3 3 0 003-3V6z"
                fill="currentColor"
              ></path>
            </svg>
            My Adds
          </button>
          <ul
            v-if="isOpen"
            class="dropdown-options text-[10px] lg:text-[12px] w-[135px]"
          >
            <div class="countries">
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="be"
                  @click="selectCountry('Cars')"
                >
                  Cars
                </li>
              </div>
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="can"
                  @click="selectCountry('Motorcycles')"
                >
                  Motorcycles
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="dk"
                  @click="selectCountry('Motor homes')"
                >
                  Motor homes
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="us"
                  @click="selectCountry('Trucks')"
                >
                  Trucks
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="fr"
                  @click="selectCountry('Trailers')"
                >
                  Trailers
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="gr"
                  @click="selectCountry('Vans')"
                >
                  Vans
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="ita"
                  @click="selectCountry('Semi trailer trucks')"
                >
                  Semi trailer trucks
                </li>
              </div>
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="mor"
                  @click="selectCountry('Semi trailers')"
                >
                  Semi trailers
                </li>
              </div>
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="mor"
                  @click="selectCountry('Coaches')"
                >
                  Coaches
                </li>
              </div>
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="nt"
                  @click="selectCountry('Agricultural vehicle')"
                >
                  Agricultural vehicle
                </li>
              </div>

              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="mor"
                  @click="selectCountry('Construction machines')"
                >
                  Construction machines
                </li>
              </div>
              <div class="flex items-center">
                <li
                  class="text-[14px]"
                  data-key="sp"
                  @click="selectCountry('Forklift trucks')"
                >
                  Forklift trucks
                </li>
              </div>
            </div>
          </ul>
        </div>
        <button
          class="flex gap-[8px] items-center mt-[20px] w-[160px]"
          @click="setActive('tab-2')"
          :class="{ active: isActive('tab-2') }"
        >
          <div class="icon-settings w-[24px]">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                d="M83.172 41.128a1.75 1.75 0 0 0-2.25 2.68A26.32 26.32 0 0 1 90.357 64a1.75 1.75 0 0 0 3.5 0 29.8 29.8 0 0 0-10.685-22.872z"
              />
              <path
                d="M64 40.143A23.857 23.857 0 1 0 87.857 64 23.884 23.884 0 0 0 64 40.143zm0 44.215A20.357 20.357 0 1 1 84.357 64 20.38 20.38 0 0 1 64 84.357z"
              />
              <path
                d="M122.55 54.882a1.751 1.751 0 0 0-1.73-1.482h-16.64a41.166 41.166 0 0 0-4.28-10.319l11.763-11.764a1.749 1.749 0 0 0 .176-2.27 59.2 59.2 0 0 0-12.887-12.89 1.753 1.753 0 0 0-2.27.176L84.919 28.1A41.166 41.166 0 0 0 74.6 23.819V7.18a1.751 1.751 0 0 0-1.482-1.73 59.968 59.968 0 0 0-18.236 0A1.751 1.751 0 0 0 53.4 7.18v16.64a41.166 41.166 0 0 0-10.319 4.28L31.317 16.333a1.751 1.751 0 0 0-2.27-.176 59.2 59.2 0 0 0-12.89 12.891 1.749 1.749 0 0 0 .176 2.27L28.1 43.081A41.166 41.166 0 0 0 23.819 53.4H7.18a1.751 1.751 0 0 0-1.73 1.482 59.72 59.72 0 0 0 0 18.236A1.751 1.751 0 0 0 7.18 74.6h16.64a41.166 41.166 0 0 0 4.28 10.319L16.333 96.683a1.749 1.749 0 0 0-.176 2.27 59.2 59.2 0 0 0 12.891 12.891 1.75 1.75 0 0 0 2.27-.176L43.081 99.9a41.166 41.166 0 0 0 10.319 4.281v16.64a1.751 1.751 0 0 0 1.481 1.729 59.72 59.72 0 0 0 18.236 0 1.751 1.751 0 0 0 1.483-1.73v-16.64a41.166 41.166 0 0 0 10.319-4.28l11.764 11.763a1.751 1.751 0 0 0 2.27.176 59.2 59.2 0 0 0 12.891-12.891 1.749 1.749 0 0 0-.176-2.27L99.9 84.919a41.166 41.166 0 0 0 4.281-10.319h16.64a1.751 1.751 0 0 0 1.729-1.481 59.72 59.72 0 0 0 0-18.236zM119.3 71.1h-16.492a1.751 1.751 0 0 0-1.707 1.362 37.675 37.675 0 0 1-4.886 11.79 1.751 1.751 0 0 0 .243 2.171l11.66 11.66a55.657 55.657 0 0 1-10.035 10.035l-11.66-11.66a1.752 1.752 0 0 0-2.171-.243 37.675 37.675 0 0 1-11.79 4.886 1.751 1.751 0 0 0-1.362 1.707V119.3a56.632 56.632 0 0 1-14.2 0v-16.492a1.751 1.751 0 0 0-1.362-1.707 37.675 37.675 0 0 1-11.79-4.886 1.749 1.749 0 0 0-2.171.243l-11.66 11.66a55.657 55.657 0 0 1-10.035-10.035l11.66-11.66a1.751 1.751 0 0 0 .243-2.171 37.675 37.675 0 0 1-4.885-11.79 1.751 1.751 0 0 0-1.708-1.362H8.7a56.327 56.327 0 0 1 0-14.2h16.492a1.751 1.751 0 0 0 1.708-1.362 37.675 37.675 0 0 1 4.886-11.79 1.751 1.751 0 0 0-.243-2.171l-11.66-11.66a55.657 55.657 0 0 1 10.034-10.035l11.66 11.66a1.75 1.75 0 0 0 2.171.243 37.675 37.675 0 0 1 11.79-4.885 1.751 1.751 0 0 0 1.362-1.708V8.7a56.632 56.632 0 0 1 14.2 0v16.492a1.751 1.751 0 0 0 1.362 1.708 37.675 37.675 0 0 1 11.79 4.886 1.752 1.752 0 0 0 2.171-.243l11.66-11.66a55.657 55.657 0 0 1 10.035 10.035l-11.66 11.66a1.751 1.751 0 0 0-.243 2.171 37.675 37.675 0 0 1 4.886 11.79 1.751 1.751 0 0 0 1.707 1.362H119.3a56.327 56.327 0 0 1 0 14.2z"
              />
            </svg>
          </div>
          Settings
        </button>
        <button
          class="flex gap-[8px] items-center mt-[20px] w-[160px]"
          @click="setActive('tab-2')"
          :class="{ active: isActive('tab-2') }"
        >
				<div class="icon-settings w-[24px]">
							<svg
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
							>
								<path
									d="M13.076 97.083a1.75 1.75 0 0 0 1.75-1.75V66.667a1.75 1.75 0 0 0-3.5 0v28.666a1.75 1.75 0 0 0 1.75 1.75zM122.38 64.97c.027-.041.046-.085.069-.128a1.037 1.037 0 0 0 .146-.348c.015-.051.035-.1.045-.152a1.755 1.755 0 0 0 0-.685c-.01-.053-.03-.1-.045-.152a1.733 1.733 0 0 0-.054-.174 1.692 1.692 0 0 0-.092-.174c-.023-.042-.042-.086-.069-.127a1.75 1.75 0 0 0-.22-.269l-12.509-12.509a1.75 1.75 0 0 0-2.475 2.475l9.524 9.523H63.424a1.75 1.75 0 0 0 0 3.5H116.7l-9.523 9.523a1.75 1.75 0 1 0 2.475 2.475l12.508-12.509a1.75 1.75 0 0 0 .22-.269z"
								/>
								<path
									d="M95.424 72.25a1.75 1.75 0 0 0-1.75 1.75v36.9H48.633V17.1h45.041V54a1.75 1.75 0 1 0 3.5 0V15.35a1.75 1.75 0 0 0-1.75-1.75H48.633V6.5a1.75 1.75 0 0 0-2.461-1.6L6.365 22.593a1.751 1.751 0 0 0-1.039 1.6v79.615a1.751 1.751 0 0 0 1.039 1.6L46.172 123.1a1.75 1.75 0 0 0 2.461-1.6v-7.1h46.791a1.75 1.75 0 0 0 1.75-1.75V74a1.75 1.75 0 0 0-1.75-1.75zm-50.291 46.558L8.826 102.67V25.33L45.133 9.192z"
								/>
							</svg>
						</div>
          Log out
        </button>
				
      </div>
    </div>
    <section
      class="tabs-content settings relative w-[350px] sm:w-[550px] lg:w-[870px] xl:w-[870px] bg-[#0000001f] h-[1670px] flex"
    >
      <div class="" v-show="isActive('tab-1')">
        <MessagesTab />
      </div>
      <div class="" v-show="isActive('tab-2')">
        <OverviewTab />
      </div>
    </section>
  </v-container>
</template>
<script>
import MessagesTab from "../components/MessagesComponentTab.vue";
import OverviewTab from "../components/OverviewComponentTab.vue";
export default {
  data() {
    return {
      userEmail: "",
      activeTab: "tab-1",
      isOpen: false,
    };
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      this.activeTab === tab;
    },
		logOut() {
      localStorage.removeItem("r-tok");
      localStorage.removeItem("hasReloaded");
      localStorage.removeItem("logged-in");
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
        document.removeEventListener("click", this.closeCountryDropdownOnClickOutside);
    }
},

  },
  mounted() {
    this.userEmail = localStorage.getItem("u-e");
  },
  components: {
    MessagesTab,
    OverviewTab,
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
</style>
