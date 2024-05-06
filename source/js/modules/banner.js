function bannerInit() {
  let bannerSliders = document.querySelectorAll('.banner__slider');

  if (bannerSliders.length) {
    bannerSliders.forEach(banner => {
      const swiper = new Swiper(banner, {
        // If we need pagination
        pagination: {
          el: banner.querySelector('.swiper-pagination'),
        },
      
        // Navigation arrows
        navigation: {
          nextEl: banner.querySelector('.swiper-navigation__btn--next'),
          prevEl: banner.querySelector('.swiper-navigation__btn--prev'),
        },
      });
    })
  }
}

export { bannerInit }