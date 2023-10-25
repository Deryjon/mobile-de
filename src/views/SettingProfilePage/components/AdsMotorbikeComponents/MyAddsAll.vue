<template>
  <div class="flex flex-wrap gap-[40px] justify-between mt-[20px]">
    <div
      v-for="motorcycle in motorcycles"
      :key="motorcycle.motorcycle_id"
      :data-motorcycle-id="motorcycle.id"
      class="motorcycled bor bg-white flex justify-between w-full h-[300px] p-[20px]"
    >
      <div class="img w-[500px]  h-[200px] mr-[20px] m-0">
        <img :src="motorcycle.motorcycle_images_url[0]" alt="" class="object-cover w-full h-full"/>
      </div>
      <div class="texts w-[520px] h-[260px]">
        <div class="name flex gap-[5px] text-[16px] font-semibold">
          <div class="make">
            {{ motorcycle.motorcycle_make }}
          </div>
          <div class="model">
            {{ motorcycle.motorcycle_model }}
          </div>
          <div class="variant">
            {{ motorcycle.motorcycle_variant }}
          </div>
        </div>
        <div class="date-km flex gap-[5px]">
          <div class="year">
            {{ motorcycle.motorcycle_firt_date_year }}
          </div>
          •
          <div class="mileage">{{ motorcycle.motorcycle_mileage }} km</div>
          •
          <div class="power">{{ motorcycle.motorcycle_power }} Hp</div>
        </div>
        <div class="motorcycle-body flex gap-[5px] text-[14px]">
          <div class="motorcycle-body">
            {{ motorcycle.motorcycle_body }}
          </div>
          •
          <div class="fuel">
            {{ motorcycle.motorcycle_fuel_type }}
          </div>
          •
          <div class="transmission">
            {{ motorcycle.motorcycle_transmission }}
          </div>
          •
          <div class="hu">
            HU
            {{ motorcycle.motorcycle_hu_valid_until }}
          </div>
        </div>
        <div class="motorcycle-body flex gap-[5px] text-[14px]">
          <div class="motorcycle-body">
            {{ motorcycle.motorcycle_number_door }}
          </div>
          Doors
        </div>
      </div>
      <div class="price text-[18px] font-semibold">
        <p class="price">€{{ motorcycle.motorcycle_price }}</p>
        <div class="flex gap-[10px] justify-end mt-[200px]">
          <!-- <button
            class="flex items-center gap-[5px] bg-red-500 rounded-[4px] text-[14px] p-[8px] px-[20px]"
            @click="deleteAdCar(car.car_id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
            Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
            Delete
          </button> -->

					
					<v-dialog v-model="dialog" width="200px"  content-class="custom-dialog-content">
              <template v-slot:activator="{ props }">
                <button
                  class="flex items-center gap-[5px] bg-red-500 rounded-[4px] text-[14px] p-[8px] px-[20px]"
                  v-bind="props"
                >
								<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
            Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
                  Delete
                </button>
              </template>

              <v-card >
                <v-card-text class="mx-auto"> Are you sure? </v-card-text>
                <div class="flex items-center w-[120px] mx-auto">
                  <v-card-actions>
                    <v-btn color="error" block @click="dialog = false"
                      >No</v-btn
                    >
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn color="success" block @click="deleteAdMotorbike(motorcycle.motorcycle_id)">Yes</v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-dialog>
          <button
            @click="editAdCar(motorcycle.motorcycle_id)"
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
      motorcycles: [],
			dialog: false,
    };
  },

  methods: {
    fetchAds() {
      http.get(`/user/motorcycles/${this.userI}?limit=100&offset=0`).then((res) => {
        this.motorcycles = res.data.data;
      });
    },
    editAdCar(motorbikeId) {
      this.$router.push({ name: "edit-ad-motobike", params: { id: motorbikeId } });
    },
    deleteAdMotorbike(motorbikeId) {	
  http
    .delete(`/motorcycles/delete`, {
      data: { motorcycle_id: parseInt(motorbikeId) },
    })
    .then((response) => {
      console.log(response);
      // Обработка успешного удаления
      
      // Выполните здесь необходимые действия после успешного удаления
      // Например, можно вызвать метод fetchAds() для обновления списка объявлений
      this.fetchAds();
      
      // Закройте диалоговое окно только после успешного удаления
      this.dialog = false;
    })
    .catch((error) => {
      // Обработка ошибок при удалении, если необходимо
      console.error(error);
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
