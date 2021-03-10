import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";
import Count from "./Count";
import CountUseReducer from "./CountUseReducer";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex-col">
      <h1 style={{ textDecoration: "underline" }}>Counter</h1>
      <h1>useState</h1>
      <Count />
      <h1>useReducer</h1>
      <CountUseReducer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
