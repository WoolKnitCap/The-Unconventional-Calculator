const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field.
function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function writeOutput(operator, resultBefore, calcNum) {
  const calcDesc = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDesc); // from vendor file
}

function writeToLog(operationID, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationID,
    prevResult: prevResult,
    number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult += userNum;
  writeOutput('+', initResult, userNum);
  writeToLog('ADD', initResult, userNum, currentResult);
}

function sub() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult -= userNum;
  writeOutput('-', initResult, userNum);
  writeToLog('SUBTRACT', initResult, userNum, currentResult);
}

function multi() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult *= userNum;
  writeOutput('*', initResult, userNum);
  writeToLog('MULTIPLY', initResult, userNum, currentResult);
}

function div() {
  const userNum = getUserInput();
  const initResult = currentResult;
  currentResult /= userNum;
  writeOutput('/', initResult, userNum);
  writeToLog('DIVIDE', initResult, userNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', div);
