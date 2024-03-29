# 과제

---



### **HTML, CSS 관련**

- 현재 HTML 코드가 전체적으로 `<div>` 로만 이루어져 있습니다. 이 마크업을 시맨틱한 방법으로 변경해야 합니다.

  => 음, 어떤걸? 시맨틱으로?.

- [x] 유저가 사용하는 디바이스의 가로 길이에 따라 검색결과의 row 당 column 갯수를 적절히 변경해주어야 합니다.

  - 992px 이하: 3개
  - 768px 이하: 2개
  - 576px 이하: 1개

  => `display:grid, grid-template-column의 비율을 media쿼리 각 가로길이에 따라 작성`

  

- [x] ]다크 모드(Dark mode)를 지원하도록 CSS를 수정해야 합니다.

  - CSS 파일 내의 다크 모드 관련 주석을 제거한 뒤 구현합니다.
  - 모든 글자 색상은 `#FFFFFF` , 배경 색상은 `#000000` 로 한정합니다.
  - 기본적으로는 OS의 다크모드의 활성화 여부를 기반으로 동작하게 하되, 유저가 테마를 토글링 할 수 있도록 좌측 상단에 해당 기능을 토글하는 체크박스를 만듭니다.

##### 다크모드

다크모드를 구현할 수 있는 방법으로 CSS, JS가 있다.

CSS는 OS설정을 감지한 속성을 미디어쿼리로 사용해 구현할 수 있고

JS는 브라우저상의 `matchedMedia()` 로 사용자 선호도(?)를 감지할 수 있다.



- CSS의 `prefers-color-scheme`  속성으로, 사용자 시스템설정(다크모드)을 감지할 수 있다.
  - `@media (prefers-color-scheme: dark 또는 light){...}` 로 적용한다

```css
/* Default colors */
body {
  --text-color: #222;
  --bkg-color: #fff;
}
/* Dark theme colors */
body.dark-theme {
  --text-color: #eee;
  --bkg-color: #121212;
}

@media (prefers-color-scheme: dark) {
  /* defaults to dark theme */
  body { 
    --text-color: #eee;
    --bkg-color: #121212;
  }
  /* Override dark mode with light mode styles if the user decides to swap */
  body.light-theme {
    --text-color: #222;
    --bkg-color: #fff;
  }
}
```

- 사용자는 OS설정을 따르는 것을 싫어할 수 있기에 토글버튼으로 제공한다.

```js
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Listen for a click on the button 
btn.addEventListener("click", function() {
  // If the OS is set to dark mode...
  if (prefersDarkScheme.matches) {
    // ...then apply the .light-theme class to override those styles
    document.body.classList.toggle("light-theme");
    // Otherwise...
  } else {
    // ...apply the .dark-theme class to override the default light styles
    document.body.classList.toggle("dark-theme");
  }
});
```

과제에서는 OS다크모드 활성화 여부기반이라고 했으니 해당 방식으로 구현해야한다고 생각한다.

기본값으로 css의 OS색을 존중하고, 다크모드 활성화여부를 체크박스를 통해 구현한다.

JS는 현재 설정된 색을 `matchMedia` 를 통해 확인하고, 다크가 설정되있다면, `light-theme` 토글을 진행한다 -> 디폴트 dark

반대의 경우 `dark-theme` 토글을 진행한다 -> 디폴트 light

`dark` 일때 미디어쿼리 수행, 아니면 바깥 수행이므로 밖은 다크모드 색, 쿼리 안은 디폴트 다크에서 라이트로 넘어갈 테마를 작성해야한다.

---

#### 구현

사용자 설정에 따라 체크박스를 체크해둘 것. (Dark -> checked)

클릭이벤트시 `matchMedia()`로 설정확인한 후 해당 값에 따라 테마 토글링

자손까지 ?(명세에없음)모든 글자 색상 #FFF, 배경색 #000

```js
//ModeToggle.js
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
```

- 체크박스 생성
- 체크박스 디폴트 값을 OS 설정에 따라 지정 -> 다크모드면, 체크활성화
- 체크박스 클릭시, 현재설정이 다크모드이면 light 테마 토글링, 반대의 경우 dark테마 토글





### **이미지 상세 보기 모달 관련**

- [x] 디바이스 가로 길이가 768px 이하인 경우, 모달의 가로 길이를 디바이스 가로 길이만큼 늘려야 합니다. - style: modal max-width : 768px => modal width 100% 스크롤사이즈 어떻게 처리하지?

- [x] **`필수`** 이미지를 검색한 후 결과로 주어진 이미지를 클릭하면 모달이 뜨는데, 모달 영역 밖을 누르거나 / 키보드의 ESC 키를 누르거나 / 모달 우측의 닫기(x) 버튼을 누르면 닫히도록 수정해야 합니다.

  => window에 keydown, click, close에 click이벤트리스너 등록

  => 바깥클릭은 e.target으로 안쪽이랑 구분해서 처리.

  => window에 등록하면 한번 수행된 이후에 매번 이벤트가 발생하는데 이렇게하는 방법밖에 없는지 궁금함.

- [x] 모달에서 고양이의 성격, 태생 정보를 렌더링합니다. 해당 정보는 `/cats/:id` 를 통해 불러와야 합니다.

  => api.js에 구현. 검색어기반으로 api호출 후 반환받은 데이터 중 id로 다시 api호출해서 전체데이터를 받아옴

- `추가` 모달 열고 닫기에 fade in/out을 적용해 주세요.

  => 애니메이션 적용. 서서히 나타나고, 사라지는 것 opcatiy?

  => transition으로 모달 열면 .open 클래스추가, content-wrapper 기본 opcatity :0 , transition: 시간으로 지정, .open은 opacity : 1



#### 모달 페이드인, 아웃의 문제

- 현재 모달 생성방식은 `display`의 block, none인데,  초기 진입시 `ImageInfo` 클래스는 `none`상태이고 카드클릭시 `data.visible` 를 전달해 모달창을 그린다. 그리고 배경인(ImageInfo)를 block하여 배경 + 모달을 그린다.

문제점 => ImageInfo가 모달창까지 감싸고 있고 이 방법이 display none, block으로 요소를 없애거나 추가하는 동적방식으로하고있기 때문에 transition의 시작점을 알 수 없어 트랜지션을 적용할 수 없다.

##### 방안

- `visibility`로 기본값을 hidden으로 하고 클릭시 visible 해주는 `open` 클래스를 추가한다.
  - 닫고나서 재클릭할 수 없음  배경의 크기가 100vh므로 카드요소들을 덮어 씌우거나 첫 진입시 검색창을 가린다.
  - Position: fixed이니까 화면밖으로 밀어내볼까?

##### 적용

- z-index를 두어서 해결, position 속성을 가진 것에만 적용 가능
- 모달창엔 -9999, open했을 땐 9999로 두어서 적용함

##### 질문사항 (ImageInfo, render(), bindEvent부분)

이미지클릭시 `render()` 을 호출하는데 이 때 생성되는 `close div` 에다가 이벤트등록을 시켜주어야함. 그러나 if문 안에 이벤트등록을하면 다른 이미지클릭시 새로운 객체를 생성하므로 계속해서 이벤트가 중복해서 등록됨. => 어떻게 해결해야할지.



### API

---

- fetch로 api호출해서 데이터 불러오기

- 실패에 대한 처리하기 [fetchAPI](http://www.gisdeveloper.co.kr/?p=6121)



##### fetch

- `fetch('요청URL')` URL에 요청해 Promise객체를 반환받는다.
- `Promise 객체` 비동기 작업에 대한 완료, 실패의 결과값
  - 응답으로 받은 결과에 대한 오류를 해결하기 위한 객체임.
  - 대기, 이행, 거부 중 하나의 상태를 가짐 
  - reject, resolve함수가 있고 프로토타입엔 then, catch, finally이 있음



```js
const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
// iyFN2mF8l

async function request(url) {
  try {
    //요청을 통해 응답을 받는다.
    const response = await fetch(url);
    //헤더를 받아서 성공인지에 대한 분기 처리를 한다.
    if (response.ok) {
      // 응답 본문을 받기 위해 메소드를 사용한다.
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (e) {
    throw {
      message : e.message,
      status : e.status,
    }
  }
}

const api = {
  fetchCats: async (keyword) => {
    try {
      //응답 본문 배열
      const specifies = await request(
        `${API_ENDPOINT}/api/cats/search?q=${keyword}`
      );
      //각 요청에 대해 기다릴 수 없으므로 fetch로 요청을 보내놓고 
      //프로미스 객체를 반환받아 놓은 상태
      const requests = specifies.data.map(
        async (specify) =>{
          return await request(`${API_ENDPOINT}/api/cats/${specify.id}`)}
      );
      //requests = [promises...]
      const result = await Promise.all(requests);
      //프로미스 배열을 순서상관없이 이행하는 단계
      return {
        data:result,
        isError: false,
      };
    } catch (e) {
      return {
        data: e,
        isError:true
      }
    }
  },
};
```

- async await는 콜백의 단점을 보완하기 위해 등장한 비동기처리 문법
  - await가 붙는 코드엔 프로미스객체를 반환해야한다.





### **검색 페이지 관련**

- [x] 페이지 진입 시 포커스가 `input` 에 가도록 처리하고, 키워드를 입력한 상태에서 `input` 을 클릭할 시에는 기존에 입력되어 있던 키워드가 삭제되도록 만들어야 합니다.

  => `focus()`, value에 대한 처리

- [x] **`필수`** 데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가해야 합니다.

  => api호출(onSearch)할 때 toggle로 `toggleSpinner() 호출`, 검색이 완료되었을 때 `setState` 에 토글링

- [x] **`필수`** 검색 결과가 없는 경우, 유저가 불편함을 느끼지 않도록 UI적인 적절한 처리가 필요합니다.

  => searchData값이 0인경우 no search Data 문구 출력함.

- [x] 최근 검색한 키워드를 `SearchInput` 아래에 표시되도록 만들고, 해당 영역에 표시된 특정 키워드를 누르면 그 키워드로 검색이 일어나도록 만듭니다. 단, 가장 최근에 검색한 5개의 키워드만 노출되도록 합니다.

  => `localStorage로 해야겠네.` , App.js에서 생성자 만들어서 초기랜더링해야함.

  ![](https://images.velog.io/images/secho/post/dc13f63d-835d-4198-a641-e6ca78f1c11c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.29.58.png)

  li태그가 하나씩 더 생기는 이슈가 있는데.,. 현재 map.join으로 생성하고 있는데 어떤게 원인인지 모르겠다.;; => **닫는 태그를 <li>로 하고 있었네;;

  =>5개만 노출되도록 하려면, 5개만 저장할지, 최상위 5개만보여줄지? , 5개만 저장하는게 낫겠다. 계속 저장하면 불필요한 연산해야하니깐.



- [x] 페이지를 새로고침해도 마지막 검색 결과 화면이 유지되도록 처리합니다.

  => localStorage, SessionStorage 둘 중 하나에 저장시킬 수 있는데, 세션을 끄면 없어져야하니까 세션에 저장. (새로고침시 마지막검색어를 local에 저장해서 이를 키워드로 검색하는 방법을 생각했으나 세션에 넣는게 더 좋다고 생각함.)

- [x] **`필수`** SearchInput 옆에 버튼을 하나 배치하고, 이 버튼을 클릭할 시 `/api/cats/random50` 을 호출하여 화면에 뿌리는 기능을 추가합니다. 버튼의 이름은 마음대로 정합니다.

- [ ] lazy load 개념을 이용하여, 이미지가 화면에 보여야 할 시점에 load 되도록 처리해야 합니다.

  => 기존에 한번씩받아오는데 `api.js` 의 promise.all하지말고 각 `for of` 해서 스크롤이벤트마다 제너레이터 해야하나.,.?

- [ ] `추가` 검색 결과 각 아이템에 마우스 오버시 고양이 이름을 노출합니다.









##### 참고

- [캡틴판교 async await](https://joshua1988.github.io/web-development/javascript/js-async-await/)



