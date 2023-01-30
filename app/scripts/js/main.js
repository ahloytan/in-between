var v = 4;
var allCards = {"A": [1, v], "2": [2, v], "3": [3, v], "4": [4, v], "5": [5, v], "6": [6, v], "7": [7, v], "8": [8, v], "9": [9, v], "10": [10, v], "J": [11, v], "Q": [12, v], "K": [13, v]};
var zeClone = $.extend(true, {}, allCards) //https://stackoverflow.com/questions/5364650/cloning-an-object-in-javascript
var totalCards = 52;
var fCard;
var lCard;
var fCardVal;

$(document).ready(function() {
  var minLimit = parseInt(prompt("Minimum difference between 2 cards to play?"));

  while (!(Number.isInteger(minLimit))) {
    minLimit = parseInt(prompt("Minimum difference between 2 cards to play?"));
  } //Keep asking user to input proper integer

  $('.c1, .c2, .c3').click(function(){
    var curVal = $(this).text();
    var curValCard = allCards[curVal];

    curValCard[1] -= 1;
    totalCards -= 1;

    if (!curValCard[1]) {
      $('.' + curVal + '.invi').css('display','block');
    }

    if (!totalCards) {
      console.log("empty");
      allCards = $.extend(true, {}, zeClone);
      $('#card1Box').css('display','block');
      $('#card2Box, .invi').css('display','none');
      $('#card3Box').css('visibility','hidden');
      $("#lStats, #wStats, #sStats").text('');
      totalCards = 52;
    }

    $('#oStats').text('');
    $.each(allCards, function( key, value ) {
      $('#oStats').append('[' + key + ': ' + value[1] + '] ');
    }); //Stats to show number of cards left for each unique card
    
  }) //end of either of 3 cards clicked

  //card 1
  $(".c1").click(function() {
    fCardVal = $(this).text();
    fCard = allCards[fCardVal];
    $('#card1Box, #card2Box').toggle();

  }); //end of card 1

  //card 2
  $(".c2").click(function() {
    var winCards = 0;
    var sameCards = 0;

    var lCardVal = $(this).text();

    lCard = allCards[lCardVal];

    if (fCard[0] > lCard[0]) {
      fCard = allCards[lCardVal];
      lCard = allCards[fCardVal];
    }  //Validate if first card is bigger than 2nd to allow dynamic input

    var posFCard = fCard[0];
    var posLCard = lCard[0];

    var noOfCards = posLCard - posFCard - 1;

    if (noOfCards >= minLimit) {
      $('#c2Invi').toggle();
      $('#card3Box').css('visibility','visible');

      $.each(allCards, function(key, value) {
        if (value[0] == posFCard || value[0] == posLCard) { //Only sum up same cards
          sameCards += value[1];
        } else if (value[0] > posFCard && value[0] < posLCard) {
          winCards += value[1];
        } //Only sum up winnable cards in range

      }); //Loop through whole JSON

      var winChance = (winCards / (totalCards)) * 100;
      var sameChance = (sameCards / (totalCards)) * 100;
      var loseChance = 100 - winChance;

      $("#wStats").text("Win: " + winChance.toFixed(1) + "% ");
      $("#lStats").text("| Lose: " + loseChance.toFixed(1) + "% | ");
      $("#sStats").text("Same: " + sameChance.toFixed(1) + "%");

    } else {

      $("#sStats").text("Cannot play");
      $("#lStats, #wStats").text('');
      //If no. of cards less than specified, reset
      $('#card1Box').css('display','block');
      $('#card2Box').css('display','none');
    } //End of if-else

  }); //End of 2nd card

  //card 3
  $(".c3").click(function() {
    $('#card3Box').css('visibility','hidden');
    $('#card1Box, #card2Box, #c2Invi').toggle();
  }); //end of card 3

}) //End of document ready
//https://stackoverflow.com/questions/45643974/make-input-accept-one-letter-with-regex-and-jquery
//https://stackoverflow.com/questions/10539113/focusing-on-next-input-jquery
