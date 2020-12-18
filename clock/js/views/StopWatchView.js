import ResultView from './ResultView.js';

const tag = '[StopWatchView.js]';

const StopWatchView = Object.create(ResultView);
/* 새로고침해도 계속 수행해야함. */
StopWatchView.stopWatchWorker = function(){
  console.log(tag,'stopWatchWorker');
  let content = this.getLocalStorage();
  this.clockEl.innerText = 'hh'
}

StopWatchView.getLocalStorage = function(){
  if(!localStorage.time){
    console.log('hi');
    
  }
}

export default StopWatchView;