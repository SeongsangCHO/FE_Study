const tag = "Nodes.js";

export default class Nodes {
  data = null; //api호출로 얻어온 객체데이터가 있어야함.id,name, filePath, type etc..
  parentId = null;

  constructor({ $App, getFileList, getNestedList,getImageView }) {
    this.$App = $App;
    console.log($App);
    this.init();
    this.bindEvent();
    this.getFileList = getFileList;
    this.getNestedList = getNestedList;
    this.getImageView = getImageView;
    this.getFileList();
  }
  init() {
    this.$NodesContainer = document.createElement("div");
    this.$NodesContainer.className = "Nodes";
    this.$App.appendChild(this.$NodesContainer);
    if (this.data === null) {
      this.$NodesContainer.innerHTML = "Data Loading...";
    }
  }

  setState(nextData) {
    if (nextData != this.data) {
      this.data = nextData;
      this.render();
    }
  }

  render() {
    let nodeList = this.data
      .map((item) => {
        let { type, name, id, filePath } = item;
        type = type.toLowerCase();
        return `<div class="Node">
                <img data-filepath="${filePath}"data-type="${type}" name="${name}"id="${id}"src="./assets/${type}.png">
                <div>${name}</div>
              </div>`;
      })
      .join("");
    this.$NodesContainer.innerHTML = nodeList;
  }
  searchFile(e) {
    let fileType = e.target.dataset.type.toUpperCase();
    let filepath = e.target.dataset.filepath;
    if (fileType === "DIRECTORY") {
      this.getNestedDirectoryList(e);
    }
    if (fileType === "FILE"){
      console.log(fileType, filepath)
      this.getImageView(filepath);
    }
  }
  getNestedDirectoryList(e) {
    this.$NodesContainer.innerHTML = `${e.target.name}내용을 불러오고 있습니다...`;
    this.getNestedList(e.target.id, e.target.name);
  }
  bindEvent() {
    this.$NodesContainer.addEventListener("click", this.searchFile.bind(this));
  }
}
