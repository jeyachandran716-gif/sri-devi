const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

function slideNext() {
    index++;

    slides.style.transition = "transform 1s ease";
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideNext, 4000);

slides.addEventListener("transitionend", () => {

    // If we're on the cloned first slide
    if(index === images.length - 1){

        slides.style.transition = "none";
        index = 0;
        slides.style.transform = "translateX(0)";

        // Force browser repaint
        slides.offsetHeight;

        slides.style.transition = "transform 1s ease";
    }

});