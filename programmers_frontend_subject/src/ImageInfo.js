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
  hide() {
    this.$imageInfo.style.display = "none";
    this.$imageInfo.querySelector(".content-wrapper").classList.remove("open");
    this.$imageInfo.classList.remove("open");
  }
  bindCloseEvent() {
    this.$imageInfo.querySelector(".close").addEventListener("click", (e) => {
      this.hide();
    });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == this.ESC_KEY) {
        this.hide();
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target == this.$imageInfo) {
        this.hide();
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
      this.bindCloseEvent();
      this.$imageInfo.style.display = "block";
      this.$imageInfo.querySelector(".content-wrapper").classList.add("open");
      this.$imageInfo.classList.add("open");
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
