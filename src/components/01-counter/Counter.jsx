/** @format */

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
