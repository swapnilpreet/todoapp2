import React from "react";
import  "../App.css";
import styles from './todo.module.css';
const Counter = () => {
  let [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h1 className="heading">Counter App :{count}</h1>
      <h1 className={count%2===0 ? styles.green:styles.red}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Dicrement</button>
      <button onClick={() => setCount(count*2)}>Double</button>
    </div>
  );
};

export default Counter;