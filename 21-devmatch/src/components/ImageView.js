const FILE_END_POINT = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/`;

export default class ImageView {
  constructor({ $App }) {
    this.$App = $App;
    this.isLoading = false;
    this.init();
    this.render(null);
    this.bindEvent();
  }
  onClickClose(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "DIV") {
      this.hide();
      console.log("out section");
    }
    if (e.target.tagName === "IMG") {
    }
  }
  onEscClose(e) {
    if (e.which === 27 && !this.isLoading) {
      this.hide();
    }
  }
  bindEvent() {
    this.$ModalCotaniner.addEventListener(
      "click",
      this.onClickClose.bind(this)
    );
    window.addEventListener("keydown", this.onEscClose.bind(this));
  }
  init() {
    this.$ModalCotaniner = document.createElement("div");
    this.$ModalCotaniner.classList = "Modal";
    this.$App.appendChild(this.$ModalCotaniner);
  }
  toggleisLoadingState(){
    this.isLoading = !this.isLoading;
  }
  loadingRender() {
    
    this.$ModalCotaniner.innerHTML = `
    <div class="Modal Loading">
      <div class="content">
        <img src="./assets/nyan-cat.gif">
      </div>
    </div>
    `;
    this.show();
  }
  render(imagePath) {
    if (imagePath !== null) {
      this.show();

      //visible
      this.$ModalCotaniner.innerHTML = `
      <div class="content">
        <img src="${FILE_END_POINT}${imagePath}">
      </div>
    `;
    } else {
      this.hide();
    }
  }
  show() {
    this.$ModalCotaniner.style.display = "block";
  }
  hide() {
    this.$ModalCotaniner.style.display = "none";
  }
}
//     <div class="ImageViewer">
//   <div class="content">
//     <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/images/a2i.jpg">
//   </div>
// </div>
