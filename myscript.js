function getComputerChoice() {
    let input = Math.floor(Math.random() * 3);
    if (input == 0) {
        return "rock";
    }
    if (input == 1) {
        return "paper";
    }
    if (input == 2) {
        return "scissors";
    }
}

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerWinCount == 5) {
        return "Player is victorious!";
    }

    if (computerWinCount == 5) {
        return "Computer is victorious!";
    }
    if (playerSelection == computerSelection) {
        return "Tie!"
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWinCount++;
            return "Computer wins! Paper beats rock";
        }
        if (computerSelection == "scissors") {
            playerWinCount++;
            return "Player wins! Rock beats scissors";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWinCount++;
            return "Player wins! Paper beats rock";
        }
        if (computerSelection == "scissors") {
            computerWinCount++;
            return "Computer wins! Scissors beats paper";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWinCount++;
            return "Computer wins! Rock beats scissors";
        }
        if (computerSelection == "paper") {
            playerWinCount++;
            return "Player wins! Scissors beats paper";
        }
    }

}

document.getElementById("rock").addEventListener("click", function() {
    let computer = getComputerChoice();
    let result = playRound("rock", computer);
    document.getElementById("result").innerHTML = result;
    document.getElementById("player-score").innerHTML = "Player Score: " + playerWinCount;
    document.getElementById("computer-score").innerHTML = "Computer Score: " + computerWinCount;
});

document.getElementById("paper").addEventListener("click", function() {
    let computer = getComputerChoice();
    let result = playRound("paper", computer);
    document.getElementById("result").innerHTML = result;
    document.getElementById("player-score").innerHTML = "Player Score: " + playerWinCount;
    document.getElementById("computer-score").innerHTML = "Computer Score: " + computerWinCount;
});

document.getElementById("scissors").addEventListener("click", function() {
    let computer = getComputerChoice();
    let result = playRound("scissors", computer);
    document.getElementById("result").innerHTML = result;
    document.getElementById("player-score").innerHTML = "Player Score: " + playerWinCount;
    document.getElementById("computer-score").innerHTML = "Computer Score: " + computerWinCount;
});

document.getElementById("reset").addEventListener("click", function() {
    computerWinCount = 0;
    playerWinCount = 0;
    document.getElementById("player-score").innerHTML = "Player Score: 0";
    document.getElementById("computer-score").innerHTML = "Computer Score: 0";
    document.getElementById("result").innerHTML = "Your move";
});