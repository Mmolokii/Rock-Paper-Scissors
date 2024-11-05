let playerScore = 0; 
let computerScore = 0; 
let roundWinner = '';

function playRound(playerChoice, computerChoice){
  if(playerChoice === computerChoice){
    roundWinner = 'tie'
  }

  if(
    (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') 
  ){
    playerScore++
    roundWinner = 'player'
  }

  if(
    (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
    (computerChoice === 'PAPER' && playerChoice === 'ROCK') ||
    (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') 
  ){
    computerChoice++
    roundWinner = 'computer'
  }
  // add an update score section

}