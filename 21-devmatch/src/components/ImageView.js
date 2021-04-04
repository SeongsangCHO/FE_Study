const FILE_END_POINT = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/`;

export default class ImageView {
  constructor({ $App, getState }) {
    this.getState = getState;
    this.$App = $App;
    this.init();
    this.render();
  }
  init() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.classList = "Modal ImageViewer";
    this.$App.appendChild(this.$modalContainer);
  }
  render() {
    const { imageFilePath } = this.getState();
    //filePath == image/,,,.jpg
    console.log(imageFilePath);
    
    if (imageFilePath !== null) {
      this.$modalContainer.style.display = "block";
      this.$modalContainer.innerHTML = `
    <div class="ImageViewer">
      <div class="content">
        <img src="${FILE_END_POINT}${imageFilePath}">
      </div>
    </div>
    `;
    } else {
      this.$modalContainer.style.display = "none";
      return ;
    }
  }
}
