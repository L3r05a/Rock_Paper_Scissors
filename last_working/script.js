//generates computer random values 0 to <1. Multiplying to 3 obtains values <=1, <=2, <3
function getComputerChoice() {
let computer = Math.random() * 3;
  if (computer <= 1)  {
    return "rock";
  } else if (computer <= 2) {
    return "paper";
  } else {
    return "scissors"
  }
}


//prompts and returns user input
function getHumanChoice() {
 let human = prompt ("rock, paper, scissors?");
 return human.toLowerCase()
}


//resets players score variables to 0
let humanScore = 0;
let computerScore = 0;


//single round logic, feedback, score updater
function playRound(humanChoice, computerChoice) {


    if (humanChoice == computerChoice) {
    console.log("No winner!")}

    else if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("You Lose! Rock beats Scissors.");
      computerScore++

    } else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("You Win! Paper beats Rock.");
    humanScore++
  
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("You Lose! Scissors beat paper.");
      computerScore++
    
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("You Win! Rock beats Scissors.")
      humanScore++

    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("You Lose! Paper beats Rock.")
      computerScore++
    
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("You Win! Scissors beat Paper.")
    humanScore++

  } else {console.log("invalid input")};
     
  }

//assigns selections to variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);


// uses the above variables as arguements for the playRound function
playRound(humanSelection, computerSelection);

     




