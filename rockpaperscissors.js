function play(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! Computer chose " + computerChoice + ".";
    } else {
        result = "You lose! Computer chose " + computerChoice + ".";
    }

    document.getElementById("result").innerHTML = result;
}