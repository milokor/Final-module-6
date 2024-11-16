export const callMenu = () => {
  const call_button = document.querySelectorAll('.header__button-call')
  const modal_call = document.querySelector('.call-menu')
  const close_call = document.querySelector('.call-close')
  const body = document.querySelector('.body')
  const modalCallContainer = document.querySelector('.call-menu__container')
  const closeModalCall = () => {
    modal_call.classList.remove('modal--show')
    body.classList.remove('body-style')
    modal_call.style.display = 'none'
  }

  document.addEventListener('click', (e) => {
    let withinBoundaries = e.composedPath().includes(modalCallContainer)
    if (!withinBoundaries) {
      closeModalCall()
    }
  })

  call_button.forEach(function (button) {
    button.addEventListener('click', (e) => {
      e.stopPropagation()
      modal_call.classList.add('modal--show')
      body.classList.add('body-style')
      modal_call.style.display = 'flex'
    })
  })

  close_call.addEventListener('click', () => {
    closeModalCall()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModalCall()
    }
  })
}
