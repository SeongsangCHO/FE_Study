/*
수행과정
init로 이벤트리스너 등록(click, keyup)
해당 클릭이벤트 수행
이벤트에는 emit 호출(이벤트 수행했을 때 처리되는 부수효과같은것, 커스텀이벤트 호출)
메인문에서 클릭이벤트를 통해 따라오는 커스텀이벤트의 결과를 핸들링하는 handler호출
*/
import View from "./View.js";

const tag = "[FormView]";

/*View 객체 복사
  복사하는 이유? 
  재사용성을 위해 미리 만들어놓고 복사해서 쓰는듯?
  */
const FormView = Object.create(View);

//el = MainController에서 주입받은 form태그
//this는 FormView를 가리킴.

FormView.setup = function (el) {
  this.init(el);
  this.inputEl = el.querySelector("[type=text]");
  this.resetEl = el.querySelector("[type=reset]");
  // reset el 숨김처리
  this.showResetBtn(false);
  this.bindEvents();

  //MainController에서 체이닝으로 다른 메소드 호출하기 위해서 return this
  return this;
};

//defalut는 true, 인자를 받으면 그에 맞게 들어감
//show값이 true면 보이고 false면 X버튼 안보이도록 처리
FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? "block" : "none";
};

FormView.bindEvents = function () {
  this.on("submit", (e) => e.preventDefault());
  this.inputEl.addEventListener("keyup", (e) => this.onKeyUp(e));
  this.resetEl.addEventListener("click", (e) => this.onClickReset(e)); //클릭이벤트 등록
};

// 엔터입력하면 검색결과가 보인다.
FormView.onKeyUp = function (e) {
  //엔터키인지 키값으로 구별할 수 있음
  const enterKey = 13;
  this.showResetBtn(this.inputEl.value.length);
  if (!this.inputEl.value.length) { this.emit('@reset'); }
  if (e.keyCode !== enterKey) {
    return;
  }
  //..todo 엔터일 때 메인컨트롤러에게 해당 이벤트발생함과 데이터를 전달해줌.
  this.emit("@submit", { input: this.inputEl.value });
  
  
};

FormView.onClickReset = function (e) {
  this.emit('@reset');
  this.showResetBtn(false);
};
export default FormView;
