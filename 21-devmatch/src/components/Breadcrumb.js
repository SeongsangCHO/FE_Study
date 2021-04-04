export default class Breadcrumb {
  constructor({ $App, getState, moveToClikedDir }) {
    this.moveToClikedDir = moveToClikedDir;
    this.$App = $App;
    this.getState = getState;
    this.init();
    this.render();
    this.bindClickEvent();
  }

  onClickPath(e){
    const dirId = e.target.dataset["id"];
    this.moveToClikedDir(dirId);
    //pathIdList는 slice(0, indexof(id) + 1);
    //currentPathId 는 pathIdList의 마지막원소를 가짐.

    console.log(e.target);
    
  }
  bindClickEvent(){
    this.$nav.addEventListener('click', this.onClickPath.bind(this));
  }
  init() {
    this.$nav = document.createElement("nav");
    this.$nav.classList = "Breadcrumb";
    this.$App.appendChild(this.$nav);
  }
  render() {
    const { data, pathIdList, currentPathId } = this.getState();
    //props 사용하기
    console.log(data, pathIdList, currentPathId);
    if (data[currentPathId] !== undefined) {
      //현재 데이터에 해당 키에 대한 값이 있을 때
      this.$nav.innerHTML = pathIdList
        .map((pathId) => {
          return `<div data-id="${pathId}">${data[pathId].name}</div>`;
        })
        .join("");
    } else{
      return ;
    }
  }
}
