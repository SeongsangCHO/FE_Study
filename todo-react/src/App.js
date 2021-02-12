import { React, useState, useRef, useCallback, useReducer } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import produce from 'immer';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  //3번째인자는 맨 처음 랜더링될때만 호출됨.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      Todo App
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;

// const [todos, setTodos] = useState(createBulkTodos);
// const onRemove = useCallback((id) => {
//   setTodos((todos) => todos.filter((todo) => todo.id !== id));
// }, []);

// const onToggle = useCallback((id) => {
//   setTodos((todos) =>
//     todos.map((todo) => {
//       return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
//     }),
//   );
// }, []);

// const onInsert = useCallback(
//   (text) => {
//     const todo = {
//       id: nextId.current,
//       text, // text: text
//       checked: false,
//     };

// immer
/*  setTodos(produce(todos, draft => { => useState, immer로 불변성 지키기
    draft.push(todo);
  }))
  
  immer 함수형 업데이트
    setTodos(produce(draft => {
      draft.push(todo);
    }))
  
*/
//     setTodos((todos) => todos.concat(todo));
//     nextId.current += 1;
//   },
//   //함수 안에서 사용하는 상태가 있을 때 꼭 deps배열 안에 넣어주어야함
//   //그렇지 않으면 해당 값 참조시 제일 최신값을 참조한다는 보장이 없기 때문임.
//   [],
// );
