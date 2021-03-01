import "./Count.css";

import { useReducer } from "react";

function CountUseReducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "minus":
        return state - 1;
      case "add":
        return state + 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <button onClick={() => dispatch("minus")}>decrease</button>
      <span>{count}</span>
      <button onClick={() => dispatch("add")}>increase</button>
    </div>
  );
}
export default CountUseReducer;
