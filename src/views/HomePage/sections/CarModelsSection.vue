<template>
  <section class="rental-section">
    <v-container class=" max-w-[1140px]">
      <div class="Automarken w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px]   xl:w-[1125px] mx-auto  p-[20px] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
        <div class="container">
          <h3 class="title text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
            {{ $t("message.title.popular") }}
          </h3>

          <div class="wrapper w-full flex justify-between">
            <!-- lists -->
            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">Audi</h3>
                <li>
                  <a href="https://www.mobile.de/auto/audi/a1/serie/"
                    >Audi A1</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/audi/a3/serie/"
                    >Audi A3</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/audi/a4/serie/"
                    >Audi A4</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/audi/a6/serie/"
                    >Audi A6</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/audi/q5/serie/"
                    >Audi Q5</a
                  >
                </li>
              </ul>
            </div>

            <!-- lists -->

            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">BMW</h3>
                <li>
                  <a href="https://www.mobile.de/auto/bmw/1er/serie/">
                    BMW 1er
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/bmw/2er/serie/"
                    >BMW 2er</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/bmw/3er/serie/">
                    BMW 3er</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/bmw/5er/serie/"
                    >BMW 5er</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/bmw/x1/serie/">BMW X1</a>
                </li>
              </ul>
            </div>

            <!-- lists -->

            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">Ford</h3>
                <li>
                  <a href="https://www.mobile.de/auto/ford/ecosport/serie/"
                    >Ford Ecosport
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/ford/fiesta/serie/">
                    Ford Fiesta</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/ford/focus/serie/"
                    >Ford Focus</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/ford/ka/serie/"
                    >Ford Ka</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/ford/mondeo/serie/"
                    >Ford Mondeo</a
                  >
                </li>
              </ul>
            </div>

            <!-- lists -->

            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">Mercedes-Benz</h3>
                <li>
                  <a href="https://www.mobile.de/auto/mercedes/b-klasse/serie/">
                    Mercedes B-Klasse
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mercedes/c-klasse/serie/"
                    >Mercedes C-Klasse</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mercedes/c-klasse/serie/"
                    >Mercedes CLA</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mercedes/e-klasse/serie/"
                    >Mercedes E-Klasse</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mercedes/gla/serie/"
                    >Mercedes GLA</a
                  >
                </li>
              </ul>
            </div>
            <!-- lists -->
            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">Opel</h3>
                <li>
                  <a href="https://www.mobile.de/auto/opel/adam/serie/">
                    Opel Adam
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/opel/astra/serie/">
                    Opel Astra</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/opel/corsa/serie/">
                    Opel Corsa</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/opel/insignia/serie/">
                    Opel Insignia</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/opel/mokka-x/serie/"
                    >Opel Mokka</a
                  >
                </li>
              </ul>
            </div>

            <!-- lists -->
            <div class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">VW</h3>
                <li>
                  <a href="https://www.mobile.de/auto/vw/golf/serie/">
                    VW Golf
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/vw/polo/serie/"
                    >VW Polo</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/vw/passat/serie/"
                    >VW Passat
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/vw/touran/serie/">
                    VW Touran</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/vw/up/serie/">VW up!</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pre-wrapper2 w-[600px] ">
          <div class="wrapper2">
            <!-- lists -->
            <h5 class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">{{ $t("message.title.other") }}</h3>
                <li>
                  <a href="https://www.mobile.de/auto/citroen/marke/"
                    >Citroen</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/fiat/marke/">Fiat</a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/peugeot/marke/"
                    >Peugeot</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/renault/marke/"
                    >Renault</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/skoda/marke/">Skoda</a>
                </li>
              </ul>
            </h5>

            <!-- lists -->
            <h5 class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">{{ $t("message.title.asia") }}</h3>
                <li>
                  <a href="https://www.mobile.de/auto/hyundai/marke/"
                    >Hyundai</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mazda/marke/">Mazda</a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/mitsubishi/marke/"
                    >Mitsubishi</a
                  >
                </li>
                <li>
                  <a href="https://mobile.de/auto/nissan/marke/">Nissan</a>
                </li>
                <li>
                  <a href="https://www.mobile.de/auto/toyota/marke/">Toyota</a>
                </li>
              </ul>
            </h5>

            <!-- lists -->
            <h5 class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">
                  {{ $t("message.title.dealership") }}
                </h3>
                <li>
                  <a
                    href="https://home.mobile.de/regional/berlin/berlin.0.html"
                    >{{ $t("message.title.berlin") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://home.mobile.de/regional/hessen/frankfurt.0.html"
                    >{{ $t("message.title.frankfurt") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://home.mobile.de/regional/nordrhein-westfalen/k%C3%B6ln.0.html"
                    >{{ $t("message.title.cologne") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://home.mobile.de/regional/hamburg/hamburg.0.html"
                    >{{ $t("message.title.hamburg") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://home.mobile.de/regional/bayern/m%C3%BCnchen.0.html"
                    >{{ $t("message.title.munich") }}</a
                  >
                </li>
              </ul>
            </h5>

            <!-- lists -->
            <h5 class="car-names">
              <ul class="car-model">
                <h3 class="car-class-name">
                  {{ $t("message.title.popular2") }}
                </h3>
                <li>
                  <a href="https://www.mobile.de/onlinekauf/">
                    {{ $t("message.title.online") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.mobile.de/magazin/artikel/muster-kaufvertrag-autokauf-autoverkauf-8516"
                  >
                    {{ $t("message.title.contract") }}</a
                  >
                </li>
                <li>
                  <a href="https://www.mobile.de/leasing/gebrauchtwagen/"
                    >{{ $t("message.title.usedCar") }}
                  </a>
                </li>
                <li>
                  <a href="https://www.mobile.de/leasing/audi/">Audi Leasing</a>
                </li>
                <li>
                  <a href="https://www.mobile.de/leasing/elektro-auto/"
                    >E-Auto Leasing</a
                  >
                </li>
              </ul>
            </h5>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
  border: 1px solid gray;
  padding: 8px;
  border-radius: 5px;
  color: #094559;
}
.Automarken {
  align-items: center;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  background-color: rgb(243, 241, 241);
  max-width: 1120px;
  padding: 20px;
}

.Automarken .container .title {
  color: black;
}
.Automarken .container .wrapper .car-model li {
  color: #fff;
  text-decoration: none;
  list-style: none;
}

.Automarken .container .wrapper .car-model li :hover {
  text-decoration: underline;
  color: gray;
}

.Automarken .container .wrapper .car-model a {
  text-decoration: none;
  color: black;
}

.pre-wrapper2 .wrapper2 {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
}

.pre-wrapper2 .wrapper2 .car-model li {
  color: #fff;
  text-decoration: none;
  list-style: none;
}

.pre-wrapper2 .wrapper2 .car-model a {
  text-decoration: none;
  color: black;
}

.pre-wrapper2 .wrapper2 .car-model a:hover {
  text-decoration: underline;
  color: gray;
}
</style>
