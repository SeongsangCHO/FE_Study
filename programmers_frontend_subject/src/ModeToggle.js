class ModeToggle {
  constructor({ $target }) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(prefersDarkScheme);
    const $modeToggle = document.createElement("input");
    this.$modeToggle = $modeToggle;
    this.$modeToggle.className = "ModeToggle";
    this.$modeToggle.type = "checkbox";
    // OS 다크모드에 따른 디폴트 체크값 설정
    this.$modeToggle.checked = prefersDarkScheme.matches ? true : false;
    $target.prepend($modeToggle);

    // 체크박스 클릭에 따른 테마 토글링
    $modeToggle.addEventListener('click', e=>{
      if (prefersDarkScheme.matches){
        document.body.classList.toggle("light-theme");
      } else{
        document.body.classList.toggle("dark-theme");
      }
    })
  };
}