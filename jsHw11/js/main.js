const parent = document.querySelector('.btn-wrapper');
pressedKey(parent.children[6], "KeyZ");
pressedKey(parent.children[4], "KeyN");
pressedKey(parent.children[5], "KeyL");
pressedKey(parent.children[3], "KeyO");
pressedKey(parent.children[2], "KeyE");
pressedKey(parent.children[1], "KeyS");
pressedKey(parent.children[0], "Enter");

function pressedKey(target, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);
        for (let code of codes) {
            if (pressed.has(code)) {
                target.style.backgroundColor = 'blue';
            } else {
                target.removeAttribute('style');
            }
        }
        pressed.clear();
    });
}
