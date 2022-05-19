import React, { useState } from "react";
import styles from "./todo.module.css";

function TodoItem({ todo, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div>
      <div key={todo.id} className={styles.todos}>
        <div className={isCompleted ? styles.strikeds : ""}>{todo.value}</div>
        <div>
          <input
            type="checkbox"
            className={styles.check}
            checked={isCompleted}
            onChange={(e) => {
              console.log(e.target.checked);
              setIsCompleted(e.target.checked);
            }}
          />
        </div>
      </div>

      {/* <div>
         <button onClick={() => onDelete(todo.id)}>Delete</button>
     </div> */}
    </div>

    // <div key={todo.id}>
    //   <input
    //     type="checkbox"
    //     checked={isCompleted}
    //     onChange={(e) => {
    //       setIsCompleted(e.target.checked);
    //     }}
    //   />
    //   <div className={isCompleted ? "red": ""}>{todo.value}</div>
    //   {/* <button onClick={() =>onDelete(todo.id)}>Delete</button> */}
    // </div>
  );
}

export default TodoItem;
