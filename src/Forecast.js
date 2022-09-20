import axios from "axios";
import React, { useState } from "react";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(" ");

  function showForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div class="row">
        <div class="col-2">
          <div>Wed</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="weather-icon"
            width={50}
          ></img>
          <span className="max-temp">{forecast[0].temp.max}°</span>
          <span className="min-temp">{forecast[0].temp.min}°</span>
        </div>
      </div>
    );
  } else {
    let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showForecast);

    return null;
  }
}
