export default class Nodes {
  constructor({ $App, getContent, nodesData, currentPath }) {
    this.nodesData = nodesData;
    this.$App = $App;
    this.getContent = getContent;
    this.currentPath = currentPath;
    this.init();
    this.render(null);
    this.bindEvent();
    this.onClickNode = this.onClickNode.bind(this);
  }

  onClickNode(e) {
    console.log(e.target.parentNode.dataset["id"]);
  }

  bindEvent() {
    this.$NodesContainer.addEventListener("click", this.onClickNode);
  }
  init() {
    this.$NodesContainer = document.createElement("div");
    this.$NodesContainer.classList = "Nodes";
    this.$App.appendChild(this.$NodesContainer);

    this.getContent();
  }
  render(data) {
    if (data !== null) {
      this.$NodesContainer.innerHTML = data
        .map((nodeData) => {
          return `<div class="Node" data-id=${nodeData.id}>
                  <img src="./assets/${nodeData.type.toLowerCase()}.png">
                  <div>${nodeData.name}</div>
                </div>`;
        })
        .join("");
    }
    //출력하려면 배열형태로 전달되어야함.
    /*
    data[key] 형태로 전달

    {
      root:[{}],
      id1:[{}],
    }
    */
  }
}
