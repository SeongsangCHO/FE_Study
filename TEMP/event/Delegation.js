/*
하위요소에 각각 이벤트를 붙이지 않고
상위에서 하위 요소들의 이벤트를 제어하는 방식
*/
const itemList = document.querySelector('.itemList');


// let inputs = document.querySelectorAll('input');
// inputs.forEach(function(input){
//   input.addEventListener('click', e => {
//     console.log('clicked');
//   })
// })

//상위요소에만 이벤트를 달아서 하위 이벤트 감지
//e.currentTarget와 target은 다름
//e.target는 실제 이벤트가 시작된 '타겟'
//e.currentTarget = this와 유사. 이벤트 등록된 주체?
//즉, 실제 눌린 곳(타겟)과 이벤트를 담고있는 그릇(currentTarget)
itemList.addEventListener('click', e =>{
  console.log(e.currentTarget);
})

/*
기존에 이벤트를 추가했지만 더 요소들을 추가시킨다면
이벤트리스너등록이 안되어있을 것임
*/

let li = document.createElement('li');
let input = document.createElement('input');
let label = document.createElement('label');
let labelText = document.createTextNode('이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);