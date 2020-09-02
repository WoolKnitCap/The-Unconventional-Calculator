const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function writeOutput(operator, resultBefore, calcNum) {
  const calcDesc = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDesc);
}

function add() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult += userNum;
  writeOutput('+', initResult, userNum);
}

function sub() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult -= userNum;
  writeOutput('-', initResult, userNum);
}

function multi() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult *= userNum;
  writeOutput('*', initResult, userNum);
}

function div() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult /= userNum;
  writeOutput('/', initResult, userNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', div);
