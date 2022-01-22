//https://vuejs.org/v2/guide/components-props.html
//.js file always camcel case

Vue.component('stats-box', {
  props:['name'],
  template: '<div class="stats" :id="name"></div>'
})

//The name in 'props' must match the one in the 'template' to ensure matching reference
var invi = Vue.component('invi', {
  props: ['cName', 'invi'],
  template: '<div :class="[cName, invi]"></div>'
})

var deck = [
  {id: 'A'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
  {id: '10'},
  {id: 'J'},
  {id: 'Q'},
  {id: 'K'},
]

Vue.component('card', {
  props:['cTag','iTag','invi'],
  template: '<div class="cardHolder"><div v-for="n in num" :class="cTag"><div :class="iTag" v-html="n.id" :key="n.id"></div><invi :class="[n.id, invi]"></invi></div></div>',
  data: function() {
    return {
      num: deck
    }
  },
  components: {
    invi: invi
  }
})

new Vue({
  el: '#holder',
  data: {
    statsBox: [
      {boxId: 'wStats'},
      {boxId: 'lStats'},
      {boxId: 'sStats'}
    ]
  }
})
