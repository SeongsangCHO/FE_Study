class Modal {
  $target = null;
  constructor($target) {
    this.$target = $target;

    console.log($target);
    this.$modalBtn = document.createElement("button");
    this.$modalBg = document.createElement("div");
    this.$modalWindow = document.createElement("div");
    this.$modalClose = document.createElement("div");
    this.$contentBtn = document.querySelector(".box-content");
    this.$modalBtn.innerText = "Modal Open";
    this.$modalBtn.className = "btn-modal-open";
    this.$modalBg.className = "modal-bg";
    this.$modalWindow.className = "modal-window";
    this.$modalClose.innerText = "X";
    this.render();
  }
  render() {
    this.$target.appendChild(this.$modalBtn);
    this.$target.appendChild(this.$modalBg);
    this.$modalBg.appendChild(this.$modalWindow);
    this.$modalWindow.appendChild(this.$modalClose);
    this.bindEvent();
  }
  toggling(e) {
    console.log("toggling", e.target);
    this.$modalBg.classList.toggle("open");
    this.$modalWindow.classList.toggle("open");
  }
  bindEvent() {
    this.$contentBtn.addEventListener("click", (e) => {
      console.log("click content button");
    });
    this.$modalBtn.addEventListener("click", (e) => {
      if (e.target == this.$modalBtn) this.toggling(e);
    });

    window.addEventListener("click", (e) => {
      if (
        e.target == this.$modalBg &&
        this.$modalBg.classList.contains("open")
      ) {
        this.toggling(e);
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.$modalBg.classList.contains("open")) {
        this.toggling(e);
      }
    });
    this.$modalClose.addEventListener("click", (e) => {
      this.toggling(e);
    });
  }
}

new Modal(document.querySelector("#App"));
