class SessionStorage{
  constructor({setState, searchResultObj}){
    const bindSearchResult = {};
    console.log(searchResultObj);
    
    // console.log(sessionStorage.getItem("prevSearchData"));

  }
  setItem(keyword){
    sessionStorage.setItem("prevSearchKeyword", keyword);
  }
}


//SearchResult.js 의 해당 메소드를 호출.
// 검색결과 데이터를 세션스토리지에 저장시킴 => 시점은, 해당 메소드에서.
// setState(nextData) {
//   this.data = nextData;
// 여기서 스토리지에 저장하는 메소드 구현.
//   this.render();
// }