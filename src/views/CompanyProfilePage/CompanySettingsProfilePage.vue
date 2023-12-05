<template>
  <v-container class="max-w-[1160px]">
    <PathLink>Settings</PathLink>
    <div class="sections">
      <YourAccount />
    </div>
  </v-container>
</template>

<script>
import PathLink from "../../ui/PathLink.vue";
import YourAccount from "./sections/YourAccount.vue";
import http from "../../axios.config";
export default {
  data() {
    return {
      userId: localStorage.getItem("u-i"),
    };
  },
  methods: {
    getDataCompany() {
      http.get(`/company/${this.userId}`).then((response) => {
        const responseData = response.data;
        console.log(responseData);
        localStorage.setItem("com-city", responseData.data.company_address_city);
        localStorage.setItem("com-country", responseData.data.company_address_country);
        localStorage.setItem("com-nr", responseData.data.company_address_nr);
        localStorage.setItem("com-radius", responseData.data.company_address_radius);
        localStorage.setItem("com-street", responseData.data.company_address_street);
        localStorage.setItem("com-zip", responseData.data.company_address_zip);
        localStorage.setItem("com-numcode", responseData.data.company_country_code);
        localStorage.setItem("com-i", responseData.data.company_id);
        localStorage.setItem("com-e", responseData.data.company_mail)
        localStorage.setItem("com-name", responseData.data.company_name
        );
        localStorage.setItem("com-prefix", responseData.data.company_number_prefix
        );
        localStorage.setItem("com-number", responseData.data.company_phone_number
        );
      });
    },
  },
  components: {
    PathLink,
    YourAccount,
  },
  mounted() {
    this.userId = localStorage.getItem("u-i");

    const isLoggedIn = localStorage.getItem("logged-in");
    const isLoggedCompany = localStorage.getItem("u-com");
    const comI = localStorage.getItem("com-i");
    if (isLoggedCompany === "false") {
      this.$router.push({ name: "home" });
    }

    if (localStorage.getItem("com-i") == null) {
      localStorage.setItem("com-i", false);

    }
    this.getDataCompany();

  },

};
</script>

<style></style>