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

function getComputerChoice(){
  let randomNumber = Math.floor((Math.random() * 3) +1) 
  switch(randomNumber){
    case 1: 
      return 'ROCK'
    case 2: 
      return 'PAPER'
    case 3: 
      return 'SCISSORS '
  }
}