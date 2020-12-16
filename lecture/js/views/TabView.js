import View from "./View.js";

const tag = "[TabView]";

const TabView = Object.create(View);

TabView.setup = function (el) {
  this.init(el);
  this.bindClick(el);
  return this;
};

TabView.bindClick = function(el){
  //li태그에 클릭event 등록
  Array.from(this.el.querySelectorAll("li")).forEach((li) => {
    li.addEventListener('click', e => this.onClick(li.innerHTML));
  })
  
}

TabView.onClick = function(tabName) {
  this.setActiveTap(tabName);
  this.emit('@changeTab', {tabName});
}

TabView.setActiveTap = function (tabName) {
  Array.from(this.el.querySelectorAll("li")).forEach((li) => {
    li.className = li.innerHTML === tabName ? "active" : "";
  });
};

export default TabView;
