// to run the javascript code after refresh
if (sessionStorage.getItem("is_reloaded")) diceRoll();
sessionStorage.setItem("is_reloaded", true);

function diceRoll() {
    // first image
    var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
    var image = document.querySelector('.img1');
    image.setAttribute("src", randomNumber1);
    // second image
    var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
    var image = document.querySelector('.img2');
    image.setAttribute("src", randomNumber2);

    result(randomNumber1, randomNumber2);
}

function result(firstDice, secondDice) {
    var heading = document.querySelector('h1');
    if (firstDice === secondDice) {
        heading.innerHTML = "DRAW"
    }
    else if (firstDice > secondDice) {
        heading.innerHTML = "Player 1 Wins 🚩"
    }
    else {
        heading.innerHTML = "Player 2 Wins 🚩";
    }
}