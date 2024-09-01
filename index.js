console.log("Hello world");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice; 
}

function getHumanChoice(){
  let validInput = false; 

  while(validInput == false){
    const userChoice = prompt("Select Rock, Paper or Scissors!");
    
    if(userChoice == null){
      continue; 
    }

    const userChoiceLower = userChoice.toLowerCase(); 
    if(options.includes(userChoiceLower) == true){
      validInput = true; 
      return userChoiceLower; 
    }
  }
}

// const humanSelection = getHumanChoice(); 
// const computerSelection = getComputerChoice(); 

function checkWinner(humanSelection, computerSelection){
  if(humanSelection ==  computerSelection){
    return "Tie"; 
  } else if((humanSelection == "rock" && computerSelection == "scissors") || 
  (humanSelection== "paper" && computerSelection == "rock") ||
  (humanSelection == "scissors" && computerSelection == "paper")){
    return "Player";
  } else {
    return "Computer";
  }
}

// function playRound(humanSelection, computerSelection){
//   const result = checkWinner(humanSelection, computerSelection);

//   if(result == "tie"){
//     return "It's a Tie!";
//   } else if(result == "Player"){
//     return `You Win! ${humanSelection} beats ${computerSelection}`;
//   } else {
//     return `You Lost! ${computerSelection} beats ${humanSelection}`;
//   }
// }

function game(){
  let humanScore = 0; 
  let computerScore = 0;

  for(let i = 0; i < 5; i++){
    const playerSelection = getHumanChoice(); 
    const computerSelection = getComputerChoice(); 

    if(checkWinner(playerSelection, computerSelection) == "Player"){
      humanScore++; 
    } else if(checkWinner(playerSelection, computerSelection) == "computer"){
      computerScore++; 
    }
  }

  if(humanScore > computerScore){
    console.log("You Won The Game!"); 
  } else if(humanScore < computerScore){
    console.log("You Lost The Game!"); 
  } else {
    console.log("The Game was Tied!"); 
  }
}

game(); 
