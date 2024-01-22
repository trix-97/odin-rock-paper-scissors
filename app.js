function getChoices() {
    playerSelection = prompt("Enter choice: Rock, Paper or Scissors").toLowerCase();
    computerSelection = getComputerChoice();
}

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

function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

function roundWon() {
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nPlayer wins round!, ${playerSelection} beats ${computerSelection}`);
}
function roundLost() {
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nComputer wins round!, ${computerSelection} beats ${playerSelection}`);
}
function roundTie() {
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nRound tie`);
}

let playerSelection;
let computerSelection;
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
