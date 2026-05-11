console.log("Hello, World!");

// getComputerChoice
// create variable computer-choice
// assign value to varaible computer-choice
// return the value

 let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
 } 

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

// Adding playGames function to call playRound over and over
function playGames() {

    // Make playRound function
    function playRound(humanChoice, computerChoice) {
        let human = humanChoice.toUpperCase();
        let computer = computerChoice;

        if (human === "ROCK" && computer === "PAPER") {
            console.log("You lose! Paper beats Rock");
            ++computerScore;
        } else if (human === "PAPER" && computer === "SCISSOR") {
            console.log("You lose! Scissor beats Paper");
            ++computerScore;
        } else if (human === "SCISSOR" && computer === "ROCK") {
            console.log("You lose! Rock beats Scissor");
            ++computerScore;
        } else if (human === "PAPER" && computer === "ROCK") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } else if (human === "SCISSOR" && computer === "PAPER") {
            console.log("You win! Scissor beats Paper");
            ++humanScore;
        } else if (human === "ROCK" && computer === "SCISSOR") {
            console.log("You win! Rock beats Scissor");
            ++humanScore;
        } else {
            console.log("You draw!");
        }
    }

    // Create const for choice value container
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Activating function playRound
    playRound(humanSelection,computerSelection);
    playRound(humanSelection,computerSelection);
    playRound(humanSelection,computerSelection);
    playRound(humanSelection,computerSelection);
    playRound(humanSelection,computerSelection);

}