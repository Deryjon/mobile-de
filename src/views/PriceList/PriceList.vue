<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import SwiperSection from "../HomePage/sections/SwiperSection.vue";

const data = ref([]);
const isLastPage = ref(false);
const offset = ref(0);
const limit = ref(9);

async function fetchData() {
  try {
    const res = await axios.get(
      `https://slash.sellcenter.uz/api/v1//price/list?limit=${limit.value}&offset=${offset.value}&lang=en`
    );
    data.value = res.data.data;
    isLastPage.value = res.data.data.length < limit.value;
    console.log(data.value);
  } catch (error) {
    console.error(error);
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
}

onMounted(fetchData);
</script>
<template>
  <v-container class="max-w-[1120px]">
    <SwiperSection />
    <div class="w-[100%] card_box">
      <div class="card" v-for="item in data" :key="item.price_item_id">
        <h1 class="card__title">
          {{ item.price_item_title }}
        </h1>
        <p class="card__text">
          {{ item.price_item_desc }}
        </p>
        <div class="price">{{ formatPrice(item.price_item_price) }}</div>
        <div class="btn">
          <button>Try now</button>
        </div>
      </div>
    </div>
    <div class="btn_box">
      <button class="btn_prev" @click="prevPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"
          />
        </svg>
      </button>
      <button class="btn_next" @click="nextPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6- 
          4.6Z"
          />
        </svg>
      </button>
    </div>
  </v-container>
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
</style>
