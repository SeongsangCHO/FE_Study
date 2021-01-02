import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el){
  this.init(el);
}


//server로부터 데이터를 받아 그려주는 부분
ResultView.render = function(data = []){
  console.log(tag, 'render()', data);
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색결과가 없습니다.';  
  this.show();
}

ResultView.getSearchResultsHtml = function(data){
  return data.reduce((html, item) => {
    html += this.getSearchResultsItemHtml(item);
    return html;
  }, '<ul>') + '</ul>'
}

ResultView.getSearchResultsItemHtml = function (item) {
  return `<li>
    <img src=${item.image}></img>
    <p>${item.name}</p>
    </li>
  `;
}

ResultView.resetResult = function (){
  this.el.innerHTML = '';
}
export default ResultView;