<template>
  <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
    <div
      v-for="semitrailer in semitrailers"
      :key="semitrailer.semitrailer_id"
      :data-semitrailer-id="semitrailer.id"
      class="semitrailerd bor bg-white flex justify-between w-full h-[300px] p-[20px]"
    >
      <div class="img w-[500px]  h-[200px] mr-[20px] m-0">
        <img :src="semitrailer.trailer_images_url[0]" alt="" class="object-cover w-full h-full"/>
      </div>
      <div class="text lg:w-[520px]">
        <div class="name flex flex-wrap gap-[5px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold ">
          <div class="make">
            {{ semitrailer.trailer_make }}
          </div>
          <div class="model">
            {{ semitrailer.trailer_model }}
          </div>
          <div class="variant">
            {{ semitrailer.trailer_variant }}
          </div>
        </div>
        <div class="date-km flex gap-[5px]">
          <div class="year">
            {{ semitrailer.trailer_firt_date_year }}
          </div>
        </div>
        <div class="car-body flex flex-wrap gap-x-[5px] text-[11px] md:text-[13px] lg:text-[14px]">
              <div class="trailer-body">
                {{ semitrailer.trailer_category }}
              </div>
              •
              <div class="fuel">
                {{ semitrailer.trailer_gvw }}
                GVW
              </div>
              •
              <div class="transmission">
                {{ semitrailer.trailer_load_capacity }}
                capacity
              </div>
              •
              <div class="hu">
                
                {{ semitrailer.trailer_axles }}
                axles
              </div>
            </div>
      </div>
      <div class="price text-[15px] lg:text-[18px] font-semibold ">
        <p class="price">€{{ semitrailer.trailer_price }}</p>
        <div class="flex gap-[10px] justify-center md:justify-end md:mt-[90px] lg:mt-[200px]">
          <button
            class="flex items-center gap-[5px] bg-red-500 rounded-[4px] text-[14px] p-[8px] px-[20px]"
            @click="deleteAdsemitrailer(semitrailer.trailer_id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
            Delete
          </button>

          <button
            @click="editAdsemitrailer(semitrailer.trailer_id)"
            class="bg-yellow-500 bor rounded-[4px] text-[14px] p-[8px] px-[20px] flex items-center gap-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/axios.config";
export default {
  data() {
    return {
      userI: "",
      semitrailers: [],
    };
  },

  methods: {
    fetchAds() {
      http.get(`/user/semitrailers/${this.userI}?limit=100&offset=0`).then((res) => {
        this.semitrailers = res.data.data;
        console.log(this.semitrailers);
      });
    },
    editAdsemitrailer(semitrailerId) {
      this.$router.push({ name: "edit-ad-semitrailer", params: { id: semitrailerId } });
    },
    deleteAdsemitrailer(semitrailerId) {
      // Отправляем запрос DELETE на сервер с указанием semitrailerId
      console.log(`Объявление с ID ${semitrailerId} удалено.`);
      http
        .delete(`/semitrailer/delete`, {
          data: { id: parseInt(semitrailerId) },
        })
        .then((response) => {
          // Обработка успешного удаления
          console.log(`Объявление с ID ${semitrailerId} удалено.`);
          // Выполните здесь необходимые действия после успешного удаления
          // Например, можно вызвать метод fetchAds() для обновления списка объявлений
          this.fetchAds();
        })
        .catch((error) => {
          // Обработка ошибки при удалении
          console.error(`Ошибка при удалении объявления с ID ${semitrailerId}:`, error);
          // Выполните здесь необходимые действия при ошибке
        });
    },
  },
  created() {
    this.userI = localStorage.getItem("u-i");
    this.fetchAds();
  },
};
</script>
<style scoped>
.bor {
  border: 1px solid #111;
}
</style>
