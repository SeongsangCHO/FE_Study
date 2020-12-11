import View from './View.js';

const tag = '[FormView]';

/*View 객체 복사
  복사하는 이유? 
  재사용성을 위해 미리 만들어놓고 복사해서 쓰는듯?
  */
const FormView = Object.create(View);

//el = MainController에서 주입받은 form태그
//this는 FormView를 가리킴.

FormView.setup = function (el)  {
  this.init(el);
  this.inputEl = el.querySelector('[type=text]');
  this.resetEl = el.querySelector('[type=reset]');
  // reset el 숨김처리
  this.showResetBtn(false);
  this.bindEvents();
}

//defalut는 true, 인자를 받으면 그에 맞게 들어감
//show값이 true면 보이고 false면 X버튼 안보이도록 처리
FormView.showResetBtn = function(show = true){
  this.resetEl.style.display  = show ? 'block' : 'none';
}

FormView.bindEvents = function() {
  
  this.inputEl.addEventListener('keyup', e => this.onKeyUp(e))
}

FormView.onKeyUp = function(e) {
  console.log(e);
  this.showResetBtn(this.inputEl.value.length);
}

export default FormView;