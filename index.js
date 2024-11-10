let playerScore = 0; 
let computerScore = 0; 
let roundWinner = '';

function playRound(playerChoice){

    const computerChoice = getComputerChoice();
    let result = ''; 

  if(playerChoice === computerChoice){
    result = "It's a tie!"; 
  } else if (
    (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') 
  ){
    playerScore++
    result = `You win! ${playerSelection} beats ${computerSelection}`; 
  } else {
    computerChoice++
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  // add an update score section
}

function getComputerChoice(){
  let randomNumber = Math.floor((Math.random() * 3) +1) 
  switch(randomNumber){
    case 1: 
      return 'ROCK';
    case 2: 
      return 'PAPER';
    case 3: 
      return 'SCISSORS'; 
  }
}

function updateScore(){
  document.getElementById("score").textConent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function isGameOver(){
  return playerScore === 5 || playerScore === 5
}



const btnRock = document.querySelector('#rockBtn'); 
const btnPaper = document.querySelector('#paperBtn')
const btnScissors = document.querySelector('#scissorsBtn')