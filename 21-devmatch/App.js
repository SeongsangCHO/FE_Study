import Breadcrumb from "./src/components/Breadcrumb.js";
import Nodes from "./src/components/Nodes.js";
import ImageView from "./src/components/ImageView.js";

import { api } from "./src/api/Api.js";
//아, state변경시 불변성 지켜야하는데 map구조는 how
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
    this.ImageView = new ImageView({
      $App: this.$App
    });
    this.Breadcrumb = new Breadcrumb({
      $App: this.$App,
      pathList: this.pathList,
      pathMap: this.pathMap,
      onJumpPath: (id) => {
        this.filterPathState(id);
      }
    });
    this.Nodes = new Nodes({
      $App: this.$App,
      nodesData: this.nodesData,
      getContentById: async (info) => {
        this.ImageView.loadingRender();
        this.ImageView.toggleisLoadingState();
        this.pushPathListState(info.id); //둘이 합쳐도대남
        this.addPathMapState(info);
        if (this.nodesData.hasOwnProperty(info.id)) {
          this.Nodes.render({ [info.id]: this.nodesData[info.id] });
        } else {
          api.fetchContentById(info.id).then((res) => {
            console.log("getContentById");

            // id가 parent ID군.
            // this.setPathListState(info.name);
            this.ImageView.hide();
            this.ImageView.toggleisLoadingState();
            this.setNodesDataState({ [info.id]: res });
          });
        }
      },
      prevRender: (id) => {
        const prevPathId = this.getPrevPathId();
        console.log("prevPath", prevPathId);
        this.popPathListState();
        this.deletePathMapState(id);
        this.Nodes.render({ [prevPathId]: this.nodesData[prevPathId] });
      },
      onClickImage: (path) => {
        this.ImageView.render(path);
      }
    });
  }
  filterPathState(id) {
    console.log("filterPathState");

    this.filterArray = this.pathList.slice(this.pathList.indexOf(id) + 1);
    this.pathList = this.pathList.slice(0, this.pathList.indexOf(id) + 1);
    this.filterArray.forEach((id) => {
      if (this.pathMap.has(id)) {
        this.pathMap.delete(id);
      }
    });

    this.Breadcrumb.render(this.pathMap);
    this.Nodes.render({ [id]: this.nodesData[id] });
  }
  getPrevPathId() {
    return this.pathList[this.pathList.length - 2];
  }
  deletePathMapState(id) {
    this.pathMap.delete(id);

    this.Breadcrumb.render(this.pathMap);
  }
  afterRender() {
    console.log("afterRender()");

    api.fetchContent().then((res) => {
      this.setNodesDataState({ root: res }); //{ parentId : [{}.{}...] }
    });
  }
  setNodesDataState(newData) {
    console.log("setNodesDataState()");

    if (!Object.keys(this.nodesData).includes(Object.keys(newData)[0])) {
      console.log("nodesData has not Key");
      this.nodesData = { ...this.nodesData, ...newData }; // newData key 하위 데이터 input
    }
    this.Nodes.render(newData);
  }

  addPathMapState(info) {
    //addPath가 더 fit
    //newPath is {key: value}
    this.pathMap.set(info.id, info.name);
    this.Breadcrumb.render(this.pathMap);
  }
  pushPathListState(path) {
    this.pathList = [...this.pathList, path];
  }
  popPathListState() {
    this.pathList = this.pathList.slice(0, this.pathList.length - 1);
  }
}
