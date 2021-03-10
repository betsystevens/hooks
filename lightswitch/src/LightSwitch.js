import React, { useState } from "react";
function LightSwitch() {
  const [light, setLight] = useState(true);
  return (
    <div className={`room ${light ? "lit" : ""}`}>
      <h1> The switch is {light ? "on" : "off"}</h1>
      <div className="flex">
        <button className="light" onClick={() => setLight(true)}>
          ☀️
        </button>
        <button className="dark" onClick={() => setLight(false)}>
          🌙
        </button>
      </div>
      <p>(useState)</p>
    </div>
  );
}

export default LightSwitch;
