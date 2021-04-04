export default class Nodes {
  constructor({ $App, getState }) {
    this.getState = getState;
    this.$App = $App;
    this.init();
    this.render();
    this.bindNodeClickEvent();
  }

  onClickNode(e) {
    const type = e.target.parentNode.dataset["type"];
    switch (type) {
      case "DIRECTORY": {
        this.directoryHandler();
        break;
      }
      case "FILE": {
        this.fileHandler();
        break;
      }
      case "PREV": {
        this.prevHandler();
        break;
      }
      default:
        return ;
    }
    this.directoryHandler();
    this.fileHandler();
    this.prevHandler();
  }

  directoryHandler(){}
  fileHandler(){}
  prevHandler(){}
  
  bindNodeClickEvent() {
    this.$nodesContainer.addEventListener("click", this.onClickNode.bind(this));
  }

  init() {
    this.$nodesContainer = document.createElement("div");
    this.$nodesContainer.classList = "Nodes";
    this.$App.appendChild(this.$nodesContainer);
  }

  render() {
    const { data, currentPathId } = this.getState();
    if (data[currentPathId] !== undefined) {
      this.$nodesContainer.innerHTML = data[currentPathId].subDirData.map(
        (data) => {
          return `
      <div class="Node" data-type="${data.type}">
        <img src="./assets/${data.type}.png">
        <div>${data.name}</div>
      </div>
      `;
        }
      );
    }
  }
}
