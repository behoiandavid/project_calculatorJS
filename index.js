const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const divisionBtn = document.getElementById('division');
const multiplicationBtn = document.getElementById('multiplication');
let action = '+';


const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum

// console.log(typeof sum) typeof пароверка типа данных



plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplicationBtn.onclick = function () {
    action = '*'
}

divisionBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result <= 0) {
        resultElement.style.color = "red";
    }
    else {
        resultElement.style.color = "green";
    }

    resultElement.textContent = result;
}


function computeNumbersWithAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    if (actionSymbol === '+') {
        return num1 + num2
    } else if (actionSymbol === '-') {
        return num1 - num2
    } else if (actionSymbol === '*') {
        return num1 * num2
    } else if (actionSymbol === '/') {
        return num1 / num2
    }
}


submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action,)
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value);
        printResult(sum)
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value);
        printResult(sum)
    } else if (action == '*') {
        const sum = Number(input1.value) * Number(input2.value);
        printResult(sum)
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value);
        printResult(sum)
        if (Number(input2.value) === 0) {
            printResult("Erorr")
        }
        return
    }
}