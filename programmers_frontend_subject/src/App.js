console.log("app is running!");
class App {
  $target = null;
  data = [];
  tag = "[App.js]";

  constructor($target) {
    console.log(this.tag, " constructor");
    this.$target = $target;



    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.loading.loadingSpinnerToggle();
        this.searchHistory.addSearchHistory(keyword);
        this.sessionStorage.setItem(keyword);
        // localStorage.setItem("prevSearchKeyword",keyword);
        api.fetchCats(keyword).then(({ data }) => {
          return this.setState(data);
        });
      },
    });

    this.loading = new Loading({
      $target,
    });
    this.error = new Error({
      $target,
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,

      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });

    this.modeToggle = new ModeToggle({
      $target,
    });
    this.searchHistory = new SearchHistory({
      $target,
      onSearch: this.searchInput.onSearch,
    });
    this.sessionStorage = new SessionStorage({
      setState: this.searchResult.setState,
      searchResultObj : this.searchResult,
    });


  }
  setState(nextData) {
    this.loading.loadingSpinnerToggle();
    nextData = this.filterErrorData(nextData);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  filterErrorData(nextData) {
    if (nextData.length > 0) {
      return nextData.filter((obj) => obj.hasOwnProperty("message") == false);
    }
    return nextData;
  }
}
