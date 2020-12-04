const icon = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
function showPass(target, icon) {
    const element = document.getElementById(target)
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

icon.addEventListener('click', () => showPass('pass', icon));
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