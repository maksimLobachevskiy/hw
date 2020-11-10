let userVal = parseInt(prompt("Введите число"));
const noNumber = "Sorry, no numbers";

if (userVal < 5 || isNaN(userVal)) {
    console.log(noNumber);
} else {
    for (let userResult = 0; userResult <= userVal; userResult++) {
        if (userResult % 5 == 0) {
            console.log(userResult);
        }
    }
}