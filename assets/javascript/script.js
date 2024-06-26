///javascript for button elements and modal.
document.getElementById("gameRules").addEventListener("click", function () {
    document.getElementById("rulesModal").style.display = "block";
});
/// this will close the rules modal if it's clicked.
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("rulesModal").style.display = "none";
});
/// this will close the modal if anywhere in the window is clicked.
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("rulesModal")) {
        document.getElementById("rulesModal").style.display = "none";
    }

});

document.getElementById("gameSummary").addEventListener("click", function(){
    document.getElementById("summaryModal").style.display = "block";
})

document.querySelector(".closeSummary-modal").addEventListener("click", function(){
    document.getElementById("summaryModal").style.display = "none";
})

window.addEventListener("click", function(event){
    if (event.target == document.getElementById("summaryModal")) {
        document.getElementById("summaryModal").style.display = "none";
    }
})

/// game javascript
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
const hiddenChoices = document.getElementById("choices");
const summary = document.getElementById("gameSummary");
const winVideo = document.getElementById("winVideo");
const loseVideo = document.getElementById("loseVideo");


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
                result = (computerChoice === "scissors") ? "You have won this round!" : "You have lost this round!";
                if (computerChoice === "scissors") { /// if player wins the scoreboard increases by 1 in players favour.
                    playerScore++;
                    playerScore_span.textContent = playerScore;
                } else { /// else if the player doesn't win the computer score increases by increment of 1.
                    computerScore++;
                    computerScore_span.textContent = computerScore;
                }
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You have won this round!" : "You have lost this round!";
                if (computerChoice === "rock") {
                    playerScore++;
                    playerScore_span.textContent = playerScore;
                } else {
                    computerScore++;
                    computerScore_span.textContent = computerScore;
                }
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You have won this round!" : "You have lost this round!";
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
            winVideo.style.display = "block";
            /// Audio will be played if the player wins (happy audio)
        } else if (computerScore > playerScore) {
            finalDisplay.textContent = "You have lost this match of Rock, Paper, Scissors... Don't feel down and dont accept defeat try again!";
            loseVideo.style.display = "block";
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
            summary.style.display = "block";
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
    summary.style.display = "none";
    winVideo.style.display = "none";
    winVideo.muted = true /// This ensures that the video is muted otherwise the audio is played despite if you reset it.
    loseVideo.style.display = "none";
    loseVideo.muted = true

    window.scrollTo({ top: 0, behavior: 'smooth' }); /// This fixes the issue of the game not scrolling back up when you scroll down to click on the reset button.
    /// This is mainly used just to give the mobile site better UX as it stayed on the bottom when you clicked reset.
}









