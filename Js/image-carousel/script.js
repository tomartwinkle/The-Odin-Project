const backBtn = document.querySelector(".back");
const forwardBtn = document.querySelector(".forward");
const slidesContainer = document.querySelector(".image-slides");
const images = document.querySelectorAll(".image-slides img");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;
let slideInterval;

// Create dots
images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
}

backBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});

forwardBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

function autoSlide() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // 5 seconds
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    autoSlide();
}

// Start automatic sliding
autoSlide();
