import { createStore } from "vuex";

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
    state() {
        return {
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
        }
    },
    getters: {
        fCard: state => state.fCard,
        sCard: state => state.sCard,
        fCardVal: state => state.fCardVal,
        sCardVal: state => state.sCardVal,
        minCards: state => state.minCards,
        allCards: state => state.allCards,
        totalCards: state => state.totalCards,
        playable: state => state.playable,
        showCard1: state => state.showCard1,
        statsBox: state => state.statsBox,
        settingsPage: state => state.settingsPage,
    },
    mutations: {
        decrease (state, key) {
            if (state.allCards[key][1] > 0) {
                state.allCards[key][1] -= 1;
                state.totalCards -= 1;
            }
        },
        resetState (state) {
            state.allCards = allCardsSource;
            state.totalCards = 52;
        },
        numCardsSettings(state, val){
            state.minCards = val;
            state.settingsPage = false;
        }
    },
});

export default store;