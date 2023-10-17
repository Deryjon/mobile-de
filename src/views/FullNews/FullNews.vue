<template>
  <div class="body">
    <button @click="$router.push('/news')" class="back-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="50"
        height="50"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
    </button>
    <div class="card">
      <img class="img" :src="newsData.news_image_url" alt="" />
      <p class="date">{{ formatDate(newsData.news_create_at) }}</p>
      <h1 class="title">{{ newsData.news_title }}</h1>
      <p v-html="newsData.news_desc" class="text"></p>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import http from "@/axios.config";
export default {
  data() {
    return {
      newsData: {},
      id: useRoute().params.id,
    };
  },
  methods: {
    async fetchNews() {
      await http
        .get(`https://slash.sellcenter.uz/api/v1/news/${this.id}`)
        .then((res) => {
          this.newsData = res.data.data;
          console.log(this.newsData);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getUTCDate().toString().padStart(2, "0");
      const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
      const year = date.getUTCFullYear();
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");

      return `${day}-${month}-${year} ${hours}:${minutes} `;
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
<style>
.body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 800px;
  padding: 10px;
}
.img {
  margin-top: 50px;
  width: 100%;
}
.date {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}
.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 110px;
  left: 10px;
}
</style>
