const one = document.querySelector('.Cone');
const two = document.querySelector('.Ctwo');
const three = document.querySelector('.Cthree');

function onClick(e){
  //전달하는 것을 막기위해 해당 메소드 사용
  //one만 출력됨 (가장 상위요소)
  e.stopPropagation();
  console.log(e.currentTarget.className);
}
/*
캡쳐링은 버블링과 반대방향으로 전파되는 방식
상위 요소에서 하위로 전달
capture true로 설정하면 반대로 탐색
*/

document.querySelectorAll('div').forEach((div) => {
  div.addEventListener('click', e => onClick(e),{
    capture:true
  })
})