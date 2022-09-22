import axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

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
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showForecast);

    return null;
  }
}
