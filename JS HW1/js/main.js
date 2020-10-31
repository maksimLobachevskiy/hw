let age = prompt('Сколько тебе лет?');
let name = prompt('Как тебя зовут?');
if (age < 18) {
    alert("You are not allowed to visit this website");
}
if (age >= 18 && age <= 22) {
    let user = confirm("Are you sure you want to continue?");
    if (user == true) {
        alert(`Welcome ${name}`);
    } else {
        alert("You are not allowed to visit this website");
    }
}
if (age > 22) {
    alert(`Welcome ${name}`);
}