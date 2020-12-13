import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el){
  this.init(el);
}


//server로부터 데이터를 받아 그려주는 부분
ResultView.render = function(data = []){
  console.log(tag, 'render()', data);
  this.el.innerHTML = data.length ? this.getSearchResultsHTML(data) : '검색결과가 없습니다.';
}

ResultView.getSearchResultsHTML = function(data){
  debugger
}


export default ResultView;