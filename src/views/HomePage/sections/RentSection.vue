<template>
  <section class="rental-section">
    <v-container class="max-w-[1140px]">
      <div class="wrapper flex flex-col gap-[10px] lg:flex-row lg:w-[900px] lg:mx-auto  xl:w-[1130px] ">
        <div v-for="ad in ads" :key="ad.card_id"
          class="left-rent bg-[#f5f5f5]  w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[450px] xl:w-[550px] lg:flex items-center gap-[15px] p-[30px] mx-auto">
          <div class="img lg:w-[200x] lg:h-[140px] ">
            <img :src="ad.card_image_url" alt="" class="w-full h-full object-cover mt-[-35px] rounded-md  " />
          </div>
          <div class="text">
            <h3 class="title font-bold text-[18px]">
              {{ ad.card_title }}
            </h3>
            <p class="subtitle text-[15px] mt-[10px]">
              {{ ad.card_text.length > 70
                ? ad.card_text.substring(0, 70) + "..."
                : ad.card_text }}
            </p>
            <button class="btn text-[15px] mt-[15px] border-gray-500" @click="redirectToLink(ad)">
              More details
            </button>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import http from '../../../axios.config';

export default {
  data() {
    return {
      ads: []
    }
  },
  methods: {
    fetchCard() {
      http.get('/ads/card').then((res) => {
        this.ads = res.data.data;
      })
    },
    redirectToLink(ad) {
      // Перенаправляем пользователя по ссылке из объекта ad
      window.location.href = ad.card_link;
    },
  },
  created() {
    this.fetchCard();
  }
};
</script>

<style scoped>
.btn {
  border: 1px solid gray;
  padding: 8px;
  border-radius: 5px;
  color: #094559;
}
</style>
