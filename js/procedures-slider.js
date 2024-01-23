const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
