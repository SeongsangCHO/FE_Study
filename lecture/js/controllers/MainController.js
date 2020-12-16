import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";
import KeywordView from "../views/KeywordView.js";
import HistoryView from "../views/HistoryView.js";

import SearchModel from "../model/SearchModel.js";
import HistoryModel from "../model/HistoryModel.js";
import KeywordModel from "../model/KeywordModel.js";
const tag = "[MainController]";

/*.on의 첫번째 인자는 등록된 이벤트를 넣어도 되고 커스텀하게 넣어도됨
2번째 인자가 handler함수여서 해당 이벤트 발생시 뒤 함수 호출단계로 이루어져있음.
*/
export default {
  init() {
    console.log(tag, "init()");
    FormView.setup(document.querySelector("form"))
      .on("@submit", (e) => this.onSubmit(e.detail.input))
      .on("@reset", (e) => this.onResetForm());

    TabView.setup(document.querySelector("#tabs")).on("@changeTab", (e) =>
      this.onChangeTab(e.detail.tabName)
    );

    KeywordView.setup(document.querySelector("#search-keyword")).on(
      "@click",
      (e) => this.onClickKeyword(e.detail.keyword)
    );

    HistoryView.setup(document.querySelector("#search-history"))
      .on("@click", (e) => this.onClickHistory(e.detail.keyword))
      .on("@remove", (e) => this.onRemoveHistory(e.detail.keyword));

    ResultView.setup(document.querySelector("#search-result"));
    this.selectedTab = "추천 검색어";
    this.renderView();
  },
  renderView() {
    if (this.selectedTab == "추천 검색어") {
      this.fetchSearchKeyword();
      HistoryView.hide();
    } else {
      this.fetchSearchHistory();
      KeywordView.hide();
    }
    ResultView.hide();
    TabView.setActiveTab(this.selectedTab);
  },
  fetchSearchHistory() {
    console.log(tag, "fetchSearchHistory()");

    HistoryModel.list().then((data) => {
      HistoryView.render(data).bindRemoveBtn();
    });
  },
  fetchSearchKeyword() {
    KeywordModel.list().then((data) => KeywordView.render(data));
  },
  search(query) {
    FormView.setValue(query);
    //search api call
    HistoryModel.add(query);
    SearchModel.list(query).then((data) => {
      this.onSearchResult(data);
    });
  },
  onSubmit(input) {
    //submit이 발생했을 때, 검색요청을 수행
    this.search(input);
  },

  onResetForm() {
    ResultView.hide();
    TabView.show();
    this.renderView();
  },
  onSearchResult(data) {
    TabView.hide();
    KeywordView.hide();
    HistoryView.hide();
    ResultView.render(data);
  },
  onChangeTab(tabName) {
    console.log(tag, tabName);

    this.selectedTab = tabName;
    this.renderView();
  },
  onClickKeyword(keyword) {
    this.search(keyword);
  },
  onClickHistory(keyword) {
    this.search(keyword);
  },
  onRemoveHistory(keyword) {
    HistoryModel.remove(keyword);
    this.renderView();
  },
};
