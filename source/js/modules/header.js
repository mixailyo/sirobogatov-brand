function headerInit() {
  let header = document.querySelector('.header')
  let headerHamburger = document.querySelector('.header__hamburger')
  let headerMenu = document.querySelector('.header__menu')
  let headerMenuClose = document.querySelector('.header__menu-close')

  document.documentElement.style.setProperty('--header-height', `${header.clientHeight}px`);

  if (headerHamburger) {
    headerHamburger.addEventListener('click', () => {
      headerMenu.classList.toggle('is-active')
      header.classList.toggle('is-active')
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('header__menu-link')) {
        headerMenu.classList.remove('is-active')
        header.classList.remove('is-active')
      }
    })
  }
}

export { headerInit }