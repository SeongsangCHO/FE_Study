import ModeChangeView from "../views/ModeChangeView.js";

const tag = "[MainController.js]";

export default {
  init() {
    console.log(tag);

    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    
  },
};
