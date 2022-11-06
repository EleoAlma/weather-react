import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
const [forecast, setForecast] = useState(null);
const [loaded, setLoaded] = useState(false);

useEffect(function() {
  setLoaded(false);},
  [props.coordinates]);

   function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
   }

   function loadNewApi() {
      let lat = props.coordinates.lat;
      let lon = props.coordinates.lon;
      let apiKey = "96eb20764d4adbb57fa516a1544ed0a1";
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleResponse);
      console.log(url);
    }
  
    if (loaded) {
      return (
        <div className="Forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col forecast-day" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
    } else {
      loadNewApi();
      return null;
   }
}