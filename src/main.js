import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'

let allCardsSource = {
  1: ["A", 4], 
  2: ["2", 4], 
  3: ["3", 4], 
  4: ["4", 4], 
  5: ["5", 4], 
  6: ["6", 4], 
  7: ["7", 4], 
  8: ["8", 4], 
  9: ["9", 4], 
  10: ["10", 4], 
  11: ["J", 4], 
  12: ["Q", 4], 
  13: ["K", 4]
}
let data = JSON.parse(JSON.stringify(allCardsSource));

const store = createStore({
    /* state, actions, mutations */
    state: {
      fCard: "",
      sCard: "",
      fCardVal: 0,
      sCardVal: 0,
      minCards: 0,
      allCards: data,
      totalCards: 52,
      playable: false,
      showCard1: true,
      statsBox: {
        'wStats': '',
        'lStats': '',
        'sStats': '',
      },
      settingsPage: true,
    },
    mutations: {
      decrease (state, key) {
        // mutate state
        if (state.allCards[key][1] > 0) {
          state.allCards[key][1] -= 1;
          state.totalCards -= 1;
        }
      },
      resetState (state) {
        state.allCards = allCardsSource;
        state.totalCards = 52;
      }
    }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
