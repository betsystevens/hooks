import "./Count.css";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default Count;
