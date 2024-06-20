/// JavaScript for the rps game. 

const playerScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const choices = [ "rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

/// Game Logic
function playGame(playerChoice) {
    const computerChoice = choices [Math.floor(Math.random() * 3)]; /// creating the bot to choose between the values rock, paper, scissors.
    console.log(computerChoice);
let result = "";
    if (playerChoice === computerChoice) {
        result = "It is a draw you have both selected...";
    } else {
            switch(playerChoice){
                case "rock":
                    (computerChoice === "scissors") ? "You have won!" : "You have lost!";
                    break;
                    case "paper":
                result = (computerChoice === "rock") ? "You have won!" : "You have lost!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You have won!" : "You have lost!";
                break;
                
            }
        }

        playerDisplay.textContent = `USER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = result;
    }

