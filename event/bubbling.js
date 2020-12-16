const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

function onClick(e){
  console.log(e.currentTarget.className);
}

/*
이벤트 버블링
브라우저가 이벤트 발생을 감지하기 위한 하나의 방법.
브라우저는 특정 요소 이벤트 발생시 그 이벤트를 최상위 요소까지 전달한다.
모든 div태그에 이벤트리스너가 등록되어있다.
가장 하위태그인 three 클릭시 , 상위로 이벤트를 전달한다.

특정 태그에만 이벤트가 달려있다면 이벤트 전파가 되지 않는다.

*/

//모든 요소에 이벤트 전파
document.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', e => onClick(e))
})

//특정 요소만 이벤트발생
three.addEventListener('click', e=> console.log(e.currentTarget.className))