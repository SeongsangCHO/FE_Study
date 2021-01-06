class Lazyload {
  API_URL = "https://dummyapi.io/data/api";
  APP_KEY = "5ff574fb2b98d0966946eb3a";
  // https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg
  constructor($target) {
    this.$target = $target;
    this.$imageWrapper = document.createElement("div");
    this.$imageWrapper.className = "wrapper";
    this.data = [];
    this.imageAPI();
    // this.bindEvent();
  }

  lazyLoadHandler() {
    let lazyImages = Array.prototype.slice.call(
      document.body.querySelectorAll(".image")
    );

    const lazyLoad = () => {
      console.log("load");

      lazyImages.forEach((image, index) => {
        let imageTop = image.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (
          imageTop <= windowHeight &&
          image.getAttribute("data-src")
        ) {
          const src = image.dataset.src; // img 태그의 data-lazy에 저장해둔 이미지 경로를 붙여준다.
          image.setAttribute("src", src);
          image.removeAttribute("data-src");
        }
      });
    };
    lazyLoad();
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
  async imageAPI() {
    const response = await fetch(this.API_URL + "/post", {
      headers: { "app-id": this.APP_KEY },
      method: "GET",
    }).then((result) => result.json());
    await this.render(response.data);
    this.lazyLoadHandler();
  }
  render(response) {
    this.$target.appendChild(this.$imageWrapper);
    this.$target.innerHTML = response
      .map((data) => {
        return `<img class="image" data-src=${data.image}></img>`;
      })
      .join("");
    this.data = document.querySelectorAll(".image");
  }
}
new Lazyload(document.querySelector("#App"));
