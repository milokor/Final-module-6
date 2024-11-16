import { Pagination } from 'swiper/modules'
import { resizableSwiper } from './swiper/swiper'
import { brandBlock } from './brandsBlock/brandsBlock'
import { mainMenu } from './mainBlock/mainMenu'
import { repairBlock } from './repairBlock/repairBlock'
import { burgerMenu } from './burgerMenu/burgerBlock'
import { callMenu } from './callMenu/callMenu'
import { chatMenu } from './chatMenu/chatMenu'

export const app = () => {
  brandBlock()
  mainMenu()
  repairBlock()
  burgerMenu()
  callMenu()
  chatMenu()

  resizableSwiper('(max-width: 767px)', '.mySwiper', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.repair-swiper', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.price-swiper', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
