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
  return this;
};

/* Match current config theme */
ModeChangeView.currentThemeApply = function () {
  if (status.currentTheme == "dark") {
    status.isToggled = true;
    this.changeTheme("dark-content");
  }
  if (status.currentTheme == "light") {
    this.changeTheme("white-content");
  }
};

ModeChangeView.bindClickEvent = function () {
  /* click event add listener  */
  this.el.addEventListener("click", (e) => {
    status.isToggled = !status.isToggled;
    return status.isToggled ? this.changeTheme("dark-content") : this.changeTheme("white-content"); 
    });
};

ModeChangeView.changeTheme = function (mode) {
  /* iterate object , remove exsiting mode then add clicked mode*/
  for (let element in DOM) {
    DOM[element].classList.remove("dark-content","white-content");
    DOM[element].classList.add(mode);
  }
};

export default ModeChangeView;
