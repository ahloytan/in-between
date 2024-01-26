<template>
  <div id="root">
      <div id="main">
        <div v-if="settingsPage" id="settings" class="bgSea">
          <div class="group header">SETTINGS</div>
          <p class="rule">Select the <b>minimum no. of cards</b> needed in-between to start playing. For example, 6 & K = 7, 8, 9, 10, J, Q <br> (6 cards in-between)</p>
          <div v-for="(value, key) in minCards" class="cardOpt" :key="key" @click="numCardsSettings(key)">
              {{ value }}
          </div>
        </div>
        <div v-else>
          <div class="bgSea">
            <div v-for="(value, key) in this.statsBox" :id="key" :key="key" class="stats">{{ value }}</div>
          </div>
          <div id="holder" class="bgSea">
            <div class="group header">CALCULATOR</div>

            <div v-if="this.showCard1" id="card1Box" class="group">
              <label for="fCard" class="label">1st Card:</label>
              <EachCard i-tag="c1"></EachCard>
            </div>

            <div v-if="!this.showCard1" id="card2Box" class="group">
              <label for="lCard" class="label">2nd Card:</label>
              <EachCard i-tag="c2"></EachCard>
              <div v-if="this.playable" id="c2Invi" class="invi"></div>
            </div>

            <div v-if="!this.showCard1 && this.playable" id="card3Box" class="group">
              <label for="lCard" class="label">Opened Card:</label>
              <EachCard i-tag="c3"></EachCard>
            </div>
          </div>

          <div id="oStatsHolder" class="bgSea">
            <div id="oStats">
              <div class="oCardStats" v-for="(value, key) in this.allCards" :key="key">
                [{{ value[0] }}: {{ value[1] }}]&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import EachCard from './components/EachCard.vue';
export default {
  name: 'App',
  components: {
    EachCard
  },
  methods: {
    ...mapMutations(['numCardsSettings'])
  },
  computed: {
    ...mapGetters(['allCards', 'playable', 'showCard1', 'statsBox', 'settingsPage']),
    minCards() {
      return Object.keys(this.allCards).filter((i) => i <= 9)
    },
  }
}
</script>
<style>
@font-face {
  font-family: "Montserrat Bold";
  src: url('./assets/fonts/Montserrat-Bold.ttf');
}

@font-face {
  font-family: "Montserrat Light";
  src: url('./assets/fonts/Montserrat-Light.ttf');
}

@font-face {
  font-family: "Montserrat Regular";
  src: url('./assets/fonts/Montserrat-Regular.ttf');
}

body {
  margin: 0;
}

#root {
  height: 100vh;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-image: url("./assets/images_doc/hk.jpg");
}

#main {
  margin: 0 auto;
  color: #FFFFFF;
  max-width: 400px;
  padding: 5% 15px 0;
  text-align: center;
  font-family: "Montserrat Regular";
}

#wStats {
  color: #BBE639;
}

#sStats {
  color: #FFA027;
}

#oStats {
  margin: 0 auto;
  max-width: 300px;  
  padding-bottom: 10px;
}

.oCardStats{
  display:inline-block;
}

#card2Box {
  position: relative;
}

#holder {
  height: 450px;
  position: relative;
}

#settings{
  height: 200px; 
  padding-bottom: 15px;
}

.stats {
  height: 25px;
  padding: 15px 2.5px 0;
  display: inline-block;
}

.rule {
  margin: 15px auto;
  max-width: 300px;  
}

.bgSea{
  background: rgba(40,57,101,.5);
}

.header {
  font-size: 30px;
}

.group {
  display: block;
  padding: 10px 0;
}

.cardOpt {
  cursor: pointer;
  margin: 0 5px;
  position: relative;
  padding: 2.5px 8.5px;
  display: inline-block;
  font-size: 24px;
}

.invi {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255,255,255,0);
}

.input,
.label {
  width: 40%;
  color: #FFFFFF;
  margin: 0 auto;
  display: block;
  font-size: 18px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  #root {
    background-image: url("./assets/images_doc/hk_m.jpg");
  }
}
</style>
