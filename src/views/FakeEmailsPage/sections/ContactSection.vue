<template>
  <div class=" ">
    <v-container class=" max-w-[1140px]">
      <div class="content">
        <div class="StatusDate"></div>
        <div class="headerLabel">   Fake emails</div>
        <div class="">
          <img
            src="../../../assets/images/Sakerhetsarbete.avif"
          />
        </div>
        <div class="ContentDesc">

We will never contact you via email, SMS or phone and ask for card numbers, passwords or login details.
 If you are contacted by someone claiming to be from Sellcenter and asking you to pay for an ad again, or claiming to get a refund due to incorrect payment, this is a scam. Report this to us immediately.
If you have given away your card details, we invite you to:
Contact your bank to block your card
File a police report
Tips for safe card payments
When you pay by card and give out your card details online, always check that the page is secure by looking to see if it is certified in the address bar of your browser. A certified page always contains "https://" in the url. No serious companies or banks ask for card details or login information by email, text or call.
If you have been contacted by "Sellcenter" via email, SMS or phone where someone has asked you to log in to receive a refund, pay the ad again or give out your login details, this is guaranteed to be a fraud attempt
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
