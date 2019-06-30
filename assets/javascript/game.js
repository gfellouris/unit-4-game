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
    randomNum = pickNum();
    $("#randomNum").html(randomNum);
    $("#totalScore").html("0");
  }

  function pickNum() {
    // * The random number shown at the start of the game should be between 19 - 120.
    return Math.floor(Math.random() * 120) + 19;
  }

  // Main logic
  initGame();
  $(".gem").on("mouseover", function() {
    $(this).css("border", "10px solid lightgreen");
  });

  $(".gem").on("mouseout", function() {
    $(this).css("border", "0px none none");
  });

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

  $(".gem").on("click", function() {
    totalScore = totalScore + parseInt($(this).attr("value"));
    console.log("Gem value = " + $(this).attr("value"));
    console.log("Total Score = " + totalScore);
    $("#totalScore").html(totalScore);
    checkWinner(totalScore, randomNum);
  });
});
