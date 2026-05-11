console.log("Hello, World!");

// getComputerChoice
// create variable computer-choice
// assign value to varaible computer-choice
// return the value

 let getComputerChoice = () => Math.random();

// make getHumanChoice function
// create variable
// assign the value
// return the value

 let getHumanChoice = (input) => prompt("Choose your Rock, Paper, Scissor",input);

// Create new variable get humanScore
// Initialize value with 0
let humanScore = 0;

// Create new variable get computerScore
// Initialize value with 0
let computerScore = 0;

// Make playRound function
function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toUpperCase();
    let computer = computerChoice;

    if (human === "ROCK" && computer === "PAPER") {
        console.log("You lose! Paper beats Rock");
    } else if (human === "PAPER" && computer === "SCISSOR") {
        console.log("You lose! Scissor beats Paper");
    } else if (human === "SCISSOR" && computer === "ROCK") {
        console.log("You lose! Rock beats Scissor");
    } else if (human === "PAPER" && computer === "ROCK") {
        console.log("You win! Paper beats Rock");
    } else if (human === "SCISSOR" && computer === "PAPER") {
        console.log("You win! Scissor beats Paper");
    } else if (human === "ROCK" && computer === "SCISSOR") {
        console.log("You win! Rock beats Scissor");
    } else {
        console.log("You draw!");
    }
}

// Create const for choice value container
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Activating function playRound
playRound(humanSelection,computerSelection);