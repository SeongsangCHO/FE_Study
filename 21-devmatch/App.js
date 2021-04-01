import Breadcrumb from "./src/components/Breadcrumb.js";
import Nodes from "./src/components/Nodes.js";
import { api } from "./src/api/Api.js";

export default class App {
  //경로가 클릭마다 변하고 뒤로가기할 때 변함 => breadCrumb 리랜더링
  //경로변하면서 그에 따른 내용도 변하므로 Nodes도 리랜더링

  constructor($App) {
    this.nodesData = {};
    this.pathArrState = ["root"]; //경로
    this.$App = $App;
    this.init();
    this.render();
  }

  init() {
    this.Breadcrumb = new Breadcrumb({
      $App: this.$App,
      pathArrState: this.pathArrState
    });
    this.Nodes = new Nodes({
      $App: this.$App,
      getContent: async () =>
        await api.fetchContent().then((res) => {
          this.setDirDataState(res);
        }),
      nodesData: this.nodesData,
      currentPath: this.getCurrentPath()
    });
  }
  render() {}

  setDirDataState(newData) {
    const currentPath = this.getCurrentPath();
    if (Object.keys(this.nodesData).includes(currentPath)) {
      //뒤로가기 했을 때 현재 Path에 중복될 수 있으므로. set으로 해도 되겠다 => nodesData를
      this.nodesData = { ...this.nodesData, [currentPath]: newData };
    }
    console.log(this.nodesData);
    this.Nodes.render(newData);
    //
  }

  popPathArray(){
    this.pathArrState.pop();
  }

  getCurrentPath() {
    return this.pathArrState[this.pathArrState.length - 1];
  }
  setPathArrState(newPath) {
    //pathState set Func
    this.pathArrState = [...newPath];
    this.Breadcrumb.render(this.pathArrState);
  }
}
