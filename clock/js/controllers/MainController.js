import ModeChangeView from "../views/ModeChangeView.js";
import TabView from "../views/TabView.js";
import ClockView from "../views/ClockView.js";
import ClockContentsView from "../views/ClockContentsView.js";
import StopWatchView from "../views/StopWatchView.js";
import TodoListView from '../views/TodoListView.js';

const tag = "[MainController.js]";

export default {
  init() {
    this.selectedTab = "스톱워치";
    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    TabView.setup(document.querySelector(".side-menu"))
      .on('@changeTab', e => this.onChangeTab(e.detail.tabName));
    ClockView.setup(document.querySelector("div.content"))
    
    StopWatchView.setup(document.querySelector("div.content"))
    TodoListView.setup(document.querySelector(".todo-container"))
    this.renderView();

  },
  checkTimerWorking(isTimerWorking){
    console.log(isTimerWorking);
    this.renderView();
  },
  renderView(){
    /*
    * 클릭되었을 때 타이머가 있는지부터 확인하고, 없다면
    * 타이머 생성, 있으면 이미 돌아가고 있는 상태.
    */
    if(this.selectedTab == "시계"){
      ClockView.clockWorker();
      
    }
    if(this.selectedTab == "스톱워치"){
      /* 현재 실행중인 interval 스톱해야함. */
      ClockView.stopWorker();
      StopWatchView.stopWatchWorker();
    }
  },
  onChangeTab(tabName){
    this.selectedTab = tabName;
    //renderView 되기전 이전 interval stop하고 숨겨야함.
    this.renderView();
  }
};
