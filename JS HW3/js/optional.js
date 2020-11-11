let numA = parseFloat(prompt("Введите число А"));
while (numA == '' || isNaN(numA)) numA = parseFloat(prompt("Введите число А"));
let numB = parseFloat(prompt("Введите число B"));
while (numB == '' || isNaN(numB)) numB = parseFloat(prompt("Введите число B"));
let operValue = prompt("Введите операцию +, -, *, /");

function calc(firstNumber,operation,secondNumber) {
    operation = operValue;
    switch (operation) {
        case "+":
            return firstNumber + secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        case "-":
            return firstNumber - secondNumber;
    }
}

console.log(`${numA} ${operValue} ${numB} = ${calc(numA, operValue, numB)}`);