import ResultView from "./ClockView.js";

const tag = "[StopWatchView.js]";

const StopWatchView = Object.create(ResultView);
/* 새로고침해도 계속 수행해야함. */

StopWatchView.setup = function (el) {
  this.init(el);
  return this;
};
/*
모델에서 localStorage 데이터 가져오기
시간관련 로직은 여기서 짜기
setup시킬때 getLocalStorage
*/
StopWatchView.stopWatchWorker = function () {
  console.log(tag, "stopWatchWorker");
  let content = this.getLocalStorage();
  this.clockEl.innerHTML = `00:00:00<span class="clock-ms">.00</span>`;
};

StopWatchView.getLocalStorage = function () {
  if (!localStorage.getItem("prevStopWatchTime")) {
    localStorage.setItem("prevStopWatchTime",0);
  }
  return localStorage.getItem("prevStopWatchTime")
};

export default StopWatchView;
