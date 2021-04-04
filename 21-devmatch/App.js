import Breadcrumb from "./src/components/Breadcrumb.js";
import ImageView from "./src/components/ImageView.js";
import Nodes from "./src/components/Nodes.js";
import { api } from "./src/api/Api.js";

//state 반영 -> render -> useEffect

export default class App {
  constructor($App) {
    this.$App = $App;

    this.state = {
      data: {
        // 변경시 api요청으로 새로운 데이터 불러올 때 => Nodes rerender
        // root: {
        //   name: root,
        //   data: [{}, {}] //root를 통해 얻어온 데이터들
        // },
        // 1: {
        //   name: 노란고양이,
        //   data: [{}, {}] // 1 id를 통해 얻어온 데이터들,
        // }
      },
      pathIdList: [], // id를 통해 state.data객체의 name얻기 // 변경시 breadcrumb rerender
      //뒤로가기시 path에서 뽑고 상위 path값(id)으로 currentPath 변경, => 랜더수행
      currentPathId: "root", // 뒤로가기, dir클릭해서 이동할 때, id값 변경되면 node rerender
      imageFilePath: null,
    };

    this.render(); // App 랜더링시점. 하위 컴포넌트들 랜더링.
    this.initRootData();
  }

  render() {
    this.ImageView = new ImageView({
      $App: this.$App,
      getState: () => this.state
    });

    this.Breadcrumb = new Breadcrumb({
      $App: this.$App,
      getState: () => this.state,
      moveToClikedDir : (dirId) =>{
        this.setPathState(this.state.pathIdList.slice(0, this.state.pathIdList.indexOf(dirId) + 1));
        this.setCurrentPathState(this.state.pathIdList[this.state.pathIdList.length - 1]);
        this.Nodes.render();
      }
    });

    this.Nodes = new Nodes({
      $App: this.$App,
      getState: () => this.state,
      browsingSubDir: async (dirName, dirId) => {
        const response = await api.fetchContentById(dirId);
        this.setCurrentPathState(dirId);
        this.setDataState({ [dirId]: { name: dirName, subDirData: response } });
        this.setPathState([...this.state.pathIdList, dirId]);
      },
      moveToPrevDir: () => {
        this.setPathState(this.popPathState()); //set, render까지,
        this.setCurrentPathState(
          this.state.pathIdList[this.state.pathIdList.length - 1]
        ); //마지막 원소를 현재 path로 설정
        this.Nodes.render();
      },
      handlerImageFilePath : (filePath) => this.setImageFilePathState(filePath),
    });

  }

  setImageFilePathState(filePath){
    this.state = {...this.state, imageFilePath: filePath};
    console.log(this.state);
    
    this.ImageView.render();
  }

  setDataState(newState) {
    //{id : data( [{ }, { } ] )}
    this.state.data = { ...this.state.data, ...newState };
    console.log("setDataState", newState.id, newState, this.state);

    this.Nodes.render();
  }
  setPathState(newPathId) {
    this.state.pathIdList = [...newPathId];
    console.log(this.state.pathIdList);

    this.Breadcrumb.render();
  }
  setCurrentPathState(currentPathId) {
    this.state.currentPathId = currentPathId;
    // this.Nodes.render();
  }

  popPathState() {
    if (this.state.currentPathId !== "root") {
      return this.state.pathIdList.slice(0, this.state.pathIdList.length - 1);
    }
    return ;
  }

  initRootData() {
    api.fetchContent().then((res) => {
      this.setDataState({ root: { name: "root", subDirData: res } });
      this.setPathState(["root"]);
    });
  }
}
