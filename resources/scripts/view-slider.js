import Swiper, { EffectFade, Pagination } from "swiper";



  export default class SliderView {
    constructor() {
      this.init();
    }
  

    init() {
        const menu = ["Open view", "Closed view"];
        
        const mySwiper = new Swiper(".view-slider", {
          modules: [EffectFade, Pagination],
          pagination: {
            el: ".view-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<button class="' +
            className +
            ' view-pagination__btn">' +
            menu[index] +
            ' </button>'
              );
            }
          },
          effect: "fade"
        });
    }
  }