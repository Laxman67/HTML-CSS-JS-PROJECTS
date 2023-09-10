let buttons = document.querySelectorAll("button");
let resultEl = document.getElementById("result");
let userScoreEl = document.getElementById("user-score");
let computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = playRound(button.id, computerPlay());
    resultEl.innerText = result;
    userScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
  });
});

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];

  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win !" + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return "You lose ! " + computerSelection + " beats " + playerSelection;
  }
}
