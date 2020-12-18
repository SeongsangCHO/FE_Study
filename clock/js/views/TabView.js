import View from './View.js';

const tag = '[TabView.js]';


const TabView = Object.create(View);


TabView.setup = function(el){
  this.init(el);
  this.bindClickEvent();
  return this;
}

TabView.bindClickEvent = function (){
  Array.from(this.el.querySelectorAll('button')).forEach((li) => {
    li.addEventListener('click', e => this.onClick(e.currentTarget.className));
  });
}

TabView.onClick = function(tabName) {
  /* according to clicked class name 
  change content view*/
  this.emit('@changeTab', {tabName})
}

export default TabView;