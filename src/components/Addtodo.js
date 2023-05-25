import React, { useState } from 'react';

function Addtodo(props) {
  const [todoText, setTodoText] = useState('');

  const handlePressEnter = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  const addTodo = () => {
    if (todoText.trim() !== '') {
      props.addList(todoText.trim());
      setTodoText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter List Data"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handlePressEnter}
      />
      <button className="sub-button" onClick={addTodo}>
        SUBMIT
      </button>
    </div>
  );
}

export default Addtodo;
