const parent = document.querySelectorAll('.btn-wrapper .btn');

document.addEventListener('keydown', function (event) {
    parent.forEach(function (item) {
            if (event.key === item.innerHTML.toLowerCase()) {
                return item.style.backgroundColor = 'blue';
            } else {
                item.removeAttribute('style');
            }
            if (event.key === parent[0].innerHTML) {
                parent[0].style.backgroundColor = 'blue';
            } else {
                item.removeAttribute('style');
            }
        }
    );
});