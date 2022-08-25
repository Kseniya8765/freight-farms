export default class Form {
    constructor() {
      this.btn = document.querySelector('.reserve__btn');
      this.items = document.querySelectorAll('.reserve-form');
      this.init();
    }
  
    show() {
      this.items.forEach((item) => {
        item.style.opacity = item.style.opacity === '1' ? '0' : '1';
  
        if (item.style.opacity === '1') {
          this.btn.innerText = 'Proceed';
          item.classList.add('reserve-form_active');
          //this.btn.classList.add('overview__show_active');
        } else {
          this.btn.innerText = 'Reserve with card';
          item.classList.remove('reserve-form_active');
          //this.btn.classList.remove('overview__show_active');
        }
      });
    }
  
    init() {
      this.btn.addEventListener('click', () => {
        this.show();
      });
    }
  }