function getChoices() {
    playerSelection = prompt("Enter choice: Rock, Paper or Scissors").toLowerCase();
    computerSelection = getComputerChoice();
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound() {
    getChoices();
    if (playerSelection === computerSelection) {
        roundTie();
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
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    checkFinalScore();
}

function roundWon() {
    playerScore += 1;
    computerScore += 0;
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nPlayer wins round!, ${playerSelection} beats ${computerSelection}\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
}
function roundLost() {
    playerScore += 0;
    computerScore += 1;
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nComputer wins round!, ${computerSelection} beats ${playerSelection}\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
}
function roundTie() {
    alert(`Player selected: ${playerSelection} Computer selected: ${computerSelection}\nRound tie\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
}

function checkFinalScore() {
    if (playerScore === computerScore) {
        alert("Game tied!")
    }
    else if (playerScore > computerScore) {
        alert("Player wins the game!")
    } else {
        alert("Computer wins the game!")
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
