"use strict";
const slidesData = [
  "Discover Greece",

  "Discover Italy",

  "Discover Paris",

  "Discover Thailand",
];

const slides = document.querySelectorAll(".slider-img");
let counter = 0;

slides.forEach(function (slide, i) {
  slide.style.left = `${i * 100}%`;
});

const slideImg = function () {
  slides.forEach(function (img, i) {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
  document.querySelector(".slider-country").textContent = slidesData[counter];
};

const next = () => {
  counter++;
  if (counter > 3) counter = 0;
  slideImg();
};
const prev = () => {
  counter--;
  if (counter < 0) counter = 3;
  slideImg();
};
const services = [
  {
    name: "Flight Booking",
    imgSrc: "./images/card1.jpg",
    description:
      "Book your flights hassle-free with our fast and easy service.",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
  {
    name: "HOTEL & RESORT BOOKING",
    imgSrc: "./images/card2.jpg",
    description:
      "Need a place to stay? Our booking service makes it easy to find the perfect hotel or resort.",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
  {
    name: "FAMILY TRIP PLANNER",
    imgSrc: "./images/card3.jpg",
    description:
      "Let us plan your perfect family vacation with our personalized trip planner.",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
  {
    name: "CRUISE TOUR",
    imgSrc: "./images/card4.jpg",
    description:
      "Experience the adventure of a lifetime on our luxurious cruise ships. Explore exotic destinations and enjoy world-class entertainment. Book your cruise tour today!",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
  {
    name: "FIRE CAMP",
    imgSrc: "./images/card5.jpg",
    description:
      "Outdoor camping with a cozy bonfire, roasting marshmallows, and stargazing under the open sky.",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
  {
    name: "CORPORATE HOLIDAYS",
    imgSrc: "./images/card6.jpg",
    description:
      "Unwind and bond with your team on a hassle-free Corporate Holiday experience.",
    details:
      "RANDOM TEXT RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM TEXT",
  },
];

const cards = document.querySelectorAll(".services-card");

for (let i = 0; i < cards.length; i++) {
  cards[
    i
  ].innerHTML = `<img src =${services[i].imgSrc}> <h3>${services[i].name} </h3> <p> ${services[i].description}</p>
`;
}

const modal = document.querySelector(".modal");
cards.forEach((card, i) => {
  card.addEventListener("click", () => {
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    modal.innerHTML = ` <h3>${services[i].name} </h3> <p> ${services[i].description}</p>  <p> ${services[i].details}</p>`;
  });
});
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

const iconMenu = document.querySelector(".icon-menu");
const burgerMenu = document.querySelector(".burger-menu");

iconMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});
