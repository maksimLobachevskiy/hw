const icon = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
function showPass(target, icon) { // create a function that accepts arguments
    const element = document.getElementById(target) // query whatever element you pass to it.
    if (element.getAttribute('type') === 'password') {
        element.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash');
        icon.classList.remove('fa-eye');
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        element.setAttribute('type', 'password');
    }
}

icon.addEventListener('click', () => showPass('pass', icon)); // add the event listeners wrapped in anonymous function so it's not called immediately
icon2.addEventListener('click', () => showPass('repeat_pass', icon2));

function validatePass() {
    const password = document.getElementById('pass');
    const repeatPass = document.getElementById('repeat_pass');
    const submit = document.querySelector('.password-form')
    const errorText = document.createElement('span');
    submit.addEventListener('submit', () => {
            if (password.value !== repeatPass.value) {
                repeatPass.after(errorText);
                errorText.innerText = 'Пароли не совпадают.';
                errorText.style.color = 'red';
            } else {
                errorText.remove();
                password.value = "";
                repeatPass.value = "";
                alert('You are welcome');
            }
        });
}
validatePass()