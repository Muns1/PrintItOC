const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector(".dots");
const bannerTagline = document.querySelector("#banner > p");
let currentSlide = 0;
const totalSlides = slides.length;

// Fonction changer image/texte
function updateSlide() {
    const currentSlideData = slides[currentSlide];
    const bannerImg = document.querySelector(".banner-img"); //
    bannerImg.src = `./assets/images/slideshow/${currentSlideData.image}`; // Changement image dynamique avec ${currentSlideData.image}
    bannerTagline.innerHTML = currentSlideData.tagLine;

// Fonction point blanc pour slide actuel
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentSlide);
    });
}

//  Fonction créer un point pour chaque slide
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

	dot.addEventListener('click', () => {
		currentSlide = index;
		updateSlide();
	});
});

// Charge la page à la slide 0
updateSlide();

// Slide gauche
leftArrow.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Changement de slide + infini
    updateSlide(); //
});

// Slide droite
rightArrow.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateSlide(); //
});


