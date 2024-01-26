<template>
  <div class="cardHolder">
    <div v-for="(value, key) in this.allCards" class="cardOpt" :key="key">
      <div :class="iTag" @click="value[1] > 0 ? decreaseCount(key, value) : ''">
        {{ value[0] }}
      </div>
    </div>
  </div> 
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'EachCard',
  props: ['iTag'],
  computed: {
    ...mapGetters(['allCards', 'totalCards'])
  },
  methods:{
    ...mapMutations(['decrease', 'resetState']),
    decreaseCount(key, values){
        let s = this.$store.state;
        this.decrease(key);

        if (this.totalCards == 0) {
          this.resetGame();
          return;
        }

        if (this.iTag == 'c1') {
          s.showCard1 = !s.showCard1;
          s.fCardVal = key;
          s.fCard = values[0];
          return;
        }
        
        if (this.iTag == 'c2') {
          s.sCard = values[0];
          s.sCardVal = Math.max(key, s.fCardVal);  
          s.fCardVal = Math.min(key, s.fCardVal);        
        }

        if (this.iTag == 'c3') {
          s.showCard1 = !s.showCard1;
          s.playable = !s.playable;
          return;
        }

        let numInBetweenCards = s.sCardVal - s.fCardVal - 1;
        if (numInBetweenCards >= s.minCards) {
          s.playable = !s.playable;

          let numWinCards = 0;

          for (let i=s.fCardVal + 1; i < s.sCardVal; i++){
            numWinCards += s.allCards[i][1];
          }

          let winChance = (numWinCards / s.totalCards) * 100;
          let sameCardChance = ((s.allCards[s.fCardVal][1] + s.allCards[s.sCardVal][1]) / s.totalCards) * 100;
          let loseChance = 100 - winChance;

          s.statsBox.wStats = "W: " + winChance.toFixed(1) + "% ";
          s.statsBox.lStats = "| L: " + loseChance.toFixed(1) + "% | ";
          s.statsBox.sStats = "Same: " + sameCardChance.toFixed(1) + "%";

        } else {
          s.statsBox.wStats = "";   
          s.statsBox.lStats = "";       
          s.statsBox.sStats = "Cannot play!";
          //If no. of cards less than specified, reset
          s.showCard1 = !s.showCard1;

        } //End of if-else
      
    },
    resetGame(){
      let s = this.$store.state;
      console.log("empty");
      this.resetState();
      s.showCard1 = !s.showCard1;
      s.statsBox.wStats = "";   
      s.statsBox.lStats = "";       
      s.statsBox.sStats = "";
    }
  }
}
</script>
<style scoped>
#submit {
  background: #11b3ee;
}
.submitHolder {
  padding: 25px 0;
}

.input {
  border: none;
  padding: 15px 0;
  border-radius: 25px;
  background: rgba(255,255,255,.3);
}

.cardHolder {
  max-width: 250px;
  margin: 0 auto;
  font-size: 34px;
}

.cardOpt {
    cursor: pointer;
    margin: 0 5px;
    position: relative;
    padding: 2.5px 8.5px;
    display: inline-block;
    font-size: 36px;
}
</style>