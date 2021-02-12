import { React, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(0);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    //debouncing => 마지막 요청만 setTimeout내용 수행.
    //Api 호출할 때 적용. 1초안에 그 요청이 있으면 clear하므로 내용 수행 X
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      // API CALL; 1초뒤에 수행되는 내용들
      // 수행되기전에 같은 요청 다시 보내면 clear되버림.
    }, 1000);
    setTimer(newTimer);
  });

    const onSubmit = useCallback((e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      //함수 안에서 사용되는 상태는 props로 받아온 함수도 포함 => 최신걸 참조하기 위해 다 적어줘
    },[onInsert, value],)
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Insert your something to do"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
