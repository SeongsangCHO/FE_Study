class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    // sessionStorage.clear();
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = null;
    this.onClick = onClick;
    this.getLocalSearchKeyword();
    this.setState();
    this.render();
    // this.lazyLoad();
  }
  getLocalSearchKeyword() {
    if (!localStorage.getItem("prevSearchKeyword")) {
      localStorage.setItem("prevSearchKeyword", ""); //init
    }
  }
  setState(nextData) {
    if (nextData === undefined) {
      let prevData = sessionStorage.getItem("prevSearchData");
      nextData = JSON.parse(prevData);
    }
    if (nextData == null) return;
    this.data = nextData;
    sessionStorage.setItem("prevSearchData", JSON.stringify(this.data));
    this.render();
  }
  lazyLoad() {
    const lazyLoadImages = [].slice.call(
      this.$searchResult.querySelectorAll("img.lazy")
    );
    let lazyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          console.log(lazyImage);
          lazyImage.remove("lazy");
          lazyObserver.unobserve(lazyImage);
        }
      });
    });
    lazyLoadImages.forEach(function (lazyImage) {
      lazyObserver.observe(lazyImage);
    });
  }
  render() {
    if (!this.data) {
      return;
    }
    this.$searchResult.innerHTML =
      this.data.length > 0
        ? this.data
            .map((cat) => {
              return `
          <div class="item">
            <img class="lazy" data-src=${cat.data.url} alt=${cat.data?.name} />
          </div>
        `;
            })
            .join("")
        : `<div> no search Data </div>`;

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}
