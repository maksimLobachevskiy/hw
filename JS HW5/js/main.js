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