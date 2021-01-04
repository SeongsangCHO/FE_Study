const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    $searchInput.className = "SearchInput";

    $searchInput.addEventListener('click', e =>{
      //다시 클릭했을 때 확인해야하므로, focus X
      if (e.target.value.length != 0){
        e.target.value = '';
      }
    });
    $target.appendChild($searchInput);
    $searchInput.focus();

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
