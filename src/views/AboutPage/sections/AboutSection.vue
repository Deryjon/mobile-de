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
      <!-- line-container -->

      <div class="otsynp"></div>

      <div class="outer">
        <div class="aboutus-container">
          <div class="aboutus-element">
            <div class="aboutus-element-icon">
              <!-- ИКОНКА -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
                />
              </svg>
            </div>
            <div class="aboutus-text">
              <div class="aboutus-element-title">
                {{ $t("message.about.employees") }}
              </div>
              <div class="abouts-element-desc"><span>+</span> 290</div>
            </div>
          </div>

          <div class="otsynp"></div>

          <div class="aboutus-element">
            <div class="aboutus-element-icon">
              <!-- ИКОНКА -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
                />
              </svg>
            </div>
            <div class="aboutus-text">
              <div class="aboutus-element-title">
                {{ $t("message.about.employees") }}
              </div>
              <div class="abouts-element-desc"><span>+</span> 290</div>
            </div>
          </div>

          <div class="otsynp"></div>

          <div class="aboutus-element">
            <div class="aboutus-element-icon">
              <!-- ИКОНКА -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
                />
              </svg>
            </div>
            <div class="aboutus-text">
              <div class="aboutus-element-title">
                {{ $t("message.about.employees") }}
              </div>
              <div class="abouts-element-desc"><span>+</span> 290</div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <!-- container -->
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
