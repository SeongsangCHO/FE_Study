import KeywordView from "./KeywordView.js";

const tag = "[HistoryView]";

const HistoryView = Object.create(KeywordView);

//override
HistoryView.getKeywordsHtml = function (data) {
  return (
    data.reduce((html, item) => {
      html += `<li data-keyword=${item.keyword}>
    ${item.keyword}
      <span class="date">${item.date}</span>
      <button class="btn-remove"></button>
    </li>`;
      return html;
    }, `<ul class="list">`) + `</ul>`
  );
};

HistoryView.bindRemoveBtn = function () {
  console.log(this.el);
  Array.from(
    this.el.querySelectorAll("button.btn-remove")
  ).forEach((btn) => {
    btn.addEventListener('click', e =>{
      // 추가하지 않으면 버튼클릭시 clickHistory가 수행됨.
      //현재 btn-remove는 search-history의 자손임.
      //이벤트가 상위 element로 전파되는 것을 막음
      
      e.stopPropagation();
      this.onRemove(btn.parentElement.dataset.keyword);
    })
  });
};

HistoryView.onRemove = function (keyword) {
  this.emit('@remove', {keyword});
}
export default HistoryView;

