  $(document).ready(function () {
    
    // Variables
    var totalScore = 0;

    $(".gem").on("mouseover", function () {
        $(this).css("border","10px solid lightgreen");
    });

    $(".gem").on("click", function () {

    //   if (opCheck) { // if an operate entered and we have a first number
    //     secondNum += $(this).val();
    //     $("#second-number").html(secondNum);
    //     secondNumCheck = true;
    //   } else {
    //     firstNum += $(this).val();
    //     $("#first-number").html(firstNum);
    //     firstNumCheck = true;
    //   }
    totalScore = totalScore + parseInt($(this).attr("value"));
    console.log("Gem value = " + $(this).attr("value"));
    console.log("Total Score = " + totalScore);
    $("#totalScore").html(totalScore);
    });


  });

