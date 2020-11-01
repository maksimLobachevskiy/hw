let age;
let name;
do {
    age = parseInt(prompt("How old are you?"));
} while (age == '' || isNaN(age));
    do {
        name = prompt("What is your name?");
    } while (name == 0);
if (age >= 18 && age <= 22) {
    let ageConf = confirm("Are you sure you want to continue?");
    if (ageConf) {
        alert(`Welcome ${name}`);
    } else {
        alert("You are not allowed to visit this website");
    }
} else if (age < 18) {
    alert("You are not allowed to visit this website");
} else {
    alert(`Welcome ${name}`);
}