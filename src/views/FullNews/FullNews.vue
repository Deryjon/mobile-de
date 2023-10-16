<template>
  <div>
    <img :src="newsData.news_image_url" alt="" />
    <p>{{ newsData.news_create_at }}</p>
    <h1>{{ newsData.news_title }}</h1>
    <p v-html="newsData.news_desc"></p>
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
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
<style></style>
