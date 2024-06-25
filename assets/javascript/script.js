
///javascript
document.getElementById("gameRules").addEventListener("click",function() {
document.getElementById("rulesModal").style.display = "block";
});

let playerScore = 0;
let computerScore = 0;
let numOfGames = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const finalDisplay = document.getElementById("finalDisplay");
const gameoverDisplay = document.getElementById("gameOver"); /// Will be called upon at the end of the numOfGames (10)
const resetgameButton = document.getElementById("reset");
const hiddenChoices = document.getElementById("choices")

/// Game Logic
function playGame(playerChoice) {
    if (numOfGames >= 10) { /// placeholder comment setting the number of games in the rps if it reaches 10 the game will stop.
        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * 3)]; /// creating the bot to choose between the values rock, paper, scissors.
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
    numOfGames++ // To make sure the game ends at 10 choices.
    playerDisplay.textContent = `USER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    /// This if statement will close the game after 10 tries determining the winner.
    if (numOfGames === 10) {
        if (playerScore > computerScore) {
            finalDisplay.textContent = "You have won this match of Rock, Paper, Scissors! Humbly take your victory.";
           /// Audio will be played if the player wins (happy audio)
        } else if (computerScore > playerScore) {
            finalDisplay.textContent = "You have lost this match of Rock, Paper, Scissors... Don't feel down and dont accept defeat try again!";
            /// Audio will be played if the computer wins (sad audio)
        } else {
            finalDisplay.textContent = "It's a draw. You and the computer have fought well and nothing can seperate you two... perhaps another game might?";
        }
          /// An audio will be added like stalemate from chess
        if (numOfGames === 10) {
            gameoverDisplay.textContent = "Game Over!";
            gameoverDisplay.style.display = "block";
            resetgameButton.style.display = "block";
            finalDisplay.style.display = "block";
            hiddenChoices.style.display = "none"
            
        }
    }
}
/// This function to reset the game after gameOver is called for the button.

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    numOfGames = 0;
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
    resultDisplay.textContent = "";
    finalDisplay.textContent = "";
    gameoverDisplay.textContent = "";
    resetgameButton.style.display = "none";
    hiddenChoices.style.display = "block";
    finalDisplay.style.display = "none";
    gameoverDisplay.style.display = "none";
}

