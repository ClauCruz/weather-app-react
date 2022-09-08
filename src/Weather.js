import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search" className="search-bar"></input>
      </form>
      <button className="location">My location</button>
      <h1 className="current-city">Guadalajara</h1>
      <div className="current-date">Tue, 6 19:25</div>
      <div class="d-flex justify-content-center">
        <img
          src="	https://openweathermap.org/img/wn/04d@2x.png"
          class="clear-fix"
        ></img>
        <h2 className="current-temp">23</h2>
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
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
        <div class="col-2">
          <div>Wed</div>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
          <div>24° 23°</div>
        </div>
      </div>
      <br />
      <br />
      <small className="git-link">
        <a href="#">Open-source code</a> by Claudia Cruz
      </small>
    </div>
  );
}
