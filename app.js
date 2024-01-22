function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Round Tie");
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundLost();
        }
        else if (computerSelection === "scissors") {
            roundWon();
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundWon();
        }
        else if (computerSelection === "scissors") {
            roundLost();
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundLost();
        }
        else if (computerSelection === "paper") {
            roundWon();
        }
    }
}

function roundWon() {
    alert(`Player wins round!, ${playerSelection} beats ${computerSelection}`);
}
function roundLost() {
    alert(`Computer wins round!, ${computerSelection} beats ${playerSelection}`);
}

const playerSelection = prompt("Enter choice: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
