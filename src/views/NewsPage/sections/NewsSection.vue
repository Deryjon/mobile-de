<template>
  <TheLoader v-if="isLoading"/>
  <v-container class="max-w-[1120px]" v-else>
    <div class="swiper_wrapper">
    <SwiperSection class="swiper"/>
  </div>
  <PathLink>News</PathLink>
    <div class="w-[100%] card_box">
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
    <div class="btn_box"> 
       <button class="btn_prev" @click="prevPage"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" 
        viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"/></svg> 
        </button>
        <button class="btn_next" @click="nextPage"><svg xmlns="http://www.w3.org/2000/svg" width="40"     
          height="40"   viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6- 
          4.6Z"/></svg>
        </button>
    </div>
  </v-container>
</template>

<script>
import http from "../../../axios.config";
import SwiperSection from "../../HomePage/sections/SwiperSection.vue";
import TheLoader from "../../../components/TheLoader.vue"
import PathLink from "../../../ui/PathLink.vue";

export default {
    data() {
        return {
            newsData: {},
            currentImage: 0,
            offset: 0,
            limit: 9,
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
    },
    mounted() {
     this.fetchNews();
    },
    components: { SwiperSection, TheLoader, PathLink }
};
</script>
<style scoped>
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


/* responsive */
@media(max-width:1000px) {
  .card_box{
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  border: 1px solid black;
}
}
@media(max-width:680px) {
  .swiper_wrapper{
    display: none;
  }
  .card_box{
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  border: 1px solid black;
}
}
</style>
