let numValue = parseInt(prompt("Введите число"));
function fib(n) {
    n = numValue;
    if (n > 0) {
        let F0 = 1;
        let F1 = 1;
        for (let i = 3; i <= n; i++) {
            let F2 = F0 + F1;
            F0 = F1;
            F1 = F2;
        }
        return F1;
    } else {
        let F0 = -1;
        let F1 = -1;
        for (let i = -3; i >= n; i--) {
            let F2 = F0 + F1;
            F0 = F1;
            F1 = F2;
        }
        return F1;
    }

}
alert( fib(numValue) );
