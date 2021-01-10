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

  removeEvent() {
    this.$imageInfo
      .querySelector(".close")
      .removeEventListener("click", this, false);
    window.removeEventListener("keydown", this, false);
    window.removeEventListener("click", this, false);
  }
  hide() {
    this.removeEvent();
    document.body.classList.remove("scroll-hidden");
    setTimeout(() => {
      this.$imageInfo.style.display = "none";
    }, 1000);
    this.$imageInfo.classList.remove("modal-open");
  }

  bindCloseEvent() {
    this.$imageInfo.querySelector(".close").addEventListener("click", (e) => {
      this.hide();
    });
    window.addEventListener("keydown", (e) => {
      console.log("1");
      if (e.keyCode == 27) {
        this.hide();
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target == this.$imageInfo) {
        this.hide();
      }
    });
  }
}
