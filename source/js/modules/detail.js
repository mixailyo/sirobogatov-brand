function detailInit() {
  let detailSlider = document.querySelector('.detail__slider');

  if (detailSlider) {
    const swiper = new Swiper(detailSlider, {
      pagination: {
        el: '.detail__slider .swiper-pagination',
      },  
    });
  }
}

export { detailInit }