import React, { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
        },
      ]);

      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app__container">
      <main className="main__container">

        <div className="header__container">
          <h2 className="title">My Todo App</h2>
        </div>

        <div className="input__container">
          <input
            className="todo__input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Add a new todo..."
          />

          <button
            className="add__button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        <div className="todo__list">
          <ul>
            {todos.map((todo) => (
              <li className="todo__item" key={todo.id}>

                <span className="todo__text">
                  {todo.text}
                </span>

                <button
                  className="delete__button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>

              </li>
            ))}
          </ul>
        </div>

      </main>
    </div>
  );
};

export default App;