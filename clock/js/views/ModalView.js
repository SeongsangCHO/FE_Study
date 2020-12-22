import View from './View.js';

const tag = '[ModalView.js]';

const ModalView = Object.create(View);

ModalView.setup = function(el){
  this.init(el);
  return this;
}

ModalView.openModal = function (tagName){
  const backGround = document.createElement('div');
  this.el.append(backGround);
  console.log('append');
  
  this.el.innerHTML = '<div>Hello</div>';
}
export default ModalView;