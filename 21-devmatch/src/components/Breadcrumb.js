const tag = 'Breadcrumb.js';
export default class Breadcrumb {
  //nextData
  directoryHistory = [];
  //destructure
  constructor({$App, directoryHistory}) {
    this.$App = $App;
    this.init();
    this.setState(directoryHistory);
  }
  init(){
    this.$navBar = document.createElement('div');
    this.$navBar.className = "Breadcrumb";
    this.$App.appendChild(this.$navBar);
  }
  //hitstory
  setState(nextData){
    if(this.directoryHistory != nextData){
      this.directoryHistory = nextData;
      this.render();
    }
  }
  render(){
    const historyList = this.directoryHistory.map((history) => {
      return `<div>${history}</div>`
    }).join("");
    this.$navBar.innerHTML = historyList;
  }
}