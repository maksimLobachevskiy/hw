let numA = parseFloat(prompt("Введите число А"));
let numB = parseFloat(prompt("Введите число B"));
let operValue = prompt("Введите операцию +, -, *, /");

function calc(firstNumber,operation,secondNumber) {
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