let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

let container = document.querySelector('.container');
let buttons = document.querySelectorAll('button');
let result = document.querySelector('.result');

container.addEventListener('click', () => {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound();
})

function getPlayerChoice() {
    return event.target.textContent.toLowerCase();
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound() {
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
    checkRoundScore();
}

function roundWon() {
    result.textContent = `You won this round!, ${playerSelection} beats ${computerSelection}`;
    return playerScore + 1;
}
function roundLost() {
    result.textContent = `Computer won this round!, ${computerSelection} beats ${playerSelection}`;
    return computerScore + 1;
}
function roundTie() {
    result.textContent = 'Round ended in a tie';
}

function checkRoundScore() {
    if (playerScore === 3) {
        alert(`Player wins the game!\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
        restartGame();
    }
    else if (computerScore === 3) {
        alert(`Computer wins the game!\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
        restartGame();
    }
}

function checkFinalScore() {
    if (playerScore === computerScore) {
        alert(`Game ended in a tie!\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
    }
    else if (playerScore > computerScore) {
        alert(`Player wins the game!\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
    } else {
        alert(`Computer wins the game!\nPlayer score: ${playerScore} Computer Score: ${computerScore}`);
    }
    restartGame();
}

function restartGame() {
    if (confirm("Do you want to restart the game?")) {
        location.reload();
    } else {
        alert("Thank you for playing!")
    }
}
