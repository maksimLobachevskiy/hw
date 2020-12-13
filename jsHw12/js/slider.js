let images = document.querySelectorAll(".images-wrapper img");
let currentSlide = 0;
let timer;
let playing = 0;


function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[currentSlide].classList.remove('hide');
    
    if (currentSlide + 1 === images.length) {
        currentSlide = 0;
        
    } else {
        currentSlide++;
    }
    timer = setTimeout(slider, 3000);
}
slider();

let stopBtn = document.createElement('button');
let playBtn = document.createElement('button');
stopBtn.innerHTML = 'STOP ||';
playBtn.innerHTML = 'PLAY >';
document.querySelector(".images-wrapper").after(stopBtn);
document.querySelector(".images-wrapper").after(playBtn);

stopBtn.addEventListener('click', () => {
    clearTimeout(timer);
    playing = 0;
 });
 playBtn.addEventListener('click', () => {
    if (!playing) {
        playing = 1;
        slider();
    }
 });