console.log("Js is working");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.random();
    const randomIndex = Math.floor(randomNumber * 3);
    return options[randomIndex];
}

