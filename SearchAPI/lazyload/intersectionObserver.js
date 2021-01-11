class Lazyload {
  API_URL = "https://dummyapi.io/data/api";
  APP_KEY = "5ff574fb2b98d0966946eb3a";
  // https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg
  constructor($target) {
    this.$target = $target;
    this.$imageWrapper = document.createElement("div");
    this.$imageWrapper.className = "wrapper";
    this.data = [];

    this.options = {
      rootMargin: '1px 1px 1px 1px',
      threshold: [0.3],
    };
    this.imageAPI();
    // this.bindEvent();
  }

  observerHandler(entries, observer) {
    entries.forEach((entry) => {
      console.log(this);
      
      if (entry.isIntersecting) {
        console.log("print");
        const image = entry.target;
        const src = image.dataset.src; // img 태그의 data-lazy에 저장해둔 이미지 경로를 붙여준다.
        image.setAttribute("src", src);
        image.removeAttribute("data-src");
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: '1px 1px 1px 1px',
      thresholds: [0.7],
    });
  }
  lazyLoadHandler() {
    this.lazyImages = Array.prototype.slice.call(
      document.body.querySelectorAll(".image")
    );

    this.intersectionObserver = new IntersectionObserver(this.observerHandler.bind(this), this.options);

    this.lazyImages.forEach((item) => this.intersectionObserver.observe(item));
  }
  async imageAPI() {
    const response = await fetch(this.API_URL + "/post", {
      headers: { "app-id": this.APP_KEY },
      method: "GET",
    }).then((result) => result.json());
    await this.render(response.data);
  }
  render(response) {
    this.$target.appendChild(this.$imageWrapper);
    this.$target.innerHTML = response
      .map((data) => {
        return `<img class="image" data-src=${data.image}></img>`;
      })
      .join("");
    this.data = document.querySelectorAll(".image");
    this.lazyLoadHandler();
  }
}
new Lazyload(document.querySelector("#App"));
