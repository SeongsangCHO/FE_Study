
class ImageInfo {
  tag = '[ImageInfo.js]';
  $imageInfo = null;
  data = null;
  ESC_KEY = 27;
  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    console.log(this.tag, nextData);
    
    this.render();
  }

  bindCloseEvent() {
    this.$imageInfo.querySelector(".close").addEventListener("click", (e) => {
      this.$imageInfo.style.display = "none";
    });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == this.ESC_KEY) {
        this.$imageInfo.style.display = "none";
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target == this.$imageInfo){
        this.$imageInfo.style.display = "none";
      }
    });
  }

  render() {
    if (this.data.visible) {
      console.log(this.data.image)
      const { name, url, temperament, origin } = this.data.image.data;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.bindCloseEvent();

      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
