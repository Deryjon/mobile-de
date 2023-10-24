<template>
  <v-container class="max-w-[1120px] ">
    <div class="magazine-bmw bg-[#f5f5f5]  w-[1120px] p-[20px]">
      <div class="">
        <h2 class="">SellCenter Magazin</h2>
      </div>
      <d iv class="flex gap-[20px]">
        <div class="max-w-[530px]  mini-bmw">
          <img class=" w-[550px]" src="../../../assets/images/mini-bwm.jpg" alt="" />
          <div class="auto">
            <a class="links" href="https://ru.wikipedia.org/wiki/MINI_(BMW)">Elektromobilität</a>
            <h2 class="sell">Die besten gebrauchten E-Autos</h2>
            <p>
              Elektrisch, nachhaltig und günstig im Preis: Sieben solide
              Stromer, die Du gebraucht kaufen kannst. Erfahre außerdem,
              worauf Du beim gebrauchten Elektroauto achten solltest.
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-between max-w-[530px]">

          <div class="   flex gap-[20px]">
            <img class="w-[150px] h-[106px] mini mb-[10px]" src="../../../assets/images/red-car.jpg" alt="" />
            <div>

              <a class="links" href="https://ru.wikipedia.org/wiki/MINI_(BMW)">Bestenlist</a>
              <h2 class="sell">E-Autos mit Wumms</h2>
              <p class="text-[14px]">
                Elektrisch angetriebene Alternativen können sogar echte
                Autofans glücklich machen.
              </p>
            </div>
          </div>
          <div class=" grey-car  flex gap-[20px]">
            <img class="w-[150px] h-[106px] mini-car mb-[20px]" src="../../../assets/images/grey.jpg" alt="" />
            <div>

              <a class="links" href="https://ru.wikipedia.org/wiki/MINI_(BMW)">Aus der Redaktion
              </a>
              <h2 class="sell">Die E-Autos mit der größten Reichweite</h2>
              <p class="text-[14px]">
                Dominic Torettos Straßenrennwagen und die Karren seiner
                Gegner.
              </p>
            </div>
          </div>
          <div class=" telephone  flex gap-[20px]">
            <img class="w-[150px] h-[106px] mini-car" src="../../../assets/images/telephone.jpg" alt="" />
            <div>

              <a class="links" href="https://ru.wikipedia.org/wiki/MINI_(BMW)">Ratgeber</a>
              <h2 class="sell">Kaufen oder lieber Leasen?</h2>
              <p class="text-[14px]">
                Erfahre mehr über Vor- und Nachteile der
                Finanzierungsoptionen und welche Kosten Dich erwarten.
              </p>
            </div>
          </div>

        </div>
      </d>
    </div>

    <!--  -->
    <div class="wrapper flex justify-between mt-[20px] w-[1120px]">
      <div class="sect-2">
        <img class="tablet-man" src="../../../assets/images/tablet-man.jpg" alt="" />
        <div class="">
          <h2>Financing made easy</h2>
          <p>Online financing in just a few minutes.</p>

          <button class="button">Discover more</button>
        </div>
      </div>

      <div class="sect-2">
        <img class="tablet-man" src="../../../assets/images/car-men.jpg" alt="" />
        <div class="">
          <h2>Financing made easy</h2>
          <p>Online financing in just a few minutes.</p>

          <button class="button">Discover more</button>
        </div>
      </div>


    </div>
  </v-container>
</template>
<style scoped></style>
<script></script>
<style lang="scss">
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
