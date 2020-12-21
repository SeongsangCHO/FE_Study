import View from "./View.js";

const tag = "[ModeChangeView.js]";

/* theme changing element object*/
const DOM = {
  contentEl: document.querySelector("div.content"),
  navbarEl: document.querySelector("nav.nav-bar"),
};
/* theme status object */
const status = {
  currentTheme: localStorage.getItem("theme"),
  preferDarkScheme: window.matchMedia("(prefers-color-scheme: dark)"),
};

const ModeChangeView = Object.create(View);

ModeChangeView.setup = function (el) {
  console.log(status.currentTheme);

  this.init(el);
  this.getUserConfigTheme()
    .setUserConfigTheme()
    .bindClickEvent();

  return this;
};

ModeChangeView.bindClickEvent = function () {
  this.el.addEventListener("click", (e) => this.onToggle(e));
};


ModeChangeView.onToggle = function (e) {
  //theme item이 light => on, dark => off
  this.toggleDarkAttribute();
  DOM.contentEl.classList.contains("dark")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};


ModeChangeView.toggleDarkAttribute = function () {
  for (let element in DOM) {
    DOM[element].classList.toggle("dark");
  }
};


ModeChangeView.setUserConfigTheme = function () {
  if (status.currentTheme == "dark") {
    this.toggleDarkAttribute();
  }
  return this;
};


ModeChangeView.getUserConfigTheme = function () {
  //If hasn't localStorage
  if (!status.currentTheme) {
    //false= light
    status.preferDarkScheme.matches
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
    status.currentTheme = localStorage.getItem("theme");
  }
  return this;
};


export default ModeChangeView;
