// rock, paper, scissors game. User vs. Computer


let userInput = "rock";// change this to see different result

//validate user input
const getUserChoice = (userInput) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("only 'rock', 'paper', and 'scissors' allowed, try again!");
  }
};
userInput = userInput.toLowerCase();

//test Code
// console.log(getUserChoice('fork')); //error + undefined
// console.log(getUserChoice('rock')); //rock

//generate computer choice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
}
// test code
// console.log(getComputerChoice()); //one of the 3

//compare to get the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "game was a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won.";
    } else return "user won.";
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "user won";
    } else return "computer won";
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "user won";
    }
    return "computer won";
  }
}

// //test code
// console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const uChoice = getUserChoice(userInput);
  const cChoice = getComputerChoice();
  console.log("You threw: " + uChoice);
  console.log("Computer threw: " + cChoice);
//put everything together and make it work 
  console.log(determineWinner(uChoice, cChoice));
};

//output function
playGame();
