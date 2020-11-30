/* DOM */

const DOM = {
  toggleButton: document.getElementById("theme-toggle-button"),
};

DOM.toggleButton.innerHTML = "Hello";

/* Status */

const STATUS = {
  isToggled: true,
};

DOM.toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
