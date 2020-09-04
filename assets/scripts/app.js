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

function calcResult(calcType) {
  if (
    calcType === 'ADD' &&
    calcType === 'SUBTRACT' &&
    calcType === 'MULTIPLY' &&
    calcType === 'DIVIDE'
  ) {
    currentResult += userNum;
    mathOperator = '+';
  }
  const userNum = getUserInput();
  const initResult = currentResult;
  let mathOperator;
  if (calcType === 'ADD') {
    currentResult += userNum;
    mathOperator = '+';
  } else if (calcType === 'SUBTRACT') {
    currentResult -= userNum;
    mathOperator = '-';
  } else if (calcType === 'MULTIPLY') {
    currentResult *= userNum;
    mathOperator = '*';
  } else if (calcType === 'DIVIDE') {
    currentResult /= userNum;
    mathOperator = '/';
  }
  writeOutput(mathOperator, initResult, userNum);
  writeToLog(calcType, initResult, userNum, currentResult);
}

function add() {
  calcResult('ADD');
}

function sub() {
  calcResult('SUBTRACT');
}

function multi() {
  calcResult('MULTIPLY');
}

function div() {
  calcResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', div);
