<template>
  <div>
    <img :src="newsData.news_image_url" alt="" />
  </div>
</template>
<script>
import { useRoute } from "vue-router";
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
        .get(`/news/list?limit=9&offset=0&lang=en/${this.id}`)
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
