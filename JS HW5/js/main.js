function createNewUser() {
    this.firstName = prompt("Enter your First Name");
    this.lastName = prompt("Enter your Last Name");
    this.birthday = prompt("Enter your date of birth in form: dd.mm.yyyy", "01.01.2001");
    this.getAge = function () {
        let birthYear = this.birthday.slice(6);
        return (new Date().getFullYear() - birthYear);
    }
    this.getLogin = function () {
        let myLogin = this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
        return myLogin;
    }
    this.getPassword = function () {
        let myPassword = this.firstName.charAt(0).toUpperCase()+this.lastName.toLowerCase()+this.birthday.slice(6);
        return myPassword;
    }
}

let newUser = new createNewUser();
console.log(`Ваш логин: ${newUser.getLogin()}\nВаш пароль: ${newUser.getPassword()}\nВаш возраст: ${newUser.getAge()}`);

// 2 Вариант решения
/*
function createNewUser() {
    let fName = prompt("Enter your name");
    let lName = prompt("Enter your surname");
    let birth = prompt("Enter your date of birth in form: dd.mm.yyyy", "01.01.2001");
    const newUser = {
        firstName: fName,
        lastName: lName,
        birthday: birth,
        getLogin: function () {
            let myLogin = this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
            return myLogin;
        },
        getAge: function () {
            let birthYear = this.birthday.slice(6);
            return (new Date().getFullYear() - birthYear);
        },
        getPassword: function () {
            let myPassword = this.firstName.charAt(0).toUpperCase()+this.lastName.toLowerCase()+this.birthday.slice(6);
            return myPassword;
        },
    }
    return newUser;
}
const user = createNewUser();
console.log(`Ваш логин: ${user.getLogin()}\nВаш пароль: ${user.getPassword()}\nВаш возраст: ${user.getAge()}`);
*/
