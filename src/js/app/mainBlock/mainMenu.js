export const mainMenu = () => {
  const buttonMain = document.querySelector('.main__read-more')
  const textMain = document.querySelector('.main__read-more-content')
  const wrapperMain = document.querySelector('.main__content')
  const imgMain = document.querySelector('.main__read-more-img')
  buttonMain.addEventListener('click', () => {
    if (!wrapperMain.classList.contains('main-content--open')) {
      wrapperMain.classList.add('main-content--open')
      imgMain.classList.add('brand-button__img--open')
      textMain.textContent = 'Скрыть'
    } else {
      wrapperMain.classList.remove('main-content--open')
      imgMain.classList.remove('brand-button__img--open')
      wrapperMain.classList.add('main-content--close')
      textMain.textContent = 'Показать все'
    }
  })
}
