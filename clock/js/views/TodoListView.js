import View from "./View.js";

const tag = "[TodoListView.js]";

const TodoListView = Object.create(View);

//el is div.todo-container
TodoListView.setup = function (el) {
  this.init(el);
  this.slideBtnEl = this.el.querySelector(".btn-fold");
  this.bindSlideEvent();
  this.bindListAddEvent();
  console.log(el);
  
  return this;
};

/* bind todoList add event  */
TodoListView.bindListAddEvent = function (){
  Array.from(this.el.querySelectorAll('.btn-todo-add'))
    .forEach((btn) => {
      btn.addEventListener('click', e => this.onClickListAdd(e.target.id));
    })
}

/* Open Modal window */
TodoListView.onClickListAdd = function (tagId){
  this.emit('@openModal',{tagId});
}

/*bind event .btn-fold in el*/
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
