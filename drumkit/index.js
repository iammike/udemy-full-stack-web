var drumButtons = document.querySelectorAll(".drum");
var numOfDrumButtons = drumButtons.length;

for (var ii = 0; ii < numOfDrumButtons; ii++)
  drumButtons[ii].addEventListener("click", function() {
    switch (this.innerHTML) {
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3');
        break;
      case 'a':
        var audio = new Audio('sounds/tom-2.mp3')
        break;
      case 's':
        var audio = new Audio('sounds/tom-3.mp3')
        break;
      case 'd':
        var audio = new Audio('sounds/tom-4.mp3')
        break;
      case 'j':
        var audio = new Audio('sounds/snare.mp3')
        break;
      case 'k':
        var audio = new Audio('sounds/kick-bass.mp3')
        break;
      case 'l':
        var audio = new Audio('sounds/crash.mp3')
        break;
      default:
        console.log(this);
        break;
    }
    audio.play();
  });
