let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //Rock Paper Scissors
  const options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  //console.log("Game Draw !");
  msg.innerText = "Game Was Draw Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //  console.log("You Win!");
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("Computer Win!");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}. `;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //console.log(" user choice ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  // console.log(" Compputer choice ", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");

// const compChoice = () => {
//   const options = ["rock", "paper", "scissor"];
//   //Rock Paper Scissors
//   let out = Math.floor(Math.random() * 3);
//   return options[out];
// };

// const drawGame = () => {
//   console.log("Game was draw. ");
// };

// const showWinner=()=>{
//     if(userWin){
//     console.log("You Win");
//     }else
//     console.log("computer win");
// }

// const playGame = (userChoice) => {
//   //console.log(userChoice);

//   //Computer Choice
//   const compChoiceis = compChoice();
//   console.log("Computer choice", compChoiceis);

//   //compare value
//   if (userChoice === compChoice) {
//     //draw
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissers" ? false : true;
//     } else {
//       userWin = compChoice === "rock" ? false : true;
//     }

//     showWinner(userWin);
//   }
// };

// choices.forEach((choice) => {
//   console.log(choice);
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     console.log("your choice ", userChoice);
//     playGame(userChoice);
//   });
// });
