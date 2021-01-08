class SearchHistory {
  historyData = {};

  constructor({ $target }) {
    // localStorage.clear()
    this.$target = $target;
    this.$historyWrapper = document.createElement("div");
    this.$historyWrapper.className = "history-wrapper";
    this.$historyList = document.createElement("ul");
    this.$historyList.className = "history-list";
    this.searchHistoryData = this.getLocalSearchHistory();
    console.log(this.searchHistoryData);

    this.render();
  }
  getLocalSearchHistory() {
    if (!localStorage.getItem("SearchHistoryData")) {
      localStorage.setItem("SearchHistoryData", "[]"); //초기화
    }
    return JSON.parse(localStorage.getItem("SearchHistoryData"));
  }
  render() {
    this.$target.appendChild(this.$historyWrapper);
    this.$historyWrapper.appendChild(this.$historyList);
    if (this.searchHistoryData) {
      this.$historyList.innerHTML = this.searchHistoryData
        .map((data) => {
          return `<li class="history-data">${data.keyword}
      <button class="btn-history-remove">X</button></li>`;
        })
        .join("");
    }
  }
  addSearchHistory(keyword = "") {
    let dateObj = new Date();
    let year = dateObj.getFullYear();

    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();

    //현재 일 최근검색어에 추가
    keyword = keyword.trim();

    if (!keyword) return;
    if (this.searchHistoryData.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }
    this.historyData.keyword = keyword;
    this.historyData.date = year + "/" + month + "/" + day;

    this.searchHistoryData.unshift(this.historyData);
    
    if(this.searchHistoryData.length > 5){
      this.searchHistoryData.pop();
    }
    localStorage.setItem(
      "SearchHistoryData",
      JSON.stringify(this.searchHistoryData)
    );
  }
  remove(keyword) {
    this.searchHistoryData = this.searchHistoryData.filter(
      (item) => item.keyword !== keyword
    );
  }
}
