import View from "./View.js";

const tag = "[TodoListView.js]";

const TodoListView = Object.create(View);

//el is div.todo-container
TodoListView.setup = function (el) {
  this.init(el);
  this.slideBtnEl = this.el.querySelector(".btn-fold");
  this.isToggled = false;
  this.bindSlideEvent();
  return this;
};

/*binding event .btn-fold in el*/
TodoListView.bindSlideEvent = function () {
  this.slideBtnEl.addEventListener("click", (e) => this.onClickSlider(e));
};

/*
Think about take care of event bubbling
 */
TodoListView.onClickSlider = function (e) {
  this.el.classList.toggle("open");
};
export default TodoListView;
