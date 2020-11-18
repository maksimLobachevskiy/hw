function createNewUser() {
    this.firstName = prompt("Enter your name");
    this.lastName = prompt("Enter your surname");
    this.getLogin = function () {
        return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
    }
}

let newUser = new createNewUser();
console.log(newUser.getLogin());


// 2 Вариант решения
/*
function createNewUser() {
    let fName = prompt("Enter your name");
    let lName = prompt("Enter your surname");
    const newUser = {
        firstName: fName,
        lastName: lName,
        getLogin: function () {
            return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
        }
    }
    return newUser;
}
const user = createNewUser();
console.log(user.getLogin());*/
