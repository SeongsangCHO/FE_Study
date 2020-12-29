import View from './View.js';

const StopWatchView = Object.create(View);

StopWatchView.setup = function (el){
  this.init(el);
  console.log(el);
  return this;
}

StopWatchView.initRender = function (){
  console.log(localStorage.getItem("isRunning"));
  console.log(localStorage.getItem("time"));
  if(localStorage.getItem("time") == 0){
    //00,재설정(unable), 시작버튼 뷰 랜더
    this.renderStartView();
  }
}

StopWatchView.renderStartView = function (){
  //  this.el.innerHTML += `<span class="clock-ms">.00</span>`;
  
}
export default StopWatchView;