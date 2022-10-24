const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const stone_div = document.getElementById("stone");
const scroll_div = document.getElementById("scroll");
const sword_div = document.getElementById("sword");

function getComputerChoice() {
  const choices = ["stone", "sword", "scroll"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice()) {
    case "stonesword":
    case "scrollstone":
    case "swordscroll ":
      console.log("User Wins!");
      break;
    case "stonescroll":
    case "scrollsword":
    case "swordstone":
  }
}

function main() {
  stone_div.addEventListener("click", function () {
    game("stone");
  });

  sword_div.addEventListener("click", function () {
    game("sword");
  });

  scroll_div.addEventListener("click", function () {
    game("scroll");
  });
}
