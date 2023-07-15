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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!"
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins! Paper beats rock"
        }
        if (computerSelection == "scissors") {
            return "Player wins! Rock beats scissors"
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Player wins! Paper beats rock"
        }
        if (computerSelection == "scissors") {
            return "Computer wins! Scissors beats paper"
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Computer wins! Rock beats scissors"
        }
        if (computerSelection == "paper") {
            return "Player wins! Scissors beats paper"
        }
    }

}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;

    while (true) {
        if (playerWinCount == 3) {
            return "Player is victorious!";
        }
        if (computerWinCount == 3) {
            return "Computer is victorious!";
        }
        playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let winner = playRound(playerSelection, getComputerChoice());
        console.log(winner);
        if (winner.charAt(0) == 'C') {
            computerWinCount++;
        }
        if (winner.charAt(0) == 'P') {
            playerWinCount++;
        }
        if (winner.charAt(0) == 'T') {
            continue;
        }
    }
}

console.log(game())