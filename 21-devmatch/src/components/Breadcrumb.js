export default class Breadcrumb {
  constructor({ $App, getState }) {
    this.$App = $App;
    this.getState = getState;
    this.init();
    this.render();
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
          return `<div>${data[pathId].name}</div>`;
        })
        .join("");
    } else{
      return ;
    }
  }
}
