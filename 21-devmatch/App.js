import Breadcrumb from "./src/components/Breadcrumb.js";
import Nodes from "./src/components/Nodes.js";
import ImageViewer from "./src/components/ImageViewer.js";
import api from "./src/api/Api.js";

export default class App {
  nextData = null;
  data = null;

  directoryHistory = ["root"];
  constructor($App) {
    this.$App = $App;
    this.imageViewer = new ImageViewer({$App

    });

    this.Breadcrumb = new Breadcrumb({
      $App: $App,
      directoryHistory: this.directoryHistory,
      moveDirectory: () =>{

      },

    });
    this.Nodes = new Nodes({
      $App: $App,
      getFileList: () => {
        api.getFileList().then((data) => {
          this.setState(data);
        });
      },
      getNestedList: (id, name) => {
        this.setDirHistoryState(name);
        api.getNestedList(id).then((data) => {
          console.log('[getNestedList] : ',data);
          this.setState(data);
        })
      },
      getImageView: (filePath) =>{
        console.log(filePath);
        this.imageViewer.setState(filePath);
      },

    });
  }
  setState(nextData) {
    this.data = nextData;
    this.Nodes.setState(this.data);
  }
  setDirHistoryState(nextData){
    this.directoryHistory = [...this.directoryHistory, nextData];
    this.Breadcrumb.setState(this.directoryHistory);
  }
}
