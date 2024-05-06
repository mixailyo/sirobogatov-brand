function lineInit() {
  let lineSlider = document.querySelector('.line__slider');

  if (lineSlider) {
    const swiper = new Swiper(lineSlider, {
      // Navigation arrows
      navigation: {
        prevEl: '.line__slider-wrapper .swiper-navigation-btn--prev',
        nextEl: '.line__slider-wrapper .swiper-navigation-btn--next',
      },

      pagination: {
        el: '.line__slider-wrapper .swiper-pagination',
      },  

      slidesPerView: 6,
      spaceBetween: 20,

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3.1,
          spaceBetween: 16,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1366: {
          slidesPerView: 6,
          spaceBetween: 20
        },
      }
    });
  }
}

export { lineInit }