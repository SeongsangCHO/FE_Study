export default class Nodes {
  constructor({ $App, nodesData, getContentById, prevRender, onClickImage }) {
    console.log("construtor Nodes...");
    this.onClickImage = onClickImage;
    this.prevRender = prevRender;
    this.getContentById = getContentById;
    this.$App = $App;
    this.init();
    this.render(nodesData);
    this.bindEvent();
  }

  onClickFile(e) {
    const nodeInfo = {
      type: e.target.parentNode.dataset["type"],
      id: e.target.parentNode.dataset["id"],
      name: e.target.parentNode.dataset["name"]
    };

    switch (nodeInfo.type) {
      case "DIRECTORY": {
        console.log("click dir");

        this.getContentById(nodeInfo);
        break;
      }
      case "FILE": {
        let filePath = this.pathParse(e.target.dataset["path"]);
        this.onClickImage(filePath);
        break;
      }
      case "PREV": {
        console.log("click PREV");

        this.prevRender(nodeInfo.id);
        break;
      }
      default: {
        return;
      }
    }
  }

  pathParse(path) {
    if (path[0] === "/") {
      return path.slice(1);
    }
    return path;
  }
  bindEvent() {
    this.$nodeContainer.addEventListener("click", this.onClickFile.bind(this));
  }
  init() {
    this.$nodeContainer = document.createElement("div");
    this.$nodeContainer.classList = "Nodes";
    this.$App.appendChild(this.$nodeContainer);
  }
  render(data) {
    console.log("Nodes Render()", data);

    const key = Object.keys(data)[0];
    let prevElement;
    prevElement =
      key !== "root" // data key가 root가 아니면,
        ? `
    <div class="Node" data-type="PREV" data-id="${key}">
      <img src="./assets/prev.png">
    </div>
    `
        : "";
    if (key !== undefined) {
      this.$nodeContainer.innerHTML =
        prevElement +
        data[key]
          .map((item) => {
            return `
        <div class="Node" data-type="${item.type}" data-id="${
              item.id
            }" data-name="${item.name}">
          <img src="./assets/${item.type.toLowerCase()}.png" data-path="${
              item.filePath
            }">
          <div>${item.name}</div>
        </div>
        `;
          })
          .join("");
    }
  }
}
