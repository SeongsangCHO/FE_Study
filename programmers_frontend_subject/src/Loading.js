class Loading {
  constructor({ $target }) {
    this.loadingSpinner = document.createElement("div");
    this.loadingSpinner.innerText = "Loading...";
    this.loadingSpinner.className = "spinner";
    this.loadingSpinner.classList.add("hide");
    $target.appendChild(this.loadingSpinner);

    this.render();
  }

  loadingSpinnerToggle() {
    console.log("spinner is toggle");
    this.loadingSpinner.classList.toggle("hide");
  }
  render() {
  }
}
