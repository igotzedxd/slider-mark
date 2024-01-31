const renderSlides = document.querySelector(".slides");

const images = [
  {
    text: "Billede 1 - Her er en beskrivelse af dette billede.",
    src: ".././assets/img/img1.jpeg",
    alt: "billede 1",
  },
  {
    text: "Billede 2 - Her er en beskrivelse af dette billede.",
    src: ".././assets/img/img2.jpg",
    alt: "billede 2",
  },
  {
    text: "Billede 3 - Her er en beskrivelse af dette billede.",
    src: ".././assets/img/img3.jpg",
    alt: "billede 3",
  },
];

images.forEach((slide) => {
  renderSlides.innerHTML += `<div class="single-slide">
                <div class="slide-content">${slide.text}</div>
                <img src="${slide.src}" alt="${slide.alt}">
            </div>`;
});

const nextBtn = document.querySelector("[data-direction=next]");
const previousBtn = document.querySelector("[data-direction=previous]");
const slides = document.querySelectorAll("#slider01 .single-slide");

let slidesLength =
  slides.length - 1; /* Index'et på sidste billede i slideren */
let currentImageIndex = 0;

const display = document.querySelector(".display");

const setActiveSlide = (index) => {
  /* Funktionen bestemmer hvilket billede der vises */

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add(
    "active"
  ); /* får index fra currentImageIndex variablen, og smider 'active' på denne */

  display.textContent = `${index + 1} udaf ${slidesLength + 1}`;
};

const next = () => {
  if (currentImageIndex >= slidesLength) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }

  setActiveSlide(currentImageIndex); //Skal køres hver gang der trykkes på knapperne, for at registrere at currentImageIndex nu er noget andet, og at slideren skal skifte op eller ned
};

const previous = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = slidesLength;
  } else {
    currentImageIndex -= 1;
  }

  /* 
    currentImageIndex = currentImageIndex === 0 ? slidesLength : currentImageIndex -= 1;
    */

  setActiveSlide(currentImageIndex);
};

/* Hvis funktionerne eksisterer */
if (nextBtn && previousBtn) {
  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("click", previous);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    next();
  } else if (event.key === "ArrowLeft") {
    previous();
  }
});

const changeSlides = () => {
  setInterval(() => {
    next();
  }, 5000);
};

changeSlides();
/* Skriv denne lige efter setActiveSlide funktionen er skrevet - så vises der et billede med det samme*/

setActiveSlide(currentImageIndex);
