<template>
  <div class="flex flex-wrap gap-[20px] lg:mt-[0px]">
    <div class="socials">
      <h3 class="font-bold">{{ $t("message.footer.about") }}</h3>
      <ul class="flex flex-col">
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'about-us' }"
          >{{ $t("message.footer.press") }}</router-link
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
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'home' }"
          >{{ $t("message.footer.inspiration") }}</router-link
        >
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'home' }"
          >{{ $t("message.footer.tips") }}</router-link
        >
      </ul>
    </div>
    <div class="socials">
      <h3 class="font-bold">{{ $t("message.footer.security") }}</h3>
      <ul class="flex flex-col">
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
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'report-adversting' }"
          >{{ $t("message.footer.report") }}</router-link
        >
      </ul>
    </div>

    <div class="socials">
      <h3 class="font-bold">{{ $t("message.footer.terms") }}</h3>
      <ul class="flex flex-col">
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'login' }"
          >{{ $t("message.footer.useTerms") }}</router-link
        >
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'login' }"
          >{{ $t("message.footer.data") }}</router-link
        >
      </ul>
    </div>

    
    <div class="socials">
      <h3 class="font-bold">{{ $t("message.footer.cookies") }}</h3>
      <ul class="flex flex-col">
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'login' }"
          >{{ $t("message.footer.settings") }}</router-link
        >
        <router-link
          class="text text-[10px] lg:text-[14px]"
          :to="{ name: 'login' }"
          >{{ $t("message.footer.company") }}</router-link
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
