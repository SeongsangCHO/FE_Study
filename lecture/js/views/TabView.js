import View from './View.js';

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.setup = function (el) {
  this.init(el);
}

TabView.setActiveTap = function (tagName){
  Array.from(this.el.querySelectorAll('li').forEach(li => {
    li.className = li.innerHTML === tagName ? 'active' : '';
  }));
}

export default TabView;