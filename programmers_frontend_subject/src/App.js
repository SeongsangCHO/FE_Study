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
        this.data = await api.fetchCats(keyword);
        //데이터가 없거나, 에러일 때.
        console.log(this.data.isError);
        
        if(this.data.isError){
          this.error.setState();
        }
        this.data.length == 0 ? console.log('error.setState()') : this.setState(this.data);
        // api.fetchCats(keyword).then(({ data }) => {
        //   return this.setState(data)});
      },
    });

    this.loading = new Loading({
      $target,
    });
    this.error = new Error({
      $target,
    })

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
  }

  setState(nextData) {
    this.loading.loadingSpinnerToggle();
    console.log(nextData);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
