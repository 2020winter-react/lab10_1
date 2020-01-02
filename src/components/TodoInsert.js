import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
      setValue(e.target.value);
    }, []);
  
    const onSubmit = useCallback(
      e => {
        onInsert(value);
        setValue(''); // value 값 초기화
  
        // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
        // 이를 방지하기 위하여 이 함수를 호출합니다.
        e.preventDefault();
      },
      [onInsert, value],
    );

    return (
        <form className="TodoInsert">
            <input 
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={onSubmit}>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;