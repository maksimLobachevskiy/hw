const priceInput = document.querySelector('#price');
const span = document.createElement('span');
span.classList.add('price-value');
const errorText = document.createElement('p');
priceInput.addEventListener('focus', () => {
    priceInput.style.border = '3px solid darkgreen';
});

priceInput.addEventListener('blur', () => {

    if (priceInput.value < 0 || priceInput.value === "") {
        priceInput.style.border = '3px solid red';
        document.querySelector('label').after(errorText);
        errorText.innerText = 'Please enter correct price.';
        span.remove();
    } else {
        document.querySelector('label').before(span);
        span.innerHTML = `Текущая цена: ${priceInput.value} <button class="close-btn">X</button>`;
        priceInput.style.color = 'green';
        errorText.remove();
        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            span.remove();
            priceInput.value = "";
        });
    }
});

