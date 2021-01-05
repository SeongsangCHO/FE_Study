class ImageInfo {
  tag = "[ImageInfo.js]";
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
  open() {
    this.$imageInfo.classList.add("open");
  }
  close() {
    console.log('close');
    this.$imageInfo.classList.remove("open");
    this.$imageInfo.querySelector(".close").removeEventListener('click', this, false);
    window.removeEventListener('keydown', this, false);
    window.removeEventListener('click', this, false);
  }
  bindEvent() {
    this.$imageInfo.querySelector(".close").addEventListener("click", (e) => {
      this.close();
    });
    window.addEventListener("keydown", (e) => {
      console.log("1");

      if (e.keyCode == this.ESC_KEY) {
        this.close();
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target == this.$imageInfo) {
        this.close();
      }
    });
  }

  render() {
    if (this.data.visible) {
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
      console.log('bindEvent');
      this.bindEvent();
      this.open();
    } else {
      //클릭했는데 visible이 false인경우?
      console.log("else");
    }
  }
}
