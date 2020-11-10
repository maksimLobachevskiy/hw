//Запрашиваем числа и мат. операцию
numA = parseFloat(prompt("Введите число А"));
//проверяем на пустой ввод или текст
while (numA == '' || isNaN(numA)) numA = parseFloat(prompt("Введите число А"));
numB = parseFloat(prompt("Введите число B"));
while (numB == '' || isNaN(numB)) numB = parseFloat(prompt("Введите число B"));
operValue = prompt("Введите операцию +, -, *, /");

//Создаем функцию математических операций
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