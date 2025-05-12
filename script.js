
//generates random values 0 to <1. By multiplying to 3 obtains values <=1, <=2, <3

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
return human
}


//create players score variables
let humanScore = 0;
let computerScore = 0;

//logic for single round
function playRound (humanChoice, computerChoice) {
    //getComputerChoice and assign it to variable
    //getHumanChoice and assign it to variable
      

}

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();

playRound(humanSelection, computerSelection);


