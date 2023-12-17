<template>
  <div class=" ">
    <v-container class=" max-w-[1140px]">
      <div class="content">
        <div class="StatusDate"></div>
        <div class="headerLabel">Our security work</div>
        <div class="">
          <img
            src="../../../assets/images/Sakerhetsarbete.avif"
          />
        </div>
        <div class="ContentDesc">
          You should of course always be able to shop safely on the Sellcenter website.

We review ads and make ongoing checks of ads and users.
We inform and guide our users on how to conduct safe transactions in all categories.

Sellcenter only accepts Motor market ads.

We develop and offer features for secure payments, temporary phone numbers and other security services.
We filter messages between users to prevent spam and offensive or offensive content.

We cooperate with the police and other authorities to prevent illegal activities in the best possible way.

If necessary, we share information about users with the Police and other authorities, in connection with investigations and preliminary investigations.
We prevent fraud.
Every year, thousands of deals are made via Sellcenter. Anywhere payments are made, fraudsters can be enticed to try to commit crime, but this accounts for less than one per thousand of all business with us. If someone falls victim to a scam, we take it very seriously. However, we are not on site when the deal is carried out and a large part of our work is therefore about informing about how to shop safely at Sellcenter.

All ads are reviewed by Sellcenter's own rules. Every day we refrain from publishing 1000's of ads. We allow e.g. not the sale of medicines, soft air guns or content that can be perceived as offensive as well as sex toys or the like.
        </div>
        <div class="contactff">
          <div class="FFCARD">
            <di class="FFICON">
              <i class="fas fa-phone"></i>
            </di>

            <div class="FFHeader">00212 6 45 17 00 81</div>

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
