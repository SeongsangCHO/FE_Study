import View from './View.js';

const tag = '[KeywordView]';

const KeywordView = Object.create(View);

KeywordView.setup = function (el){
  this.init(el);
  return this;
}

KeywordView.render = function(data = []){
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다.';
  //DOM에 추가되고나서 이벤트 바인딩
  this.bindClickEvent();
  this.show();
  return this;//체이닝을 위해 return
}

KeywordView.getKeywordsHtml = function (data){
  return data.reduce((html, item, index) => {
    html += `<li data-keyword=${item.keyword}>
      <span class = "number">${index + 1} </span>
      ${item.keyword}
      </li>
    `
    return html;
  },`<ul class="list">`) + `</ui>`
}

KeywordView.bindClickEvent = function () {
  Array.from(this.el.querySelectorAll('li')).forEach((li) =>{
    li.addEventListener('click', e => this.onClickKeyword(e))
  })
}

KeywordView.onClickKeyword = function (e) {
  //클릭된 키워드를 알기 위해서 data-keyword를 사용
  const {keyword} = e.currentTarget.dataset;
  //클릭시 검색결과 페이지로 변경하기 위해 main에 알려줌
  this.emit('@click',{keyword});  
}
export default KeywordView;