const slider = document.querySelector(".slider");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevSlide.addEventListener("click", () => {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
});

nextSlide.addEventListener("click", () => {
    if (slideIndex < 2) { // Cambia este número a la cantidad total de slides menos 1
        slideIndex++;
        showSlide(slideIndex);
    }
});
