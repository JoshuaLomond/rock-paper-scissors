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

result.innerText = "Choose your weapon - First to 5 wins!";
body.append(result);

//Choices
let container = document.createElement("div");
container.className = "choice-container";

let question = document.createElement("img");
question.className = 'player-img';
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

let question2 = document.createElement("img");
question2.className = 'computer-img';
question2.src = "img/question-mark.png";

let computerChoice = document.createElement("div");
computerChoice.className = "computer";
computerChoice.append(question2);
container.append(computerChoice);


body.append(container);

let scoreContainer = document.createElement("div");
scoreContainer.className = "score-container";
scoreContainer.append(stringPlayerScore);
scoreContainer.append(stringComputerScore);
body.append(scoreContainer);


//Event listeners
let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissors = document.getElementsByClassName('scissors')[0];

rock.addEventListener('click', e => {
    playRound('ROCK', getComputerChoice());
});
paper.addEventListener('click', e => {
    playRound('PAPER', getComputerChoice());
});
scissors.addEventListener('click', e => {
    playRound('SCISSORS', getComputerChoice());
});

//Functions
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    
    switch (num) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    let result = document.getElementsByClassName('result')[0];

    if (playerSelection == computerSelection) {
        result.innerHTML= `Draw &#128548 Computer also chose ${computerSelection}`;
        updateImage(playerSelection, computerSelection);
    } else if (playerSelection == "ROCK" && computerSelection != "PAPER") {
        result.innerHTML = `You win &#128516 ROCK beats ${computerSelection}`;
        updateImage("ROCK", computerSelection);
        updateScore(true);
    } else if (playerSelection == "PAPER" && computerSelection != "SCISSORS") {
        result.innerHTML = `You win &#128516 PAPER beats ${computerSelection}`;
        updateImage("PAPER", computerSelection);
        updateScore(true);
    } else if (playerSelection == "SCISSORS" && computerSelection != "ROCK") {
        result.innerHTML = `You win &#128516 SCISSORS beats ${computerSelection}`;
        updateImage("SCISSORS", computerSelection);
        updateScore(true);
    } else {
        result.innerHTML = `You lost &#128533 ${computerSelection} beats ${playerSelection}`;
        updateImage(playerSelection, computerSelection);
        updateScore(false);
    }

    if (playerScore > 4) {
        alert("You won the game!");
        location.reload();
    } if (computerScore > 4) {
        alert("You lost the game ):");
        location.reload();
    }
    
}

function updateImage(playerSelection, computerSelection) {
    let player = document.getElementsByClassName('player-img')[0];
    let computer = document.getElementsByClassName('computer-img')[0];
    
    if (playerSelection == "ROCK") {
        player.src = "img/rock.png";
    } else if (playerSelection == "PAPER") {
        player.src = "img/paper.png"
    } else {
        player.src = "img/scissors.png"
    }
    if (computerSelection == "ROCK") {
        computer.src = "img/rock.png";
    } else if (computerSelection == "PAPER") {
        computer.src = "img/paper.png"
    } else {
        computer.src = "img/scissors.png"
    }
}

function updateScore(winner) {
    let p = document.getElementsByClassName('score-text-player')[0];
    let c = document.getElementsByClassName('score-text-computer')[0];
    
    if (winner) {
        playerScore++;
        p.innerHTML = `Player: ${playerScore}`;
    } else {
        computerScore++;
        c.innerHTML = `Computer: ${computerScore}`;
    }
}