<script></script>
<template>
  <!-- <v-container class="max-w-[1120px]">
    <div class="flex flex-wrap justify-between gap-[20px] mt-[30px]">
      <div class="card">
        <img
          src="https://newsroom.mobile.de/wp-content/uploads/2023/09/nggallery_import/2_Polizei_Auto-321x176.jpg"
          alt="Image 1"
        />
        <h2>25. September 2023</h2>
        <h3>Schneller inseriert als die Polizei erlaubt: ...</h3>
        <p>
          Kleinmachnow/Berlin, 25. September 2023 – “Police Academy”-Fans
          aufgepasst: Auf ...
        </p>
        <button>Weitless</button>
      </div>

      <div class="card">
        <img
          src="https://newsroom.mobile.de/wp-content/uploads/2023/09/nggallery_import/Mob-Ret_23009_Promi-Autos_neu-321x176.png"
          alt="Image 2"
        />
        <h2>12. September 2023</h2>
        <h3>Millionärskinder, Modesternchen und Musikikonen: ...</h3>
        <p>
          Kleinmachnow/Berlin, 12. September 2023 – Waschechte Stars lassen sich
          gerne mal vom ...
        </p>
        <button>Weitless</button>
      </div>

      <div class="additional-card">
        <h1>Meistgelesene Artikel</h1>
        <br />
        <p>
          1. Hand in Hand mit dem Autohandel: Deutschlands größter Fahrzeugmarkt
          führt Online-Kauf ein
          <br />
          <br />
          2.Neuer TV-Spot: mobile.de zeigt, was Leasing alles kann
          <br />
          <br />
          3.Florian Baur übernimmt ad interim die Rolle des Chief Sales Officer
          bei mobile.de
          <br />
          <br />
          4.Autobarometer: Mehr Wachstum im Gebrauchtwagenmarkt
        </p>
      </div>

      <div class="card">
        <img
          src="https://newsroom.mobile.de/wp-content/uploads/2023/08/nggallery_import/2_508208892-321x176.jpg"
          alt="Image 1"
        />
        <h2>25. September 2023</h2>
        <h3>Schneller inseriert als die Polizei erlaubt: ...</h3>
        <p>
          Kleinmachnow/Berlin, 25. September 2023 – “Police Academy”-Fans
          aufgepasst: Auf ...
        </p>
        <button>Weitless</button>
      </div>

      <div class="card">
        <img
          src="https://newsroom.mobile.de/wp-content/uploads/2023/08/nggallery_import/Keyvisual_Ausschnitt-321x176.png"
          alt="Image 2"
        />
        <h2>12. September 2023</h2>
        <h3>Millionärskinder, Modesternchen und Musikikonen: ...</h3>
        <p>
          Kleinmachnow/Berlin, 12. September 2023 – Waschechte Stars lassen sich
          gerne mal vom ...
        </p>
        <button>Weitless</button>
      </div>

      <div class="additional-card2 w-[300px]">
        <h1>Meistgelesene Artikel</h1>
        <br />
        <p>
          1. Hand in Hand mit dem Autohandel: Deutschlands größter Fahrzeugmarkt
          führt Online-Kauf ein
          <br />
          <br />
          2.Neuer TV-Spot: mobile.de zeigt, was Leasing alles kann
          <br />
          3.Florian Baur übernimmt ad interim die Rolle des Chief Sales Officer
          bei mobile.de
          <br />
          <br />
          4.Autobarometer: Mehr Wachstum im Gebrauchtwagenmarkt
        </p>
      </div>
    </div>
  </v-container> -->

  <div class="container mx-auto grid grid-cols-3 gap-4">
    <div class="card" v-for="item in data" :key="item.id">
      <img src="" alt="" class="card__img" />
      <title class="card__title"></title>
      <p class="card__text"></p>
    </div>
  </div>
</template>
<script></script>
<style scooped></style>
<!-- <style scoped>
/* .wrapper .slider-image {
  background: url(https://newsroom.mobile.de/wp-content/uploads/2023/09/nggallery_import/Mob-Ret_23009_Promi-Autos_neu-1024x250.png);
  padding: 20px;
  background-repeat: no-repeat;
  background-size: cover;
}

.wrapper .slider-image .slider-content {
  font-size: 16px;
  font-weight: 900;
  background-color: rgb(187, 183, 183);
  padding-top: 10px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 700px;
  padding: 30px;
  border-radius: 15px;
}

.wrapper .slider-image .extra .title {
  font-size: 16px;
  font-weight: 100;
  padding-bottom: 10px;
}

.wrapper .slider-image .extra button {
  background-color: rgb(190, 125, 4);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 14px;
  border-radius: 15px;
  margin-top: 15px;
  cursor: pointer;
}

.wrapper .slider-image .extra .text {
  font-size: 15px;
  font-weight: 100;
  padding-top: 15px;
}

#stripe .actions {
  display: flex;
  margin-top: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding-top: 15px;
}

#stripe .actions h2 {
  color: (204, 204, 204);
}

#btn {
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 30px;
  color: #000000;
  padding-left: 150px;
  padding-bottom: 15px;
  cursor: pointer;
}

#btn2 {
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 30px;
  color: #000000;
  padding-right: 150px;
  padding-bottom: 15px;
  cursor: pointer;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.additional-card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 15px;
}

.additional-card h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.additional-card p {
  font-size: 16px;
}

.card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
}

.card img {
  width: 100%;
  height: auto;
}

.card h2 {
  margin-top: 10px;
  font-size: 20px;
}

.card h3 {
  margin-top: 5px;
  font-size: 16px;
}

.card p {
  margin-top: 10px;
}

.card button {
  margin-top: 10px;
  background-color: rgb(190, 125, 4);
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
}

.additional-card2 {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 15px;
  opacity: 0;
}

.line {
  background-color: #fff;

  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
  align-items: center;
}

.line h3 {
  color: gray;
}

.line h3:hover {
  color: #000000;
  cursor: pointer;
}

.scrollup {
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 8px 12px hsla(228, 66%, 45%, 0.1);
  display: inline-flex;
  padding: 12px;
  border-radius: 0.25rem;
  color: #111;
  font-size: 1.25rem;
  z-index: 999;
  transition: 0.3s;
  text-decoration: none;
}

.scrollup:hover {
  transform: translateY(-0.25rem);
  color: var(--first-color);
}

.show-scroll {
  bottom: 8rem;
}

#scrollToTopButton {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: (204, 204, 204);
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
}

#scrollToTopButton:hover {
  background-color: rgb(187, 183, 183);
} */
</style> -->
