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

function continueGame() {
  // Generate a random alphabet
  const getAlphabet = getARandomAlphabet();
  console.log(getAlphabet);
  // set the randomly generated alphabet to the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = getAlphabet;
  // Set background Color
  setBackgroundColor(getAlphabet);
}
function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
