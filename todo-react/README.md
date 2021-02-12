# Todo_React

- todo list

### **요구사항**

- 할 일을 추가할 수 있다.
- 할 일을 삭제할 수 있다.

### **라이브러리**

- create-react-app
- node-sass
- classnames
- react-icons

## 파일

### TodoTemplate

- 컴포넌트들을 children으로 받아 뿌려주는 부분

### App

- TodoTemplate 출력부이자 최상단
- todos데이터 관리 및 함수 정의, props 전달부
- useCallback으로 함수 재생성 방지
- useReducer로 랜더링 최적화( useState로도 사용 가능 )

### TodoList

- TodoList Item 컨테이너 `map` 으로 TodoListItem 출력

### TodoListItem

- classnames 라이브러리로 checked값으로 완료 사항 조건부 랜더링
- done - undo 부분 toggle
- todo 데이터 삭제

### TodoInsert

- form으로 todo 추가하는 부분
- 디바운싱 적용