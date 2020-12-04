const password = document.getElementById('pass');
const repeatPass = document.getElementById('repeat_pass');

function validatePassword() {
    const icon = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    icon.addEventListener('click', () => {
        if (password.getAttribute('type') === 'password') {
            password.setAttribute('type', 'text');
            icon.classList.add('fa-eye-slash');
            icon.classList.remove('fa-eye');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
            password.setAttribute('type', 'password');
        }
    });

    icon2.addEventListener('click', () => {
        if (repeatPass.getAttribute('type') === 'password') {
            repeatPass.setAttribute('type', 'text');
            icon2.classList.add('fa-eye-slash');
            icon2.classList.remove('fa-eye');
        } else {
            icon2.classList.remove('fa-eye-slash');
            icon2.classList.add('fa-eye');
            repeatPass.setAttribute('type', 'password');
        }
    });

    const submit = document.querySelector('.password-form')
    const errorText = document.createElement('span');
    submit.addEventListener('submit', () => {
            if (password.value !== repeatPass.value) {
                repeatPass.after(errorText);
                errorText.innerText = 'Нужно ввести одинаковые значения.';
                errorText.style.color = 'red';
            } else {
                alert('You are welcome');
            }
        }
    );
}
validatePassword();