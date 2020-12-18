import View from "./View.js";

const tag = "[ModeChangeView.js]";

/* theme changing element object*/
const DOM = {
  contentEl: document.querySelector("div.content"),
  navbarEl: document.querySelector("nav.nav-bar"),
};
/* theme status object */
const status = {
  isToggled: true,
  currentTheme: localStorage.getItem("theme"),
  preferDarkScheme: window.matchMedia("(prefers-color-scheme: dark)"),
};

const ModeChangeView = Object.create(View);

ModeChangeView.setup = function (el) {
  this.init(el);
  this.bindClickEvent();
  this.currentThemeApply();
  console.log(status);

  return this;
};

/* Match current config theme */
ModeChangeView.currentThemeApply = function () {
  if (status.currentTheme == "dark") {
    this.changeTheme("dark-content");
  }
  if (status.currentTheme == "light") {
    this.changeTheme("light-content");
  }
};

ModeChangeView.bindClickEvent = function () {
  //토글이벤트 등록
  this.el.addEventListener("click", (e) => this.changeTheme("dark-content"));
};

ModeChangeView.changeTheme = function (mode) {
  /* iterate object  */

  for (let element in DOM) {
    DOM[element].classList.toggle(mode);
  }
};

export default ModeChangeView;
