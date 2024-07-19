import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
