function createNewUser() {
    this.firstName = prompt("Enter your name");
    this.lastName = prompt("Enter your surname");
    this.getLogin = function () {
        let myLogin = this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();
        return myLogin;
    }
}

let newUser = new createNewUser();
console.log(newUser.getLogin());
