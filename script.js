//Code for header
let body = document.querySelector("body");

let header = document.createElement("header");
let h1 = document.createElement("h1");

h1.innerText = "ROCK - PAPER - SCISSORS";

header.append(h1);
body.append(header);

//Code for selections section


//Code for buttons
let section = document.createElement("section");
section.className = "button-container";

for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.className = "button";
    div.id = i;

    let image = document.createElement("img");
    image.id = "image-" + i;

    if (i == 0) {
        image.src = "rock.png";
    } else if (i == 1) {
        image.src = "paper.png";
    } else {
        image.src = "scissors.png";
    }
    
    div.append(image);
    section.append(div);
}

body.append(section);


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
                }
            case "PAPER":
                if (computerSelection == "ROCK") {
                    return "PLAYERWIN";
                }
            default:
                if (computerSelection == "PAPER") {
                    return "PLAYERWIN";
                }
        }
        return "COMPWIN";
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