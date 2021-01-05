const toggleBtn = document.body.querySelector(".fade-toggle");
const wrapper = document.body.querySelector(".wrapper");
const content = document.body.querySelector(".content");

wrapper.style.display="none"
content.style.display="none"

toggleBtn.addEventListener("click", (e) => {
  content.classList.toggle("open");
  wrapper.classList.toggle("open");
  //display : none, block는 트랜지션을 먹지 못함.
  //랜더링트리에서 동적으로 바뀌기 떄문에, 시작점을 알 수 없기에.
  if (content.classList.contains("open")) {
    // content.style.visibility = "visible";
    wrapper.style.display="block"
    content.style.display="block"
    } else {
    // content.style.visibility = "hidden";
    wrapper.style.display="none"
    content.style.display="none"
  }
});
