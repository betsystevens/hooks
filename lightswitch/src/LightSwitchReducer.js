import React, { useReducer } from "react";

function LightSwitchReducer() {
  const [light, dispatch] = useReducer((_, action) => {
    return !action;
  }, true);
  return (
    <div className={`room ${light ? "lit" : ""}`}>
      <h1>The switch is {light ? "on" : "off"}</h1>
      <div className="flex">
        <button className="light" onClick={() => dispatch(light)}>
          ☀️
        </button>
        <button className="dark" onClick={() => dispatch(light)}>
          🌙
        </button>
      </div>
      <p>(useReducer)</p>
    </div>
  );
}

export default LightSwitchReducer;
