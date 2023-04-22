/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  let random = Math.random() * 3;
  random = Math.floor(random);
  if (random === 0) {
    return 'rock';
  } else if (random === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') return 0;
    else if (computerChoice === 'scissors') return 1;
    else return -1;
  }
  else if (playerChoice === 'paper') {
    if (computerChoice === 'paper') return 0;
    else if (computerChoice === 'rock') return 1;
    else return -1;
  }
  else {
    if (computerChoice === 'scissors') return 0;
    else if (computerChoice === 'paper') return 1;
    else return -1;
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const scoreHTML = document.querySelector('#player-score');
  const handsHTML = document.querySelector('#hands');
  const resultHTML = document.querySelector('#result');

  handsHTML.innerText = "👱:" + playerChoice + " VS. " + "🤖:" + computerChoice;

  if (score === 0) {
    resultHTML.innerText = "It's a Draw!";
  } else if (score === 1) {
    resultHTML.innerText = "You Win!";
  } else {
    resultHTML.innerText = "You Lose!";
  }

  let oldScore = Number(scoreHTML.innerText);
  if (oldScore == '') oldScore = 0;
  const newScore = oldScore + score;
  scoreHTML.innerText = "your final score: " + newScore;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice);
  const computerChoice = getComputerChoice();

  const result = getResult(playerChoice, computerChoice);
  showResult(result, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let buttons = document.querySelectorAll('.rpsButton');
  //buttons[0] = rock
  //buttons[1] = paper
  //buttons[2] = scissors

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value);
  })


  // Add a click listener to the end game button that runs the endGame() function on click
  let stopButton = document.querySelector('#endGameButton');
  stopButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  document.querySelector('#player-score').innerText = '';
  document.querySelector('#hands').innerText = '';
  document.querySelector('#result').innerText = '';
}

playGame()