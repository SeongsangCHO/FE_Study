/*


1. fetch() 호출
2. 브라우저는 네트워크 요청을 보냄
3. 프로미스가 반환됨
4. 프로미스는 fetch()를 호출하는 코드에서 사용된다.

좀 더 자세히 다루면 1, 2단계로 나눌 수 있는데
1단계
함수 호출 후 서버로부터 응답을 받는다.(promise)
아직 본문(body) 도착전이지만, 응답헤더를 보고 요청이 성공적인지 확인할 수 있음

2단계
추가 메소드를 호출해 응답 본문을 받는다.

fetch를 통해 반환받은 값은 response에는
다음과 같은 메소드를 가지고 이를 수행할 수 있음.
- .text()
- .json() 등,

예제 작성으로 넘어가자.
*/
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].author.login));

let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';

let response = await fetch(url);

let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함

alert(commits[0].author.login);