import Breadcrumb from "./src/components/Breadcrumb.js";
import Nodes from "./src/components/Nodes.js";
import { api } from "./src/api/Api.js";

export default class App {
  constructor($App) {
    this.$App = $App;
    this.pathMap = new Map().set("root", "root");
    this.pathList = ["root"];

    this.nodesData = {};
    this.init();
    this.render();
    this.afterRender();
  }

  init() {}
  render() {
    this.Breadcrumb = new Breadcrumb({
      $App: this.$App,
      pathList: this.pathList,
      pathMap: this.pathMap
    });
    this.Nodes = new Nodes({
      $App: this.$App,
      nodesData: this.nodesData,
      getContentById: async (info) => {
        this.setPathMapState(info);
        this.pushPathListState(info.id);
        if (this.nodesData.hasOwnProperty(info.id)){
          this.Nodes.render({[info.id] : this.nodesData[info.id]});
        }
        api.fetchContentById(info.id).then((res) => {
          // id가 parent ID군.
          // this.setPathListState(info.name);
          this.setNodesDataState({ [info.id]: res });
        });
      },
      prevRender: (id) => {
        const prevPathId = this.getPrevPathId();
        console.log("prevPath", prevPathId);
        this.popPathListState();
        this.deletePathMap(id);
        this.setNodesDataState({ [prevPathId]: this.nodesData[prevPathId] });
      }
    });
  }
  getPrevPathId(){
    return this.pathList[this.pathList.length - 2];
  }
  deletePathMap(id) {
    this.pathMap.delete(id);
    console.log(this.pathMap);
    
    this.Breadcrumb.render(this.pathMap);
  }
  afterRender() {
    api.fetchContent().then((res) => {
      this.setNodesDataState({ root: res }); //{ parentId : [{}.{}...] }
    });
  }
  setNodesDataState(newData) {
    console.log(newData);
    if (!Object.keys(this.nodesData).includes(Object.keys(newData))) {
      console.log("nodesData has not Key");
      this.nodesData = { ...this.nodesData, ...newData }; // newData key 하위 데이터 input
    }
    console.log(this.nodesData);
    this.Nodes.render(newData);
  }

  setPathMapState(info) {
    //newPath is {key: value}
    this.pathMap.set(info.id, info.name);
    this.Breadcrumb.render(this.pathMap);
  }
  pushPathListState(path) {
    this.pathList = [...this.pathList, path];
    console.log(this.pathList);
    
  }
  popPathListState() {
    this.pathList = this.pathList.slice(0, this.pathList.length - 1);
  }
}
