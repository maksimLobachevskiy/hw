//Запрашиваем числа и мат. операцию
let numA = parseFloat(prompt("Введите число А"));
let numB = parseFloat(prompt("Введите число B"));
let operValue = prompt("Введите операцию +, -, *, /");

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