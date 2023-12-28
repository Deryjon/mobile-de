<template>
    <section class="rental-section">
        <v-container class="max-w-[1140px]">
            <div class="wrapper  flex flex-col gap-[10px] lg:flex-row lg:w-[900px] lg:mx-auto  xl:w-[1130px]">
                <div
                    class="left-rent bg-[#f5f5f5]  w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[450px] xl:w-[550px] flex items-center gap-[15px] p-[30px] mx-auto">
                    <div class="img lg:w-[200x] lg:h-[140px] ">
                        <img src="../../../assets/images/tablet-man.jpg" alt=""
                            class="w-full h-full  mt-[-35px] object-cover" />
                    </div>
                    <div class="text">
                        <h3 class="title font-bold text-[18px]">
                            {{ $t("message.title.financing") }}
                        </h3>
                        <p class="subtitle text-[15px] mt-[10px]">
                            {{ $t("message.title.oFinancing") }}
                        </p>
                        <button class="btn text-[15px] mt-[15px] border-gray-500">
                            {{ $t("message.btn.discover") }}
                        </button>
                    </div>
                </div>
                <div
                    class="left-rent bg-[#f5f5f5] w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[450px] xl:w-[550px] flex items-center gap-[15px] p-[30px] mx-auto">
                    <div class="img lg:w-[200x] lg:h-[140px] ">
                        <img src="../../../assets/images/car-men.jpg" alt=""
                            class="w-full h-full  mt-[-35px]  object-cover" />
                    </div>
                    <div class="text">
                        <h3 class="title font-bold text-[18px]">
                            {{ $t("message.title.financing") }}
                        </h3>
                        <p class="subtitle text-[15px] mt-[10px]">
                            {{ $t("message.title.oFinancing") }}
                        </p>
                        <button class="btn text-[15px] mt-[15px] border-gray-500">
                            {{ $t("message.btn.discover") }}
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
        // fetchCard() {
        //     http.get('/ads/card').then((res) => {
        //         this.ads = res.data.data;
        //     })
        // },
        // redirectToLink(ad) {
        //     // Перенаправляем пользователя по ссылке из объекта ad
        //     window.location.href = ad.card_link;
        // },
    },
    created() {
        // this.fetchCard();
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
  