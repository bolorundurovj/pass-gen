// DOM Elements
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasNumber,
    hasSymbol,
    hasUpper
  );
});

//Generate password function
function generatePassword(length, lower, number, symbol, upper) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
      return '';
  }
}

//Generator Functions

function getRandomLower() {
  const lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return lower;
}
function getRandomUpper() {
  const upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return upper;
}
function getRandomNumber() {
  const num = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return num;
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_{}[],.~<>?|";
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  return symbol;
}
