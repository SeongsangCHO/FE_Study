import View from './View.js';

const tag = '[ModalView.js]';

const ModalView = Object.create(View);

ModalView.setup = function(el){
  this.init(el);
  return this;
}

ModalView.openModal = function (tagName){
  const modal = document.createElement('div');
  const backGround = document.createElement('div');
  const header = document.createElement('h3');
  header.innerText = "헤더임";
  const button = document.createElement('button');
  button.innerText = "버튼임";
  // modal.setAttribute("id", "modal-window");
  modal.classList = 'modal-window';
  
  modal.appendChild(header);
  modal.appendChild(button);
  document.body.append(modal);
  backGround.classList = 'modal-background';
  document.body.append(backGround);
  console.log('append');
  console.log(tagName);


}
export default ModalView;