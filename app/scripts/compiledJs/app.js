"use strict";var _jquery=_interopRequireDefault(require("jquery")),_vueMin=_interopRequireDefault(require("vue/dist/vue.min.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var fCard,lCard,fCardVal,allCards={A:[1,4],2:[2,4],3:[3,4],4:[4,4],5:[5,4],6:[6,4],7:[7,4],8:[8,4],9:[9,4],10:[10,4],J:[11,4],Q:[12,4],K:[13,4]},zeClone=_jquery.default.extend(!0,{},allCards),totalCards=52;(0,_jquery.default)(document).ready(function(){for(var s=parseInt(prompt("Minimum difference between 2 cards to play?"));!Number.isInteger(s);)s=parseInt(prompt("Minimum difference between 2 cards to play?"));(0,_jquery.default)(".c1, .c2, .c3").click(function(){var e=(0,_jquery.default)(this).text(),a=allCards[e];--a[1],--totalCards,a[1]||(0,_jquery.default)("."+e+".invi").css("display","block"),totalCards||(console.log("empty"),allCards=_jquery.default.extend(!0,{},zeClone),(0,_jquery.default)("#card1Box").css("display","block"),(0,_jquery.default)("#card2Box, .invi").css("display","none"),(0,_jquery.default)("#card3Box").css("visibility","hidden"),(0,_jquery.default)("#lStats, #wStats, #sStats").text(""),totalCards=52),(0,_jquery.default)("#oStats").text(""),_jquery.default.each(allCards,function(e,a){(0,_jquery.default)("#oStats").append("["+e+": "+a[1]+"] ")})}),(0,_jquery.default)(".c1").click(function(){fCardVal=(0,_jquery.default)(this).text(),fCard=allCards[fCardVal],(0,_jquery.default)("#card1Box, #card2Box").toggle()}),(0,_jquery.default)(".c2").click(function(){var t=0,d=0,e=(0,_jquery.default)(this).text();lCard=allCards[e],fCard[0]>lCard[0]&&(fCard=allCards[e],lCard=allCards[fCardVal]);var a,i,l,r=fCard[0],u=lCard[0];s<=u-r-1?((0,_jquery.default)("#c2Invi").toggle(),(0,_jquery.default)("#card3Box").css("visibility","visible"),_jquery.default.each(allCards,function(e,a){a[0]==r||a[0]==u?d+=a[1]:a[0]>r&&a[0]<u&&(t+=a[1])}),i=d/totalCards*100,l=100-(a=t/totalCards*100),(0,_jquery.default)("#wStats").text("W: "+a.toFixed(1)+"% "),(0,_jquery.default)("#lStats").text("| L: "+l.toFixed(1)+"% | "),(0,_jquery.default)("#sStats").text("Same: "+i.toFixed(1)+"%")):((0,_jquery.default)("#sStats").text("Cannot play"),(0,_jquery.default)("#lStats, #wStats").text(""),(0,_jquery.default)("#card1Box").css("display","block"),(0,_jquery.default)("#card2Box").css("display","none"))}),(0,_jquery.default)(".c3").click(function(){(0,_jquery.default)("#card3Box").css("visibility","hidden"),(0,_jquery.default)("#card1Box, #card2Box, #c2Invi").toggle()})}),_vueMin.default.component("stats-box",{props:["name"],template:'<div class="stats" :id="name"></div>'});var invi=_vueMin.default.component("invi",{props:["cName","invi"],template:'<div :class="[cName, invi]"></div>'}),deck=[{id:"A"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"J"},{id:"Q"},{id:"K"}];_vueMin.default.component("card",{props:["cTag","iTag","invi"],template:'<div class="cardHolder"><div v-for="n in num" :class="cTag"><div :class="iTag" v-html="n.id" :key="n.id"></div><invi :class="[n.id, invi]"></invi></div></div>',data:function(){return{num:deck}},components:{invi:invi}}),new _vueMin.default({el:"#holder",data:{statsBox:[{boxId:"wStats"},{boxId:"lStats"},{boxId:"sStats"}]}});