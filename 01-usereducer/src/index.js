import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";
import Count from "./Count";
import CountUseReducer from "./CountUseReducer";

ReactDOM.render(
  <React.StrictMode>
    <Count />
    <CountUseReducer />
  </React.StrictMode>,
  document.getElementById("root")
);
