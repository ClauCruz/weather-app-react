import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentDate from "./CurrentDate";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState(" ");

  function inputCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    if (!response) return;
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "86cb3e7be0356580c7382daac8e4cf19";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          onChange={inputCity}
        ></input>
      </form>
      <button className="location">My location</button>
      <h1 className="current-city">Guadalajara</h1>
      <div className="current-date">
        <CurrentDate date={weather.date} />
      </div>
      <div class="d-flex justify-content-center">
        <img
          src="	https://openweathermap.org/img/wn/04d@2x.png"
          class="clear-fix"
        ></img>
        <h2 className="current-temp">{weather.temperature}</h2>
        <span className="units">
          <a href="#">C°</a> | <a href="#">F°</a>
        </span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-4">Clouds</div>
          <div class="col-4">Wind</div>
          <div class="col-4">Humidity</div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-4">24° 23°</div>
          <div class="col-4">2 km/h</div>
          <div class="col-4">66%</div>
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            width={50}
          ></img>
          <div>24° 23°</div>
        </div>
      </div>
      <small className="git-link">
        <a href="https://github.com/ClauCruz/weather-app-react" target="_blank">
          Open-source code
        </a>{" "}
        by Claudia Cruz
      </small>
    </div>
  );
}
