function advantagesInit() {
  let advantagesSliders = document.querySelectorAll('.advantages__slider');

  if (advantagesSliders.length) {
    advantagesSliders.forEach(advantagesSlider => {
      const swiper = new Swiper(advantagesSlider, {
        // Navigation arrows
        navigation: {
          nextEl: advantagesSlider.querySelector('.swiper-navigation-btn--next'),
        },  
  
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
    })
  }
}

export { advantagesInit }