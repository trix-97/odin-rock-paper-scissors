function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return console.log(Math.round(Math.random() * choices.length));
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Round Tie");
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            alert(`Computer wins round!, ${computerSelection} beats ${playerSelection}`);
        }
        else if (computerSelection === "scissors") {
            alert(`Player wins round!, ${playRound} beats ${computerSelection}`);
        }
    }
}

const playerSelection = prompt("Enter choice: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
