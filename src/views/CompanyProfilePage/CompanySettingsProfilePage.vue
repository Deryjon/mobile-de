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
import { format } from "date-fns";

export default {
  data() {
    return {
      companyId: localStorage.getItem("u-i"),
      companyCreate: "",
      companyAt: "",
    };
  },
  methods: {
    getDataCompany() {
      http.get(`/company/${this.userId}`).then((response) => {
        const responseData = response.data;
        localStorage.setItem("com-img-prof", responseData.data?.company_image_url);
        localStorage.setItem("com-img-alt", responseData.data?.company_image_name);
        localStorage.setItem("com-city", responseData.data?.company_address_city);
        localStorage.setItem("com-country", responseData.data?.company_address_country);
        localStorage.setItem("com-nr", responseData.data?.company_address_nr);
        localStorage.setItem("com-radius", responseData.data?.company_address_radius);
        localStorage.setItem("com-street", responseData.data?.company_address_street);
        localStorage.setItem("com-zip", responseData.data?.company_address_zip);
        localStorage.setItem("com-numcode", responseData.data?.company_country_code);
        localStorage.setItem("com-i", responseData.data?.company_id);
        localStorage.setItem("com-e", responseData.data?.company_mail)
        localStorage.setItem("com-name", responseData.data?.company_name
        );
        localStorage.setItem("com-number", responseData.data?.company_phone_number
        );
        localStorage.setItem("u-g", responseData.data?.user_gender
        );
        localStorage.setItem("u-ln", responseData.data?.user_last_name
        );
        localStorage.setItem("u-fn", responseData.data?.user_first_name
        );
        const date = new Date(responseData.data?.user_create_at);
        localStorage.setItem("com-create", format(date, "MMM d yyyy"));
      })
    },
  },
  components: {
    PathLink,
    YourAccount,
  },
  created() {
    this.userId = localStorage.getItem("u-i");
    this.companyId = localStorage.getItem("com-i");

    const isLoggedIn = localStorage.getItem("logged-in");
    if (isNaN(this.companyId)) {
      localStorage.setItem("com-i", "false");
    } else{

      this.getDataCompany();
    }



  }



};
</script>

<style></style>