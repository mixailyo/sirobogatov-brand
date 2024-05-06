function recipeInit() {
  let recipeSliders = document.querySelectorAll('.recipe__slider');

  if (recipeSliders.length) {
    recipeSliders.forEach(recipe => {
      const swiper = new Swiper(recipe, {
        // If we need pagination
        pagination: {
          el: recipe.querySelector('.swiper-pagination'),
        },
      
        // Navigation arrows
        navigation: {
          nextEl: recipe.querySelector('.swiper-navigation__btn--next'),
          prevEl: recipe.querySelector('.swiper-navigation__btn--prev'),
        },
      });
    })
  }
}

export { recipeInit }