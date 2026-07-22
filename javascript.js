let operand1;
let operand2;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Oops! Can't divide by 0");
        return "ERROR";
    }
    return a / b;
}

function operate(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
            break;
        case "-":
            return subtract(operand1, operand2);
            break;
        case "*":
            return multiply(operand1, operand2);
            break;
        case "/":
            return divide(operand1, operand2);
            break;
        default:
            return "ERROR";
    }
}