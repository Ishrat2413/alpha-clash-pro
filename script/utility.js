function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseInt(element.innerText);
  return elementValue;
}

function setTextElementValueById(elementId, nvalue) {
  const element = document.getElementById(elementId);
  element.innerText = nvalue;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function getARandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split(""); //so that we'll get teh array simply
  //   console.log(alphabets);
  // generate random index number between o to 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  //   console.log(index);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}
