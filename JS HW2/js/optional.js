let m = parseInt(prompt("Введите число"));
let n = parseInt(prompt("Введите число"));
do {
    m = parseInt(prompt("Введите число"));
    n = parseInt(prompt("Введите число"));
}
while (isNaN(m) || isNaN(n) || m > n);
    primeNumber:
        for (let i = m; i <= n; i++) {
            for (j = 2; j < i; j++) {
                if (i % j == 0) continue primeNumber;
            }
            console.log(i);
        }
