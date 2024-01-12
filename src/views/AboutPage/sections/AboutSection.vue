<template>
  <div>
    <!-- /template-->
    <v-container class="max-w-[1140px]">
      <div class="">
        <!-- img -->
        <img
          src="./header.png"
          alt=""
          class="container-img-header rounded-lg"
          style="width: 100%; height: 100%"
        />
      </div>
      <!-- /inage-container -->
      <div class="info-container">
        <div class="line-container">
          <span class="info-line-title"></span>
          <span class="info-line-text">SELL CENTER</span>
          <span class="info-line-title"></span>
        </div>
        <!-- line-container -->
        <p class="info-content-text">{{ $t("message.about.about") }}</p>
      </div>
      <!-- info-container -->
      <div class="line-container">
        <span class="info-line-title"></span>
        <span class="info-line-text">{{ $t("message.about.withUs") }}</span>
        <span class="info-line-title"></span>
      </div>
    </v-container>
  </div>
  <!-- /template -->
</template>

<script>
export default {};
</script>

<style scoped>
.info-otder {
  border: 1px solid #757575;
  border-radius: 8px;
  box-shadow: none !important;
  border-width: 1px;
}

.container-img-header {
  border-radius: 0 0 14px 14px;
}

.line-container {
  display: flex;
  align-items: center;
}

.info-line-title {
  flex: 1;
  height: 1px;
  background-color: black;
}

.info-line-text {
  font-weight: bold;
  padding: 0 10px;
}

.image-container {
  justify-content: center;
  align-content: center;
  display: flex; /* Added this line */
}

.container {
  margin: 18px;
  height: 100%;
}

.info-content-text {
  font-size: 16px;
  padding: 10px 0;
  color: black;
  text-align: justify;
  margin-right: 8px;
  margin-bottom: 4px;
  margin-top: 2px;
  margin-left: 8px;
}

/* С НАМИ */

.otsynp {
  margin: 8px;
  width: 5%;
}

.outer {
  display: flex;
  justify-content: center;
}

.aboutus-container {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
}

.aboutus-element {
  display: flex;
  align-items: center;
  border: 1px solid #757575;
  border-radius: 12px;
  width: 33.33%; /* Changed from "33.33%" to "50%" */
}

.aboutus-text {
  flex: 1;
}

.aboutus-element-icon {
  padding: 14px;
  margin-right: 8px;
  justify-content: flex-start;
}

.aboutus-element-icon svg {
  height: 24px;
  width: 38px;
}

.aboutus-element-title {
  font-size: 14px; /* Changed from "16px" to "14px" */
}

.abouts-element-desc {
  font-size: 24px; /* Changed from "32px" to "24px" */
  font-weight: bold;
}

.abouts-element-desc span {
  color: blueviolet;
}

/* ADAPTIVE */

@media screen and (max-width: 768px) {
  .container-img-header {
    border-radius: 0 0 14px 14px; /* Changed from "0 0 14px 14px" to "14px" */
  }
  .outer {
    justify-content: center;
    margin: 20%;
  }

  .aboutus-container {
    flex-direction: column;
    flex-wrap: wrap;
  }

  .aboutus-element-icon {
    margin: 4px;
  }
  .aboutus-element {
    border: none;
    width: 33.33%; /* Changed from "33.33%" to "50%" */
  }

  .aboutus-element-title {
    font-size: 14px; /* Changed from "16px" to "14px" */
  }

  .abouts-element-desc {
    font-size: 22px; /* Changed from "32px" to "24px" */
  }

  .info-content-text {
    font-size: 14px; /* Changed from "16px" to "14px" */
  }
}
</style>
