let images = document.querySelectorAll(".images-wrapper img");
let currentSlide = 0;
let breakPoint = 0; 
let timer = function slider() {
    
    if (breakPoint === 0) {
    
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[currentSlide].classList.remove('hide');
    
    if (currentSlide + 1 === images.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    setTimeout(slider, 3000);
}
}

setTimeout(timer, 3000);

let stopBtn = document.createElement('button');
let playBtn = document.createElement('button');
stopBtn.innerHTML = 'STOP ||';
playBtn.innerHTML = 'PLAY >';
document.querySelector(".images-wrapper").after(stopBtn);
document.querySelector(".images-wrapper").after(playBtn);

stopBtn.addEventListener('click', () => {
    breakPoint = 1;
    clearTimeout(timer);
});

playBtn.addEventListener('click', () => {
    breakPoint = 0;
    setTimeout(timer, 3000);
});