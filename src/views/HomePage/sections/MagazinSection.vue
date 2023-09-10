<template>
  <v-container class="max-w-[1120px] h-[700px]">
    <div class="header max-w-[1120px]">
      <div class="container">
    
          <div class="magazine-bmw max-w-[1120px]">
            <div class="row head-bottom">
              <h2 class="head">SellCenter Magazin</h2>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 mini-bmw">
                <img
                  class="bmw"
                  src="../../../assets/images/mini-bwm.jpg"
                  alt=""
                />
                <div class="auto">
                  <a
                    class="links"
                    href="https://ru.wikipedia.org/wiki/MINI_(BMW)"
                    >Elektromobilität</a
                  >
                  <h2 class="sell">Die besten gebrauchten E-Autos</h2>
                  <p>
                    Elektrisch, nachhaltig und günstig im Preis: Sieben solide
                    Stromer, die Du gebraucht kaufen kannst. Erfahre außerdem,
                    worauf Du beim gebrauchten Elektroauto achten solltest.
                  </p>
                </div>
              </div>

              <div class="col-lg-2">
                <img
                  class="mini mb-[10px]"
                  src="../../../assets/images/red-car.jpg"
                  alt=""
                />

                <img
                  class="mini-car mb-[20px]"
                  src="../../../assets/images/grey.jpg"
                  alt=""
                />

                <img
                  class="mini-car"
                  src="../../../assets/images/telephone.jpg"
                  alt=""
                />
              </div>

              <div class="col-lg-4">
                <a class="links" href="https://ru.wikipedia.org/wiki/MINI_(BMW)"
                  >Bestenlist</a
                >
                <h2 class="sell">E-Autos mit Wumms</h2>
                <p class="text-[14px]">
                  Elektrisch angetriebene Alternativen können sogar echte
                  Autofans glücklich machen.
                </p>
                <div class="grey-car">
                  <a
                    class="links"
                    href="https://ru.wikipedia.org/wiki/MINI_(BMW)"
                    >Aus der Redaktion
                  </a>
                  <h2 class="sell">Die E-Autos mit der größten Reichweite</h2>
                  <p class="text-[14px]">
                    Dominic Torettos Straßenrennwagen und die Karren seiner
                    Gegner.
                  </p>
                </div>
                <div class="telephone">
                  <a
                    class="links"
                    href="https://ru.wikipedia.org/wiki/MINI_(BMW)"
                    >Ratgeber</a
                  >
                  <h2 class="sell">Kaufen oder lieber Leasen?</h2>
                  <p class="text-[14px]">
                    Erfahre mehr über Vor- und Nachteile der
                    Finanzierungsoptionen und welche Kosten Dich erwarten.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper flex justify-between mt-[20px] w-[1120px]" >
            <div class="sect-2"> 
              <img
                class="tablet-man"
                src="../../../assets/images/tablet-man.jpg"
                alt=""
              />
              <div class="">
                <h2>Financing made easy</h2>
                <p>Online financing in just a few minutes.</p>

                <button class="button">Discover more</button>
              </div>
            </div>

            <div class="sect-2">
              <img
                class="tablet-man"
                src="../../../assets/images/car-men.jpg"
                alt=""
              />
              <div class="">
                <h2>Financing made easy</h2>
                <p>Online financing in just a few minutes.</p>

                <button class="button">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </v-container>
</template>
<script></script>
<style lang="scss">
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
    max-width: 1200px;
    margin: 0 auto;
  }
}

.header {
	width: 1120px;
  height: 945px;
  margin: 0 auto;
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
  font-size: 18px;
}

.magazine-bmw {
  width: 1120px;
  padding: 20px;
  background-color: #f5f5f5;
}

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
  color: rgb(48, 241, 241);
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
.wrapper{
	width: 1200px;
}
.sect-2 {
  display: flex;
  width: 550px;
  padding: 20px;
  gap: 15px;
  background-color: #f5f5f5;
}

.tablet-man {
  width: 136px;
  height: 136px;
}

.sec-02 {
  width: 590px;
}



.button {
  width: 120px;
  height: 30px;
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid gray;
  color: #094559;
  background-color: #f5f5f5;
}

.button:hover,
.button:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}
</style>
