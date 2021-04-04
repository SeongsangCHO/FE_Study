export default class Nodes {
  constructor({ $App, getState, browsingSubDir, moveToPrevDir, handlerImageFilePath }) {
    this.handlerImageFilePath = handlerImageFilePath;
    this.moveToPrevDir = moveToPrevDir;
    this.browsingSubDir = browsingSubDir;
    this.getState = getState;
    this.$App = $App;
    this.init();
    this.render();
    this.bindNodeClickEvent();
  }
  parseFilePath(filePath){
    if(filePath[0] === "/"){
      return filePath.slice(1);
    }
    return filePath;
  }
  onClickNode(e) {
    const type = e.target.parentNode.dataset["type"];
    const dirName = e.target.parentNode.dataset["name"];
    const dirId = e.target.parentNode.dataset["id"];
    const filePath = e.target.dataset["filePath"];
    switch (type) {
      case "DIRECTORY": {
        this.browsingSubDir(dirName, dirId);

        break;
      }
      case "FILE": {
        this.handlerImageFilePath(this.parseFilePath(filePath));
        break;
      }
      case "PREV": {
        this.moveToPrevDir();
        break;
      }
      default:
        return;
    }
  }

  bindNodeClickEvent() {
    this.$nodesContainer.addEventListener("click", this.onClickNode.bind(this));
  }

  init() {
    this.$nodesContainer = document.createElement("div");
    this.$nodesContainer.classList = "Nodes";
    this.$App.appendChild(this.$nodesContainer);
  }

  renderPrevElement() {
    return `
    <div class="Node" data-type="PREV">
      <img src="./assets/prev.png">
    </div>
    `;
  }
  render() {
    const { data, currentPathId } = this.getState();
    console.log(currentPathId);

    if (data[currentPathId] !== undefined) {
      this.$nodesContainer.innerHTML =
        (currentPathId !== "root" ? this.renderPrevElement() : "") +
        data[currentPathId].subDirData
          .map((data) => {
            return `
      <div class="Node" data-id="${data.id}" data-name="${data.name}" data-type="${data.type}">
        <img data-file-path="${data.filePath}" src="./assets/${data.type}.png">
        <div>${data.name}</div>
      </div>
      `;
          })
          .join("");
    }
  }
}
