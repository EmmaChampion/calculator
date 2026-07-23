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
        if (typeof operand1 === "number") {
            operand1 = digit;
            displayWindow.textContent = operand1;
        }
        else if (operand1.length < 12) {
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
            equalsCalc();
            operator = current_operator;
            operatorEntered = true;
        }
    }
    else {
        //Record operator and move to second operand
        operator = current_operator;
        operatorEntered = true;
    }
}

function equalsCalc() {
    if (operatorEntered) {
        let result = operate(operand1, operand2, operator);
        if (result.toString().length > 12) {
            displayWindow.textContent = result.toExponential(6);
        }
        else {
            displayWindow.textContent = result;
        }
        if (result === "ERROR") {
            operand1 = "";
            operand2 = "";
            operatorEntered = false;
        }
        else {
            operand1 = result;
            operand2 = ""
            operatorEntered = false;
        }
    }
    else {
        operand1 = Number(operand1);
    }
}

function clearCalcs() {
    operand1 = "";
    operand2 = "";
    operator = "";
    operatorEntered = false;
    displayWindow.textContent = "0";
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

const equals = document.querySelector("#equals");
equals.addEventListener("click", equalsCalc);

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearCalcs);