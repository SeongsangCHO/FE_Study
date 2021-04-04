const FILE_END_POINT = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/`;

export default class ImageView {
  constructor({ $App, getState }) {
    this.getState = getState;
    this.$App = $App;
    this.init();
    this.render();
    this.bindCloseEvent();
  }
  init() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.classList = "Modal ImageViewer";
    this.$App.appendChild(this.$modalContainer);
  }

  modalHide(){
    this.$modalContainer.style.display ="none";
  }
  modalShow(){
    this.$modalContainer.style.display ="block";
  }
  onCloseClick(e){
    
    if(e.target.classList.contains("Modal")){
      this.modalHide();
    }
  }

  onCloseEsc(e){
    if (e.which === 27){
      this.modalHide();
    }
  }
  bindCloseEvent(){
    this.$modalContainer.addEventListener('click', this.onCloseClick.bind(this));
    window.addEventListener('keydown', this.onCloseEsc.bind(this));
  }

  render() {
    const { imageFilePath } = this.getState();

    if (imageFilePath !== null) {
      this.modalShow();
      this.$modalContainer.innerHTML = `
    <div class="ImageViewer">
      <div class="content">
        <img src="${FILE_END_POINT}${imageFilePath}">
      </div>
    </div>
    `;
    } else {
      this.modalHide();
      return ;
    }
  }
}
