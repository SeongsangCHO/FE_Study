import View from "./View.js";

const tag = "[TabView]";

const TabView = Object.create(View);

TabView.setup = function (el) {
  this.init(el);
  this.bindClick(el);
  return this;
};

TabView.setActiveTab = function (tabName) {
  Array.from(this.el.children).forEach((li) => {
    li.className = li.innerHTML === tabName ? "active" : "";
  });
};
TabView.bindClick = function(el){
  //li태그에 클릭event 등록
  Array.from(this.el.querySelectorAll("li")).forEach((li) => {
    li.addEventListener('click', e => this.onClick(li.innerHTML));
  })
  
}

TabView.onClick = function(tabName) {
  this.setActiveTab(tabName);
  this.emit('@changeTab', {tabName});
}



export default TabView;
