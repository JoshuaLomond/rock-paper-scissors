function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    
    switch (num) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return "DRAW";
    }
    else {
        switch (playerSelection) {
            case "ROCK":
                if (computerSelection == "SCISSORS") {
                    return "PLAYERWIN";
                } else {
                    return "COMPWIN";
                }
            case "PAPER":
                if (computerSelection == "ROCK") {
                    return "PLAYERWIN";
                } else {
                    return "COMPWIN";
                }
            case "SCISSORS":
                if (computerSelection == "PAPER") {
                    return "PLAYERWIN";
                } else {
                    return "COMPWIN";
                }
        }
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
            
        let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
        let computerSelection = getComputerChoice();
       
        if (playRound(playerSelection, computerSelection) == "DRAW") {
            console.log(`Draw: Computer also chose ${computerSelection}`);
        } else if (playRound(playerSelection, computerSelection) == "PLAYERWIN") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        } else {
            console.log(`You lost :/ ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            console.log(`PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        }
        
    }
}

game();