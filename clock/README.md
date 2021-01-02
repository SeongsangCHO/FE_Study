# 바닐라 JS 시계 + 다크모드 토글

---


![화면 기록 2021-01-02 오후 9 44 44](https://user-images.githubusercontent.com/55486644/103457746-4d4e6e80-4d45-11eb-9653-5505f237dc7e.gif)

## 요구사항 분석

### 시계 구현

- [x] 화면이 전환될 때 setInterval 제거

### Dark mode 토글 구현

- `ModeChangeView.js` 을 다른 프로젝트에도 적용할 수 있도록 구성
  - `DOM` 객체에 모드가 적용될 객체 선택해서 나열
  - `status` : 로컬스토리지에 테마 확인, 현재 사용자가 이용중인 모드 확인
  - `setup` : 이벤트 바인딩
  - `toggleDarkAttribute` :  `DOM` 의 요소들 순회하면서 다크모드 적용
  - `classList.toggle` 로 다크모드 토글링

- [x]  다크모드 설정
  - [x]  다크모드 on / off는 toggle버튼으로 구현한다
  - [x]  기본 default는 사용자의 현재 설정사항으로 진행한다.
  - [x]  사용자가 버튼클릭시 현재설정사항과 반대로 모드가 변경된다.

