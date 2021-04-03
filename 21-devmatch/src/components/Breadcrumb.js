export default class Breadcrumb {
  constructor({ $App, pathList, pathMap, onJumpPath }) {
    this.onJumpPath = onJumpPath;
    this.$App = $App;
    this.pathMap = pathMap;
    console.log("construtor breadcrumb...");
    this.init();
    this.render(pathMap);
    this.bindEvent();
  }
  onClickPath(e) {
    const id = e.target.dataset["id"];
    if (id !== undefined) {
      this.onJumpPath(id);
    }
    //해당 dir클릭시 현재까지 path만 필터링되어야하니깐,,
    //pathList에서 처음부터, 클릭된 id를 포함하여 필터링시켜야함. slice(0, pathList.indexOf(pathId))
    //pathMap =>pathList.forEach((item) => pathList에 없는것만 지워야함. if(!map.has(item)) delete(item))
    //root- 1 - 3 - 5 , 3클릭시 , root - 1 - 3
  }
  bindEvent() {
    this.$nav.addEventListener("click", this.onClickPath.bind(this));
  }
  init() {
    this.$nav = document.createElement("nav");
    this.$nav.classList = "Breadcrumb";
    this.$App.appendChild(this.$nav);
  }
  render(pathMap) {
    let pathArray = Array.from(pathMap, ([id, pathName]) => ({ id, pathName }));

    this.$nav.innerHTML = pathArray
      .map((item) => {
        return `
      <div data-id="${item.id}">${item.pathName}</div>
      `;
      })
      .join("");
  }
}
