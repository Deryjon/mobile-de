
<template>
  <section class="">
    <v-container class=" max-w-[1140px]">
      <div
        class="magazine-bmw bg-[#f5f5f5] w-[350px] xs:w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px]   xl:w-[1125px] mx-auto  p-[20px]">
        <div class="row sections-2">
          <div class="col-xl-5">

            <h2 class="head text-[#000]">SellCenter Magazin</h2>
          </div>
        </div>

        <div class="lg:flex justify-between mt-[10px]">
          <div class="w-[100%] lg:w-[400px] xl:w-[50%]">
            <img src="../../../assets/images/family.jpg" alt="" />
          </div>
          <div class="lg:w-[50%] text-[12px] lg:text-[15px]">
            <p>
              {{ $t("message.title.overview") }}
            </p>
            <h2 class="marketF">
              {{ $t("message.title.market") }}
            </h2>
            <p>
              {{ $t("message.text.aboutMarket") }}
            </p>
          </div>

        </div>
        <div class="flex flex-wrap gap-[40px] justify-between mt-[30px]">
          <div class="lg:flex gap-[20px]">
            <div class="w-full lg:w-[170px] xl:w-[250px]">
              <img class="w-[100%]" src="../../../assets/images/men-glase.jpg" alt="" />
            </div>
            <div class="w-[300px] lg:w-[170px] xl:w-[250px] text-[12px] lg:text-[14px]">
              <h2 class="denkst">{{ $t("message.title.selling") }}</h2>
              <p class="text-[14px]">
                {{ $t("message.text.sell") }}
              </p>
              <span>➤ {{ $t("message.title.rate") }}</span>
            </div>
          </div>
          <div class="lg:flex gap-[20px]">
            <div class="w-full lg:w-[170px] xl:w-[250px]">
              <img class="" src="../../../assets/images/woman.jpg" alt="" />
            </div>
            <div class="w-[300px] lg:w-[170px] xl:w-[250px] text-[12px] lg:text-[14px]">
              <h2 class="denkst">{{ $t("message.title.thinking") }}</h2>
              <p class="text-[14px]">
                {{ $t("message.text.compare") }}
              </p>
              <span>➤ {{ $t("message.title.buy") }}</span>
            </div>
          </div>
          <div class="lg:flex gap-[20px]">
            <div class="w-full lg:w-[170px] xl:w-[250px]">
              <img class="" src="../../../assets/images/mens.jpg" alt="" />
            </div>
            <div class="w-[300px] lg:w-[170px] xl:w-[250px] text-[12px] lg:text-[14px]">
              <h2 class="denkst">{{ $t("message.title.new") }}</h2>
              <p class="text-[14px]">
                {{ $t("message.text.selection") }}

              </p>
              <span>➤ {{ $t("message.title.newCar") }}</span>
            </div>
          </div>
          <div class="lg:flex gap-[20px]">
            <div class="w-full lg:w-[170px] xl:w-[250px]">
              <img class="h-[170px]" src="../../../assets/images/man-telephone.jpg" alt="" />
            </div>
            <div class="w-[300px] lg:w-[170px] xl:w-[250px] text-[12px] lg:text-[14px]">
              <h2 class="denkst">{{ $t("message.title.leasing") }}</h2>
              <p class="text-[14px]">
                {{ $t("message.text.buy") }}
              </p>
              <span>➤ {{ $t("message.title.offers") }}</span>

            </div>

          </div>
        </div>


      </div>
    </v-container>
  </section>
</template>
<script>
import http from "../../../axios.config"
export default {
  data() {
    return {

    }
  },
  methods: {
    fetchCard() {
      http.get('/ads/card').then((res) => {
        console.log(res);
      })
    }
  },
  created() {
    this.fetchCard
  }
}
</script>
<style scoped>
.header {
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
}

.header-title {
  font-weight: 400;
  line-height: 1;
}

.header-subtitle {
  font-weight: 400;
  line-height: 1.1;
}

.head-bottom {
  padding-bottom: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid rgb(108, 108, 108);
}

.head {
  margin-top: 10px;
  font-size: 18px;
}

.mini-bmw {
  width: 450px;
}

.bmw {
  width: 450px;
  height: 212px;
}

.auto {
  margin-top: 18px;
}

.links {
  font: 1em sans-serif;
  color: rgb(191, 245, 245);
}

.sell {
  margin: 2px 0 5px 0;
  font-size: 16px;
}

.mini {
  width: 100%;
  height: 106px;
}

.mini-car {
  width: 100%;
  height: 106px;
  margin-top: 10px;
}

.grey-car {
  margin-top: 15px;
}

.telephone {
  margin-top: 30px;
}

.sect-2 {
  display: flex;
  width: 450px;
  margin: 20px 20px 20px 0;
  padding: 20px;
  gap: 0 15px;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.tablet-man {
  width: 136px;
  height: 136px;
}

.sec-02 {
  width: 490px;
  margin-left: 32px;
}
</style>
