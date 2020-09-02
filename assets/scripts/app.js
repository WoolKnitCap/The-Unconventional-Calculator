const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const userNum = getUserInput();
  const calcDesc = `${currentResult} + ${userNum}`;
  currentResult += userNum;
  outputResult(currentResult, calcDesc);
}

addBtn.addEventListener('click', add);
