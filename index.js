function diceRoll() {
  // player1
var player1 = (Math.floor(Math.random()*6)+1);

document.querySelector("img.img1").setAttribute("src", "./images/dice" + player1 + ".png");

// player2
var player2 = (Math.floor(Math.random()*6)+1);

document.querySelector("img.img2").setAttribute("src", "./images/dice" + player2 + ".png");

// ---

  if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 Win!"
  } else if (player2 > player1) {
    document.querySelector("h1").textContent = "Player 2 Win!"
  } else {
    document.querySelector("h1").textContent = "Draw :("
  }
  
}

diceRoll();