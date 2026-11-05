let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.random();
    const randomIndex = Math.floor(randomNumber * 3);
    return options[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }
    return "computer";
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    if (winner === "player") {
        playerScore = playerScore + 1;
    } else if (winner === "computer") {
        computerScore = computerScore + 1;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (winner === "tie") {
        resultEl.textContent = "It's a Tie!";
    } else if (winner === "player") {
        resultEl.textContent = "Player wins!";
    } else {
        resultEl.textContent = "Computer wins!";
    }

}

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    });
});



const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultEl.textContent = "Make your choice";
});