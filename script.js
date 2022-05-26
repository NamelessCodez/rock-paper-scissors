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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


//create function to loop over 5 games and print the result
