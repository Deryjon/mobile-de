<template>
  <section class="swiper relative h-[250px] xs:h-[300px] sm:h-[400px]
  
  xl:h-[500px]">
    <v-container class="max-w-[1145px]">
      <div  class="slider w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1100px]  mx-auto h-[100px] xs:h-[130px] sm:h-[200px] lg:h-[240px] xl:h-[340px] ">
        <img v-for="(image, index) in images" :key="index" :src="image.slider_image_url" :alt="image.slider_title"
          :class="{ 'slider-item': true, active: activeIndex === index }" 
          class="slider-img w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px]  h-[70%] lg:h-[300px] xl:h-[400px] xl:w-[1125px]  opacity-0 absolute  duration-500 object-cover"
          />
      </div>
      <div class="indicators mt-[80px]">
        <div v-for="(dot, index) in images" :key="index" class="item" @click="changeSlide(index)"
          :class="{ active: activeIndex === index }"></div>
      </div>
    </v-container>
  </section>
</template>

<script>
import http from "../../../axios.config"
export default {
  data() {
    return {
      activeIndex: 0,
      images: [],
      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      this.images[this.activeIndex].active = false;
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      this.images[this.activeIndex].active = true;
    },
    prevSlide() {
      this.images[this.activeIndex].active = false;
      this.activeIndex =
        this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
      this.images[this.activeIndex].active = true;
    },
    changeSlide(index) {
      this.images[this.activeIndex].active = false;
      this.activeIndex = index;
      this.images[this.activeIndex].active = true;
    },
    async fetchSlider() {
      await http.get('/slider/list?limit=10&offset=0').then((res) => {
        this.images = res.data.data
      })
      this.intervalId = setInterval(() => {
        this.images[this.activeIndex].active = false;
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
        this.images[this.activeIndex].active = true;
      }, 3000);

    },
  },
  mounted() {
    this.fetchSlider()
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style scoped>
.slider-img{
  margin: 0 auto;
}
.swiper .slider .slider-item img {
  width: 100%;
  object-fit: cover;
}

.swiper .slider .slider-item.active {
  opacity: 1;
}

.swiper .next-prev {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  top: -450px
}

.swiper .next-prev .prev {
  border-radius: 50%;
  background: #fff;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  display: flex;
  transition: 0.5s;

}

.swiper .next-prev .next {
  border-radius: 50%;
  background: #fff;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  display: flex;
  transition: 0.5s;

}

.swiper .next-prev .prev:hover {
  opacity: 0.8;
}

.swiper .next-prev .next:hover {
  opacity: 0.8;
}

.indicators {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  width: 100%;

}

.indicators .item {

  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #1f1f1f;
  opacity: 0.4;
  /* transition: 0.5s; */
}

.indicators .item.active {
  background-color: #1f1f1f;
  opacity: 0.7;
  width: 13px;
  height: 13px;
}
</style>