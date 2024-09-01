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

console.log(getComputerChoice());
console.log(getHumanChoice()); 