export default {
  data: [
    { keyword: "검색기록2", date: "12.03" },
    { keyword: "검색기록1", date: "12.02" },
    { keyword: "검색기록0", date: "12.01" },
  ],

  list() {
    return Promise.resolve(this.data);
  },

  add(keyword = "") {
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    
    //좌우 공백제거
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }
    //현재 일 최근검색어에 추가
    const date = [month, day].join('.')
    this.data = [{ keyword, date }, ...this.data];
  },

  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword);
  },
};
