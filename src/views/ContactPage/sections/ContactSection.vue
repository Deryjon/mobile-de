<template>
  <div class=" ">
    <v-container class="container w-[1180px]">
      <div class="content">
        <div class="StatusDate"></div>
        <!-- Status Date-->
        <div class="breadcrumbs flex items-center text-gray-500 text-sm"></div>
        <!-- breadcrumbs -->
        <div class="headerLabel">Contact</div>
        <div class="ContentDesc">
          Есть ли у вас дополнительные вопросы или вы предпочитаете обсудить
          свои опасения по телефону? Тогда вы найдете здесь всю необходимую
          информацию!
        </div>
        <div class="contentImg">
          <img
            src="https://images.prismic.io/shacarlacca/NWQ1Yjc5ZWItYTUxOC00ZDAwLTk5NjMtMzE4MzgyZmJhZWY3__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1920&ar=1600%3A900"
          />
        </div>
        <div class="ContentDesc">
          Здесь указаны номера наших служб поддержки клиентов и время их работы.
          Если вы предпочитаете написать сообщение, просто заполните контактную
          форму.
        </div>
        <div class="contactff">
          <div class="FFCARD">
            <di class="FFICON">
              <i class="fas fa-phone"></i>
            </di>

            <div class="FFHeader">030 81097-601</div>

            <div class="FFDesc">С понедельника по пятницу с 8:00 до 18:00.</div>

            <div class="FFButton">
              <a>
                <button type="button">
                  <span> Обратиться </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
    </v-container>
    <!-- /container -->
  </div>
  <!-- /contact-page -->
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>

.content {
  margin: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headerLabel {
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
}

.ContentDesc {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-top: 16px;
  padding-bottom: 16px;
}

.contentImg {
  border-radius: 12px;
}

.contentImg img {
  max-width: 100%;
  max-height: 100%;
}
/* CARDS */

.contactff {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.FFCARD {
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.FFICON {
  font-size: 36px;
  color: #007bff;
}

.FFInfo {
  text-align: center;
}

.FFHeader {
  margin: 2px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
}

.FFButton {
  padding: 8px;
  margin-left: auto;
}

.FFButton button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.FFICON,
.FFInfo,
.FFButton {
  flex: 1;
}

@media (max-width: 768px) {
  .container {
    margin: 8px;
  }

  .content {
    margin: 16px;
  }

  .headerLabel {
    font-size: 24px;
    line-height: 32px;
  }

  .ContentDesc {
    font-size: 14px;
    line-height: 20px;
  }

  .contentImg img {
    max-width: 100%;
  }

  .FFCARD {
    width: auto;
    flex: 1 0 100%;
  }

  .FFICON {
    font-size: 24px;
  }

  .FFHeader {
    font-size: 16px;
  }

  .FFButton button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .contentImg {
    display: none;
  }

  .headerLabel {
    font-size: 18px;
    line-height: 24px;
  }

  .ContentDesc {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
