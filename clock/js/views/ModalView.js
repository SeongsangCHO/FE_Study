import View from './View.js';

const tag = '[ModalView.js]';

const ModalView = Object.create(View);

ModalView.setup = function(el){
  this.init(el);
  this.modalBg = document.querySelector('.modal-background');
  this.closeBtn = this.el.querySelector('.btn-modal-close');
  this.closeModal();
  this.bindCloseEvent();
  return this;
}

ModalView.bindCloseEvent = function(){
  this.closeBtn.addEventListener('click', e => this.onClickCloseModal(e));
  this.modalBg.addEventListener('click', e => this.onClickCloseModal(e));
}

ModalView.onClickCloseModal = function(e){
  this.closeModal();
}

ModalView.closeModal = function(){
  this.modalBg.classList.remove("modal-open");
  this.el.classList.remove("modal-open");
}

ModalView.showModal = function(){
  this.modalBg.classList.add("modal-open");
  this.el.classList.add("modal-open");
}

ModalView.openModal = function (tagName){

}
export default ModalView;