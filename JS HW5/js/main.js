function createNewUser() {
    this.firstName = prompt("Enter your First Name");
    this.lastName = prompt("Enter your Last Name");
    this.birthday = prompt("Enter your date of birth in form: dd.mm.yyyy", "01.01.2001");
    this.getAge = function () {
        let birthDate = this.birthday.split('.');
        return ((new Date().getTime() - new Date(`${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
    this.getLogin = function () {
        return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
    }
    this.getPassword = function () {
        return this.firstName.charAt(0).toUpperCase()+this.lastName.toLowerCase()+this.birthday.slice(6);
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
            return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
        },
        getAge: function () {
            let birthYear = this.birthday.slice(6);
            return (new Date().getFullYear() - birthYear);
        },
        getPassword: function () {
            return this.firstName.charAt(0).toUpperCase()+this.lastName.toLowerCase()+this.birthday.slice(6);
        },
    }
    return newUser;
}
const user = createNewUser();
console.log(`Ваш логин: ${user.getLogin()}\nВаш пароль: ${user.getPassword()}\nВаш возраст: ${user.getAge()}`);
*/
