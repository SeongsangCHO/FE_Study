export default class Breadcrumb {
  constructor({ $App, pathList, pathMap }) {
    this.$App = $App;
    this.pathMap = pathMap;
    console.log("construtor breadcrumb...");
    this.init();
    this.render(pathMap);
  }

  init() {
    this.$nav = document.createElement("nav");
    this.$nav.classList = "Breadcrumb";
    this.$App.appendChild(this.$nav);
  }
  render(pathMap) {
    let pathArray = Array.from(pathMap, ([id, pathName]) =>({id, pathName}));
    console.log(pathArray);
    
    this.$nav.innerHTML = pathArray
      .map((item) => {
        return `
      <div>${item.pathName}</div>
      `;
      })
      .join("");
  }
}
