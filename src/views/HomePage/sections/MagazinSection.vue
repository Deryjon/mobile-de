<template>
  <v-container class="xl:w-[1120px] ">
    <h3 class="">News</h3>
    <div class="w-[1120px] card_box">
      <div class="card" v-for="item in newsData" :key="item.news_id">
        <img :src="item.news_image_url" alt="Image 1" />
        <p class="date">{{ formatDate(item.news_create_at) }}</p>
        <h1 class="card__title">
          {{
            item.news_title.length > 45
              ? item.news_title.substring(0, 45) + "..."
              : item.news_title
          }}
        </h1>
        <p class="card__text" >
          <div v-html="item.news_desc">
        </div>
    
        </p>
        <div class="btn">
          <router-link :to="`/fullnews/${item.news_id}`" >{{ $t("message.btn.continue") }}</router-link>
        </div>
      </div>
    </div>
    <!-- <div class="wrapper mt-  flex flex-wrap flex-col gap-[10px] lg:flex-row lg:justify-between w-[1120px]">
      <div v-for="item in newsData" :key="item.news_id"
        class="left-rent bg-[#f5f5f5]  w-[350px] sm:w-[550px] lg:w-[420px] xl:w-[550px] flex items-center gap-[15px] p-[30px]">
        <div class="img lg:w-[200x] lg:h-[140px] ">
          <img :src="item.news_image_url" alt="" class="w-full h-full object-cover mt-[-35px]" />
        </div>
        <div class="text">
          <h3 class="title font-bold text-[18px]">
            {{ item.news_title.length > 45
              ? item.news_title.substring(0, 45) + "..."
              : item.news_title }}
          </h3>
          <p class="card__text" >
          <div v-html="item.news_desc">
        </div>
    
        </p>

        <p class="card__text truncate-text" v-html="item.news_desc"></p>


        </div>
      </div>
    </div> -->

  </v-container>
</template>
<script>
import http from "../../../axios.config"
export default {
  data() {
    return {
      newsData: {},
      currentImage: 0,
      offset: 0,
      limit: 6,
      isLastPage: false,
      isLoading: false,
      lang: localStorage.getItem('lang')
    };
  },
  methods: {
    async fetchNews() {
      this.isLoading = true;
      try {
        const res = await http.get(`/news/list?limit=${this.limit}&offset=${this.offset}&lang=${this.lang}`);
        this.newsData = res.data.data;
        this.isLastPage = res.data.data.length >= this.limit;
        console.log(this.newsData);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    nextPage() {
      if (this.isLastPage) {
        this.offset += this.limit;
        this.fetchNews();
      }
    },
    prevPage() {
      if (this.offset >= this.limit) {
        this.offset -= this.limit;
        this.fetchNews();
      }
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
    truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  },
  },
  mounted() {
    this.fetchNews();
  },
}
</script>
<style scoped>
.card_box {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: 1px solid black;
}

.btn {
  width: 80px;
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
}
.card_box{
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  border: 1px solid black;
}
.card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;
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



.card__text {
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.card__title {
  font-size: 18px;
  font-weight: 700;
  height: 55px;
  overflow-y: hidden;
}

.btn_box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn_prev{
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
.btn_next{
  width: 50px;
  height: 50px;
  background-color: rgb(190, 125, 4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 10px;

}

.swiper_wrapper{
  width: 100%;
  overflow-x: hidden;
  transform: translateX(-10px);
}
</style>
