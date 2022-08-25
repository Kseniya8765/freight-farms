export default class Select {
  constructor() {
    this.btn = document.querySelector('.overview__show');
    this.item = document.querySelector('.overview-list');
    this.init();
  }

  show() {
    this.item.classList.toggle('overview-list_active');
    this.btn.classList.toggle('overview__show_active');

    if (this.btn.classList.contains('overview__show_active')) {
      this.btn.innerText = 'Show less';
    } else {
      this.btn.innerText = 'Show more';
    }
  }

  init() {
    this.btn.addEventListener('click', () => {
      this.show();
    });
  }
}
