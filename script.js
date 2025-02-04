const slides = document.querySelector(".slides");
let index = 0;

function nextSlide() {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(nextSlide, 3000);
