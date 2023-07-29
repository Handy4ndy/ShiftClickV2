const resbox = document.getElementById("results");

document.getElementById("rock").addEventListener("click", function () {
    playGame("r");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("p");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("s");
});

function playGame(player) {

    // Clears previous results
    resbox.innerHTML = ""; 

    // Players selection message
    if (player == "r") {
        resbox.innerHTML += "You have chosen Rock\n";
    } else if (player == "p") {
        resbox.innerHTML += "You have chosen Paper\n";
    } else {
        resbox.innerHTML += "You have chosen Scissors\n";
    }

    // setting random integer for computers generated choice
    let random = Math.floor(Math.random() * 3) + 1;
    let computer = "";

    // Computer selection message
    if (random == 1) {
        resbox.innerHTML += "Computer has chosen Rock\n";
        computer = "r";
    } else if (random == 2) {
        resbox.innerHTML += "Computer has chosen Paper\n";
        computer = "p";
    } else {
        resbox.innerHTML += "Computer has chosen Scissors\n";
        computer = "s";
    }

    if (player == computer) {
        resbox.innerHTML += "It's a Draw, Try again...\n";
    } else if ((player == "r" && computer == "s") ||
        (player == "p" && computer == "r") ||
        (player == "s" && computer == "p")) {
        resbox.innerHTML += "You Win :)\n";
    } else {
        resbox.innerHTML += "You Lose :(\n";
    }
}
