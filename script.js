//Code for header
let body = document.querySelector("body");

let header = document.createElement("header");
let h1 = document.createElement("h1");

h1.innerText = "ROCK - PAPER - SCISSORS";

header.append(h1);
body.append(header);

//Code for buttons
let section = document.createElement("section");
section.className = "button-container";

for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");

    let image = document.createElement("img");

    if (i == 0) {
        image.src = "img/rock.png";
        div.className="rock";
    } else if (i == 1) {
        image.src = "img/paper.png";
        div.className="paper";
    } else {
        image.src = "img/scissors.png";
        div.className="scissors";
    }
    
    div.append(image);
    section.append(div);
}

body.append(section);

//Results
let result = document.createElement("div");
result.className = "result";

result.innerText = "Choose your weapon";
body.append(result);

//Choices
let container = document.createElement("div");
container.className = "choice-container";

let question = document.createElement("img");
question.src = "img/question-mark.png";

let playerScore = 0;
let computerScore = 0;

let stringPlayerScore = document.createElement("div");
stringPlayerScore.innerHTML = "Player: " + playerScore;
stringPlayerScore.className = "score-text-player";
let stringComputerScore = document.createElement("div");
stringComputerScore.innerHTML = "Computer: " + computerScore;
stringComputerScore.className = "score-text-computer";

let playerChoice = document.createElement("div");
playerChoice.className = "player";
playerChoice.append(question);
container.append(playerChoice);

let computerChoice = document.createElement("div");
computerChoice.className = "computer";
computerChoice.append(question.cloneNode(true));
container.append(computerChoice);


body.append(container);

let scoreContainer = document.createElement("div");
scoreContainer.className = "score-container";
scoreContainer.append(stringComputerScore);
scoreContainer.append(stringPlayerScore);
body.append(scoreContainer);


//Event listeners
let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissors = document.getElementsByClassName('scissors')[0];

rock.addEventListener('click', e => {
    console.log('rock');
});
paper.addEventListener('click', e => {
    console.log('paper');
});
scissors.addEventListener('click', e => {
    console.log('scissors');
});

//Functions
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