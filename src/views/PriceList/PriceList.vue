<script setup>
import http from "../../axios.config";
import { onMounted, ref } from "vue";
import SwiperSection from "../HomePage/sections/SwiperSection.vue";
import TheLoader from "../../components/TheLoader.vue";

import PathLink from "../../ui/PathLink.vue";



const data = ref([]);
const isLastPage = ref(false);
const isLoading = ref(false);
const offset = ref(0);
const limit = ref(9);
const lang = localStorage.getItem("lang");

async function fetchData() {
  isLoading.value = true;

  try {

    const res = await http.get(
      `/price/list?limit=${limit.value}&offset=${offset.value}&lang=${lang}`

    )
    data.value = res.data.data;
    isLastPage.value = res.data.data.length < limit.value;
    console.log(data.value);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

function nextPage() {
  if (!isLastPage.value) {
    offset.value += limit.value;
    fetchData();
  }
}

function prevPage() {
  if (offset.value >= limit.value) {
    offset.value -= limit.value;
    fetchData();
  }
}

function formatPrice(price) {
  const amount = (price / 100).toFixed(2);
  return amount;
}async function goPayment(item) {
  if (item.price_item_price <= 0) {
    window.location.href = "/"

  }

  isLoading.value = true;
  try {
    const res = await http.post(
      `/pay`,
      {
        item: {
          "price_item_title": item.price_item_title,
          "price_item_price": item.price_item_price,
        },
      }
    );
    localStorage.setItem("price-pay", item.price_item_price);
    window.location.href = res.data.url;
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}



onMounted(fetchData);
</script>
<template>
  <section>
    <TheLoader v-if="isLoading" />

    <v-container class=" max-w-[1140px]" v-else>
      <div class="swiper_wrapper hidden lg:block  w-full">
        <SwiperSection />
      </div>
      <PathLink>{{ $t("message.pricelist_page.title") }}</PathLink>
      <div class="w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px]  mx-auto xl:w-[1140px] card_box  ">
        <div class="card" v-for="item in data" :key="item.price_item_id">
          <h1 class="card__title">
            {{ item.price_item_title }}
          </h1>
          <p class="card__text">
            {{ item.price_item_desc }}
          </p>
          <div class="price">{{ item.price_item_price }}</div>
          <div class="btn">

            <button @click="goPayment(item)">{{ $t("message.btn.try") }}</button>
          </div>
        </div>
      </div>
      <div class="btn_box">
        <button class="btn_prev" @click="prevPage">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z" />
          </svg>
        </button>
        <button class="btn_next" @click="nextPage">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6- 
            4.6Z" />
          </svg>
        </button>
      </div>
    </v-container>
  </section>
</template>
<style scoped>
.card_box {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: 1px solid black;
}


.card {
  width: 250px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;
}

.btn {
  width: 100px;
  margin-top: 10px;
  background-color: rgb(190, 125, 4);
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__text {
  width: 100%;
  height: 150px;
}

.card__title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.price {
  font-size: 18px;
  font-weight: 700;
  overflow-y: hidden;
}

.btn_box {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn_prev {
  width: 50px;
  height: 50px;
  background-color: rgb(190, 125, 4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 5px;
  margin-top: 10px;
}

.btn_next {
  width: 50px;
  height: 50px;
  background-color: rgb(190, 125, 4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 10px;
}

/* responsive */
@media (max-width: 1000px) {
  .card_box {
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    border: 1px solid black;
  }
}

@media (max-width: 680px) {

e  .card_box {
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    border: 1px solid black;
  }
}
</style>
