export const params = {
  spaceBetween: 0,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  speed: 600,
  parallax: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 0
    },
    640: {
      centeredSlides: false,
      slidesPerView: 1.2,
      spaceBetween: 0
    },
    767: {
      slidesPerView: 2
    }
  }
};
