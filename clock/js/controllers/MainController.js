import ModeChangeView from "../views/ModeChangeView.js";
import TabView from "../views/TabView.js";
import ClockView from "../views/ClockView.js";
import ClockContentsView from "../views/ClockContentsView.js";
import StopWatchView from "../views/StopWatchView.js";
import TodoListView from '../views/TodoListView.js';
import ModalView from '../views/ModalView.js';

import StopWatchModel from '../Model/StopWatchModel.js';

const tag = "[MainController.js]";

export default {
  init() {
    this.selectedTab = "스톱워치";
    // ResultView.setup(document.querySelector("div#timer"));

    ModeChangeView.setup(document.querySelector("#btn-toggle"));
    TabView.setup(document.querySelector(".side-menu"))
      .on('@changeTab', e => this.onChangeTab(e.detail.tabName));
    ClockView.setup(document.querySelector("div.content"))
    
    StopWatchView.setup(document.querySelector("div#timer"))
      // .on('@reset', e => this.resetStopWatch(e))// 리셋버튼 -> lap, 시작버튼으로 변경 // 시간이 0초일 때 unable
      // .on('@start', e => this.startStopWatch(e))// 시작버튼 -> 중지버튼으로 바뀜, 재설정 enable
      // .on('@lap', e => this.recordLap(e)) // 현재 타이머가 기록됨++
      // .on('@stop', e => this.stopStopWatch(e)) //중지버튼이 시작버튼으로 바뀜 // 

    // TodoListView.setup(document.querySelector(".todo-container"))
    //   .on('@openModal', e => this.openModalWindow(e.detail.tagId))

    ModalView.setup(document.querySelector(".modal-window"))
      .on('@closeModal', e => this.closeModalWindow(e))
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
      StopWatchModel.init();
      ClockView.stopWorker();
    }
  },
  onChangeTab(tabName){
    this.selectedTab = tabName;
    //renderView 되기전 이전 interval stop하고 숨겨야함.
    this.renderView();
  },

  openModalWindow(tagId){
    // ModalView.openModal(tagId);
    ModalView.showModal();
  },
  closeModalWindow(){
    ModalView.closeModal();
  },
  startStopWatch(){
    StopWatchModel.setLocalData("isRunning", true);
  },
  stopStopWatch(){
    StopWatchModel.setLocalData("isRunning", false);
  },
  resetStopWatch(){
    StopWatchModel.setLocalData("time", 0);
  }
};
