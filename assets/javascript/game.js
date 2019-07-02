$(document).ready(function() {
  // Variables
  var totalScore = 0;
  var randomNum = 0;
  var totalWins = 0;
  var totalLosses = 0;

  //   Functions
  function initGame() {
    // initialize game board and variables
    totalScore = 0;
    randomNum = 0;
    randomNum = pickNum(19,120);
    randomizeGems(1,12);
    $("#randomNum").html("<h4>MAGIC#:</h4>" + randomNum);
    $("#totalScore").html("<h4>Total Score:</h4>" + totalScore);
  }

  function pickNum(min, max) {
    // * The random number shown at the start of the game should be between 19 - 120.
    // return Math.floor(Math.random() * 120) + 19;
    // var min = 19;
    // var max = 120;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomizeGems(min, max) {
    // Each crystal should have a random hidden value between 1 - 12.
    for (x=1 ; x < 5; x++) {
      var gemVal = Math.floor(Math.random() * (max - min + 1)) + min
      $("#gem-" + x).attr("value",gemVal);
    }
  }

  function checkWinner(tNum, rNum) {
    if (tNum === rNum) {
      alert("You won!");
      totalWins++;
      $("#totalWins").html(totalWins);
      initGame();
    } else if (tNum > rNum) {
      alert("Sorry, you lossed.");
      totalLosses++;
      $("#totalLosses").html(totalLosses);
      initGame();
    }
  }

  // Main logic
  initGame();
  $(".gem").on("hover", function() {
    $(this).css("border", "2px solid #627594");
  });

  $("#help").click(function(){
    $("#instructions").toggle();
  });

  $(".gem").on("mouseout", function() {
    $(this).css("border", "0px none none");
  });

  $(".gem").on("click", function() {
    totalScore = totalScore + parseInt($(this).attr("value"));
    console.log("Gem value = " + $(this).attr("value"));
    // console.log("Total Score = " + totalScore);
    $("#totalScore").html("<h4>Total Score:</h4>" + totalScore);
    checkWinner(totalScore, randomNum);
  });
});
