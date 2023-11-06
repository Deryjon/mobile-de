<script>
export default {};
</script>

<template>
  <v-container class="xl:w-[1120px]">
    <div class="magazine-bmw bg-[#f5f5f5] xl:w-[1120px] xl:p-[20px]">
      <div class="row sections-2">
        <div class="col-xl-5">

          <h2 class="head text-[#000]">SellCenter Magazin</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-5 col-xs-5 mobe">
          <p>
            {{ $t("message.title.overview") }}
          </p>
          <h2 class="marketF">
            {{ $t("message.title.market") }}
          </h2>
          <p>
            {{ $t("message.text.aboutMarket") }}
          </p>
        </div>
        <div class="col-xl-6">
          <img src="../../../assets/images/family.jpg" alt="" />
        </div>
        <div class="col-xl-5 ">
          <p>
            {{ $t("message.title.overview") }}
          </p>
          <h2 class="marketF">
            {{ $t("message.title.market") }}
          </h2>
          <p>
            <!-- SellCenter ist Deutschlands größter Fahrzeugmarkt, auf dem Du
            einfach ein Auto kaufen oder verkaufen kannst. Hier gibt es
            Gebrauchtwagen,
            <span>Neuwagen</span> , Youngtimer, <span>Oldtimer</span> ,
            <span>Kleinwagen</span> und Kompakte, <span>SUV</span>, luxuriöse
            Limousinen und günstige Autos. Du kannst Dein gebrauchtes
            <span>Auto verkaufen</span>, Neuwagen- und Gebrauchtwagenverkäufer
            kontaktieren. Du kannst mehr über
            <span>Automarken und Modelle</span> herausfinden, Dich über die
            Fahrzeugfinanzierung informieren, Finanzierungsangebote und
            Monatsraten vergleichen, oder Leasing-Angebote finden. Ebenso
            findest Du <span>Auto-Tipps, Tests, Ratgeber</span> und vieles mehr. -->
            {{ $t("message.text.aboutMarket") }}
          </p>
        </div>
        
      </div>


      <div class="row sec-5">
        <div class="mini-sec">
          <div class="w-[200px] col-md-2">
            <img
              class="men-glase"
              src="../../../assets/images/men-glase.jpg"
              alt=""
            />
          </div>
          <div class="col-xl-4 Auto">
            <h2 class="denkst">{{ $t("message.title.selling") }}</h2>
            <p>
              {{ $t("message.text.sell") }}
            </p>
            <span>➤ {{ $t("message.title.rate") }}</span>
          </div>
        </div>
        <div class="mini-sec">
          <div class="w-[200px]">
            <img
              class="men-glase"
              src="../../../assets/images/woman.jpg"
              alt=""
            />
          </div>
          <div class="col-xl-4 Auto">
            <h2 class="denkst">{{ $t("message.title.thinking") }}</h2>
            <p>
              {{ $t("message.text.compare") }}
            </p>
            <span>➤ {{ $t("message.title.buy") }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-[40px] justify-between mt-[30px]">
        <div class="flex gap-[20px]">
          <div class="w-[170px]">
            <img class="w-[100%]" src="../../../assets/images/men-glase.jpg" alt="" />
          </div>
          <div class="w-[300px]">
            <h2 class="denkst">{{ $t("message.title.selling") }}</h2>
            <p class="text-[14px]">
              {{ $t("message.text.sell") }}
            </p>
            <span>➤ {{ $t("message.title.rate") }}</span>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <div class="w-[170px]">
            <img class="" src="../../../assets/images/woman.jpg" alt="" />
          </div>
          <div class="w-[300px]">
            <h2 class="denkst">{{ $t("message.title.thinking") }}</h2>
            <p class="text-[14px]">
              {{ $t("message.text.compare") }}
            </p>
            <span>➤ {{ $t("message.title.buy") }}</span>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <div class="w-[170px]">
            <img class="" src="../../../assets/images/mens.jpg" alt="" />
          </div>
          <div class="w-[300px]">
            <h2 class="denkst">{{ $t("message.title.new") }}</h2>
            <p class="text-[14px]">
              {{ $t("message.text.selection") }}

            </p>
            <span>➤ {{ $t("message.title.newCar") }}</span>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <div class="w-[170px]"> 
            <img
              class="h-[170px]"
              src="../../../assets/images/man-telephone.jpg"
              alt=""
            />
          </div>
          <div class="w-[300px]">
            <h2 class="denkst">{{ $t("message.title.leasing") }}</h2>
            <p class="text-[14px]">
              {{ $t("message.text.buy") }}
            </p>
            <span>➤ {{ $t("message.title.offers") }}</span>

            <img class="h-[170px]" src="../../../assets/images/man-telephone.jpg" alt="" />
          </div>
          <div class="w-[300px]">
            <h2 class="denkst">Denkst Du Leasing?</h2>
            <p class="text-[14px]">
              Ob kaufen oder leasen, bei uns wirst Du fündig. Such Dir deinen
              Traumwagen und finde passende Leasing-Angebote von unseren Händlern
              in Deiner Nähe. Lorem ipsum, dolor sit amet consectetur adipisicin
            </p>
            <span>➤ Leasing-Angebote finden</span>
          </div>
        </div>
      </div>

      <div class="row sec-4">
        <div class="col-xl-1"></div>

        <div class="col-xl-1"></div>
        <div class="col-xl-4 Auto"></div>
      </div>
        <div class="col-xl-1">

        </div>
        <div class="col-xl-4 Auto">

        </div>
      </div>
  </v-container>
</template>
<style scoped>
@font-face {
  font-family: "20 Kopeek";
  src: url(/assets/fonts/20_Kopeek_Book.otf);
  font-weight: 400;
  font-style: normal;
}

body {
  margin: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ol,
ul {
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button,
input,
textarea,
select {
  font-family: inherit;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 15px;
}

@media (min-width: 360px) {
  .col-xs-1 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 25%;
  }

  .col-xs-2 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 50%;
  }

  .col-xs-3 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 75%;
  }

  .col-xs-4 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    max-width: 290px;
    margin: 0 auto;
  }
}

@media (min-width: 576px) {
  .col-sm-1 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 16.6666666667%;
  }

  .col-sm-2 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 33.3333333333%;
  }

  .col-sm-3 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 50%;
  }

  .col-sm-4 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 66.6666666667%;
  }

  .col-sm-5 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 83.3333333333%;
  }

  .col-sm-6 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    max-width: 510px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .col-md-1 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 16.6666666667%;
  }

  .col-md-2 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 33.3333333333%;
  }

  .col-md-3 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 50%;
  }

  .col-md-4 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 66.6666666667%;
  }

  .col-md-5 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 83.3333333333%;
  }

  .col-md-6 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    max-width: 690px;
    margin: 0 auto;
  }
}

@media (min-width: 992px) {
  .col-lg-1 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 8.3333333333%;
  }

  .col-lg-2 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 16.6666666667%;
  }

  .col-lg-3 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 25%;
  }

  .col-lg-4 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 33.3333333333%;
  }

  .col-lg-5 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 41.6666666667%;
  }

  .col-lg-6 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 50%;
  }

  .col-lg-7 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 58.3333333333%;
  }

  .col-lg-8 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 66.6666666667%;
  }

  .col-lg-9 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 75%;
  }

  .col-lg-10 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 83.3333333333%;
  }

  .col-lg-11 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 91.6666666667%;
  }

  .col-lg-12 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    max-width: 930px;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .col-xl-1 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 8.3333333333%;
  }

  .col-xl-2 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 16.6666666667%;
  }

  .col-xl-3 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 25%;
  }

  .col-xl-4 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 33.3333333333%;
  }

  .col-xl-5 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 41.6666666667%;
  }

  .col-xl-6 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 50%;
  }

  .col-xl-7 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 58.3333333333%;
  }

  .col-xl-8 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 66.6666666667%;
  }

  .col-xl-9 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 75%;
  }

  .col-xl-10 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 83.3333333333%;
  }

  .col-xl-11 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 91.6666666667%;
  }

  .col-xl-12 {
    box-sizing: border-box;
    flex-grow: 0;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
  }
}

.ml-a {
  margin-left: auto;
}

.ml-2 {
  margin-left: 30px;
}

html {
  font-family: "20 Kopeek";
}

body {
  color: white;
  background-color: rgb(94, 93, 93);
}

.header {
  height: 945px;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
}

.header-title {
  font-weight: 400;
  line-height: 1;
}

.header-subtitle {
  font-weight: 400;
  line-height: 1.1;
}

.head-bottom {
  padding-bottom: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid rgb(108, 108, 108);
}

.head {
  margin-top: 10px;
  font-size: 18px;
}

/* .magazine-bmw {
  width: 1120px;
  margin: 0 auto;
  padding: 20px;
  background-color: ;
} */

.mini-bmw {
  width: 450px;
}

.bmw {
  width: 450px;
  height: 212px;
}

.auto {
  margin-top: 18px;
}

.links {
  font: 1em sans-serif;
  color: rgb(191, 245, 245);
}

.sell {
  margin: 2px 0 5px 0;
  font-size: 16px;
}

.mini {
  width: 100%;
  height: 106px;
}

.mini-car {
  width: 100%;
  height: 106px;
  margin-top: 10px;
}

.grey-car {
  margin-top: 15px;
}

.telephone {
  margin-top: 30px;
}

.sect-2 {
  display: flex;
  width: 450px;
  margin: 20px 20px 20px 0;
  padding: 20px;
  gap: 0 15px;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.tablet-man {
  width: 136px;
  height: 136px;
}

.sec-02 {
  width: 490px;
  margin-left: 32px;
}

@media (min-width: 360px) {
  .magazine-bmw {
    display: block;
    margin-top: 20px;
  }

  .bmw {
    width: 100%;
    object-fit: cover;
    height: 190px;
  }

  .car-text1 {
    display: none;
  }

  .cars-text {
    margin-top: 20px;
    border-top: 1px solid rgb(98, 98, 98);
    padding-top: 20px;
    gap: 0 125px;
  }

  .mini-bmw {
    display: block;
  }

  .mini {
    width: 266px;
    height: 101px;
  }

  .mini-car {
    width: 266px;
    height: 101px;
  }

  .car-block {
    display: flex;
    gap: 0 15px;
  }

  .list {
    display: block;
  }

  .sect-2 {
    width: 95%;
    color: white;
  }

  .mobe {
    display: block;
  }

  .nomobe {
    display: none;
  }

  .marketF {
    margin: 20px 0 20px 0;
    font-size: 21px;
  }

  .men-glase {
    width: 150px;
    height: 150px;
  }

  .sec-02 {
    margin: 20px 0 0 12px;
  }

  .sec-3 {
    margin-top: 40px;
    display: flex;
  }

  .sec-4 {
    display: none;
  }

  .button {
    width: 100%;
    height: 40px;
  }

  span {
    text-decoration: underline;
    color: rgb(255, 166, 0);
  }

  .mini-sec {
    display: flex;
    margin: 20px 0 0 0;
  }

  .Auto {
    margin-left: 20px;
  }
}

@media (min-width: 1200px) {
  .cars-text {
    display: none;
  }

  .sec-02 {
    width: 120%;
    margin: 20px 0 0 80px;
  }

  .sect-2 {
    width: 110%;
  }

  .car-text1 {
    display: block;
  }

  .mini {
    width: 180px;
    height: 101px;
  }

  .mini-car {
    width: 180px;
    height: 101px;
  }

  .button {
    width: 140px;
    height: 40px;
    font-size: 14px;
  }

  .mobe {
    display: none;
  }

  .nomobe {
    display: block;
  }

  .sections-2 {
    color: white;
  }

  .family-near {
    margin-left: 80px;
  }

  .marketF {
    margin: 20px 0 20px 0;
    font-size: 21px;
  }

  span {
    text-decoration: underline;
    color: rgb(255, 166, 0);
  }

  .sec-4 {
    display: flex;
    margin-top: 20px;
  }

  .sec-5 {
    display: none;
  }

  .Auto {
    margin-left: 50px;
  }

  .denkst {
    margin-bottom: 20px;
  }
}

.navbar {
  padding: 32px 0;
  color: white;
}

.button {
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid gray;
  color: rgb(191, 245, 245);
  background-color: #f5f5f5;
}

.button:hover,
.button:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

.btn {
  display: block;
}</style>
