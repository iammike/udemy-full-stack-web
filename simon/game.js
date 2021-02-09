var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColor;
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var gameEnded = false;

$(".btn").on("click", function() {
  if((gameStarted) && !gameEnded) {
    var color = $(this).attr('id');
    $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
    animatePress(color);
    userClickedPattern.push(color);
    checkAnswer(userClickedPattern.length-1);
  }
});

$(document).keypress(function() {
  if((level == 0) || gameEnded) {
    $("body").removeClass("game-over");
    nextSequence();
    $("h1").text("Level " + level);
    gameStarted = true;
    gameEnded = false;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * Math.floor(4));
  var randomChosenColor = buttonColors[randomNumber];
  userClickedPattern = [];

  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  level++;
  $("h1").text("Level " + level)
}

function playSound(filePrefix) {
  var audio = new Audio(`sounds/${filePrefix}.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function(){ $(`#${currentColor}`).removeClass("pressed"); }, 50);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    endGame();
  }
}

function endGame() {
  $("h1").text("GAME OVER! You reached level " + level + "!\nPress a key to restart!");
  $("body").addClass("game-over");
  gameEnded = true;
  gameStarted = false;
  level = 0;
  gamePattern = [];
}
