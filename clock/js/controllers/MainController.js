import ModeChangeView from "../views/ModeChangeView.js";
import TabView from "../views/TabView.js";
import ResultView from "../views/ResultView.js";

const tag = "[MainController.js]";

export default {
  init() {
    console.log(tag);
    this.selectedTab = "시계";
    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    TabView.setup(document.querySelector(".side-menu"))
      .on('@changeTab', e => this.onChangeTab(e.detail.tabName));
    ResultView.setup(document.querySelector("div.content"))
    this.renderView();
  },
  renderView(){
    if(this.selectedTab == "시계"){
      ResultView.clockWorker();
    }
  },
  onChangeTab(tabName){
    this.selectedTab = tabName;
    console.log(this.selectedTab);
    this.renderView();
  }
};
