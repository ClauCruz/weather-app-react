import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentDate from "./CurrentDate";
import WeatherUnits from "./WeatherUnits";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState(" ");

  function showWeather(response) {
    if (!response) return;
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "86cb3e7be0356580c7382daac8e4cf19";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
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
        <h1 className="current-city">{weather.city}</h1>
        <div className="current-date">
          <CurrentDate date={weather.date} />
        </div>
        <div class="d-flex justify-content-center">
          <img
            src={weather.icon}
            alt={weather.description}
            class="clear-fix main-icon"
          ></img>
          <WeatherUnits metric={weather.temperature} />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-4">{weather.description}</div>
            <div class="col-4">Wind</div>
            <div class="col-4">Humidity</div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-4">24° 23°</div>
            <div class="col-4">{weather.wind} km/h</div>
            <div class="col-4">{weather.humidity}%</div>
          </div>
        </div>
        <br />
        <br />
        <Forecast />
        <small className="git-link">
          <a
            href="https://github.com/ClauCruz/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Claudia Cruz
        </small>
      </div>
    );
  } else {
    search();
  }
}
