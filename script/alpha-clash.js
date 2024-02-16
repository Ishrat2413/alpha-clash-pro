// function play() {
//   // Step-01 Hide the home screen(Add the class hidden to the home section)

//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   // console.log(homeScreen.classList);
//   // Show the play-ground

//   const playgroundScreen = document.getElementById("play-ground");
//   playgroundScreen.classList.remove("hidden");
//   // console.log(playgroundScreen.classList);
// }

function keyboardButtonPressHandler(event) {
  const playerPressed = event.key; //event dawar reason hoilo ami ki value dcchi sheita she jane, so event.key dile amke shei value ta dibe. if I pressed "r", then event.key will show "r"
  console.log("Player Pressed", playerPressed);

  // Stop the game if pressed "esc"
  if (playerPressed === "Escape") {
    gameOver();
  }

  // Get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const targetAlphabet = currentAlphabetElement.innerText.toLowerCase();
  // console.log(playerPressed, targetAlphabet);
  // Check matched or not

  if (playerPressed === targetAlphabet) {
    // //--------------------------------------------
    // // console.log("You get a point");
    // // Update the score
    // // Utility.js e function niye alada vabe korte parbo
    // // 1. get the current score
    // const currentScore = document.getElementById("current-score");
    // const currentScoreText = parseInt(currentScore.innerText);
    // // 2. increase the score by 1
    // const newScore = currentScoreText + 1;
    // // 3. Show the updated score

    // with function ----------------------------------
    // 1. get the current score
    const currentScore = getTextElementValueById("current-score");
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);

    // Start a new round
    removeBackgroundColor(targetAlphabet);
    continueGame();

    //
  } else {
    // --------------------------------------------
    // // console.log("You missed, You lost a life!");
    // // Utility.js e function niye alada vabe korte parbo
    // // 1. get the current Life count
    // const currentLife = document.getElementById("current-life");
    // const currentLifeText = parseInt(currentLife.innerText);
    // // 2. decrease the score by 1
    // const newLife = currentLifeText - 1;
    // // 3. Show the updated life count
    // currentLife.innerText = newLife;
    // --------------------------------------------
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}
// Capture keyboard key press by call back function
document.addEventListener("keyup", keyboardButtonPressHandler);

function continueGame() {
  // Generate a random alphabet
  const getAlphabet = getARandomAlphabet();
  console.log("Random Alphabet", getAlphabet);
  // set the randomly generated alphabet to the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = getAlphabet;
  // Set background Color
  setBackgroundColor(getAlphabet);
}
function play() {
  // hide everything, show only playground
  hideElementById("home-screen");
  hideElementById("score");
  showElementById("play-ground");

  // reset score & life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("score");
  // Update final score
  // 1. get the final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);
  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColor(currentAlphabet);
}
