class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = null;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    console.log('render', this.data);
    if(!this.data) { return ;}
    this.$searchResult.innerHTML = (this.data.length > 0 ) ? this.data
      .map((cat) => {
        return `
          <div class="item">
            <img src=${cat.data?.url} alt=${cat.data?.name} />
          </div>
        `;
      })
      .join("") : `<div> no search Data </div>`;

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}
