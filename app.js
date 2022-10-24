let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const stone_div = document.getElementById("stone");
const scroll_div = document.getElementById("scroll");
const sword_div = document.getElementById("sword");

main();


function getComputerChoice() {
  const choices = ["stone", "sword", "scroll"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;

  result_p.innerHTML = `${userChoice} beats ${computerChoice},YOU WIN! `;
}
function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;

  result_p.innerHTML = `${computerChoice} beats ${userChoice},YOU LOSE! `;
}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;

  result_p.innerHTML = `${userChoice} equals ${computerChoice},IT'S A DRAW! `;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "stonesword":
    case "scrollstone":
    case "swordscroll":
      win(userChoice, computerChoice);
      break;
    case "stonescroll":
    case "scrollsword":
    case "swordstone":
      lose(userChoice, computerChoice);
      break;
    case "swordsword":
    case "scrollscroll":
    case "stonestone":
      draw(userChoice, computerChoice);
      break;
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
