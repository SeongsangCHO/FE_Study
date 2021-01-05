class Modal {
  $target = null;
  constructor($target) {
    this.$target = $target;

    console.log($target);
    this.$modalBtn = document.createElement("button");
    this.$modalBg = document.createElement("div");
    this.$modalWindow = document.createElement("div");
    this.$modalClose = document.createElement("div");

    this.$modalBtn.innerText = "Modal Open";
    this.$modalBtn.className = "btn-modal-open";
    this.$modalBg.className = "modal-bg";
    this.$modalWindow.className = "modal-window";
    this.$modalClose.innerText = "X";

    this.render();
    this.hide();
  }

  show() {
    this.$modalBg.style.display = "block";
    this.$modalWindow.style.display = "block";
    console.log("hi");
  }
  hide() {
    this.$modalBg.style.display = "none";
    this.$modalWindow.style.display = "none";
  }
  bindEvent() {
    this.$modalBtn.addEventListener("click", (e) => {
      this.show();
    });
    this.$modalClose.addEventListener("click", (e)=>{
      this.hide();
    })
    window.addEventListener("click", (e) => {
      if (e.target == this.$modalBg) {
        this.hide();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.$modalBg.style.display === "block") {
        this.hide();
      }
    });
  }
  render() {
    this.$target.appendChild(this.$modalBtn);
    this.$target.appendChild(this.$modalBg);
    this.$modalBg.appendChild(this.$modalWindow);
    this.$modalWindow.appendChild(this.$modalClose);
    this.bindEvent();
  }
}

new Modal(document.querySelector("#App"));
