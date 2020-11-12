let numValue = parseInt(prompt("Введите число"));
while (numValue == '' || isNaN(numValue)) {
    numValue = parseInt(prompt("Введите число"));
}
function fac(n) {

    if (n != 1) {
        return n * fac(n - 1);
    }  return 1;
}

alert( fac(numValue) );