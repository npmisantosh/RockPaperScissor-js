let playerInput = "";
computerSelection = ["ROCK", "PAPER", "SCISSOR"];
let userWinCount = 0,
  computerWinCount = 0,
  rounds;

function getComputerChoice(computerSelection) {
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection === "ROCK" ||
    playerSelection === "PAPER" ||
    playerSelection === "SCISSOR"
  ) {
    if (playerSelection == computerSelection) {
      console.log("draw");
    } else if (
      (playerSelection == "ROCK" && computerSelection == "SCISSOR") ||
      (playerSelection == "PAPER" && computerSelection == "ROCK") ||
      (playerSelection == "SCISSOR" && computerSelection == "PAPER")
    ) {
      console.log("USER wins");
      userWinCount++;
    } else {
      console.log("computerSelection wins");
      computerWinCount++;
    }
    rounds++;
  } else {
    alert("Invalid input please enter ROCK/PAPER/SCISSOR!!");
  }
  
}

console.log(playGame());

function playGame() {
  for (rounds = 1; rounds <= 5; rounds + 1 - 1) {
    playerInput = prompt("Choose Rock paper or scissor");
    playerSelection = playerInput.toUpperCase();

    playRound(playerSelection, getComputerChoice(computerSelection));
  }

  console.log(
    `USER WINS: ` + +userWinCount + ` AI WINS: ` + +computerWinCount
  );
  if (userWinCount > computerWinCount) {
    console.log("Best of five user wins");
  } else if (userWinCount < computerWinCount) {
    console.log("Best of five AI wins");
  } else {
    console.log("Best of five DRAW");
  }
}