// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // Update the round result
    document.getElementById("roundResult").textContent = result;
    updateScore();
}

// Function to update the score display
function updateScore() {
    document.getElementById("score").textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    // Check if there's a winner
    if (playerScore === 5) {
        document.getElementById("winner").textContent = "You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById("winner").textContent = "The computer won the game!";
        disableButtons();
    }
}

// Function to disable buttons once game is won
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function restartGame(){
  playerScore = 0; 
  computerScore = 0; 
  document.getElementById("score").textContent = "Player: 0 - Computer: 0";
  document.getElementById("roundResult").textContent = "";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

// Event listeners for the buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
document.getElementById("restart").addEventListener("click", restartGame); 
