import ModeChangeView from "../views/ModeChangeView.js";
import TabView from "../views/TabView.js";

const tag = "[MainController.js]";

export default {
  init() {
    console.log(tag);

    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    TabView.setup(document.querySelector(".side-menu"))
      .on('@changeTab', e => this.onChangeTab(e.detail.tabName));

  },
  onChangeTab(tabName){
  }
};
