import Swiper, { EffectFade } from 'swiper';
export default class Accordion {
    constructor() {
      this.activeClass = 'accordion__navigation-item_active';
      this.init();
    }
  
  
    init() {
      const sections = document.querySelectorAll('.accordion');

      sections.forEach((s) => {
        const pagination = [...s.querySelectorAll('.accordion__navigation-item')];
        const slider = s.querySelector('.accordion__slider .swiper');
        let activeNavigationItem = s.querySelector(
          '.accordion__navigation-item_active'
        );
  
        const mySwiper = new Swiper(slider, {
          modules: [EffectFade],
          allowTouchMove: false,
          centeredSlides: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
        });
  
        pagination.forEach((p, index) => {
          p.addEventListener('click', () => {
            mySwiper.slideTo(index);
            activeNavigationItem.classList.remove(this.activeClass);
            activeNavigationItem = p;
            activeNavigationItem.classList.add(this.activeClass);
          });
        });
      });
    }
  }