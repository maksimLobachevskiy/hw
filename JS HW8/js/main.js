const priceInput = document.querySelector('input[type="number"]');
const span = document.createElement('span');
span.classList.add('price-value');
const errorText = document.createElement('p');
priceInput.addEventListener('focus', (event) => {
    event.target.style.border = '3px solid darkgreen';
});

priceInput.addEventListener('blur', (event) => {

    if (priceInput.value < 0 || priceInput.value === "") {
        event.target.style.border = '3px solid red';
        document.querySelector('label').after(errorText);
        errorText.innerText = 'Please enter correct price.';
        span.remove();
    } else {
        document.querySelector('label').before(span);
        span.innerHTML = `Текущая цена: ${priceInput.value} <button class="close-btn">X</button>`;
        event.target.style.color = 'green';
        errorText.remove();
        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', (event) => {
            span.remove();
            priceInput.value = "";
        });
    }
});

