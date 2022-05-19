import React, { useState } from "react";
import "../App.css";
import TodoItem from "./Todoitem";
import styles from "./todo.module.css";
export default function ToDo() {
  let [todo, setTodo] = useState([]);
  let [query, setQuery] = useState("");

  const onDelete = (id) => {
    let newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };
  return (
    <div className="todo">
      <h1 className="heading">Todo List</h1>

      <div className={styles.todoitemsmainbox}>
        {todo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>

      <div>
        <input
          type="text"
          value={query}
          placeholder="Enter Your Bucket List"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDownCapture={(event) => {
            // console.log(e.target.value);
            if (event.key === "enter") {
              setTodo([...todo, { id: Date.now(), value: query }]);
              setQuery("");
            }
          }}
        />

        <button
          onClick={() => {
            setTodo([...todo, { id: Date.now(), value: query }]);
            setQuery("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
