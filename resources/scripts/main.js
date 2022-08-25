import Swiper, {Pagination } from "swiper";

export default class Main {
    constructor() {
      this.init();
    }

  
    init() {
        

        new Swiper(".grow__swiper", {
          modules: [Pagination],
          slidesPerView: 1.23,
          spaceBetween: 10,
        
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          breakpoints: {
            528: {
              slidesPerView: 1.8,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 1.45,
              spaceBetween: 120,
            },
            1220: {
              slidesPerView: 2.45,
              spaceBetween: 140,
            },
            1440: {
              slidesPerView: 2.47,
              spaceBetween: 290,
            },
          },
        });
        
    }
  }