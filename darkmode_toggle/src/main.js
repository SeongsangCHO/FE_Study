/* DOM */

const DOM = {
  toggleButton: document.getElementById("theme-toggle-button"),
};

DOM.toggleButton.innerHTML = "Hello";

/* Status */

const status = {
  isToggled: true,
};

status.currentTheme = localStorage.getItem("theme");
status.preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentThemeApply = () => {
  if (status.currentTheme == "dark") document.body.classList.toggle("dark");
  else if (status.currentTheme == "light")
    document.body.classList.toggle("light");
};
currentThemeApply();

DOM.toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
