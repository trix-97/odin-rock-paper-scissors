let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');

container.addEventListener('click', () => {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound();
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
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
    checkScore();
}

function roundWon() {
    result.style.color = '#31748f';
    result.textContent = `You won this round!, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
}
function roundLost() {
    result.style.color = `#eb6f92`;
    result.textContent = `Computer won this round!, ${computerSelection} beats ${playerSelection}`;
    computerScore++;
}
function roundTie() {
    result.style.color = '#908caa'
    result.textContent = 'Round ended in a tie';
}

function checkScore() {
    if (playerScore === 5) {
        result.textContent = 'You won the game!';
        restartGame();
    }
    else if (computerScore === 5) {
        result.textContent = 'Computer won the game!';
        restartGame();
    }
}

function restartGame() {
    if (confirm("Do you want to restart the game?")) {
        location.reload();
    } else {
        alert("Thank you for playing!")
    }
}
