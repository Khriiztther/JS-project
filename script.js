let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let targetScore = 5;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");
const resetButton = document.getElementById("reset");
const targetLabelEL = document.getElementById("target-label");
const modeButtons = document.querySelectorAll(".mode-button");



function saveScores() {
    localStorage.setItem("rpsPlayerScore", playerScore);
    localStorage.setItem("rpsComputerScore", computerScore);
    localStorage.setItem("rpsGameOver", gameOver);
    localStorage.setItem("rpsTargetScore", targetScore);
}

function loadScores() {
    const savedPlayer = localStorage.getItem("rpsPlayerScore");
    const savedComputer = localStorage.getItem("rpsComputerScore");
    const savedGameOver = localStorage.getItem("rpsGameOver");
    const savedTargetScore = localStorage.getItem("rpsTargetScore");

    if (savedPlayer !== null) playerScore = Number(savedPlayer);
    if (savedComputer !== null) computerScore = Number(savedComputer);
    if (savedGameOver === "true") gameOver = true;
    if (savedTargetScore !== null) targetScore = Number(savedTargetScore);

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    targetLabelEL.textContent = targetScore;


    modeButtons.forEach(button => {
        const buttonTarget = Number(button.dataset.target);
        if (buttonTarget === targetScore) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    if (gameOver) {
        if (playerScore >= targetScore) {
            resultEl.textContent = "You won the match " + targetScore + " to " +
                computerScore + "!";
        } else {
            resultEl.textContent = "Computer won the match " + targetScore +
                " to " + playerScore + "!";
        }
    } else {
        resultEl.textContent = "First to " + targetScore +
            " wins! - Make your choice!";
    }
}

function setMode(newTarget) {
    targetScore = newTarget;

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    targetLabelEL.textContent = targetScore;
    resultEl.textContent = "First to " + targetScore + "! - Make your choice!";

    modeButtons.forEach(button => {
        const buttonTarget = Number(button.dataset.target);
        if (buttonTarget === targetScore) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    saveScores();
}

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

    saveScores();

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

    if (playerScore >= targetScore) {
        gameOver = true;
        resultEl.textContent = "You won the match " + targetScore
            + " to " + computerScore + "!";
        saveScores();
    } else if (computerScore >= targetScore) {
        gameOver = true;
        resultEl.textContent = "Computer won the match " + targetScore + " to " +
            playerScore + "!";
        saveScores();
    }
}

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    });
});


modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const newTarget = Number(button.dataset.target);
        setMode(newTarget);
        saveScores();
    });
});


resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultEl.textContent = "Make your choice!";
    saveScores();
});

loadScores();
