class ImageInfo {
  $imageInfo = null;
  data = null;

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
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

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
      this.$imageInfo.style.display = "block";
      setTimeout(() => {
        this.$imageInfo.classList.add("modal-open");
      }, 10);
      this.bindCloseEvent();

      this.scrollHidden();
    } else {
      //close할 때 scroll-hidden 제거
      this.$imageInfo.style.display = "none";
    }
  }
  scrollHidden() {
    document.body.classList.add("scroll-hidden");
  }
  hide(e) {
    if (
      e.target === this.$imageInfo ||
      e.target === this.$imageInfo.querySelector(".close")
    ) {
      document.body.classList.remove("scroll-hidden");
      setTimeout(() => {
        this.$imageInfo.style.display = "none";
      }, 1000);
      this.$imageInfo.classList.remove("modal-open");
      this.$imageInfo.removeEventListener("click", this.hide);
    }
  }
  bindCloseEvent() {
    this.$imageInfo.addEventListener("click", this.hide.bind(this));
  }
}
