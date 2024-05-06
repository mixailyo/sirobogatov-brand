function mainCatalogInit() {
  let mainCatalogSlider = document.querySelector('.main-catalog__slider');

  if (mainCatalogSlider) {
    const swiper = new Swiper(mainCatalogSlider, {
      // Navigation arrows
      navigation: {
        prevEl: '.main-catalog__slider .swiper-navigation-btn--prev',
        nextEl: '.main-catalog__slider .swiper-navigation-btn--next',
      },

      pagination: {
        el: '.main-catalog__slider  .swiper-pagination',
      },  

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1.3,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
    });
  }
}

export { mainCatalogInit }