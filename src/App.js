import React, { useState } from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [recordAdded, setRecordAdded] = useState(false);


  const toggleCheck = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteItem = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  const addList = (todoText) => {
    if (todoText !== '') {
      const newTodo = {
        id: Date.now(),
        item: todoText,
        checked: false,
      };
      setTodoList([...todoList, newTodo]);
      setRecordAdded(true);

    }
  };

  const deleteSelected = () => {
    const selectedTodos = todoList.filter((todo) => todo.checked);
    if (selectedTodos.length > 0) {
      const newTodoList = todoList.filter((todo) => !todo.checked);
      setTodoList(newTodoList);
    }
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h3 className="app-heading">TODO</h3>
        <hr />
        <Addtodo addList={addList} />
        <hr />
        <h3 className="app-heading">TODO LIST</h3>
        <hr />
        {todoList.length > 0 ? (
        todoList.map((todo) => (
          <Todolist
            key={todo.id}
            todo={todo}
            toggleCheck={toggleCheck}
            deleteItem={deleteItem}
          />
          )
        )
      ) : (
        <p>No records found.</p>

      )}
        {recordAdded && (
            <button
             className="delete-Button"
             onClick={deleteSelected}
             disabled={!todoList.some((todo) => todo.checked)}>

        {/* <button className="delete-Button" onClick={deleteSelected}> */}
          Delete
        </button>
                )}

      </div>
    </div>
  );
}

export default App;

