import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";
import KeywordView from "../views/KeywordView.js";

import SearchModel from "../model/SearchModel.js";
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

    TabView.setup(document.querySelector("#tabs")).on("changeTab", (e) =>
      this.onChangeTab(e.detail.tabName)
    );

    KeywordView.setup(document.querySelector("#search-keyword"));
    ResultView.setup(document.querySelector("#search-result"));
    this.selectedTab = "추천 검색어";
    this.renderView();
  },
  renderView() {
    console.log(tag, "renderView()");
    if (this.selectedTab == "추천 검색어") {
      this.fetchSearchKeyword();
    }
    ResultView.hide();
    TabView.setActiveTap(this.selectedTab);
  },
  fetchSearchKeyword(){
    KeywordModel.list().then((data) => KeywordView.render(data));
  },
  search(query) {
    console.log(tag, "search()", query);
    //search api call
    SearchModel.list(query).then((data) => {
      this.onSearchResult(data);
    });
  },
  onSubmit(input) {
    console.log(tag, input);
    //submit이 발생했을 때, 검색요청을 수행
    this.search(input);
    ResultView.show();
  },

  onResetForm() {
    console.log(tag, "onResetForm()");
    // ResultView.resetResult();
    ResultView.hide();
  },
  onSearchResult(data) {
    ResultView.render(data);
  },
  onChangeTab(tabName) {
    debugger;
  },
};
