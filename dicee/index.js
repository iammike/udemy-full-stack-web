var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var image1 = document.querySelector(".img1")
var image2 = document.querySelector(".img2")
var h1Header = document.querySelector("h1")

image1.src = `images/dice${randomNumber1}.png`
image2.src = `images/dice${randomNumber2}.png`

if(randomNumber1 == randomNumber2) {
  h1Header.innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
  h1Header.innerHTML = "🚩Player 1 Wins!"
} else {
  h1Header.innerHTML = "Player 2 Wins! 🚩"
}
