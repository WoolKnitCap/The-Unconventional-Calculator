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

function calculate(operation) {
  const userNum = getUserInput();
  const initResult = currentResult;
  let operator;
  switch (operation) {
    case 'ADD':
      currentResult += userNum;
      operator = '+';
      break;
    case 'SUBTRACT':
      currentResult -= userNum;
      operator = '-';
      break;
    case 'MULTIPLY':
      currentResult *= userNum;
      operator = '*';
      break;
    case 'DIVIDE':
      currentResult /= userNum;
      operator = '/';
      break;
  }
  writeOutput(operator, initResult, userNum);
  writeToLog(operation, initResult, userNum, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
