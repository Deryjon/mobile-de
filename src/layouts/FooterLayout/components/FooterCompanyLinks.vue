<template>
  <div class="flex flex-wrap gap-[20px] md:gap-[200px] lg:mt-[0px]">
    <div class="socials">
      <ul class="flex flex-col">
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'about-us' }"
          >{{ $t("message.footer.about") }}</router-link
          >
          <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'report-adversting' }"
          >{{ $t("message.footer.security") }}</router-link
          >
          <router-link
            class="text text-[10px] lg:text-[14px]"
            :to="{ name: 'secutiry-customer' }"
            >{{ $t("message.footer.customerSecurity") }}</router-link
            >
            <router-link
              class="text text-[10px] lg:text-[14px]"
              :to="{ name: 'fake-emails' }"
              >{{ $t("message.footer.fakeEmails") }}</router-link
            >
            
          </ul>
    </div>
    <div class="socials">
      <ul class="flex flex-col">
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'terms-of-use' }"
          >{{ $t("message.footer.adver") }}</router-link
          >
          <router-link
            class="text text-[10px] lg:text-[14px]"
            :to="{ name: 'login' }"
            >{{ $t("message.footer.settings") }}</router-link
          >
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'car-list' }"
          >{{ $t("message.footer.vehicle") }}</router-link
          >
          <router-link
        class="text text-[10px] lg:text-[14px]"
        :to="{ name: 'news' }"
        >{{ $t("message.footer.blocket") }}</router-link
      >
      <router-link
        class="text text-[10px] lg:text-[14px]"
        :to="{ name: 'contact' }"
        >{{ $t("message.footer.contact") }}</router-link
      >
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.text {
  height: 10px;
}
</style>
