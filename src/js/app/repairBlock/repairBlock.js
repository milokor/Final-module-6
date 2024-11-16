export const repairBlock = () => {
  const button_repair = document.querySelector('.repair-button')
  const text_repair = document.querySelector('.repair-button__text')
  const wrapper_repair = document.querySelector('.repair__wrapper')
  const img_repair = document.querySelector('.repair-button__img')
  button_repair.addEventListener('click', () => {
    if (!wrapper_repair.classList.contains('repair__wrapper--open')) {
      wrapper_repair.classList.add('repair__wrapper--open')
      img_repair.classList.add('repair-button__img--open')
      text_repair.textContent = 'Скрыть'
    } else {
      wrapper_repair.classList.remove('repair__wrapper--open')
      img_repair.classList.remove('repair-button__img--open')
      wrapper_repair.classList.add('repair__wrapper--close')
      text_repair.textContent = 'Показать все'
    }
  })
}
