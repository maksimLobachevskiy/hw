let age = prompt('How old are you?');
let name = prompt('What is your name?');

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