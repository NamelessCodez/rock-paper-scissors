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

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        // prompt user for input
        const playerSelection = prompt();
        // generate computer move
        const computerSelection = computerPlay();
        

        // print winner or loser of the round
        console.log(playRound(playerSelection, computerSelection));

        // give scores

        if (playRound(playerSelection, computerSelection).includes("win")) {
            playerScore++;
        }
        if (playRound(playerSelection, computerSelection).includes("lose")) {
            computerScore++;
        }
    }
    // print winner or loser of the game

    if (playerScore > computerScore) {
        console.log("Player won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("The game is a draw!");
    }
}
