let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");

function getButtonByChoice(choice) {
    return document.querySelector(`button[data-choice="${choice}"`);
}

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
    if (gameOver) return;
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

    if (winner !== "tie") {
        const playerButton = getButtonByChoice(playerChoice);
        const computerButton = getButtonByChoice(computerChoice);

        if (winner === "player") {
            playerButton.classList.add("win");
            computerButton.classList.add("lose");
        } else {
            playerButton.classList.add("lose");
            computerButton.classList.add("win");
        }

        setTimeout(() => {
            playerButton.classList.remove("win", "lose");
            computerButton.classList.remove("win", "lose");
        }, 200);
    }

    if (playerScore >= 5) {
        gameOver = true;
        resultEl.textContent = "You won the match 5 to " + computerScore + "!";
    } else if (computerScore >= 5) {
        gameOver = true;
        resultEl.textContent = "Computer won the match 5 to " +
            playerScore + "!";
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
    gameOver = false;
    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultEl.textContent = "Make your choice!";
});