const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $header = document.createElement("header");
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($header);
    $header.appendChild($searchInput);
    this.$searchInput.focus();

    $searchInput.addEventListener("click", (e) =>{
      console.log('hhh');
      if(e.target.value.length > 0){
        e.target.value = "";
      };
    })
    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
