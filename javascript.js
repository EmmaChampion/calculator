let operand1 = "";
let operand2 = "";
let operator;
let operatorEntered = false;

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
    operand1 = Number(operand1);
    operand2 = Number(operand2);
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

function updateNumber(digit) {
    if (operatorEntered) {
        //Update operand2
        if (operand2.length <= 12) {
            operand2 = operand2 + digit;
            displayWindow.textContent = operand2;
        }
    }
    else {
        //Update operand1
        if (operand1.length < 12) {
            operand1 = operand1 + digit;
            displayWindow.textContent = operand1;
        }
    }
}

function updateOperator(current_operator) {
    if (operatorEntered) {
        if (operand2 === "") {
            //Immediately changed operator, no calculation
            operator = current_operator;
        }
        else {
            //Compute the current operation and use result as operand1
            let result = operate(operand1, operand2, operator);
            displayWindow.textContent = result;
            operand1 = result;
            operand2 = "";
            operator = current_operator;
        }
    }
    else {
        //Record operator and move to second operand
        operator = current_operator;
        operatorEntered = true;
    }
}

const displayWindow = document.querySelector("#display-window");

const numbers = document.querySelectorAll(".number");
for (const number of numbers) {
    number.addEventListener("click", () => 
        updateNumber(number.innerText));
}

const operators = document.querySelectorAll(".operator");
for (const operator_button of operators) {
    operator_button.addEventListener("click", () =>
        updateOperator(operator_button.innerText));
}