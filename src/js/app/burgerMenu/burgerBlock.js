export const burgerMenu = () => {
  const burger_button = document.getElementById('burger-button')
  const modal_burger = document.querySelector('.burger-menu')
  const body = document.querySelector('.body')
  const close = document.querySelector('.header-navigation__button-close')
  const burgerMenuContainer = document.querySelector('.burger-menu__container')

  const closeModalBurger = () => {
    modal_burger.classList.remove('modal--show')
    body.classList.remove('body-style')
  }

  document.addEventListener('click', (e) => {
    let withinBoundaries = e.composedPath().includes(burgerMenuContainer)
    if (!withinBoundaries) {
      closeModalBurger()
    }
  })

  burger_button.addEventListener('click', (e) => {
    e.stopPropagation()
    modal_burger.classList.add('modal--show')
    body.classList.add('body-style')
  })

  close.addEventListener('click', () => {
    closeModalBurger()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModalBurger()
    }
  })
}
