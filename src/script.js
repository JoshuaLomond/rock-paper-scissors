// Get elements from the DOM
const resultText = document.getElementById("result-text");
const playerScoreText = document.getElementById("player-score");
const cpuScoreText = document.getElementById("cpu-score");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;

// Function to generate CPU's choice
function getCPURandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    playerScore++;
    return `CPU picks ${cpuChoice}. You win!`;
  } else {
    cpuScore++;
    return `CPU picks ${cpuChoice}. You lose!`;
  }
}

// Function to update the scores and display the result
function updateScoreAndResult(playerChoice, cpuChoice) {
  resultText.textContent = determineWinner(playerChoice, cpuChoice);
  playerScoreText.textContent = `Player: ${playerScore}`;
  cpuScoreText.textContent = `CPU: ${cpuScore}`;
}

// Event listeners for user clicks
document.getElementById("rock-img").addEventListener("click", function () {
  const cpuChoice = getCPURandomChoice();
  updateScoreAndResult("rock", cpuChoice);
});

document.getElementById("paper-img").addEventListener("click", function () {
  const cpuChoice = getCPURandomChoice();
  updateScoreAndResult("paper", cpuChoice);
});

document.getElementById("scissors-img").addEventListener("click", function () {
  const cpuChoice = getCPURandomChoice();
  updateScoreAndResult("scissors", cpuChoice);
});
