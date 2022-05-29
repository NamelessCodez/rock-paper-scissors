// make program to select random of the three possiblities
function computerPlay() {
    const outcomeList = ["rock", "paper", "scissors"];
    const randomIndexNumber = Math.floor(Math.random() * 3);
    return outcomeList[randomIndexNumber]; 
}



// make function to take the moves and declare the winner
    // return result in a formatted string
function playRound(playerSelection, computerSelection) {

// convert selections to lowercase to compare them

    const playerLowerCase = playerSelection.toLowerCase();
    const computerLowerCase = computerSelection.toLowerCase();

// compare moves and return answer
    if (playerLowerCase == "rock") {
        if (computerLowerCase == "rock") {
            return "Tie!";
        }
        else if (computerLowerCase == "paper") {
            return "You lose! Paper beats Rock";
        }
        return "You win! Rock beats Scissors";
    }
    else if (playerLowerCase == "paper") {
        if (computerLowerCase == "rock") {
            return "You win! Paper beats Rock";
        } 
        else if (computerLowerCase == "paper") {
            return "Tie!";
        }
        return "You lose! Scissors beat Papper";
    }
    else {
        if (computerLowerCase == "rock") {
            return "You lose! Rock beats Scissors";
        }
        else if (computerLowerCase == "paper") {
            return "You win! Scissors beat Papper";
        }
        return "Tie!";
    }
}

// create function to loop over 5 games and print the result

function game(playerSelection) {

//    for (let i = 0; i < 5; i++) {

        // prompt user for input
//        const playerSelection = getPlayerSelection();
        // generate computer move
    const computerSelection = computerPlay();
        

        // print winner or loser of the round
    result.textContent = playRound(playerSelection, computerPlay());

        // give scores

    if (playRound(playerSelection, computerSelection).includes("win")) {
        playerScore++;
    }
    if (playRound(playerSelection, computerSelection).includes("lose")) {
        computerScore++;
    }
//    }
    // print winner or loser of the game
    scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    if (playerScore === 5) {
        result.textContent = "Player won the game!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        result.textContent = "Computer won the game!";
        playerScore = 0;
        computerScore = 0;
    }
    //else {
        //console.log("The game is a draw!");
    //}
}
function onClick() {
    game(this.className);

}
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const scoreBoard = document.querySelector('.scoreboard');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', onClick));
//game();