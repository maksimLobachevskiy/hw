let m = 0;
let n = 0;
while (m == '' || isNaN(m)) m = parseInt(prompt("Введите число m"));
while (n == '' || isNaN(n)) n = parseInt(prompt("Введите число n"));

    primeNumber:
        for (let i = m; i <= n; i++) {
            for (j = 2; j < i; j++) {
                if (i % j == 0) continue primeNumber;
            }
            console.log(i);
        }
