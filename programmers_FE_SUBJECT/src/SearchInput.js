const TEMPLATE = '<input type="text">';

class SearchInput {
  historyData = [];
  timer;
  constructor({ $target, onSearch }) {
    const $header = document.createElement("header");
    const $searchInput = document.createElement("input");
    const $historyList = document.createElement("ul");
    this.$historyList = $historyList;
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($header);

    $header.appendChild($searchInput);
    $header.appendChild($historyList);
    this.$searchInput.focus();

    $searchInput.addEventListener("click", (e) => {
      console.log("hhh");
      if (e.target.value.length > 0) {
        e.target.value = "";
      }
    });
    $searchInput.addEventListener("keyup", (e) => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        if (e.keyCode === 13) {
          onSearch(e.target.value);
          this.setState(e.target.value);
        }
      }, 200);
    });

    console.log("SearchInput created.", this);
  }
  setState(keyword) {
    this.historyData.unshift(keyword);
    this.historyData = this.historyData.slice(0, 5);
    this.render();
  }
  render() {
    if (this.historyData.length > 0) {
      this.$historyList.innerHTML = this.historyData
        .map((item) => {
          return `<li>${item}</li>`;
        })
        .join("");
    }
  }
}
