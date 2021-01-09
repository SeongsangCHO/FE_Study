class SearchHistory {
  historyData = {};

  constructor({ $target, onSearch, prevSearchKeyword }) {
    // localStorage.clear()
    this.$target = $target;
    this.onSearch = onSearch;
    this.prevSearchKeyword = prevSearchKeyword;
    this.initElement();
    this.render();
    this.bindClickEvent();
  }
  initElement() {
    this.$historyWrapper = document.createElement("div");
    this.$historyWrapper.className = "history-wrapper";
    this.$historyList = document.createElement("ul");
    this.$historyList.className = "history-list";
    this.searchHistoryData = this.getLocalSearchHistory();
    this.$target.appendChild(this.$historyWrapper);
    this.$historyWrapper.appendChild(this.$historyList);
  }
  bindClickEvent() {
    this.$historyList.addEventListener("click", (e) => {
      e.stopPropagation();
      let clickedKeyword = e.target.getAttribute("data-keyword");
      this.$target.querySelector('.SearchInput').value = clickedKeyword;
      
      this.onSearch(clickedKeyword);
      
    });
  }
  getLocalSearchHistory() {
    if (!localStorage.getItem("SearchHistoryData")) {
      localStorage.setItem("SearchHistoryData", "[]"); //초기화
    }
    return JSON.parse(localStorage.getItem("SearchHistoryData"));
  }

  render() {
    if (this.searchHistoryData) {
      this.$historyList.innerHTML = this.searchHistoryData
        .map((data) => {
          return `<li data-keyword=${data.keyword} class="history-data">${data.keyword}
      <button class="btn-history-remove">X</button></li>`;
        })
        .join("");
    }
  }
  addSearchHistory(keyword = "") {
    this.searchHistoryData = this.getLocalSearchHistory();
    if (keyword === "" || keyword == null) return;
    keyword = keyword.trim();

    //현재 일 최근검색어에 추가

    if (this.searchHistoryData.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }
    this.setData(keyword);

    this.searchHistoryData.unshift(this.historyData);

    if (this.searchHistoryData.length > 5) {
      this.searchHistoryData.pop();
    }
    this.render();
    localStorage.setItem(
      "SearchHistoryData",
      JSON.stringify(this.searchHistoryData)
    );
  }
  setData(keyword) {
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    this.historyData.keyword = keyword;
    this.historyData.date = year + "/" + month + "/" + day;
    localStorage.setItem("prevSearchKeyword", keyword)
  }
  remove(keyword) {
    this.searchHistoryData = this.searchHistoryData.filter(
      (item) => item.keyword !== keyword
    );
  }
}
