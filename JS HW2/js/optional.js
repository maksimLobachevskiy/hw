let m = parseInt(prompt("Введите число"));
let n = parseInt(prompt("Введите число"))
primeNumber:
    for (let i = 2; i <= n; i++) {
        for (m = 2; m < i; m++) {
            if (i % m == 0) continue primeNumber;
        }
        console.log(i);

    }
