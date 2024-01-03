<template>
  <div class=" ">
    <v-container class="max-w-[1140px]">
      <div class="content">
        <div class="StatusDate"></div>

        <div class="headerLabel">{{ $t("message.footer.termsTitle") }}</div>
        <div class="mt-[20px]">
          <img
            src="../../../assets/images/security-customer.jpg"
          />
       </div>
        <div class="ContentDesc">
          {{ $t("message.footer.guid2") }}
        </div>
        <div class="contactff ">
          <div class="flex items-center gap-[20px] flex-wrap border p-3 ">
            <div class="flex ">

              <div class="FFICON">
                <i class="fas fa-phone"></i>
              </div>

              <div class="contact-modal lg:w-[350px]">
                <div class="flex items-center gap-[10px] mx-auto w-[235px]">
                  <p class="text-center">Morocco  +212 6 45 17 00 81</p>
                </div>
                <div class="flex items-center gap-[10px] mx-auto w-[235px]">
                  <p class="text-center">England    + 44 7990 45 89 39</p>
                </div>
                <div class="flex items-center gap-[10px] mx-auto w-[235px]">
                  <p class="text-center">Sweden    + 46 790 577 228</p>
                </div>
              </div>

            </div>
            <div class="">
              <div class="flex items-center gap-[10px] mx-auto w-[140px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>

                <p class="text-center">Adress Morocco</p>
              </div>
              <div class="flex items-center gap-[10px] mx-auto w-[140px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>

                <p class="text-center">Adress Sweden</p>
              </div>
            </div>
            <div class="FFDesc">{{ $t("message.contact_page.week") }}</div>

            <div class="FFButton">
              <a>
                <button type="button">
                  <span>{{ $t("message.contact_page.but") }}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
    </v-container>
    <!-- /container -->
  </div>
  <!-- /contact-page -->
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.content {
  margin: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headerLabel {
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
}

.ContentDesc {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-top: 16px;
  padding-bottom: 16px;
}

.contentImg {
  border-radius: 12px;
}

.contentImg img {
  max-width: 100%;
  max-height: 100%;
}
/* CARDS */

.contactff {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.FFCARD {
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.FFICON {
  font-size: 36px;
  color: #007bff;
}

.FFInfo {
  text-align: center;
}

.FFHeader {
  margin: 2px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
}

.FFButton {
  padding: 8px;
  margin-left: auto;
}

.FFButton button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.FFICON,
.FFInfo,
.FFButton {
  flex: 1;
}

@media (max-width: 768px) {
  .container {
    margin: 8px;
  }

  .content {
    margin: 16px;
  }

  .headerLabel {
    font-size: 24px;
    line-height: 32px;
  }

  .ContentDesc {
    font-size: 14px;
    line-height: 20px;
  }

  .contentImg img {
    max-width: 100%;
  }

  .FFCARD {
    width: auto;
    flex: 1 0 100%;
  }

  .FFICON {
    font-size: 24px;
  }

  .FFHeader {
    font-size: 16px;
  }

  .FFButton button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .contentImg {
    display: none;
  }

  .headerLabel {
    font-size: 18px;
    line-height: 24px;
  }

  .ContentDesc {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
