export const brandBlock = () => {
  const button = document.querySelector('.brand-button')
  const text = document.querySelector('.brand-button__text')
  const wrapper = document.querySelector('.mySwiper__wrapper')
  const img = document.querySelector('.brand-button__img')
  button.addEventListener('click', () => {
    if (!wrapper.classList.contains('mySwiper__wrapper--open')) {
      wrapper.classList.add('mySwiper__wrapper--open')
      img.classList.add('brand-button__img--open')
      text.textContent = 'Скрыть'
    } else {
      wrapper.classList.remove('mySwiper__wrapper--open')
      img.classList.remove('brand-button__img--open')
      wrapper.classList.add('mySwiper__wrapper--close')
      text.textContent = 'Показать все'
    }
  })
}
