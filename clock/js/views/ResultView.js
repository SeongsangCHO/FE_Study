import View from "./View.js";
/*
! 시계는 setInterVal추가해야함, 버튼 필요 없음.
*/

const tag = "[ResultView.js]";

const ResultView = Object.create(View);

ResultView.setup = function (el) {
  this.init(el);
  console.log(this);

  return this;
};

ResultView.getTime = function () {
  /* 
  해당 스코프에는 this가 전역임. bind시켜줘야.
  */
  let result = "";
  const date = new Date();
  let hour = String(date.getHours()).padStart(2,'0');
  let minutes = String(date.getMinutes()).padStart(2,'0');
  let seconds = String(date.getSeconds()).padStart(2,'0');
  result = result.concat(hour,":", minutes,":", seconds);
  return result;
};

ResultView.clockWorker = function () {
  const updateTime = () => {
    this.el.querySelector("#clock").innerText = this.getTime();
  };
  setInterval(updateTime, 1000);
};

export default ResultView;
