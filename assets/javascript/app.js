/// JavaScript for the rps game. 



const choices = [ "rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

function playGame(playerChoice) {
    const computerChoice = choices [Math.floor(Math.random() * 3)];

    console.log(computerChoice)

}