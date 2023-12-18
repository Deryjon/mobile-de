<template>
  <div class=" ">
    <v-container class=" max-w-[1140px]">
      <div class="content">
        <div class="StatusDate"></div>
        <div class="headerLabel"> Why do I get annoying ads?</div>
        <div class="">
          <img
            src="../../../assets/images/Sakerhetsarbete.avif"
          />
        </div>
        <div class="ContentDesc">
        
          It happens that we receive questions and comments from our users regarding banners and advertising on Sellcenter that contain inappropriate messages and images. 
It can also be about technical problems related to advertising on Sellcenter. 
Since this is content not posted by us and only visible to some, we ask to see an example of what it looks like (preferably a screenshot).
Have you received shady emails about account or card details from Sellcenter? It's fraud!
        </div>
        <div class="contactff ">
          <div class="flex items-center flex-wrap border p-3 ">
            <div class="flex ">

              <di class="FFICON">
                <i class="fas fa-phone"></i>
              </di>
  
              <div class="FFHeader ">00212 6 45 17 00 81</div>
            </div>

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
