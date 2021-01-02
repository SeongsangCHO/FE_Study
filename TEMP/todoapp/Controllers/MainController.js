import ModeChangeView from '../View/ModeChangeView.js';
import HeaderView from '../View/HeaderView.js';

const tag = '[MainController.js]'
export default {
  init() {
    console.log(tag);
    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    HeaderView.setup(document.querySelector(".header"));
  },

};