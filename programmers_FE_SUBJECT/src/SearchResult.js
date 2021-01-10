class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick, getCatsModalData }) {
    this.getCatsModalData = getCatsModalData;
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }
  isLoadding() {
    this.$searchResult.innerHTML = "<h1> Loading </h1>";
  }
  setState(nextData) {
    this.data = nextData;
    this.render();
  }
  noSearchData() {
    this.$searchResult.innerHTML = `<h1>No Search Data</h1>`;
  }
  bindHoverEvent() {
    Array.from(this.$searchResult.querySelectorAll(".lazy")).forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        
      });
    });
  }
  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
          <div class="item">
            <img class="lazy" data-src=${cat.url} data-alt=${cat.name} />
          </div>
        `
      )
      .join("");
    this.bindHoverEvent();
    this.lazyload();

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index].id);
      });
    });
  }
  lazyload() {
    const lazyImages = [].slice.call(
      this.$searchResult.querySelectorAll(".lazy")
    );
    const options = {
      threshold: 0.3,
    };
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.alt = image.dataset.alt;
            image.classList.remove("data-src");
            image.classList.remove("lazy");
            image.classList.remove("data-alt");
            imageObserver.unobserve(image);
          }
        });
      });
      lazyImages.forEach((image) => imageObserver.observe(image));
    }
  }
}
