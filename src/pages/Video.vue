<template>
  <div class="main_content">
    <div class="press_banner">
      <img src="../assets/fsp-press-banner.jpg" width="100%" />
    </div>
    <h4 class="brown h_header">Special Report on FOX 11 News on Kefei Wang</h4>
    <div class="black h_content">
      <p>The shocking FOX 11 report on Yifei Wang and the persecution of Falun Gong is out. Chinese nationals living in the U.S. have shared what they claim to be undercover video from a labor camp in China where their family member died 15 years ago after allegedly being persecuted for practicing Falun Gong.</p>
    </div>
    <hr class="b-brown" />
    <b-container class="press-main-contain" fluid>
      <b-row>
        <b-col cols="4">
          <img src="../assets/essbbc1.png" width="100%" />
        </b-col>
        <b-col cols="8">
          <h5>An in-depth investigation and report by BBC international news have been broadcasted lately.</h5>
          <p>BBC news says the Independent People's Tribunal/China Tribunal has come to a final judgment that CCP has committed the crimes against humanity...</p>
        </b-col>
      </b-row>
      <hr class="b-brown" />
      <b-row>
        <b-col cols="4">
          <img src="../assets/Freesistersbody-home-photo3.jpg" width="100%" />
        </b-col>
        <b-col cols="8">
          <h5>Dailymail: Undercover video shows brutal treatment Falun Gong practitioners inside Chinese</h5>
          <p>Chinese nationals living in the U.S. have shared what they claim to be undercover video from a labor camp in China where their family member died 15 years ago after...</p>
        </b-col>
      </b-row>
      <hr class="b-brown" />
      <b-row>
        <b-col cols="4">
          <img src="../assets/Freesistersbody-thumb-video.jpg" width="100%" />
        </b-col>
        <b-col cols="8">
          <h5>An in-depth investigation and report by BBC international news have been broadcasted lately.</h5>
          <p>BBC news says the Independent People's Tribunal/China Tribunal has come to a final judgment that CCP has committed the crimes against humanity...</p>
        </b-col>
      </b-row>
      <hr class="b-brown" />
      <b-row>
        <b-col cols="4">
          <img src="../assets/fsb_press_photo3.jpg" width="100%" />
        </b-col>
        <b-col cols="8">
          <h5>An in-depth investigation and report by BBC international news have been broadcasted lately.</h5>
          <p>BBC news says the Independent People's Tribunal/China Tribunal has come to a final judgment that CCP has committed the crimes against humanity...</p>
        </b-col>
      </b-row>
      <hr class="b-brown" />
    </b-container>
    <div class="mt-3 custom-paging">
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 40,
      perPage: 5,
      currentPage: 1
    };
  }
};
</script>

<style scoped>
.press_banner {
  margin-bottom: 70px;
}
.phto_wrap {
  position: relative;
  float: right;
  margin: 10px 0 10px 40px;
  text-align: center;
}

.press-main-contain h5 {
  font-weight: bold;
}
</style>