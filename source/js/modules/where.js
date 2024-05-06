function whereInit() {
  let whereShopsDivisionShops = document.querySelectorAll('.where__shops-division-shops');

  if (whereShopsDivisionShops.length && document.documentElement.clientWidth < 768) {
    whereShopsDivisionShops.forEach(shopSlider => {
      const swiper = new Swiper(shopSlider, {
        spaceBetween: 14,
        slidesPerView: 1.8,

        // Navigation arrows
        navigation: {
          nextEl: shopSlider.querySelector('.swiper-navigation-btn--next'),
          prevEl: shopSlider.querySelector('.swiper-navigation-btn--prev'),
        },
      });
    })
  }
}

export { whereInit }