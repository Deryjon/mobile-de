<template>
  <div class="flex flex-wrap gap-[40px] justify-between mt-[20px] p-[5px]">
    <div v-for="motorhome in motorhomes" :key="motorhome.motor_home_id" :data-motorhome-id="motor_home_id"
      class="card bor bg-white md:flex justify-between w-full lg:h-[300px] p-[20px]">
      <div class="bor img lg:w-[500px]  h-[150px] lg:h-[200px] mr-[20px] m-0">
        <img :src="motorhome.motor_home_images_url[0]" alt="" class="object-cover w-full h-full" />
      </div>
      <div class="texts lg:w-[520px]">
        <div class="name flex flex-wrap gap-[5px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
          <div class="make">
            {{ motorhome.motor_home_make }}
          </div>
          <div class="model">
            {{ motorhome.motor_home_model }}
          </div>
          <div class="variant">
            {{ motorhome.motor_home_variant }}
          </div>
        </div>
        <div class="date-km flex gap-[5px] text-[11px] md:text-[13px] lg:text-[14px]">
          <div class="year">
            {{ motorhome.motor_home_firt_date_year }}
          </div>
          •
          <div class="mileage">{{ motorhome.motor_home_kilometre
          }} km</div>
          •
          <div class="power">{{ motorhome.motor_home_power }} Hp</div>
        </div>
        <div class="motorhome-body flex flex-wrap gap-x-[5px] text-[11px] md:text-[13px] lg:text-[14px]">
          <div class="motorhome-body">
            {{ motorhome.motor_home_type }}
          </div>
          •
          <div class="motorhome-body">
            {{ motorhome.motor_home_number_of_bunks }}
            Bunks
          </div>
          <div class="fuel">
            {{ motorhome.motor_home_fuel_type }}
          </div>
          •
          <div class="transmission">
            {{ motorhome.motor_home_transmission }}
          </div>

        </div>
      </div>
      <div class="price text-[15px] lg:text-[18px] font-semibold">
        <p class="price ">€{{ motorhome.motor_home_price }}</p>
        <div class="flex gap-[10px] justify-center md:justify-end md:mt-[90px] lg:mt-[200px]">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <button
                class="flex items-center gap-[5px] bg-red-500 rounded-[4px] text-[10px] lg:text-[14px] p-[8px] px-[20px]"
                v-bind="props"
                @click="prepareDelete(motorhome.motor_home_id)" 

                >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License -
                  https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
                {{ $t("message.ads_page.delete") }}
              </button>
            </template>

            <v-card class="w-[300px] mx-auto">
              <v-card-text class="mx-auto"> Are you sure? </v-card-text>
              <div class="flex items-center w-[120px] mx-auto">
                <v-card-actions>
                  <v-btn color="error" block @click="dialog = false">No</v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-btn color="success" block @click="deleteAdcar()">Yes</v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-dialog>
          <button @click="editAdMotorhome(motorhome.motor_home_id)"
            class="bg-yellow-500 bor rounded-[4px] text-[10px] lg:text-[14px] p-[8px] px-[20px] flex items-center gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
            {{ $t("message.ads_page.edit") }}
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
      motorhomes: [],
      dialog: false,
    };
  },

  methods: {
    fetchAds() {
      http.get(`/user/motorhomes/${this.userI}?limit=100&offset=0`).then((res) => {
        this.motorhomes = res.data.data;
        console.log(this.motorhomes);
      });
    },
    editAdMotorhome(motorhomeId) {
      this.$router.push({ name: "edit-ad-motorhomes", params: { id: motorhomeId } });
    },
    prepareDelete(motorhomeId) {
    this.carIdToDelete = motorhomeId;
  },
    deleteAdcar() {
    const motorhomeId = this.carIdToDelete;
    if (!motorhomeId) {
      console.error("motorhomeId не определён");
      return;
    }
    console.log(`Попытка удалить объявление с ID ${motorhomeId}`);
    http
      .delete(`/motorhomes/delete`, {
        data: { id: parseInt(motorhomeId) },
      })
      .then((response) => {
        console.log(`Объявление с ID ${motorhomeId} успешно удалено.`);
        this.dialog = !this.dialog
        this.fetchAds();
      })
      .catch((error) => {
        console.error(`Ошибка при удалении объявления с ID ${motorhomeId}:`, error);
      })
      .finally(() => {
        // Сброс значения carIdToDelete после удаления
        this.carIdToDelete = null;
      });
  },
    // deleteAdMotorhome(motorhomeId) {
    //   // Отправляем запрос DELETE на сервер с указанием motorhomeId
    //   console.log(`Объявление с ID ${motorhomeId} удалено.`);
    //   http
    //     .delete(`/motorhomes/delete`, {
    //       data: { id: parseInt(motorhomeId) },
    //     })
    //     .then((response) => {
    //       // Обработка успешного удаления
    //       console.log(`Объявление с ID ${motorhomeId} удалено.`);
    //       // Выполните здесь необходимые действия после успешного удаления
    //       // Например, можно вызвать метод fetchAds() для обновления списка объявлений
    //       this.fetchAds();
    //     })
    //     .catch((error) => {
    //       // Обработка ошибки при удалении
    //       console.error(`Ошибка при удалении объявления с ID ${motorhomeId}:`, error);
    //       // Выполните здесь необходимые действия при ошибке
    //     });
    // },
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
