import View from "./View.js";
/*
! 시계는 setInterVal추가해야함, 버튼 필요 없음.
*/

const tag = "[ClockView.js]";

const ClockView = Object.create(View);
ClockView.setup = function (el) {
  this.init(el);
  this.isInterval = '';
  this.clockEl = this.el.querySelector("#clock");
  this.initClockContent();
  return this;
};

ClockView.getTime = function () {
  let result = "";
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  return result.concat(hour, ":", minutes, ":", seconds);
};

ClockView.initClockContent = function () {
  this.clockEl.innerText = this.getTime();
};

ClockView.stopWorker = function () {
  if (this.isInterval) {
    clearInterval(this.isInterval);
  }
  return this;
};

/*
 * 클릭될 때마다 타이머 생성되네.
 ! 초기 진입시 인터벌 수행이면 인터벌 삭제
 ! 매번 진입해도 이전인터벌 삭제 후 재생성
 */

ClockView.clockWorker = function () {
  this.initClockContent();
  if (this.isInterval) {
    this.stopWorker();
  }
  const updateTime = () => {
    this.clockEl.innerText = this.getTime();
  };
  this.isInterval = setInterval(updateTime, 1000);
};

export default ClockView;
