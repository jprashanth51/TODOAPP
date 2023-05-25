import React from 'react';

function Todolist(props) {
  // const { todo, toggleCheck, deleteItem } = props;
  const { todo, toggleCheck } = props;


  return (
    <li className={`list-item ${todo.checked ? 'strikethrough' : ''}`}>
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleCheck(todo.id)}
      />
      <span className="item-Text">{todo.item}</span>
      {/* <button className="delete-Button" onClick={() => deleteItem(todo.id)}>
        Delete
      </button> */}
    </li>
  );
}

export default Todolist;
