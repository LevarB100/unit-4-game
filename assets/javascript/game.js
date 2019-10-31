$(document).ready(function() {
  var targetNumber;
  var num1;
  var num2;
  var num3;
  var num4;
  var userscore = 0;
  var wins = 0;
  var losses = 0;

  function reset() {
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    targetNumber = Math.floor(Math.random() * 103 + 19);
    userscore = 0;
    $("#user-score").text(userscore);
    $("#target-score").text(targetNumber);
  }

  function game() {
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    targetNumber = Math.floor(Math.random() * 103 + 19);
    $("#target-score").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#user-score").text(userscore);
  }
  function play() {
    if (userscore === targetNumber) {
      alert("You Win!");
      reset();
      wins++;
      $("#wins").text(wins);
    } else if (userscore > targetNumber) {
      alert("You lose!");
      reset();
      losses++;
      $("#losses").text(losses);
    }
  }

  // Run Game (main)
  // something like...
  // var array = ["#blue","#green","#red","#yellow"]
  // for (var i =0; i < array.length;i++) {
  // }

  game();

  $("#blue").on("click", function() {
    userscore = userscore + num1;
    $("#user-score").text(userscore);
    console.log(userscore);
    play();
  });

  $("#green").on("click", function() {
    userscore = userscore + num2;
    $("#user-score").text(userscore);
    console.log(userscore);
    play();
  });

  $("#red").on("click", function() {
    userscore = userscore + num3;
    $("#user-score").text(userscore);
    console.log(userscore);
    play();
  });

  $("#pink").on("click", function() {
    userscore = userscore + num4;
    $("#user-score").text(userscore);
    console.log(userscore);
    play();
  });
});
