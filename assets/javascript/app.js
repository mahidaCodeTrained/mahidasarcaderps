
let playerScore = 0;
let computerScore = 0;
let numOfGames = 0
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")

/// Game Logic
function playGame(playerChoice) {
    if (numOfGames >= 10) { /// placeholder comment setting the number of games in the rps if it reaches 10 the game will stop.
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)]; /// creating the bot to choose between the values rock, paper, scissors.
    console.log(computerChoice);
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It is a draw you have both selected...";
    } else {
        switch (playerChoice) { /// If/else statement showcasing what happens if player chooses an option against the computer.
            case "rock":
                result = (computerChoice === "scissors") ? "You have won!" : "You have lost!";
                if (computerChoice === "scissors") { /// if player wins the scoreboard increases by 1 in players favour.
                    playerScore++;
                    playerScore_span.textContent = playerScore;
                } else { /// else if the player doesn't win the computer score increases by increment of 1.
                    computerScore++;
                    computerScore_span.textContent = computerScore;
                }
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You have won!" : "You have lost!";
                if (computerChoice === "rock") {
                    playerScore++;
                    playerScore_span.textContent = playerScore;
                } else {
                    computerScore++;
                    computerScore_span.textContent = computerScore;
                }
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You have won!" : "You have lost!";
                if (computerChoice === "paper") {
                    playerScore++;
                    playerScore_span.textContent = playerScore;
                } else {
                    computerScore++;
                    computerScore_span.textContent = computerScore;
                }
            break;
        }
    }

    playerDisplay.textContent = `USER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}









