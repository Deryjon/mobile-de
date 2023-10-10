<template>
  <section class="swiper">
    <v-container class="max-w-[1120px]">
      <div class="slider">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.slider_image_url"
          :alt="image.slider_title"
          :class="{ 'slider-item': true, active: activeIndex === index }"
        />
      </div>
      <div class="indicators">
        <div
          v-for="(dot, index) in images"
          :key="index"
          class="item"
          @click="changeSlide(index)"
          :class="{ active: activeIndex === index }"
        ></div>
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
      // images: [
      //   { src: 'https://gaadiwaadi.com/wp-content/uploads/2020/01/Changan-CS75-Plus-7-1280x720.jpg', alt: '' },
      //   { src: 'https://imgcdn.zigwheels.ph/large/gallery/interior/138/3010/changan-cs75-plus-dashboard-view-246796.jpg', alt: '' },
      //   { src: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/138/3010/changan-cs75-plus-rear-angle-view-222963.jpg', alt: '' },
      //   { src: 'https://imgcdn.zigwheels.ph/large/gallery/interior/138/3010/changan-cs75-plus-rd-row-seat-417889.jpg', alt: '' },
      //   // ... add other image objects here
      // ],
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
  },
  mounted() {
		http.get('/slider/list?limit=10&offset=0').then((res) => {
			this.images = res.data.data
		})
    this.intervalId = setInterval(() => {
      this.images[this.activeIndex].active = false;
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      this.images[this.activeIndex].active = true;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style scoped>
.swiper  .slider {
    position: relative;
    width: 1120px;
    height: 400px;
    left: auto;
		right: auto;
}

.swiper .slider .slider-item {
    width: 1120px;
    height: 400px;
    opacity: 0;
    position: absolute;
		height: 400px;
    left: auto;
		right: auto;
    top: 0;
    transition: 0.5s;
		object-fit: cover;
}
.swiper .slider .slider-item img{
	width: 100%;
object-fit: cover;
}
.swiper  .slider .slider-item.active {
    opacity: 1;
    /* transform: translateY(0) ; */
}

.swiper  .next-prev {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    top: -450px

}

.swiper  .next-prev .prev {
    border-radius: 50%;
    background: #fff;
    opacity: 0.5;
    width: 40px;
    height: 40px;
    display: flex;
    transition: 0.5s;
    
}
.swiper  .next-prev .next {
    border-radius: 50%;
    background: #fff;
    opacity: 0.5;
    width: 40px;
    height: 40px;
    display: flex;
    transition: 0.5s;
    
}

.swiper  .next-prev .prev:hover {
    opacity: 0.8;
}
.swiper  .next-prev .next:hover {
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