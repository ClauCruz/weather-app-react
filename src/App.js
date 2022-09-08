import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather />
      </div>
    </div>
  );
}
