import './App.css';
import { useState } from 'react';

let count = 0;
function App() {
  let [todoList, updateTodoList] = useState([
    {
      id: 0,
      inputValue: 'React',
    },
  ]);
  let [todoInput, updateInput] = useState('');

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App in React</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoInput}
          onChange={(e) => {
            twowayInput(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          disabled={!todoInput.trim()}
          onClick={() => {
            addList();
          }}
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-3">
        {todoList.map((todoInput) => {
          return (
            <li className="list-group-item" key={todoInput.id}>
              <p>{todoInput.inputValue}</p>
              <button className="btn" onClick={() => onClear(todoInput.id)}>
                ✖️
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  function onClear(TodoId) {
    let remove = todoList.filter((todo) => todo.id !== TodoId);
    updateTodoList(remove);
  }

  function twowayInput(Value) {
    updateInput(Value);
  }

  function addList() {
    if (todoInput === '') return;
    let addNewTodo = [
      ...todoList,
      {
        id: ++count,
        inputValue: todoInput,
      },
    ];
    updateTodoList(addNewTodo);
    console.log(todoList);
  }
}

export default App;
