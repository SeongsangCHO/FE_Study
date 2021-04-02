export default class Nodes {
  constructor({
    $App,
    getContent,
    nodesData,
    currentPath,
    getContentById,
    prevPath,
    getNodesData,
    prevRender,
  }) {
    this.prevRender = prevRender;
    this.getNodesData = getNodesData;
    this.getContentById = getContentById;
    this.nodesData = nodesData;
    this.$App = $App;
    this.getContent = getContent;
    this.currentPath = currentPath;
    this.prevPath = prevPath;
    this.init();
    this.render(null);
    this.bindEvent();
  }

  onClickNode(e) {
    const type = e.target.parentNode.dataset["type"];
    const contentInfo = {
      id: e.target.parentNode.dataset["id"],
      title: e.target.parentNode.dataset["title"]
    };
    switch (type) {
      case "DIRECTORY": {
        //type이 디렉토리일 때 API요청
        this.getContentById(contentInfo);
        console.log('directory click');
        break;
        
      }
      case "FILE": {
        console.log("FILE click");
        break;
      }
      case "PREV": {
        this.prevRender(contentInfo.id);
        console.log('prev CLick');
        break;
      }
      default: {
        return;
      }
    }
    //id api call
  }

  bindEvent() {
    this.$NodesContainer.addEventListener("click", this.onClickNode.bind(this));
  }
  init() {
    this.$NodesContainer = document.createElement("div");
    this.$NodesContainer.classList = "Nodes";
    this.$App.appendChild(this.$NodesContainer);

    this.getContent();
  }
  render(data) {
    const currentPath = this.currentPath();
    let prevElement;
    prevElement =
      currentPath === "root"
        ? ""
        : `<div class="Node" data-title="뒤로가기" data-id="" data-type="PREV">
            <img src="./assets/prev.png">
           </div>`;

    if (data !== null) {
      this.$NodesContainer.innerHTML =
        prevElement +
        data
          .map((nodeData) => {
            return `<div class="Node" data-id=${nodeData.id} 
            data-type=${nodeData.type}
            data-title=${nodeData.name}>
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
