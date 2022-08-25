import Accordion from './accordion';
import Main from './main';
import SliderView from './view-slider';
import Select from './select';
import Form from './form';


window.addEventListener('DOMContentLoaded', async () => {
  window.refs = {

    accordion: {
      init: () => new Accordion(),
      selectors: ['.accordion__slider'],
    },


    main: {
      init: () => new Main(),
      selectors: ['body'],
    },

    sliderView: {
      init: () => new SliderView(),
      selectors: ['.view-slider'],
    },

    select: {
      init: () => new Select(),
      selectors: ['.overview'],
    },

    form: {
      init: () => new Form(),
      selectors: ['.reserve__content'],
    },
  };

  

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty('init') &&
      document.querySelectorAll(window.refs[ref].selectors.join(', ')).length >
        0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});