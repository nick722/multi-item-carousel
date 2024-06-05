const card = document.querySelector(".carousel-container");
console.log("card", card);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");
const carouselWidth = document.querySelector(".carousel-container").offsetWidth;
const cardWidth = document.querySelector(".card-container").offsetWidth;

next.addEventListener("click", () => {
  track.style.transform = `translateX(-${cardWidth}px)`;
});

prev.addEventListener("click", () => {
  track.style.transform = `translateX(${0}px)`;
});
