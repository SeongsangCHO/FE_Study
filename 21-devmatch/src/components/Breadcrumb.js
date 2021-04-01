export default class Breadcrumb {
  constructor({ $App, pathArrState }) {
    this.$App = $App;
    this.pathArrState = pathArrState;
    this.init();
    this.render(this.pathArrState);
  }
  init() {
    this.$nav = document.createElement("nav");
    this.$nav.classList = "Breadcrumb";
    this.$App.appendChild(this.$nav);
  }
  //경로에 있는 원소만큼 출력시켜야함.
  render(pathArrState) {
    this.$nav.innerHTML = pathArrState
      .map((path) => {
        return `<div>${path}</div>`;
      })
      .join("");
  }
}
