let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.random();
    const randomIndex = Math.floor(randomNumber * 3);
    return options[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }
    if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
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

    const choicesText = `You: ${playerChoice} - Computer: ${computerChoice}`;
    let outcomeText;
    if (winner === "tie") {
        outcomeText = "It's a Tie!";
    } else if (winner === "player") {
        outcomeText = "You win!";
    } else {
        outcomeText = "Computer wins!"
    }

    resultEl.textContent = choicesText + " - " + outcomeText;
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
    resultEl.textContent = "Make your choice!";
});