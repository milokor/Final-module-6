export const chatMenu = () => {
  const feedback_button = document.querySelectorAll('.header__button-chat')
  const modal_feedback = document.querySelector('.feedback-menu')
  const close_feedback = document.querySelector('.feedback-close')
  const modalFeedbackContainer = document.querySelector(
    '.feedback-menu__container'
  )
  const body = document.querySelector('.body')

  const closeModalFeedback = () => {
    modal_feedback.classList.remove('modal--show')
    body.classList.remove('body-style')
    modal_feedback.style.display = 'none'
  }

  document.addEventListener('click', (e) => {
    let withinBoundaries = e.composedPath().includes(modalFeedbackContainer)
    if (!withinBoundaries) {
      closeModalFeedback()
    }
  })

  feedback_button.forEach(function (button) {
    button.addEventListener('click', (e) => {
      e.stopPropagation()
      modal_feedback.classList.add('modal--show')
      body.classList.add('body-style')
      modal_feedback.style.display = 'flex'
    })
  })

  close_feedback.addEventListener('click', () => {
    closeModalFeedback()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModalFeedback()
    }
  })
}
