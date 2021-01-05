console.log("app is running!");
class App {
  $target = null;
  data = [];
  tag = '[App.js]';

  constructor($target) {
    console.log(this.tag,' constructor')
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.loading.loadingSpinnerToggle();
        api.fetchCats(keyword).then(({ data }) => {
          return this.setState(data)});
      }
    });

    this.loading = new Loading({
      $target,
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.modeToggle = new ModeToggle({
      $target
    })
  }

  setState(nextData) {
    this.loading.loadingSpinnerToggle();
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
