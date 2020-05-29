const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

currentResult = add(1, 2)

let calculationDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);