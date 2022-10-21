// FOR FIRST DICE==>
// For random number to be generated..................
let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

// For random dice image
let randomDiceImage = "dice" + randomNumber1 + ".png";

// for the image source
let randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// FOR SECOND DICE ===>(Just watch for the short terms in which code is written)

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1️⃣ Wins"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2️⃣ Wins"
} else {
    document.querySelector("h1").innerHTML = "Draw🎉"
}















