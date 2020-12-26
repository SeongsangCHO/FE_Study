import ClockView from "./ClockView.js";

const tag = "[StopWatchView.js]";

const StopWatchView = Object.create(ClockView);
/* 새로고침해도 계속 수행해야함. */

StopWatchView.setup = function (el) {
  this.init(el);
  this.getPrevTime();
  return this;
};

StopWatchView.getPrevTime = function(){
  this.ms = localStorage.getItem("ms") || 0;
  this.ss = localStorage.getItem("ss") || 0;
  this.mm = localStorage.getItem("mm") || 0;
  this.hh = localStorage.getItem("hh") || 0;
  this.dd = localStorage.getItem("dd") || 0;
}

/*
모델에서 localStorage 데이터 가져오기
시간관련 로직은 여기서 짜기
setup시킬때 getLocalStorage
*/
StopWatchView.stopWatchWorker = function () {
  console.log(tag, "stopWatchWorker");
  let content = this.getLocalStorage();
  this.clockEl.innerHTML = `00:00:00<span class="clock-ms">.00</span>`;
  const updateTime = () =>{
    console.log('ㅗㅑ');
  }
  this.isInterval = setInterval(updateTime, 1);
};

StopWatchView.getLocalStorage = function () {
  if (!localStorage.getItem("prevStopWatchTime")) {
    localStorage.setItem("prevStopWatchTime", 0);
  }
  return localStorage.getItem("prevStopWatchTime");
};

export default StopWatchView;
