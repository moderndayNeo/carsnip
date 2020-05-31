
const myArray = ["1", "+", "600"]

function processMultiplyAndDivide(equation) {

    if (!containsMulOrDiv(equation)) {
      return equation;
    }

    // Code here to calculate values
    // either side of multiply/divide sign

  return processMultiplyAndDivide(mulAndDivProcessed);
}


// Process the multiply and divide operators first
// Process the add and subtract operators second















/*
  const positionFirstMulOrDiv = equation.findIndex(isMultiplyOrDivide);
  const leftOfOperator = positionFirstMulOrDiv - 1;
  const rightOfOperator = positionFirstMulOrDiv + 1;

  const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1);
  const result = calculate(...chunkToCalculate);
  const leftOfChunk = equation.slice(0, leftOfOperator);
  const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length);

  const mulAndDivProcessed = [...leftOfChunk, result, ...rightOfChunk];
*/