//generates computer random values 0 to <1. 
// Multiplying by 3 generates values <=1, <=2, <3

function computerChoice() {

let computer = Math.random() * 3;

  if (computer <= 1)  {
    return "rock";
  } else if (computer <= 2) {
    return "paper";
  } else {
    return "scissors"
  }
}

//listens for user button selection

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', () => {

  playRound(button.id, computerChoice());

  })

})

// initialise round score variables
let humanScore = 0;
let computerScore = 0;


//initialise DOM elements
const container = document.getElementById('container');
const computer = document.getElementById('computer');
const score = document.getElementById('score');


//single round logic, score feedback, score updater

function playRound(humanChoice, computerChoice) {

//visualise computer choice
computer.textContent = 'Computer Selects: ' + computerChoice;

  if (humanChoice == computerChoice) {
    container.textContent ="No winner!"}

  else if (computerChoice == "rock" && humanChoice == "scissors") {
    container.textContent ="You Lose! Rock beats Scissors.";
    computerScore++

  } else if (computerChoice == "rock" && humanChoice == "paper") {
    container.textContent ="You Win! Paper beats Rock.";
  humanScore++

} else if (computerChoice == "scissors" && humanChoice == "paper") {
    container.textContent ="You Lose! Scissors beat paper.";
    computerScore++
  
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    container.textContent ="You Win! Rock beats Scissors.";
    humanScore++

  } else if (computerChoice == "paper" && humanChoice == "rock") {
    container.textContent ="You Lose! Paper beats Rock.";
    computerScore++
  
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    container.textContent ="You Win! Scissors beat Paper.";
  humanScore++

} else {container.textContent ="invalid input"};

score.textContent = `Computer Score: ${computerScore}
Human Score: ${humanScore}`;

if (humanScore === 5) {
  score.textContent = "You win the game!";
  //resets scores after win
  humanScore = 0;
  computerScore = 0;

  } else if (computerScore === 5){
  score.textContent = "You lose the game!";
  //resets scores after loss
  humanScore = 0;
  computerScore = 0;
  }

}

