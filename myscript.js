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
    computerSelection = getComputerChoice();
    // playerSelection = prompt("Rock, paper, or scissors?");

    // playerSelection = playerSelection.toLowerCase();
    
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
        if (computerSelection == paper) {
            return "Player wins! Scissors beats paper"
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));