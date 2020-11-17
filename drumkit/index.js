var drumButtons = document.querySelectorAll(".drum");
var numOfDrumButtons = drumButtons.length;

for(var ii = 0; ii<numOfDrumButtons; ii++)
  drumButtons[ii].addEventListener("click", function () {
    alert("I got clicked!");
  });
