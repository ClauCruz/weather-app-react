import React, { useState } from "react";
import "./App.css";

export default function WeatherUnits(props) {
  let [unit, setUnit] = useState("metric");
  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div>
        <h2 className="current-temp">{props.metric}</h2>
        <span className="units">
          <a>C°</a> |{" "}
          <a href="#" onClick={showImperial}>
            F°
          </a>
        </span>
      </div>
    );
  } else {
    let imperial = (props.metric * 9) / 5 + 32;
    return (
      <div>
        <h2 className="current-temp">{Math.round(imperial)}</h2>
        <span className="units">
          <a href="#" onClick={showMetric}>
            C°
          </a>{" "}
          | <a>F°</a>
        </span>
      </div>
    );
  }
}
