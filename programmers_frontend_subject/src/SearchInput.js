const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch,onSearchRandom }) {
    const $searchInput = document.createElement("input");
    this.$target = $target;
    this.onSearch = onSearch;
    this.onSearchRandom = onSearchRandom;
    this.$searchInput = $searchInput;
    
    this.initElement();
    this.render();
    this.bindEvent();

  }
  bindEvent(){
    this.$searchInput.addEventListener('click', e =>{
      //다시 클릭했을 때 확인해야하므로, focus X
      if (e.target.value.length != 0){
        e.target.value = '';
      }
    });
    this.$searchInput.addEventListener("keyup", e => {
      e.target.value = e.target.value.trim();
      if (e.keyCode === 13 && e.target.value != "") {
        this.onSearch(e.target.value);
      }
    });
    this.$randomRequestBtn.addEventListener("click", e=>{
      this.onSearchRandom();
      
    })
  }

  initElement(){
    this.$inputWrapper = document.createElement("div");
    this.$inputWrapper.className = "search-input-wrapper";
    this.$randomRequestBtn = document.createElement("button");
    this.$randomRequestBtn.className = "btn-random-request";
    this.$randomRequestBtn.innerText = "랜덤 야옹이 검색";
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    this.$searchInput.className = "SearchInput";
  }
  render() {
    this.$target.appendChild(this.$inputWrapper);
    this.$inputWrapper.appendChild(this.$searchInput);
    this.$inputWrapper.appendChild(this.$randomRequestBtn);
    this.$searchInput.focus();
  }
}
