let computerSelection = ["ROCK", "PAPER", "SCISSOR"];
let userWinCount = 0,
  computerWinCount = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const results = document.getElementById("results");
results.style.fontSize = "50px";

rock.addEventListener("click", () => {
  playRound("ROCK", getComputerChoice(computerSelection));
});

paper.addEventListener("click", () => {
  playRound("PAPER", getComputerChoice(computerSelection));
});

scissor.addEventListener("click", () => {
  playRound("SCISSOR", getComputerChoice(computerSelection));
});

function getComputerChoice(computerSelection) {
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    results.textContent = "Round draw";
  } else if (
    (playerSelection == "ROCK" && computerSelection == "SCISSOR") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSOR" && computerSelection == "PAPER")
  ) {
    userWinCount++;
    updateResults();
  } else {
    computerWinCount++;
    updateResults();
  }
}

function updateResults() {
  if (userWinCount == 5) {
    results.textContent = "User wins";
    userWinCount = 0;
    computerWinCount = 0;
  } else if (computerWinCount == 5) {
    results.textContent = "AI wins";
    userWinCount = 0;
    computerWinCount = 0;
  } else {
    results.textContent =
      `user wins:` + userWinCount + " " + `AI wins:` + computerWinCount;
  }
}
